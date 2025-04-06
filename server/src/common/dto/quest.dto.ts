import { Frequency, Status } from '@prisma/client';
import { IsDefined, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateIf } from 'class-validator';

export class CreateQuestDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  xp: number;

  @IsNumber()
  @IsNotEmpty()
  statPoints: number;

  @IsNumber()
  @IsNotEmpty()
  healthPoints: number;

  @IsEnum(Frequency as object)
  @IsNotEmpty()
  frequency: Frequency;
}

export class UpdateQuestDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsOptional()
  xp?: number;

  @IsNumber()
  @IsOptional()
  statPoints?: number;

  @IsNumber()
  @IsOptional()
  healthPoints?: number;

  @IsEnum(Frequency as object)
  @IsOptional()
  frequency?: Frequency;

  @IsEnum(Status as object)
  @IsOptional()
  status?: Status;

  // Ensure at least one field is provided for the update
  @ValidateIf((dto: Partial<UpdateQuestDto>) => !dto.title && !dto.description && dto.xp === undefined && dto.statPoints === undefined && dto.healthPoints === undefined && dto.frequency === undefined && dto.status === undefined)
  @IsDefined({
    message: 'At least one field must be provided for update.',
  })
  placeholderField?: any;
}

export class updateQuestStatusDto {
  @IsEnum(Status as object)
  @IsNotEmpty()
  status: Status;
}