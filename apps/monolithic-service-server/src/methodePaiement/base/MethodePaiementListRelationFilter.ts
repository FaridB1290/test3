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
import { MethodePaiementWhereInput } from "./MethodePaiementWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MethodePaiementListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MethodePaiementWhereInput,
  })
  @ValidateNested()
  @Type(() => MethodePaiementWhereInput)
  @IsOptional()
  @Field(() => MethodePaiementWhereInput, {
    nullable: true,
  })
  every?: MethodePaiementWhereInput;

  @ApiProperty({
    required: false,
    type: () => MethodePaiementWhereInput,
  })
  @ValidateNested()
  @Type(() => MethodePaiementWhereInput)
  @IsOptional()
  @Field(() => MethodePaiementWhereInput, {
    nullable: true,
  })
  some?: MethodePaiementWhereInput;

  @ApiProperty({
    required: false,
    type: () => MethodePaiementWhereInput,
  })
  @ValidateNested()
  @Type(() => MethodePaiementWhereInput)
  @IsOptional()
  @Field(() => MethodePaiementWhereInput, {
    nullable: true,
  })
  none?: MethodePaiementWhereInput;
}
export { MethodePaiementListRelationFilter as MethodePaiementListRelationFilter };
