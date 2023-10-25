import Table from "./lib/Table";
import "./lib/Utils";

export class TexasHoldem extends Table {
  constructor() {
    super("texas_holdem");
  }
}

export class SixPlusHoldem extends Table {
  constructor() {
    super("sixplus_holdem");
  }
}

export class Omaha extends Table {
  constructor() {
    super("omaha");
  }
}

export class FiveCardOmaha extends Table {
  constructor() {
    super("fivecard_omaha");
  }
}

export class SuperHoldem extends Table {
  constructor() {
    super("super_holdem");
  }
}
