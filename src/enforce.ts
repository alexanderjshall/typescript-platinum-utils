import { TypeException } from "./exceptions";

export class Enforce {
  public static isString(...inputs: unknown[]): void {
    this.isOfType("string", inputs);
  }

  public static isNumber(...inputs: unknown[]): void {
    this.isOfType("number", inputs);
  }

  private static isOfType(expectedType: string, inputs: unknown[]): void {
    inputs.forEach((input) => {
      const inputType = typeof input;
      if (inputType !== expectedType) {
        throw new TypeException(
          `Expected type of ${expectedType}, but found ${inputType}`
        );
      }
    });
  }
}
