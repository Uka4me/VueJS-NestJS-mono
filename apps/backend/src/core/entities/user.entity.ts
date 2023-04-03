export class User {
  id: number;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
  last_login?: Date;
  hach_refresh_token?: string;
}
