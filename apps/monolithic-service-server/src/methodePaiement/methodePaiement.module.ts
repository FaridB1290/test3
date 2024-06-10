import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MethodePaiementModuleBase } from "./base/methodePaiement.module.base";
import { MethodePaiementService } from "./methodePaiement.service";
import { MethodePaiementController } from "./methodePaiement.controller";
import { MethodePaiementResolver } from "./methodePaiement.resolver";

@Module({
  imports: [MethodePaiementModuleBase, forwardRef(() => AuthModule)],
  controllers: [MethodePaiementController],
  providers: [MethodePaiementService, MethodePaiementResolver],
  exports: [MethodePaiementService],
})
export class MethodePaiementModule {}
