export interface StudentProfile {
  rank: number;
  category: 'General' | 'OBC' | 'SC' | 'ST' | 'EWS';
  homeState: string;
  preferredBranch?: string;
}

export interface CollegeOption {
  name: string;
  branch: string;
  closingRank: number;
  type: 'SAFE' | 'PROBABLE' | 'DREAM';
}

const mockColleges = [
  { name: 'IIT Bombay', branch: 'Computer Science', generalCutoff: 65, obcCutoff: 300, scCutoff: 1000 },
  { name: 'IIT Delhi', branch: 'Computer Science', generalCutoff: 100, obcCutoff: 400, scCutoff: 1200 },
  { name: 'IIT Madras', branch: 'Computer Science', generalCutoff: 150, obcCutoff: 500, scCutoff: 1500 },
  { name: 'IIT Kanpur', branch: 'Computer Science', generalCutoff: 230, obcCutoff: 800, scCutoff: 2000 },
  { name: 'IIT Kharagpur', branch: 'Computer Science', generalCutoff: 280, obcCutoff: 1000, scCutoff: 2500 },
  { name: 'IIT Roorkee', branch: 'Computer Science', generalCutoff: 400, obcCutoff: 1500, scCutoff: 3000 },
  { name: 'NIT Trichy', branch: 'Computer Science', generalCutoff: 1500, obcCutoff: 4000, scCutoff: 8000 },
  { name: 'NIT Surathkal', branch: 'Computer Science', generalCutoff: 2000, obcCutoff: 5000, scCutoff: 10000 },
  { name: 'NIT Warangal', branch: 'Computer Science', generalCutoff: 2500, obcCutoff: 6000, scCutoff: 12000 },
  { name: 'DTU', branch: 'Computer Science', generalCutoff: 5000, obcCutoff: 15000, scCutoff: 30000 },
  { name: 'NSUT', branch: 'Computer Science', generalCutoff: 6000, obcCutoff: 18000, scCutoff: 35000 },
  { name: 'IIIT Hyderabad', branch: 'Computer Science', generalCutoff: 800, obcCutoff: 800, scCutoff: 800 },
  { name: 'IIIT Allahabad', branch: 'Information Technology', generalCutoff: 5000, obcCutoff: 12000, scCutoff: 25000 },
  { name: 'NIT Calicut', branch: 'Computer Science', generalCutoff: 4000, obcCutoff: 10000, scCutoff: 20000 },
  { name: 'BITS Pilani', branch: 'Computer Science', generalCutoff: 250, obcCutoff: 250, scCutoff: 250 } // Private, mock cutoff logic
];

export function predictColleges(profile: StudentProfile): CollegeOption[] {
  const options: CollegeOption[] = [];

  for (const college of mockColleges) {
    let cutoff = college.generalCutoff;

    if (profile.category === 'OBC') cutoff = college.obcCutoff;
    else if (profile.category === 'SC') cutoff = college.scCutoff;
    else if (profile.category === 'ST') cutoff = college.scCutoff * 1.5; // Simple mock modifier
    else if (profile.category === 'EWS') cutoff = Math.floor(college.generalCutoff * 1.2);

    // If homeState matches some heuristic, we could increase cutoff, but let's keep it simple
    // Add 20% to cutoff if it's a state college to simulate Home State quota (mock)
    if (college.name.includes('NIT') && profile.homeState.toLowerCase() === 'mock_home_state') {
        cutoff = Math.floor(cutoff * 1.2);
    }

    const margin = profile.rank - cutoff;
    
    // SAFE: Rank is at least 20% better than cutoff
    if (profile.rank <= cutoff * 0.8) {
      options.push({ name: college.name, branch: college.branch, closingRank: cutoff, type: 'SAFE' });
    }
    // PROBABLE: Rank is within 20% boundary (either side or exactly cut-off)
    else if (profile.rank <= cutoff * 1.2) {
      options.push({ name: college.name, branch: college.branch, closingRank: cutoff, type: 'PROBABLE' });
    }
    // DREAM: Rank is outside up to 2x the cutoff
    else if (profile.rank <= cutoff * 2.0) {
      options.push({ name: college.name, branch: college.branch, closingRank: cutoff, type: 'DREAM' });
    }
  }

  // Sort: First Safe, then Probable, then Dream, then by closing rank
  return options.sort((a, b) => {
    const order = { 'SAFE': 1, 'PROBABLE': 2, 'DREAM': 3 };
    if (order[a.type] !== order[b.type]) return order[a.type] - order[b.type];
    return a.closingRank - b.closingRank;
  });
}
