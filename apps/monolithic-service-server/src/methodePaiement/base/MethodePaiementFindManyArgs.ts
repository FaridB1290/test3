/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MethodePaiementWhereInput } from "./MethodePaiementWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MethodePaiementOrderByInput } from "./MethodePaiementOrderByInput";

@ArgsType()
class MethodePaiementFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MethodePaiementWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MethodePaiementWhereInput, { nullable: true })
  @Type(() => MethodePaiementWhereInput)
  where?: MethodePaiementWhereInput;

  @ApiProperty({
    required: false,
    type: [MethodePaiementOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MethodePaiementOrderByInput], { nullable: true })
  @Type(() => MethodePaiementOrderByInput)
  orderBy?: Array<MethodePaiementOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { MethodePaiementFindManyArgs as MethodePaiementFindManyArgs };
