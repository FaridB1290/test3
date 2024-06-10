import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PanierMystereServiceBase } from "./base/panierMystere.service.base";

@Injectable()
export class PanierMystereService extends PanierMystereServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
