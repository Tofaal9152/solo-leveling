export type Frequency = "DAILY" | "WEEKLY" | "MONTHLY";
export type Quest = {
  id: string;
  title: string;
  description: string;
  xp: number;
  statPoints: number;
  healthPoints: number;
  status: "PENDING" | "COMPLETED";
  frequency: Frequency
};

export type QuestFormData = {
  errors: {
    title?: string[];
    description?: string[];
    xp?: string[];
    healthPoints?: string[];
    statPoints?: string[];
    frequency?: string[];
    formError?: string[];
  };
};

export type QuestStatusFormData = {
  errors: {
    status?: string[];
    formError?: string[];
  };
};