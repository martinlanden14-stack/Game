export const EVENTS = [
  {
    id: 0,
    no: '01',
    name: 'FIRST DROP',
    spot: 'CENTRAL PLAZA',
    type: 'score',
    target: 8000,
    duration: 120,
    difficulty: 1,
    goal: 'Score 8,000 points',
    brief: 'Find your feet, link a few tricks and post a score.',
    reward: 'Unlocks Rail Rider',
  },
  {
    id: 1,
    no: '02',
    name: 'RAIL RIDER',
    spot: 'FUNBOX LINE',
    type: 'grind',
    target: 110,
    duration: 150,
    difficulty: 1,
    goal: 'Grind 110 metres',
    brief: 'Hop on every rail, ledge and handrail in the park.',
    reward: 'Unlocks Hang Time',
  },
  {
    id: 2,
    no: '03',
    name: 'HANG TIME',
    spot: 'BACKYARD QUARTER',
    type: 'air',
    target: 15,
    duration: 150,
    difficulty: 2,
    goal: 'Hold 15 seconds of air',
    brief: 'Pump the transitions, boost the kickers, stay airborne.',
    reward: 'Unlocks Combo Cooker',
  },
  {
    id: 3,
    no: '04',
    name: 'COMBO COOKER',
    spot: 'SPINE + PLAZA',
    type: 'combo',
    target: 6,
    duration: 150,
    difficulty: 2,
    goal: 'Land a x6 combo',
    brief: 'Stack tricks without touching down. Keep the chain alive.',
    reward: 'Unlocks Letter Hunt',
  },
  {
    id: 4,
    no: '05',
    name: 'LETTER HUNT',
    spot: 'ALL SPOTS',
    type: 'letters',
    target: 5,
    duration: 180,
    difficulty: 2,
    goal: 'Collect all five S-K-A-T-E letters',
    brief: 'They are floating over the biggest features. Go get them.',
    reward: 'Unlocks Trick Check',
  },
  {
    id: 5,
    no: '06',
    name: 'TRICK CHECK',
    spot: 'STREET SECTION',
    type: 'tricks',
    target: 16,
    duration: 150,
    difficulty: 3,
    goal: 'Land 16 tricks',
    brief: 'Flips, spins and grabs. Every landed trick counts.',
    reward: 'Unlocks City Tour',
  },
  {
    id: 6,
    no: '07',
    name: 'CITY TOUR',
    spot: 'FULL PARK',
    type: 'distance',
    target: 900,
    duration: 180,
    difficulty: 3,
    goal: 'Travel 900 metres',
    brief: 'Keep rolling. Long lines, fast carves, no standing around.',
    reward: 'Unlocks the Legend final',
  },
  {
    id: 7,
    no: '08',
    name: 'GRIND CITY LEGEND',
    spot: 'THE WHOLE YARD',
    type: 'score',
    target: 45000,
    duration: 180,
    difficulty: 4,
    goal: 'Score 45,000 points',
    brief: 'The final. Big air, huge combos, zero wasted seconds.',
    reward: 'Career complete',
  },
];

export const FREE_EVENT = {
  id: 'free',
  no: '∞',
  name: 'FREE SKATE',
  spot: 'OPEN SESSION',
  type: 'free',
  target: 0,
  duration: 180,
  difficulty: 0,
  goal: 'Post your best 3-minute score',
  brief: 'No objectives. Just you, the park and a clean line.',
  reward: 'Personal best',
};

export function eventById(id) {
  if (id === 'free') return FREE_EVENT;
  return EVENTS.find((e) => e.id === Number(id)) || EVENTS[0];
}

export function formatTarget(event) {
  if (event.type === 'score') return event.target.toLocaleString();
  if (event.type === 'grind' || event.type === 'distance') return `${event.target} m`;
  if (event.type === 'air') return `${event.target}s`;
  if (event.type === 'combo') return `x${event.target}`;
  if (event.type === 'letters') return `${event.target} letters`;
  if (event.type === 'tricks') return `${event.target} tricks`;
  return '';
}

export function formatProgress(event, value) {
  if (event.type === 'score') return Math.floor(value).toLocaleString();
  if (event.type === 'grind' || event.type === 'distance') return `${Math.floor(value)} m`;
  if (event.type === 'air') return `${value.toFixed(1)}s`;
  if (event.type === 'combo') return `x${Math.max(1, Math.floor(value))}`;
  if (event.type === 'letters') return `${Math.floor(value)} / ${event.target}`;
  if (event.type === 'tricks') return `${Math.floor(value)}`;
  return `${Math.floor(value)}`;
}
