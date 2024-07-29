import { Module } from "@nestjs/common";
import { CreditCardHolderModuleBase } from "./base/creditCardHolder.module.base";
import { CreditCardHolderService } from "./creditCardHolder.service";
import { CreditCardHolderController } from "./creditCardHolder.controller";
import { CreditCardHolderResolver } from "./creditCardHolder.resolver";

@Module({
  imports: [CreditCardHolderModuleBase],
  controllers: [CreditCardHolderController],
  providers: [CreditCardHolderService, CreditCardHolderResolver],
  exports: [CreditCardHolderService],
})
export class CreditCardHolderModule {}
