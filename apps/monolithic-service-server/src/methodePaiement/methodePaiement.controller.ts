import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MethodePaiementService } from "./methodePaiement.service";
import { MethodePaiementControllerBase } from "./base/methodePaiement.controller.base";

@swagger.ApiTags("methodePaiements")
@common.Controller("methodePaiements")
export class MethodePaiementController extends MethodePaiementControllerBase {
  constructor(
    protected readonly service: MethodePaiementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
