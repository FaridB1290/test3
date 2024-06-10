import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MethodePaiementServiceBase } from "./base/methodePaiement.service.base";

@Injectable()
export class MethodePaiementService extends MethodePaiementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
