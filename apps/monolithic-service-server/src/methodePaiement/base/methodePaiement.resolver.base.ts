/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { MethodePaiement } from "./MethodePaiement";
import { MethodePaiementCountArgs } from "./MethodePaiementCountArgs";
import { MethodePaiementFindManyArgs } from "./MethodePaiementFindManyArgs";
import { MethodePaiementFindUniqueArgs } from "./MethodePaiementFindUniqueArgs";
import { CreateMethodePaiementArgs } from "./CreateMethodePaiementArgs";
import { UpdateMethodePaiementArgs } from "./UpdateMethodePaiementArgs";
import { DeleteMethodePaiementArgs } from "./DeleteMethodePaiementArgs";
import { MethodePaiementService } from "../methodePaiement.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MethodePaiement)
export class MethodePaiementResolverBase {
  constructor(
    protected readonly service: MethodePaiementService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "MethodePaiement",
    action: "read",
    possession: "any",
  })
  async _methodePaiementsMeta(
    @graphql.Args() args: MethodePaiementCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [MethodePaiement])
  @nestAccessControl.UseRoles({
    resource: "MethodePaiement",
    action: "read",
    possession: "any",
  })
  async methodePaiements(
    @graphql.Args() args: MethodePaiementFindManyArgs
  ): Promise<MethodePaiement[]> {
    return this.service.methodePaiements(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => MethodePaiement, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "MethodePaiement",
    action: "read",
    possession: "own",
  })
  async methodePaiement(
    @graphql.Args() args: MethodePaiementFindUniqueArgs
  ): Promise<MethodePaiement | null> {
    const result = await this.service.methodePaiement(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MethodePaiement)
  @nestAccessControl.UseRoles({
    resource: "MethodePaiement",
    action: "create",
    possession: "any",
  })
  async createMethodePaiement(
    @graphql.Args() args: CreateMethodePaiementArgs
  ): Promise<MethodePaiement> {
    return await this.service.createMethodePaiement({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MethodePaiement)
  @nestAccessControl.UseRoles({
    resource: "MethodePaiement",
    action: "update",
    possession: "any",
  })
  async updateMethodePaiement(
    @graphql.Args() args: UpdateMethodePaiementArgs
  ): Promise<MethodePaiement | null> {
    try {
      return await this.service.updateMethodePaiement({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => MethodePaiement)
  @nestAccessControl.UseRoles({
    resource: "MethodePaiement",
    action: "delete",
    possession: "any",
  })
  async deleteMethodePaiement(
    @graphql.Args() args: DeleteMethodePaiementArgs
  ): Promise<MethodePaiement | null> {
    try {
      return await this.service.deleteMethodePaiement(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}