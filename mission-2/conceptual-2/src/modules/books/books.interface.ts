export interface IBook {
  id: number;
  title: string;
  description: string;
  author: string;
  isbn: string;
  total_copies: number;
  available_copies: number;
  created_at: Date;
}
