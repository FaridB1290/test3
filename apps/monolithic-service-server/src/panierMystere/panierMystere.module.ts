import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PanierMystereModuleBase } from "./base/panierMystere.module.base";
import { PanierMystereService } from "./panierMystere.service";
import { PanierMystereController } from "./panierMystere.controller";
import { PanierMystereResolver } from "./panierMystere.resolver";

@Module({
  imports: [PanierMystereModuleBase, forwardRef(() => AuthModule)],
  controllers: [PanierMystereController],
  providers: [PanierMystereService, PanierMystereResolver],
  exports: [PanierMystereService],
})
export class PanierMystereModule {}
