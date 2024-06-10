import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CommerceServiceBase } from "./base/commerce.service.base";

@Injectable()
export class CommerceService extends CommerceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
