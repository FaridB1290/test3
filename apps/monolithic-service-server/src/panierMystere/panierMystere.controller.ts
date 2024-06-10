import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PanierMystereService } from "./panierMystere.service";
import { PanierMystereControllerBase } from "./base/panierMystere.controller.base";

@swagger.ApiTags("panierMysteres")
@common.Controller("panierMysteres")
export class PanierMystereController extends PanierMystereControllerBase {
  constructor(
    protected readonly service: PanierMystereService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
