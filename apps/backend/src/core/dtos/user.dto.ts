import { IsString, IsNotEmpty, IsEmail, IsDate, IsInt } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
  @IsInt()
  id: number;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsDate()
  created_at?: Date;

  @IsDate()
  updated_at?: Date;

  @IsDate()
  last_login?: Date;

  @IsString()
  hach_refresh_token: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
