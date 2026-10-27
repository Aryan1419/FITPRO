export type Role = "resident" | "coach" | "community_admin" | "super_admin";

export interface UserSession {
  userId: string;
  name?: string;
  mobile: string;
  role: Role;
  communityId?: string;
  isVerifiedResident?: boolean;
}

export type SportId =
  | "swimming"
  | "basketball"
  | "cricket"
  | "football"
  | "badminton"
  | "table-tennis"
  | "chess"
  | "skating";

export interface SportInfo {
  id: SportId;
  name: string;
  headline: string;
  description: string;
  benefits: string[];
  skills: {
    beginner: string;
    intermediate: string;
    advanced: string;
  };
  typicalSession: string[];
  whatToBring: string[];
  safetyRules?: string;
}
