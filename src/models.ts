export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  email: string;
  age?: number;
  picture?: string;
  linkToWebsite?: string;
  tags?: string[];
}

export interface FilledNewContact {
    firstName: string;
    lastName: string;
    age?: number;
    phoneNumber?: string;
    picture?: string;
    email: string;
    linkToWebsite?: string;
  }