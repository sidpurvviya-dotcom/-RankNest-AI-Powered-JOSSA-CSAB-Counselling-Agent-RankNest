import { colleges } from './collegeData';

export interface StudentProfile {
  round: number;
  rank: number;
  category: 'General' | 'OBC' | 'SC' | 'ST' | 'EWS';
  isCategoryRank: boolean;
  isCSAB: boolean;
  homeState: string;
  preferredBranch?: string;
}

export interface CollegeOption {
  priority: number;
  name: string;
  branch: string;
  closingRank: number;
  status: 'Safe' | 'Target' | 'Reach';
  probability: string;
  trend: string;
  reason: string;
}

export function predictColleges(profile: StudentProfile): CollegeOption[] {
  const allPotentialOptions: CollegeOption[] = [];

  const userState = profile.homeState.toLowerCase().trim();
  const userRank = profile.rank;
  const userCategory = profile.category;
  const userRound = profile.round || 5;

  // Buffer Logic: Competition trend adjustment (competition gets ~4% tougher each year)
  // We use 2024 data as baseline, adjusting for "2026 Strategy"
  const competitionMultiplier = 0.96; 
  
  // Round Multiplier
  const roundMultiplier = 0.9 + ((userRound - 1) * 0.025);

  // CSAB Multiplier: Special rounds have higher (easier) cutoffs
  const csabMultiplier = profile.isCSAB ? 1.45 : 1.0;

  // Combined Multiplier
  const finalMultiplier = competitionMultiplier * roundMultiplier * csabMultiplier;

  for (const college of colleges) {
    // Branch Filter (Loose)
    if (profile.preferredBranch && profile.preferredBranch.toLowerCase() !== 'no preference') {
       if (!college.branch.toLowerCase().includes(profile.preferredBranch.toLowerCase())) continue;
    }

    const isHomeState = college.state.toLowerCase() === userState;
    let cutoffObject = college?.cutoffs?.OS;
    if (isHomeState && college?.cutoffs?.HS) {
      cutoffObject = college.cutoffs.HS;
    }

    if (!cutoffObject) continue;

    let baseCR = 0;
    if (userCategory === 'General') baseCR = cutoffObject.General;
    else if (userCategory === 'OBC') baseCR = cutoffObject.OBC;
    else if (userCategory === 'SC') baseCR = cutoffObject.SC;
    else if (userCategory === 'ST') baseCR = cutoffObject.ST;
    else if (userCategory === 'EWS') baseCR = cutoffObject.EWS;

    if (!baseCR || baseCR <= 0) continue;

    // CSAB adjustments: Category ranks are NOT used in CSAB (only CRL). 
    // If the user provided Category Rank but asks for CSAB, we warn/adjust or strictly use CRL.
    // For this simulation, we'll assume the rank provided is appropriate for the selected mode.
    
    const adjustedCR = Math.floor(baseCR * finalMultiplier);

    // Advanced Strategist Logic:
    // Safe: CR > Rank * 1.10 (10% Buffer)
    // Target: CR within ± 3% of Rank
    // Reach: CR < Rank (up to 5% lower)
    
    let status: 'Safe' | 'Target' | 'Reach' | null = null;
    let probability = "";
    let trend = "";
    
    const bufferThreshold = userRank * 1.10;
    const targetUpper = userRank * 1.03;
    const targetLower = userRank * 0.97;
    const reachLimit = userRank * 0.95;

    if (adjustedCR >= bufferThreshold) {
      status = 'Safe';
      probability = `${Math.min(99, 90 + Math.floor((adjustedCR/userRank) * 2))}%`;
      trend = "Closing earlier; high competition expected.";
    } else if (adjustedCR >= targetLower && adjustedCR <= targetUpper) {
      status = 'Target';
      probability = `${Math.min(85, 65 + Math.floor(Math.random() * 20))}%`;
      trend = "Stable ranks; matches previous year trends.";
    } else if (adjustedCR < userRank && adjustedCR >= reachLimit) {
      status = 'Reach';
      probability = `${Math.max(15, 20 + Math.floor(Math.random() * 15))}%`;
      trend = "Ranks dropping; best chance in CSAB Rounds.";
    }

    if (status) {
      allPotentialOptions.push({
        priority: 0, // Assigned later
        name: college.institute,
        branch: college.branch,
        closingRank: adjustedCR,
        status,
        probability,
        trend,
        reason: generateReason(college.institute, college.branch, isHomeState)
      });
    }
  }

  // Partition and Select: Aim for 5 Safe, 7 Target, 3 Reach (Total 15)
  const reaches = allPotentialOptions.filter(o => o.status === 'Reach').sort((a,b) => b.closingRank - a.closingRank);
  const targets = allPotentialOptions.filter(o => o.status === 'Target').sort((a,b) => Math.abs(a.closingRank - userRank) - Math.abs(b.closingRank - userRank));
  const safes = allPotentialOptions.filter(o => o.status === 'Safe').sort((a,b) => a.closingRank - b.closingRank);

  // Take the best from each bucket to hit at least 15
  let selected = [
    ...reaches.slice(0, 3),
    ...targets.slice(0, 7),
    ...safes.slice(0, 5)
  ];

  // If still under 15, fill from targets then safes then reaches
  if (selected.length < 15) {
    const remainingCount = 15 - selected.length;
    const extras = [
      ...targets.slice(7),
      ...safes.slice(5),
      ...reaches.slice(3)
    ].slice(0, remainingCount);
    selected = [...selected, ...extras];
  }

  // Combine and sort by Priority (Reach -> Target -> Safe)
  const statusOrder = { 'Reach': 0, 'Target': 1, 'Safe': 2 };
  const finalSequence = selected.sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);
  
  return finalSequence.map((opt, index) => ({ ...opt, priority: index + 1 })).slice(0, 20); // up to 20 for extra breadth
}

function generateReason(institute: string, branch: string, isHomeState: boolean): string {
  if (institute.includes('IIT')) return "Premier Tier-1 Institute with exceptional global exposure.";
  if (branch.includes('Computer Science') || branch.includes('AI')) return "High-demand branch with stellar placement record.";
  if (isHomeState) return "Benefit from Home State quota in your own region.";
  if (institute.includes('NIT')) return "Top-ranked national institute with strong alumni network.";
  return "Consistently high placement and research output.";
}
