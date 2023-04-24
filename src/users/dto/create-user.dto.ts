import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'mail@proton.me', description: 'Email' })
  @IsString({ message: 'Should be a string' })
  @IsEmail({}, { message: 'Wrong email' })
  readonly email: string;
  @IsString({ message: 'Should be a string' })
  @Length(6, 16, {
    message: 'Password must be between 6 and 16 characters',
  })
  @ApiProperty({ example: 'qwerty123', description: 'Password' })
  readonly password: string;
}
