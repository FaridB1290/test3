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
import { CommerceWhereUniqueInput } from "./CommerceWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CommerceUpdateInput } from "./CommerceUpdateInput";

@ArgsType()
class UpdateCommerceArgs {
  @ApiProperty({
    required: true,
    type: () => CommerceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CommerceWhereUniqueInput)
  @Field(() => CommerceWhereUniqueInput, { nullable: false })
  where!: CommerceWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CommerceUpdateInput,
  })
  @ValidateNested()
  @Type(() => CommerceUpdateInput)
  @Field(() => CommerceUpdateInput, { nullable: false })
  data!: CommerceUpdateInput;
}

export { UpdateCommerceArgs as UpdateCommerceArgs };