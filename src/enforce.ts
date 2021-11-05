import { TypeException } from "./exceptions";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UnknownInstanceType = any;

export class Enforce {
  /**
   * Throws an error if any argument is not a string.
   * @param inputs Argument list of inputs to type check
   */
  public static isString(...inputs: unknown[]): void {
    this.isOfType("string", inputs);
  }

  /**
   * Throws an error if any argument is not a number.
   * @param inputs Argument list of inputs to type check
   */
  public static isNumber(...inputs: unknown[]): void {
    this.isOfType("number", inputs);
  }

  /**
   * Throws an error if any argument is not a boolean.
   * @param inputs Argument list of inputs to type check
   */
  public static isBoolean(...inputs: unknown[]): void {
    this.isOfType("boolean", inputs);
  }

  /**
   * Throws an error if any argument is not a boolean.
   * @param inputs Argument list of inputs to type check
   */
  public static isNotNull(...inputs: unknown[]): void {
    inputs.forEach((input) => {
      if (input === null) {
        throw new TypeException("Unexpected null argument");
      }
    });
  }

  public static isNotNullOrEmpty(input: unknown[]): void {
    if (input === null || input.length === 0) {
      throw new TypeException("Expected array to contain at least 1 element");
    }
  }

  public static isInteger(...inputs: unknown[]): void {
    this.isNumber(inputs);
    inputs.forEach((num) => {
      if (!Number.isInteger(num)) {
        throw new TypeException("Expected array to contain at least 1 element");
      }
    });
  }

  public static isGreaterThan0(...inputs: unknown[]): void {
    this.isNumber(inputs);
    (inputs as number[]).forEach((num) => {
      if (num <= 0) {
        throw new TypeException("Expected array to contain at least 1 element");
      }
    });
  }

  public static isInstanceOf(
    expectedType: UnknownInstanceType,
    ...inputs: unknown[]
  ): void {
    inputs.forEach((input) => {
      if (input instanceof expectedType) {
        throw new TypeException("Unexpected null argument");
      }
    });
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
