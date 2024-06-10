import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CommerceModuleBase } from "./base/commerce.module.base";
import { CommerceService } from "./commerce.service";
import { CommerceController } from "./commerce.controller";
import { CommerceResolver } from "./commerce.resolver";

@Module({
  imports: [CommerceModuleBase, forwardRef(() => AuthModule)],
  controllers: [CommerceController],
  providers: [CommerceService, CommerceResolver],
  exports: [CommerceService],
})
export class CommerceModule {}
