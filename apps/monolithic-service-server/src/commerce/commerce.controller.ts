import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CommerceService } from "./commerce.service";
import { CommerceControllerBase } from "./base/commerce.controller.base";

@swagger.ApiTags("commerce")
@common.Controller("commerce")
export class CommerceController extends CommerceControllerBase {
  constructor(
    protected readonly service: CommerceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
