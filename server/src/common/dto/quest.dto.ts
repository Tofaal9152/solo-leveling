import {
  IsDefined,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateIf,
} from 'class-validator';
// src/common/enums/quest.enums.ts

enum FrequencyEnum {
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
  MONTHLY = 'MONTHLY',
}

enum StatusEnum {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

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

  @IsEnum(FrequencyEnum)
  @IsNotEmpty()
  frequency: FrequencyEnum;
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

  @IsEnum(FrequencyEnum)
  @IsOptional()
  frequency?: FrequencyEnum;

  @IsEnum(StatusEnum)
  @IsOptional()
  status?: StatusEnum;

  // Ensure at least one field is provided for the update
  @ValidateIf(
    (dto: Partial<UpdateQuestDto>) =>
      !dto.title &&
      !dto.description &&
      dto.xp === undefined &&
      dto.statPoints === undefined &&
      dto.healthPoints === undefined &&
      dto.frequency === undefined &&
      dto.status === undefined,
  )
  @IsDefined({
    message: 'At least one field must be provided for update.',
  })
  placeholderField?: any;
}

export class updateQuestStatusDto {
  @IsEnum(StatusEnum)
  @IsNotEmpty()
  status: StatusEnum;
}
