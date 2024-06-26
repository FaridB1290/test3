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
import { VenteWhereInput } from "./VenteWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class VenteListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => VenteWhereInput,
  })
  @ValidateNested()
  @Type(() => VenteWhereInput)
  @IsOptional()
  @Field(() => VenteWhereInput, {
    nullable: true,
  })
  every?: VenteWhereInput;

  @ApiProperty({
    required: false,
    type: () => VenteWhereInput,
  })
  @ValidateNested()
  @Type(() => VenteWhereInput)
  @IsOptional()
  @Field(() => VenteWhereInput, {
    nullable: true,
  })
  some?: VenteWhereInput;

  @ApiProperty({
    required: false,
    type: () => VenteWhereInput,
  })
  @ValidateNested()
  @Type(() => VenteWhereInput)
  @IsOptional()
  @Field(() => VenteWhereInput, {
    nullable: true,
  })
  none?: VenteWhereInput;
}
export { VenteListRelationFilter as VenteListRelationFilter };
