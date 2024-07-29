import * as graphql from "@nestjs/graphql";
import { CreditCardHolderResolverBase } from "./base/creditCardHolder.resolver.base";
import { CreditCardHolder } from "./base/CreditCardHolder";
import { CreditCardHolderService } from "./creditCardHolder.service";

@graphql.Resolver(() => CreditCardHolder)
export class CreditCardHolderResolver extends CreditCardHolderResolverBase {
  constructor(protected readonly service: CreditCardHolderService) {
    super(service);
  }
}
