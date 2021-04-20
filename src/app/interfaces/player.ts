export interface Player {
  name: string;
  teeBox: number;
  holes: Hole[];
  totalScore: number;
  totalPar: number;
  totalYardage: number;
}

interface Hole {
  score: number;
}