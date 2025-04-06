export type LoginType = {
  errors: {
    email?: string[];
    password?: string[];
    formError?: string[];
  };
};
export type RegisterType = {
  errors: {
    name?: string[];
    email?: string[];
    password?: string[];
    formError?: string[];
  };
};
export type getProfileProps = {
  id: string;
  name: string;
  email: string;
  health: number;
  levelUpHealth: number;
  levelUpXp: number;
  statPoints: number;
  statCharisma: number;
  statDiscipline: number;
  statIntelligence: number;
  statStrength: number;
  statWillpower: number;
  level: number;
  xp: number;
};

export type UpdateStatsType = {
  Strength: number;
  Intelligence: number;
  Discipline: number;
  Charisma: number;
  Willpower: number;
};
