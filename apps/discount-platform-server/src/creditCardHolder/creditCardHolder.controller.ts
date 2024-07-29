import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreditCardHolderService } from "./creditCardHolder.service";
import { CreditCardHolderControllerBase } from "./base/creditCardHolder.controller.base";

@swagger.ApiTags("creditCardHolders")
@common.Controller("creditCardHolders")
export class CreditCardHolderController extends CreditCardHolderControllerBase {
  constructor(protected readonly service: CreditCardHolderService) {
    super(service);
  }
}
