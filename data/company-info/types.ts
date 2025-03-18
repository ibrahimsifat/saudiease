export interface CompanyInfo {
  name: string;
  logo: string;
  tagline: string;
  description: string;
  shortDescription: string;
  mission: string;
  vision: string;
  values: CompanyValue[];
  achievements: Achievement[];
  contact: ContactInfo;
  founded: string;
  team: TeamInfo;
  mapUrl: string;
}

export interface CompanyValue {
  title: string;
  description: string;
}

export interface Achievement {
  icon: React.ReactNode;
  value: string;
  label: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: Address;
  businessHours: BusinessHours[];
  socialMedia: SocialMediaAccount[];
}

export interface Address {
  street: string;
  city: string;
  country: string;
}

export interface BusinessHours {
  days: string;
  hours: string;
}

export interface SocialMediaAccount {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

export interface TeamInfo {
  count: number;
  expertise: string[];
}
