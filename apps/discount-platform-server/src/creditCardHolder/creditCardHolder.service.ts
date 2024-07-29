import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreditCardHolderServiceBase } from "./base/creditCardHolder.service.base";

@Injectable()
export class CreditCardHolderService extends CreditCardHolderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
