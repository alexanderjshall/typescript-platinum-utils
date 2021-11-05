import { Enforce } from "../src/enforce";
import { TypeException } from "../src/exceptions";

describe("Enforce", () => {
  it("isString() should throw a TypeException error if type does not match", () => {
    expect(() => Enforce.isString(1)).toThrow(TypeException);
  });
});
