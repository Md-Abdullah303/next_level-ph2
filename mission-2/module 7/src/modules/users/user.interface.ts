export interface IUser {
  name: string;
  email: string;
  password: string;
  age?: number | null;
}

export interface UpdatedUser {
  name: string;
  password: string;
  age: number;
  is_Active: boolean;
}
