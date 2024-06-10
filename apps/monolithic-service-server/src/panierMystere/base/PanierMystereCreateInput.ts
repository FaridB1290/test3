/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CommerceWhereUniqueInput } from "../../commerce/base/CommerceWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsEnum,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumPanierMystereEtat } from "./EnumPanierMystereEtat";
import { VenteCreateNestedManyWithoutPanierMysteresInput } from "./VenteCreateNestedManyWithoutPanierMysteresInput";

@InputType()
class PanierMystereCreateInput {
  @ApiProperty({
    required: false,
    type: () => CommerceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CommerceWhereUniqueInput)
  @IsOptional()
  @Field(() => CommerceWhereUniqueInput, {
    nullable: true,
  })
  commerce?: CommerceWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

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
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  nom?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  prix?: number | null;

  @ApiProperty({
    required: false,
    type: () => VenteCreateNestedManyWithoutPanierMysteresInput,
  })
  @ValidateNested()
  @Type(() => VenteCreateNestedManyWithoutPanierMysteresInput)
  @IsOptional()
  @Field(() => VenteCreateNestedManyWithoutPanierMysteresInput, {
    nullable: true,
  })
  ventes?: VenteCreateNestedManyWithoutPanierMysteresInput;
}

export { PanierMystereCreateInput as PanierMystereCreateInput };
