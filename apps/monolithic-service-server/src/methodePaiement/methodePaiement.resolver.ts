import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MethodePaiementResolverBase } from "./base/methodePaiement.resolver.base";
import { MethodePaiement } from "./base/MethodePaiement";
import { MethodePaiementService } from "./methodePaiement.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MethodePaiement)
export class MethodePaiementResolver extends MethodePaiementResolverBase {
  constructor(
    protected readonly service: MethodePaiementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
