import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class BanUserDto {
  @ApiProperty({ example: '123', description: 'ID of user' })
  @IsNumber({}, { message: 'Should be a number' })
  readonly userId: number;

  @ApiProperty({ example: 'false' })
  readonly banReason: string;
}
