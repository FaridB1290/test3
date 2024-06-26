/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Commerce } from "../../commerce/base/Commerce";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsEnum,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumPanierMystereEtat } from "./EnumPanierMystereEtat";
import { Vente } from "../../vente/base/Vente";

@ObjectType()
class PanierMystere {
  @ApiProperty({
    required: false,
    type: () => Commerce,
  })
  @ValidateNested()
  @Type(() => Commerce)
  @IsOptional()
  commerce?: Commerce | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description!: string | null;

  @ApiProperty({
    required: false,
    enum: EnumPanierMystereEtat,
  })
  @IsEnum(EnumPanierMystereEtat)
  @IsOptional()
  @Field(() => EnumPanierMystereEtat, {
    nullable: true,
  })
  etat?: "Option1" | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  nom!: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  prix!: number | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [Vente],
  })
  @ValidateNested()
  @Type(() => Vente)
  @IsOptional()
  ventes?: Array<Vente>;
}

export { PanierMystere as PanierMystere };
