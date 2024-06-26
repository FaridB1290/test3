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
import { CommerceWhereInput } from "./CommerceWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CommerceOrderByInput } from "./CommerceOrderByInput";

@ArgsType()
class CommerceFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CommerceWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CommerceWhereInput, { nullable: true })
  @Type(() => CommerceWhereInput)
  where?: CommerceWhereInput;

  @ApiProperty({
    required: false,
    type: [CommerceOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CommerceOrderByInput], { nullable: true })
  @Type(() => CommerceOrderByInput)
  orderBy?: Array<CommerceOrderByInput>;

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

export { CommerceFindManyArgs as CommerceFindManyArgs };
