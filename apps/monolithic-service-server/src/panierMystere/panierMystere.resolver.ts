import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PanierMystereResolverBase } from "./base/panierMystere.resolver.base";
import { PanierMystere } from "./base/PanierMystere";
import { PanierMystereService } from "./panierMystere.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PanierMystere)
export class PanierMystereResolver extends PanierMystereResolverBase {
  constructor(
    protected readonly service: PanierMystereService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
