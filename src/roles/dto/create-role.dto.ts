import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({ example: 'ADMIN' })
  @IsString({ message: 'Should be a string' })
  readonly value: string;

  @ApiProperty({ example: 'Description of a role' })
  @IsString({ message: 'Should be a string' })
  readonly description: string;
}
