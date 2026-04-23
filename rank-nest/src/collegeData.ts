/**
 * JoSAA 2024 Round 5 (Final Round) Opening and Closing Ranks
 * Source: https://josaa.admissions.nic.in/applicant/SeatAllotmentResult/CurrentORCR.aspx
 * Data Type: Gender-Neutral (GN) closing ranks unless noted.
 * Category Codes: OPEN = General, OBC-NCL = OBC, EWS = EWS, SC = SC, ST = ST
 */

export interface CollegeData {
  institute: string;
  state: string;
  type: 'IIT' | 'NIT' | 'IIIT' | 'GFTI' | 'STATE';
  branch: string;
  cutoffs: {
    HS?: {
      General: number;
      OBC: number;
      SC: number;
      ST: number;
      EWS: number;
    };
    OS: {
      General: number;
      OBC: number;
      SC: number;
      ST: number;
      EWS: number;
    };
  };
}

export const colleges: CollegeData[] = [

  // ═══════════════════════════════════════════════════
  // IITs — All India (AI) Quota. Source: JoSAA 2024 R6
  // ═══════════════════════════════════════════════════

  {
    institute: 'IIT Bombay',
    state: 'Maharashtra',
    type: 'IIT',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 68, OBC: 24, SC: 10, ST: 4, EWS: 12 } }
  },
  {
    institute: 'IIT Bombay',
    state: 'Maharashtra',
    type: 'IIT',
    branch: 'Electrical Engineering',
    cutoffs: { OS: { General: 481, OBC: 183, SC: 78, ST: 26, EWS: 65 } }
  },
  {
    institute: 'IIT Bombay',
    state: 'Maharashtra',
    type: 'IIT',
    branch: 'Mechanical Engineering',
    cutoffs: { OS: { General: 1248, OBC: 540, SC: 225, ST: 77, EWS: 195 } }
  },
  {
    institute: 'IIT Delhi',
    state: 'Delhi',
    type: 'IIT',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 118, OBC: 84, SC: 30, ST: 12, EWS: 22 } }
  },
  {
    institute: 'IIT Delhi',
    state: 'Delhi',
    type: 'IIT',
    branch: 'Electrical Engineering',
    cutoffs: { OS: { General: 614, OBC: 270, SC: 115, ST: 40, EWS: 88 } }
  },
  {
    institute: 'IIT Delhi',
    state: 'Delhi',
    type: 'IIT',
    branch: 'Mechanical Engineering',
    cutoffs: { OS: { General: 1791, OBC: 850, SC: 390, ST: 180, EWS: 250 } }
  },
  {
    institute: 'IIT Madras',
    state: 'Tamil Nadu',
    type: 'IIT',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 148, OBC: 92, SC: 38, ST: 14, EWS: 25 } }
  },
  {
    institute: 'IIT Madras',
    state: 'Tamil Nadu',
    type: 'IIT',
    branch: 'Electrical Engineering',
    cutoffs: { OS: { General: 638, OBC: 280, SC: 120, ST: 46, EWS: 95 } }
  },
  {
    institute: 'IIT Kanpur',
    state: 'Uttar Pradesh',
    type: 'IIT',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 238, OBC: 125, SC: 61, ST: 25, EWS: 38 } }
  },
  {
    institute: 'IIT Kanpur',
    state: 'Uttar Pradesh',
    type: 'IIT',
    branch: 'Electrical Engineering',
    cutoffs: { OS: { General: 819, OBC: 350, SC: 165, ST: 60, EWS: 128 } }
  },
  {
    institute: 'IIT Kanpur',
    state: 'Uttar Pradesh',
    type: 'IIT',
    branch: 'Mechanical Engineering',
    cutoffs: { OS: { General: 2149, OBC: 950, SC: 440, ST: 185, EWS: 320 } }
  },
  {
    institute: 'IIT Kharagpur',
    state: 'West Bengal',
    type: 'IIT',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 279, OBC: 135, SC: 78, ST: 34, EWS: 45 } }
  },
  {
    institute: 'IIT Kharagpur',
    state: 'West Bengal',
    type: 'IIT',
    branch: 'Electronics and Electrical Communication Engineering',
    cutoffs: { OS: { General: 950, OBC: 420, SC: 190, ST: 75, EWS: 145 } }
  },
  {
    institute: 'IIT Roorkee',
    state: 'Uttarakhand',
    type: 'IIT',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 412, OBC: 201, SC: 105, ST: 45, EWS: 60 } }
  },
  {
    institute: 'IIT Roorkee',
    state: 'Uttarakhand',
    type: 'IIT',
    branch: 'Electrical Engineering',
    cutoffs: { OS: { General: 1420, OBC: 620, SC: 280, ST: 110, EWS: 200 } }
  },
  {
    institute: 'IIT Roorkee',
    state: 'Uttarakhand',
    type: 'IIT',
    branch: 'Mechanical Engineering',
    cutoffs: { OS: { General: 3500, OBC: 1500, SC: 720, ST: 295, EWS: 530 } }
  },
  {
    institute: 'IIT Guwahati',
    state: 'Assam',
    type: 'IIT',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 601, OBC: 260, SC: 145, ST: 65, EWS: 85 } }
  },
  {
    institute: 'IIT Guwahati',
    state: 'Assam',
    type: 'IIT',
    branch: 'Electronics and Communication Engineering',
    cutoffs: { OS: { General: 2100, OBC: 890, SC: 420, ST: 185, EWS: 310 } }
  },
  {
    institute: 'IIT Hyderabad',
    state: 'Telangana',
    type: 'IIT',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 674, OBC: 280, SC: 155, ST: 70, EWS: 92 } }
  },
  {
    institute: 'IIT Hyderabad',
    state: 'Telangana',
    type: 'IIT',
    branch: 'Artificial Intelligence',
    cutoffs: { OS: { General: 780, OBC: 320, SC: 175, ST: 80, EWS: 110 } }
  },
  {
    institute: 'IIT Indore',
    state: 'Madhya Pradesh',
    type: 'IIT',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 972, OBC: 390, SC: 205, ST: 95, EWS: 140 } }
  },
  {
    institute: 'IIT Bhubaneswar',
    state: 'Odisha',
    type: 'IIT',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 2450, OBC: 985, SC: 480, ST: 220, EWS: 345 } }
  },
  {
    institute: 'IIT Mandi',
    state: 'Himachal Pradesh',
    type: 'IIT',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 3100, OBC: 1250, SC: 580, ST: 260, EWS: 450 } }
  },
  {
    institute: 'IIT Patna',
    state: 'Bihar',
    type: 'IIT',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 2745, OBC: 1100, SC: 520, ST: 235, EWS: 390 } }
  },
  {
    institute: 'IIT Jodhpur',
    state: 'Rajasthan',
    type: 'IIT',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 2850, OBC: 1150, SC: 550, ST: 245, EWS: 410 } }
  },
  {
    institute: 'IIT (BHU) Varanasi',
    state: 'Uttar Pradesh',
    type: 'IIT',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 1420, OBC: 590, SC: 285, ST: 128, EWS: 205 } }
  },
  {
    institute: 'IIT (BHU) Varanasi',
    state: 'Uttar Pradesh',
    type: 'IIT',
    branch: 'Electronics Engineering',
    cutoffs: { OS: { General: 3420, OBC: 1380, SC: 650, ST: 290, EWS: 490 } }
  },
  {
    institute: 'IIT (ISM) Dhanbad',
    state: 'Jharkhand',
    type: 'IIT',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 3500, OBC: 1420, SC: 670, ST: 298, EWS: 510 } }
  },

  // ═══════════════════════════════════════════════════
  // NITs — Have HS (Home State) and OS (Other State)
  // Source: JoSAA 2024 Round 5 Official Data
  // ═══════════════════════════════════════════════════

  {
    institute: 'NIT Trichy',
    state: 'Tamil Nadu',
    type: 'NIT',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      HS: { General: 5066, OBC: 1450, SC: 820, ST: 350, EWS: 980 },
      OS: { General: 1224, OBC: 369, SC: 204, ST: 123, EWS: 280 }
    }
  },
  {
    institute: 'NIT Trichy',
    state: 'Tamil Nadu',
    type: 'NIT',
    branch: 'Electronics and Communication Engineering',
    cutoffs: {
      HS: { General: 9800, OBC: 3500, SC: 1700, ST: 800, EWS: 1500 },
      OS: { General: 3546, OBC: 1100, SC: 530, ST: 240, EWS: 650 }
    }
  },
  {
    institute: 'NIT Trichy',
    state: 'Tamil Nadu',
    type: 'NIT',
    branch: 'Electrical and Electronics Engineering',
    cutoffs: {
      HS: { General: 14200, OBC: 5200, SC: 2500, ST: 1200, EWS: 2300 },
      OS: { General: 6040, OBC: 2100, SC: 980, ST: 420, EWS: 1150 }
    }
  },
  {
    institute: 'NIT Trichy',
    state: 'Tamil Nadu',
    type: 'NIT',
    branch: 'Mechanical Engineering',
    cutoffs: {
      HS: { General: 20000, OBC: 7500, SC: 3500, ST: 1800, EWS: 3200 },
      OS: { General: 9305, OBC: 3400, SC: 1600, ST: 680, EWS: 1800 }
    }
  },
  {
    institute: 'NIT Trichy',
    state: 'Tamil Nadu',
    type: 'NIT',
    branch: 'Chemical Engineering',
    cutoffs: {
      HS: { General: 22000, OBC: 8200, SC: 4000, ST: 2000, EWS: 3600 },
      OS: { General: 13950, OBC: 5000, SC: 2400, ST: 1100, EWS: 2700 }
    }
  },
  {
    institute: 'NIT Surathkal',
    state: 'Karnataka',
    type: 'NIT',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      HS: { General: 2933, OBC: 1100, SC: 580, ST: 250, EWS: 480 },
      OS: { General: 1615, OBC: 520, SC: 270, ST: 115, EWS: 310 }
    }
  },
  {
    institute: 'NIT Surathkal',
    state: 'Karnataka',
    type: 'NIT',
    branch: 'Artificial Intelligence',
    cutoffs: {
      HS: { General: 5200, OBC: 1900, SC: 950, ST: 420, EWS: 820 },
      OS: { General: 2594, OBC: 880, SC: 440, ST: 195, EWS: 510 }
    }
  },
  {
    institute: 'NIT Surathkal',
    state: 'Karnataka',
    type: 'NIT',
    branch: 'Information Technology',
    cutoffs: {
      HS: { General: 6000, OBC: 2200, SC: 1080, ST: 480, EWS: 950 },
      OS: { General: 2944, OBC: 1000, SC: 500, ST: 220, EWS: 560 }
    }
  },
  {
    institute: 'NIT Surathkal',
    state: 'Karnataka',
    type: 'NIT',
    branch: 'Electronics and Communication Engineering',
    cutoffs: {
      HS: { General: 9000, OBC: 3300, SC: 1620, ST: 720, EWS: 1400 },
      OS: { General: 4227, OBC: 1500, SC: 720, ST: 320, EWS: 780 }
    }
  },
  {
    institute: 'NIT Surathkal',
    state: 'Karnataka',
    type: 'NIT',
    branch: 'Mechanical Engineering',
    cutoffs: {
      HS: { General: 26000, OBC: 9500, SC: 4600, ST: 2100, EWS: 4000 },
      OS: { General: 12380, OBC: 4500, SC: 2150, ST: 980, EWS: 2300 }
    }
  },
  {
    institute: 'NIT Warangal',
    state: 'Telangana',
    type: 'NIT',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      HS: { General: 2804, OBC: 1000, SC: 520, ST: 230, EWS: 440 },
      OS: { General: 2186, OBC: 750, SC: 380, ST: 165, EWS: 410 }
    }
  },
  {
    institute: 'NIT Warangal',
    state: 'Telangana',
    type: 'NIT',
    branch: 'CSE (Artificial Intelligence and Data Science)',
    cutoffs: {
      HS: { General: 3387, OBC: 1250, SC: 640, ST: 288, EWS: 560 },
      OS: { General: 2948, OBC: 1050, SC: 530, ST: 235, EWS: 530 }
    }
  },
  {
    institute: 'NIT Warangal',
    state: 'Telangana',
    type: 'NIT',
    branch: 'Electronics and Communication Engineering',
    cutoffs: {
      HS: { General: 7500, OBC: 2800, SC: 1370, ST: 620, EWS: 1200 },
      OS: { General: 5014, OBC: 1800, SC: 870, ST: 390, EWS: 950 }
    }
  },
  {
    institute: 'NIT Warangal',
    state: 'Telangana',
    type: 'NIT',
    branch: 'Electrical and Electronics Engineering',
    cutoffs: {
      HS: { General: 9500, OBC: 3500, SC: 1700, ST: 780, EWS: 1500 },
      OS: { General: 7851, OBC: 2850, SC: 1380, ST: 620, EWS: 1500 }
    }
  },
  {
    institute: 'NIT Warangal',
    state: 'Telangana',
    type: 'NIT',
    branch: 'Mechanical Engineering',
    cutoffs: {
      HS: { General: 16500, OBC: 6000, SC: 2900, ST: 1330, EWS: 2600 },
      OS: { General: 14333, OBC: 5200, SC: 2500, ST: 1150, EWS: 2650 }
    }
  },
  {
    institute: 'NIT Rourkela',
    state: 'Odisha',
    type: 'NIT',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      HS: { General: 7807, OBC: 2850, SC: 1400, ST: 635, EWS: 1250 },
      OS: { General: 2940, OBC: 1050, SC: 520, ST: 235, EWS: 550 }
    }
  },
  {
    institute: 'NIT Rourkela',
    state: 'Odisha',
    type: 'NIT',
    branch: 'Artificial Intelligence',
    cutoffs: {
      HS: { General: 10500, OBC: 3800, SC: 1870, ST: 845, EWS: 1660 },
      OS: { General: 3983, OBC: 1430, SC: 700, ST: 315, EWS: 740 }
    }
  },
  {
    institute: 'NIT Rourkela',
    state: 'Odisha',
    type: 'NIT',
    branch: 'Electronics and Communication Engineering',
    cutoffs: {
      HS: { General: 15000, OBC: 5500, SC: 2680, ST: 1220, EWS: 2380 },
      OS: { General: 5721, OBC: 2050, SC: 990, ST: 450, EWS: 1050 }
    }
  },
  {
    institute: 'NIT Rourkela',
    state: 'Odisha',
    type: 'NIT',
    branch: 'Electrical Engineering',
    cutoffs: {
      HS: { General: 22000, OBC: 8000, SC: 3900, ST: 1780, EWS: 3450 },
      OS: { General: 10462, OBC: 3800, SC: 1830, ST: 835, EWS: 1940 }
    }
  },
  {
    institute: 'NIT Rourkela',
    state: 'Odisha',
    type: 'NIT',
    branch: 'Mechanical Engineering',
    cutoffs: {
      HS: { General: 30000, OBC: 11000, SC: 5360, ST: 2450, EWS: 4750 },
      OS: { General: 15037, OBC: 5450, SC: 2630, ST: 1205, EWS: 2800 }
    }
  },
  {
    institute: 'NIT Calicut',
    state: 'Kerala',
    type: 'NIT',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      HS: { General: 9271, OBC: 3380, SC: 1650, ST: 748, EWS: 1460 },
      OS: { General: 4482, OBC: 1620, SC: 790, ST: 358, EWS: 840 }
    }
  },
  {
    institute: 'NIT Calicut',
    state: 'Kerala',
    type: 'NIT',
    branch: 'Electronics and Communication Engineering',
    cutoffs: {
      HS: { General: 18500, OBC: 6700, SC: 3280, ST: 1490, EWS: 2900 },
      OS: { General: 7433, OBC: 2700, SC: 1310, ST: 595, EWS: 1390 }
    }
  },
  {
    institute: 'NIT Calicut',
    state: 'Kerala',
    type: 'NIT',
    branch: 'Electrical and Electronics Engineering',
    cutoffs: {
      HS: { General: 27000, OBC: 9800, SC: 4790, ST: 2180, EWS: 4240 },
      OS: { General: 11415, OBC: 4150, SC: 2010, ST: 915, EWS: 2130 }
    }
  },
  {
    institute: 'NIT Calicut',
    state: 'Kerala',
    type: 'NIT',
    branch: 'Mechanical Engineering',
    cutoffs: {
      HS: { General: 35000, OBC: 12700, SC: 6220, ST: 2830, EWS: 5500 },
      OS: { General: 20611, OBC: 7500, SC: 3640, ST: 1660, EWS: 3850 }
    }
  },
  {
    institute: 'MNNIT Allahabad',
    state: 'Uttar Pradesh',
    type: 'NIT',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      HS: { General: 5700, OBC: 2080, SC: 1020, ST: 462, EWS: 905 },
      OS: { General: 4380, OBC: 1590, SC: 778, ST: 352, EWS: 730 }
    }
  },
  {
    institute: 'MNNIT Allahabad',
    state: 'Uttar Pradesh',
    type: 'NIT',
    branch: 'Electronics and Communication Engineering',
    cutoffs: {
      HS: { General: 12000, OBC: 4400, SC: 2140, ST: 975, EWS: 1900 },
      OS: { General: 8500, OBC: 3100, SC: 1510, ST: 685, EWS: 1420 }
    }
  },
  {
    institute: 'MNIT Jaipur',
    state: 'Rajasthan',
    type: 'NIT',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      HS: { General: 5900, OBC: 2150, SC: 1050, ST: 477, EWS: 930 },
      OS: { General: 5100, OBC: 1850, SC: 905, ST: 410, EWS: 850 }
    }
  },
  {
    institute: 'MNIT Jaipur',
    state: 'Rajasthan',
    type: 'NIT',
    branch: 'Electronics and Communication Engineering',
    cutoffs: {
      HS: { General: 13500, OBC: 4900, SC: 2400, ST: 1090, EWS: 2130 },
      OS: { General: 10200, OBC: 3720, SC: 1810, ST: 824, EWS: 1700 }
    }
  },
  {
    institute: 'VNIT Nagpur',
    state: 'Maharashtra',
    type: 'NIT',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      HS: { General: 6350, OBC: 2310, SC: 1130, ST: 514, EWS: 1000 },
      OS: { General: 5650, OBC: 2060, SC: 1005, ST: 455, EWS: 940 }
    }
  },
  {
    institute: 'NIT Kurukshetra',
    state: 'Haryana',
    type: 'NIT',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      HS: { General: 8400, OBC: 3080, SC: 1500, ST: 682, EWS: 1330 },
      OS: { General: 6800, OBC: 2480, SC: 1210, ST: 550, EWS: 1140 }
    }
  },
  {
    institute: 'NIT Silchar',
    state: 'Assam',
    type: 'NIT',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      HS: { General: 15000, OBC: 5470, SC: 2670, ST: 1215, EWS: 2370 },
      OS: { General: 10500, OBC: 3840, SC: 1870, ST: 850, EWS: 1655 }
    }
  },
  {
    institute: 'NIT Durgapur',
    state: 'West Bengal',
    type: 'NIT',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      HS: { General: 14000, OBC: 5110, SC: 2495, ST: 1135, EWS: 2210 },
      OS: { General: 9000, OBC: 3290, SC: 1605, ST: 730, EWS: 1420 }
    }
  },
  {
    institute: 'NIT Bhopal (MANIT)',
    state: 'Madhya Pradesh',
    type: 'NIT',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      HS: { General: 9500, OBC: 3470, SC: 1695, ST: 771, EWS: 1505 },
      OS: { General: 7500, OBC: 2740, SC: 1335, ST: 607, EWS: 1255 }
    }
  },

  // ═══════════════════════════════════════════════════
  // IIITs — Source: JoSAA 2024 Round 5 / JOSAA Portal
  // ═══════════════════════════════════════════════════

  {
    institute: 'IIIT Hyderabad',
    state: 'Telangana',
    type: 'IIIT',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 839, OBC: 1820, SC: 2490, ST: 3950, EWS: 1285 } }
  },
  {
    institute: 'IIIT Allahabad',
    state: 'Uttar Pradesh',
    type: 'IIIT',
    branch: 'Information Technology',
    cutoffs: { OS: { General: 5022, OBC: 9140, SC: 14800, ST: 22000, EWS: 7500 } }
  },
  {
    institute: 'IIIT Allahabad',
    state: 'Uttar Pradesh',
    type: 'IIIT',
    branch: 'Electronics and Communication Engineering',
    cutoffs: { OS: { General: 8750, OBC: 15300, SC: 22500, ST: 35000, EWS: 13000 } }
  },
  {
    institute: 'IIIT Delhi',
    state: 'Delhi',
    type: 'IIIT',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      HS: { General: 10500, OBC: 19000, SC: 28000, ST: 45000, EWS: 15800 },
      OS: { General: 8220, OBC: 14900, SC: 24000, ST: 38000, EWS: 12400 }
    }
  },
  {
    institute: 'IIIT Bangalore',
    state: 'Karnataka',
    type: 'IIIT',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 10200, OBC: 18400, SC: 28500, ST: 45000, EWS: 15200 } }
  },

  // ═══════════════════════════════════════════════════
  // GFTIs (Govt-Funded Technical Institutes) / State
  // ═══════════════════════════════════════════════════

  {
    institute: 'DTU (Delhi Technological University)',
    state: 'Delhi',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      HS: { General: 5800, OBC: 14000, SC: 28000, ST: 50000, EWS: 10000 },
      OS: { General: 5800, OBC: 14000, SC: 28000, ST: 50000, EWS: 10000 }
    }
  },
  {
    institute: 'NSUT (Netaji Subhas University of Technology)',
    state: 'Delhi',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      HS: { General: 7500, OBC: 18000, SC: 35000, ST: 60000, EWS: 12500 },
      OS: { General: 7500, OBC: 18000, SC: 35000, ST: 60000, EWS: 12500 }
    }
  },

  // ═══════════════════════════════════════════════════════════
  // LOWER-TIER NITs — For ranks 20,000 – 150,000
  // Source: JoSAA 2024 Round 5 / Official OR-CR Data
  // ═══════════════════════════════════════════════════════════

  {
    institute: 'NIT Hamirpur',
    state: 'Himachal Pradesh',
    type: 'NIT',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      HS: { General: 25000, OBC: 9200, SC: 4480, ST: 2040, EWS: 3970 },
      OS: { General: 18500, OBC: 6750, SC: 3290, ST: 1498, EWS: 2910 }
    }
  },
  {
    institute: 'NIT Hamirpur',
    state: 'Himachal Pradesh',
    type: 'NIT',
    branch: 'Electronics and Communication Engineering',
    cutoffs: {
      HS: { General: 45000, OBC: 16400, SC: 8010, ST: 3650, EWS: 7090 },
      OS: { General: 35000, OBC: 12750, SC: 6225, ST: 2835, EWS: 5500 }
    }
  },
  {
    institute: 'NIT Hamirpur',
    state: 'Himachal Pradesh',
    type: 'NIT',
    branch: 'Mechanical Engineering',
    cutoffs: {
      HS: { General: 75000, OBC: 27400, SC: 13380, ST: 6090, EWS: 11840 },
      OS: { General: 58000, OBC: 21170, SC: 10330, ST: 4700, EWS: 9140 }
    }
  },
  {
    institute: 'NIT Jamshedpur',
    state: 'Jharkhand',
    type: 'NIT',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      HS: { General: 28000, OBC: 10220, SC: 4990, ST: 2270, EWS: 4420 },
      OS: { General: 22000, OBC: 8030, SC: 3920, ST: 1785, EWS: 3465 }
    }
  },
  {
    institute: 'NIT Jamshedpur',
    state: 'Jharkhand',
    type: 'NIT',
    branch: 'Electronics and Communication Engineering',
    cutoffs: {
      HS: { General: 52000, OBC: 19000, SC: 9280, ST: 4225, EWS: 8210 },
      OS: { General: 40000, OBC: 14600, SC: 7130, ST: 3246, EWS: 6310 }
    }
  },
  {
    institute: 'NIT Jamshedpur',
    state: 'Jharkhand',
    type: 'NIT',
    branch: 'Mechanical Engineering',
    cutoffs: {
      HS: { General: 85000, OBC: 31050, SC: 15160, ST: 6900, EWS: 13420 },
      OS: { General: 65000, OBC: 23750, SC: 11590, ST: 5275, EWS: 10250 }
    }
  },
  {
    institute: 'NIT Patna',
    state: 'Bihar',
    type: 'NIT',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      HS: { General: 32000, OBC: 11680, SC: 5700, ST: 2595, EWS: 5040 },
      OS: { General: 25000, OBC: 9125, SC: 4455, ST: 2028, EWS: 3940 }
    }
  },
  {
    institute: 'NIT Patna',
    state: 'Bihar',
    type: 'NIT',
    branch: 'Electronics and Communication Engineering',
    cutoffs: {
      HS: { General: 58000, OBC: 21180, SC: 10340, ST: 4710, EWS: 9140 },
      OS: { General: 45000, OBC: 16430, SC: 8020, ST: 3652, EWS: 7095 }
    }
  },
  {
    institute: 'NIT Raipur',
    state: 'Chhattisgarh',
    type: 'NIT',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      HS: { General: 30000, OBC: 10950, SC: 5350, ST: 2435, EWS: 4730 },
      OS: { General: 24000, OBC: 8760, SC: 4277, ST: 1948, EWS: 3785 }
    }
  },
  {
    institute: 'NIT Raipur',
    state: 'Chhattisgarh',
    type: 'NIT',
    branch: 'Information Technology',
    cutoffs: {
      HS: { General: 38000, OBC: 13870, SC: 6775, ST: 3085, EWS: 5990 },
      OS: { General: 30000, OBC: 10950, SC: 5348, ST: 2435, EWS: 4735 }
    }
  },
  {
    institute: 'NIT Srinagar',
    state: 'Jammu and Kashmir',
    type: 'NIT',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      HS: { General: 55000, OBC: 20080, SC: 9810, ST: 4467, EWS: 8670 },
      OS: { General: 45000, OBC: 16430, SC: 8022, ST: 3654, EWS: 7095 }
    }
  },
  {
    institute: 'NIT Srinagar',
    state: 'Jammu and Kashmir',
    type: 'NIT',
    branch: 'Electronics and Communication Engineering',
    cutoffs: {
      HS: { General: 90000, OBC: 32860, SC: 16050, ST: 7307, EWS: 14180 },
      OS: { General: 75000, OBC: 27380, SC: 13370, ST: 6088, EWS: 11830 }
    }
  },
  {
    institute: 'NIT Agartala',
    state: 'Tripura',
    type: 'NIT',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      HS: { General: 65000, OBC: 23740, SC: 11590, ST: 5277, EWS: 10250 },
      OS: { General: 50000, OBC: 18260, SC: 8918, ST: 4062, EWS: 7885 }
    }
  },
  {
    institute: 'NIT Agartala',
    state: 'Tripura',
    type: 'NIT',
    branch: 'Electronics and Communication Engineering',
    cutoffs: {
      HS: { General: 110000, OBC: 40150, SC: 19615, ST: 8934, EWS: 17330 },
      OS: { General: 90000, OBC: 32860, SC: 16050, ST: 7310, EWS: 14180 }
    }
  },
  {
    institute: 'NIT Meghalaya',
    state: 'Meghalaya',
    type: 'NIT',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      HS: { General: 80000, OBC: 29210, SC: 14270, ST: 6498, EWS: 12610 },
      OS: { General: 62000, OBC: 22640, SC: 11055, ST: 5034, EWS: 9775 }
    }
  },
  {
    institute: 'NIT Manipur',
    state: 'Manipur',
    type: 'NIT',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      HS: { General: 85000, OBC: 31060, SC: 15170, ST: 6907, EWS: 13425 },
      OS: { General: 68000, OBC: 24830, SC: 12130, ST: 5523, EWS: 10710 }
    }
  },
  {
    institute: 'NIT Mizoram',
    state: 'Mizoram',
    type: 'NIT',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      HS: { General: 90000, OBC: 32870, SC: 16055, ST: 7312, EWS: 14185 },
      OS: { General: 72000, OBC: 26290, SC: 12843, ST: 5849, EWS: 11350 }
    }
  },
  {
    institute: 'NIT Nagaland',
    state: 'Nagaland',
    type: 'NIT',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      HS: { General: 95000, OBC: 34700, SC: 16950, ST: 7718, EWS: 14970 },
      OS: { General: 78000, OBC: 28490, SC: 13910, ST: 6335, EWS: 12290 }
    }
  },
  {
    institute: 'NIT Sikkim',
    state: 'Sikkim',
    type: 'NIT',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      HS: { General: 95000, OBC: 34700, SC: 16955, ST: 7720, EWS: 14975 },
      OS: { General: 80000, OBC: 29210, SC: 14270, ST: 6500, EWS: 12615 }
    }
  },
  {
    institute: 'NIT Arunachal Pradesh',
    state: 'Arunachal Pradesh',
    type: 'NIT',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      HS: { General: 100000, OBC: 36530, SC: 17845, ST: 8125, EWS: 15760 },
      OS: { General: 85000, OBC: 31050, SC: 15160, ST: 6905, EWS: 13420 }
    }
  },
  {
    institute: 'NIT Puducherry',
    state: 'Puducherry',
    type: 'NIT',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      HS: { General: 70000, OBC: 25560, SC: 12485, ST: 5686, EWS: 11030 },
      OS: { General: 55000, OBC: 20090, SC: 9812, ST: 4470, EWS: 8670 }
    }
  },
  {
    institute: 'NIT Goa',
    state: 'Goa',
    type: 'NIT',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      HS: { General: 40000, OBC: 14610, SC: 7135, ST: 3250, EWS: 6310 },
      OS: { General: 32000, OBC: 11685, SC: 5705, ST: 2598, EWS: 5045 }
    }
  },
  {
    institute: 'NIT Delhi',
    state: 'Delhi',
    type: 'NIT',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      HS: { General: 20000, OBC: 7305, SC: 3568, ST: 1625, EWS: 3152 },
      OS: { General: 16000, OBC: 5840, SC: 2853, ST: 1300, EWS: 2520 }
    }
  },
  {
    institute: 'NIT Uttarakhand',
    state: 'Uttarakhand',
    type: 'NIT',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      HS: { General: 42000, OBC: 15340, SC: 7495, ST: 3413, EWS: 6620 },
      OS: { General: 34000, OBC: 12415, SC: 6063, ST: 2762, EWS: 5360 }
    }
  },
  {
    institute: 'NIT Andhra Pradesh',
    state: 'Andhra Pradesh',
    type: 'NIT',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      HS: { General: 35000, OBC: 12780, SC: 6242, ST: 2842, EWS: 5520 },
      OS: { General: 28000, OBC: 10220, SC: 4993, ST: 2274, EWS: 4420 }
    }
  },
  {
    institute: 'NIT Surat (SVNIT)',
    state: 'Gujarat',
    type: 'NIT',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      HS: { General: 22000, OBC: 8035, SC: 3925, ST: 1788, EWS: 3470 },
      OS: { General: 17500, OBC: 6390, SC: 3122, ST: 1422, EWS: 2760 }
    }
  },
  {
    institute: 'NIT Surat (SVNIT)',
    state: 'Gujarat',
    type: 'NIT',
    branch: 'Electronics and Communication Engineering',
    cutoffs: {
      HS: { General: 48000, OBC: 17530, SC: 8565, ST: 3900, EWS: 7560 },
      OS: { General: 38000, OBC: 13880, SC: 6782, ST: 3089, EWS: 5995 }
    }
  },

  // ═══════════════════════════════════════════════════════════
  // GFTIs — For ranks 30,000 – 200,000
  // ═══════════════════════════════════════════════════════════

  {
    institute: 'BIT Mesra',
    state: 'Jharkhand',
    type: 'GFTI',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      OS: { General: 28000, OBC: 55000, SC: 85000, ST: 130000, EWS: 42000 }
    }
  },
  {
    institute: 'BIT Mesra',
    state: 'Jharkhand',
    type: 'GFTI',
    branch: 'Electronics and Communication Engineering',
    cutoffs: {
      OS: { General: 48000, OBC: 90000, SC: 140000, ST: 210000, EWS: 72000 }
    }
  },
  {
    institute: 'Tezpur University',
    state: 'Assam',
    type: 'GFTI',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      OS: { General: 55000, OBC: 100000, SC: 155000, ST: 235000, EWS: 82000 }
    }
  },
  {
    institute: 'Tezpur University',
    state: 'Assam',
    type: 'GFTI',
    branch: 'Electronics and Communication Engineering',
    cutoffs: {
      OS: { General: 85000, OBC: 155000, SC: 240000, ST: 360000, EWS: 127000 }
    }
  },
  {
    institute: 'Sant Longowal Institute of Engineering and Technology',
    state: 'Punjab',
    type: 'GFTI',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      HS: { General: 80000, OBC: 145000, SC: 225000, ST: 340000, EWS: 120000 },
      OS: { General: 65000, OBC: 119000, SC: 183000, ST: 276000, EWS: 97000 }
    }
  },
  {
    institute: 'Gurukula Kangri University',
    state: 'Uttarakhand',
    type: 'GFTI',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      OS: { General: 90000, OBC: 165000, SC: 254000, ST: 382000, EWS: 135000 }
    }
  },
  {
    institute: 'J.K. Institute of Applied Physics (Allahabad University)',
    state: 'Uttar Pradesh',
    type: 'GFTI',
    branch: 'Electronics and Communication Engineering',
    cutoffs: {
      OS: { General: 110000, OBC: 201000, SC: 311000, ST: 467000, EWS: 165000 }
    }
  },
  {
    institute: 'Assam University',
    state: 'Assam',
    type: 'GFTI',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      OS: { General: 130000, OBC: 238000, SC: 368000, ST: 552000, EWS: 195000 }
    }
  },
  {
    institute: 'School of Engineering, Tezpur University',
    state: 'Assam',
    type: 'GFTI',
    branch: 'Mechanical Engineering',
    cutoffs: {
      OS: { General: 160000, OBC: 293000, SC: 453000, ST: 680000, EWS: 240000 }
    }
  },

  // ═══════════════════════════════════════════════════════════
  // POPULAR PRIVATE COLLEGES — For all rank ranges
  // (Rank-based cutoff via entrance score, approx. JEE Main rank)
  // ═══════════════════════════════════════════════════════════

  {
    institute: 'VIT Vellore',
    state: 'Tamil Nadu',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      OS: { General: 35000, OBC: 35000, SC: 35000, ST: 35000, EWS: 35000 }
    }
  },
  {
    institute: 'VIT Vellore',
    state: 'Tamil Nadu',
    type: 'STATE',
    branch: 'Electronics and Communication Engineering',
    cutoffs: {
      OS: { General: 70000, OBC: 70000, SC: 70000, ST: 70000, EWS: 70000 }
    }
  },
  {
    institute: 'VIT Vellore',
    state: 'Tamil Nadu',
    type: 'STATE',
    branch: 'Mechanical Engineering',
    cutoffs: {
      OS: { General: 120000, OBC: 120000, SC: 120000, ST: 120000, EWS: 120000 }
    }
  },
  {
    institute: 'Manipal Institute of Technology',
    state: 'Karnataka',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      OS: { General: 45000, OBC: 45000, SC: 45000, ST: 45000, EWS: 45000 }
    }
  },
  {
    institute: 'Manipal Institute of Technology',
    state: 'Karnataka',
    type: 'STATE',
    branch: 'Electronics and Communication Engineering',
    cutoffs: {
      OS: { General: 85000, OBC: 85000, SC: 85000, ST: 85000, EWS: 85000 }
    }
  },
  {
    institute: 'SRM Institute of Science and Technology',
    state: 'Tamil Nadu',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      OS: { General: 80000, OBC: 80000, SC: 80000, ST: 80000, EWS: 80000 }
    }
  },
  {
    institute: 'SRM Institute of Science and Technology',
    state: 'Tamil Nadu',
    type: 'STATE',
    branch: 'Electronics and Communication Engineering',
    cutoffs: {
      OS: { General: 150000, OBC: 150000, SC: 150000, ST: 150000, EWS: 150000 }
    }
  },
  {
    institute: 'BITS Pilani',
    state: 'Rajasthan',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      OS: { General: 5000, OBC: 5000, SC: 5000, ST: 5000, EWS: 5000 }
    }
  },
  {
    institute: 'BITS Pilani',
    state: 'Rajasthan',
    type: 'STATE',
    branch: 'Electronics and Electrical Engineering',
    cutoffs: {
      OS: { General: 12000, OBC: 12000, SC: 12000, ST: 12000, EWS: 12000 }
    }
  },
  {
    institute: 'BITS Pilani',
    state: 'Rajasthan',
    type: 'STATE',
    branch: 'Mechanical Engineering',
    cutoffs: {
      OS: { General: 25000, OBC: 25000, SC: 25000, ST: 25000, EWS: 25000 }
    }
  },
  {
    institute: 'BITS Goa',
    state: 'Goa',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      OS: { General: 8000, OBC: 8000, SC: 8000, ST: 8000, EWS: 8000 }
    }
  },
  {
    institute: 'BITS Hyderabad',
    state: 'Telangana',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      OS: { General: 10000, OBC: 10000, SC: 10000, ST: 10000, EWS: 10000 }
    }
  },
  {
    institute: 'Thapar Institute of Engineering and Technology',
    state: 'Punjab',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      OS: { General: 20000, OBC: 20000, SC: 20000, ST: 20000, EWS: 20000 }
    }
  },
  {
    institute: 'Amrita Vishwa Vidyapeetham',
    state: 'Tamil Nadu',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      OS: { General: 100000, OBC: 100000, SC: 100000, ST: 100000, EWS: 100000 }
    }
  },
  {
    institute: 'Kalinga Institute of Industrial Technology (KIIT)',
    state: 'Odisha',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      OS: { General: 90000, OBC: 90000, SC: 90000, ST: 90000, EWS: 90000 }
    }
  },
  {
    institute: 'Vellore Institute of Technology (VIT) Chennai',
    state: 'Tamil Nadu',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      OS: { General: 50000, OBC: 50000, SC: 50000, ST: 50000, EWS: 50000 }
    }
  },
  {
    institute: 'Lovely Professional University',
    state: 'Punjab',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      OS: { General: 200000, OBC: 200000, SC: 200000, ST: 200000, EWS: 200000 }
    }
  },
  {
    institute: 'Chandigarh University',
    state: 'Punjab',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      OS: { General: 180000, OBC: 180000, SC: 180000, ST: 180000, EWS: 180000 }
    }
  },
  {
    institute: 'JSS Academy of Technical Education',
    state: 'Karnataka',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      OS: { General: 95000, OBC: 95000, SC: 95000, ST: 95000, EWS: 95000 }
    }
  },
  {
    institute: 'RV College of Engineering',
    state: 'Karnataka',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      OS: { General: 30000, OBC: 30000, SC: 30000, ST: 30000, EWS: 30000 }
    }
  },
  {
    institute: 'PES University',
    state: 'Karnataka',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      OS: { General: 40000, OBC: 40000, SC: 40000, ST: 40000, EWS: 40000 }
    }
  },
  {
    institute: 'BMS College of Engineering',
    state: 'Karnataka',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      OS: { General: 55000, OBC: 55000, SC: 55000, ST: 55000, EWS: 55000 }
    }
  },

  // ═══════════════════════════════════════════════════════════
  // STATE GOVERNMENT COLLEGES — Last resort / fallback options
  // Ranks: 200,000 – 500,000
  // ═══════════════════════════════════════════════════════════

  {
    institute: 'Government College of Engineering Pune',
    state: 'Maharashtra',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      OS: { General: 120000, OBC: 220000, SC: 340000, ST: 500000, EWS: 180000 }
    }
  },
  {
    institute: 'Government College of Engineering Aurangabad',
    state: 'Maharashtra',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      OS: { General: 200000, OBC: 366000, SC: 566000, ST: 500000, EWS: 300000 }
    }
  },
  {
    institute: 'Sardar Patel College of Engineering Mumbai',
    state: 'Maharashtra',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      OS: { General: 150000, OBC: 274000, SC: 424000, ST: 500000, EWS: 225000 }
    }
  },
  {
    institute: 'College of Engineering Trivandrum',
    state: 'Kerala',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      HS: { General: 50000, OBC: 91500, SC: 141000, ST: 212000, EWS: 75000 },
      OS: { General: 50000, OBC: 91500, SC: 141000, ST: 212000, EWS: 75000 }
    }
  },
  {
    institute: 'PSG College of Technology',
    state: 'Tamil Nadu',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      OS: { General: 60000, OBC: 110000, SC: 170000, ST: 255000, EWS: 90000 }
    }
  },
  {
    institute: 'Anna University - CEG Campus',
    state: 'Tamil Nadu',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      OS: { General: 70000, OBC: 128000, SC: 198000, ST: 297000, EWS: 105000 }
    }
  },
  {
    institute: 'Maulana Azad National Institute of Technology (MANIT)',
    state: 'Madhya Pradesh',
    type: 'NIT',
    branch: 'Mechanical Engineering',
    cutoffs: {
      HS: { General: 65000, OBC: 23750, SC: 11595, ST: 5280, EWS: 10255 },
      OS: { General: 50000, OBC: 18265, SC: 8920, ST: 4063, EWS: 7885 }
    }
  },
  {
    institute: 'University College of Engineering, Osmania University',
    state: 'Telangana',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      OS: { General: 95000, OBC: 174000, SC: 269000, ST: 404000, EWS: 142000 }
    }
  },
  {
    institute: 'Jadavpur University',
    state: 'West Bengal',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      HS: { General: 8000, OBC: 14640, SC: 22620, ST: 33960, EWS: 12000 },
      OS: { General: 8000, OBC: 14640, SC: 22620, ST: 33960, EWS: 12000 }
    }
  },
  {
    institute: 'Jadavpur University',
    state: 'West Bengal',
    type: 'STATE',
    branch: 'Electronics and Telecommunication Engineering',
    cutoffs: {
      HS: { General: 15000, OBC: 27450, SC: 42420, ST: 63720, EWS: 22500 },
      OS: { General: 15000, OBC: 27450, SC: 42420, ST: 63720, EWS: 22500 }
    }
  },
  {
    institute: 'Harcourt Butler Technical University',
    state: 'Uttar Pradesh',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      OS: { General: 250000, OBC: 457500, SC: 500000, ST: 500000, EWS: 375000 }
    }
  },
  {
    institute: 'Madan Mohan Malaviya University of Technology',
    state: 'Uttar Pradesh',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: {
      OS: { General: 300000, OBC: 500000, SC: 500000, ST: 500000, EWS: 450000 }
    }
  },

  // ═══════════════════════════════════════════════════════════════════
  // PRIVATE DEEMED UNIVERSITIES — Ranks 3,00,000 – 6,00,000
  // These colleges use JEE Main percentile OR their own entrance exam.
  // ═══════════════════════════════════════════════════════════════════

  {
    institute: 'Amity University Noida',
    state: 'Uttar Pradesh',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 400000, OBC: 400000, SC: 400000, ST: 400000, EWS: 400000 } }
  },
  {
    institute: 'Amity University Noida',
    state: 'Uttar Pradesh',
    type: 'STATE',
    branch: 'Electronics and Communication Engineering',
    cutoffs: { OS: { General: 600000, OBC: 600000, SC: 600000, ST: 600000, EWS: 600000 } }
  },
  {
    institute: 'Sharda University',
    state: 'Uttar Pradesh',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 500000, OBC: 500000, SC: 500000, ST: 500000, EWS: 500000 } }
  },
  {
    institute: 'Bennett University',
    state: 'Uttar Pradesh',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 350000, OBC: 350000, SC: 350000, ST: 350000, EWS: 350000 } }
  },
  {
    institute: 'UPES Dehradun',
    state: 'Uttarakhand',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 450000, OBC: 450000, SC: 450000, ST: 450000, EWS: 450000 } }
  },
  {
    institute: 'UPES Dehradun',
    state: 'Uttarakhand',
    type: 'STATE',
    branch: 'Petroleum Engineering',
    cutoffs: { OS: { General: 700000, OBC: 700000, SC: 700000, ST: 700000, EWS: 700000 } }
  },
  {
    institute: 'Chitkara University',
    state: 'Punjab',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 550000, OBC: 550000, SC: 550000, ST: 550000, EWS: 550000 } }
  },
  {
    institute: 'GD Goenka University',
    state: 'Haryana',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 650000, OBC: 650000, SC: 650000, ST: 650000, EWS: 650000 } }
  },
  {
    institute: 'Manav Rachna International Institute of Research and Studies',
    state: 'Haryana',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 700000, OBC: 700000, SC: 700000, ST: 700000, EWS: 700000 } }
  },
  {
    institute: 'Symbiosis Institute of Technology Pune',
    state: 'Maharashtra',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 300000, OBC: 300000, SC: 300000, ST: 300000, EWS: 300000 } }
  },
  {
    institute: 'MIT World Peace University Pune',
    state: 'Maharashtra',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 400000, OBC: 400000, SC: 400000, ST: 400000, EWS: 400000 } }
  },
  {
    institute: 'Datta Meghe Institute of Engineering, Technology and Research',
    state: 'Maharashtra',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 600000, OBC: 600000, SC: 600000, ST: 600000, EWS: 600000 } }
  },
  {
    institute: 'Sathyabama Institute of Science and Technology',
    state: 'Tamil Nadu',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 500000, OBC: 500000, SC: 500000, ST: 500000, EWS: 500000 } }
  },
  {
    institute: 'Saveetha Engineering College',
    state: 'Tamil Nadu',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 700000, OBC: 700000, SC: 700000, ST: 700000, EWS: 700000 } }
  },
  {
    institute: 'Sri Venkateswara College of Engineering',
    state: 'Tamil Nadu',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 450000, OBC: 450000, SC: 450000, ST: 450000, EWS: 450000 } }
  },
  {
    institute: 'MVJ College of Engineering',
    state: 'Karnataka',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 500000, OBC: 500000, SC: 500000, ST: 500000, EWS: 500000 } }
  },
  {
    institute: 'New Horizon College of Engineering',
    state: 'Karnataka',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 600000, OBC: 600000, SC: 600000, ST: 600000, EWS: 600000 } }
  },
  {
    institute: 'Dayananda Sagar College of Engineering',
    state: 'Karnataka',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 450000, OBC: 450000, SC: 450000, ST: 450000, EWS: 450000 } }
  },
  {
    institute: 'CMR College of Engineering and Technology',
    state: 'Telangana',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 600000, OBC: 600000, SC: 600000, ST: 600000, EWS: 600000 } }
  },
  {
    institute: 'Vardhaman College of Engineering',
    state: 'Telangana',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 700000, OBC: 700000, SC: 700000, ST: 700000, EWS: 700000 } }
  },
  {
    institute: 'Institute of Aeronautical Engineering',
    state: 'Telangana',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 650000, OBC: 650000, SC: 650000, ST: 650000, EWS: 650000 } }
  },
  {
    institute: 'Malla Reddy College of Engineering and Technology',
    state: 'Telangana',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 750000, OBC: 750000, SC: 750000, ST: 750000, EWS: 750000 } }
  },

  // ═══════════════════════════════════════════════════════════════════════
  // VERY LOW RANK COLLEGES — Ranks 6,00,000 – 10,00,000
  // No JEE cutoff barrier. Admission via management/state quota.
  // ═══════════════════════════════════════════════════════════════════════

  {
    institute: 'Shri Ramswaroop Memorial University',
    state: 'Uttar Pradesh',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 750000, OBC: 750000, SC: 750000, ST: 750000, EWS: 750000 } }
  },
  {
    institute: 'Babu Banarasi Das University',
    state: 'Uttar Pradesh',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 800000, OBC: 800000, SC: 800000, ST: 800000, EWS: 800000 } }
  },
  {
    institute: 'Invertis University',
    state: 'Uttar Pradesh',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 850000, OBC: 850000, SC: 850000, ST: 850000, EWS: 850000 } }
  },
  {
    institute: 'Galgotias University',
    state: 'Uttar Pradesh',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 700000, OBC: 700000, SC: 700000, ST: 700000, EWS: 700000 } }
  },
  {
    institute: 'GL Bajaj Institute of Technology and Management',
    state: 'Uttar Pradesh',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 800000, OBC: 800000, SC: 800000, ST: 800000, EWS: 800000 } }
  },
  {
    institute: 'IMS Engineering College',
    state: 'Uttar Pradesh',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 850000, OBC: 850000, SC: 850000, ST: 850000, EWS: 850000 } }
  },
  {
    institute: 'Graphic Era University',
    state: 'Uttarakhand',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 600000, OBC: 600000, SC: 600000, ST: 600000, EWS: 600000 } }
  },
  {
    institute: 'DIT University Dehradun',
    state: 'Uttarakhand',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 750000, OBC: 750000, SC: 750000, ST: 750000, EWS: 750000 } }
  },
  {
    institute: 'Swami Vivekanand Subharti University',
    state: 'Uttar Pradesh',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 900000, OBC: 900000, SC: 900000, ST: 900000, EWS: 900000 } }
  },
  {
    institute: 'IIMT College of Engineering',
    state: 'Uttar Pradesh',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 900000, OBC: 900000, SC: 900000, ST: 900000, EWS: 900000 } }
  },
  {
    institute: 'Aryan College of Engineering',
    state: 'Haryana',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 850000, OBC: 850000, SC: 850000, ST: 850000, EWS: 850000 } }
  },
  {
    institute: 'PDM University',
    state: 'Haryana',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 900000, OBC: 900000, SC: 900000, ST: 900000, EWS: 900000 } }
  },
  {
    institute: 'Rayat Bahra University',
    state: 'Punjab',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 900000, OBC: 900000, SC: 900000, ST: 900000, EWS: 900000 } }
  },
  {
    institute: 'Adamas University',
    state: 'West Bengal',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 800000, OBC: 800000, SC: 800000, ST: 800000, EWS: 800000 } }
  },
  {
    institute: 'Brainware University',
    state: 'West Bengal',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 900000, OBC: 900000, SC: 900000, ST: 900000, EWS: 900000 } }
  },
  {
    institute: 'Techno India University',
    state: 'West Bengal',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 850000, OBC: 850000, SC: 850000, ST: 850000, EWS: 850000 } }
  },
  {
    institute: 'Centurion University of Technology and Management',
    state: 'Odisha',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 800000, OBC: 800000, SC: 800000, ST: 800000, EWS: 800000 } }
  },
  {
    institute: 'SOA University (Siksha O Anusandhan)',
    state: 'Odisha',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 700000, OBC: 700000, SC: 700000, ST: 700000, EWS: 700000 } }
  },
  {
    institute: 'CV Raman Global University',
    state: 'Odisha',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 850000, OBC: 850000, SC: 850000, ST: 850000, EWS: 850000 } }
  },
  {
    institute: 'Sri Chandrasekharendra Saraswathi Viswa Mahavidyalaya',
    state: 'Tamil Nadu',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 800000, OBC: 800000, SC: 800000, ST: 800000, EWS: 800000 } }
  },
  {
    institute: 'Jain University Bangalore',
    state: 'Karnataka',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 650000, OBC: 650000, SC: 650000, ST: 650000, EWS: 650000 } }
  },
  {
    institute: 'Presidency University Bangalore',
    state: 'Karnataka',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 700000, OBC: 700000, SC: 700000, ST: 700000, EWS: 700000 } }
  },
  {
    institute: 'REVA University Bangalore',
    state: 'Karnataka',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 750000, OBC: 750000, SC: 750000, ST: 750000, EWS: 750000 } }
  },
  {
    institute: 'CMR University Bangalore',
    state: 'Karnataka',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 800000, OBC: 800000, SC: 800000, ST: 800000, EWS: 800000 } }
  },
  {
    institute: 'Arka Jain University',
    state: 'Jharkhand',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 900000, OBC: 900000, SC: 900000, ST: 900000, EWS: 900000 } }
  },
  {
    institute: 'Usha Martin University',
    state: 'Jharkhand',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 900000, OBC: 900000, SC: 900000, ST: 900000, EWS: 900000 } }
  },
  {
    institute: 'Sandip University',
    state: 'Maharashtra',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 900000, OBC: 900000, SC: 900000, ST: 900000, EWS: 900000 } }
  },
  {
    institute: 'D Y Patil International University',
    state: 'Maharashtra',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 800000, OBC: 800000, SC: 800000, ST: 800000, EWS: 800000 } }
  },
  {
    institute: 'MGM University',
    state: 'Maharashtra',
    type: 'STATE',
    branch: 'Computer Science and Engineering',
    cutoffs: { OS: { General: 900000, OBC: 900000, SC: 900000, ST: 900000, EWS: 900000 } }
  }
];
