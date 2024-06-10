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
import { EnumMethodePaiementTypeField } from "./EnumMethodePaiementTypeField";
import { IsEnum, IsOptional } from "class-validator";

@InputType()
class MethodePaiementCreateInput {
  @ApiProperty({
    required: false,
    enum: EnumMethodePaiementTypeField,
  })
  @IsEnum(EnumMethodePaiementTypeField)
  @IsOptional()
  @Field(() => EnumMethodePaiementTypeField, {
    nullable: true,
  })
  typeField?: "Option1" | null;
}

export { MethodePaiementCreateInput as MethodePaiementCreateInput };