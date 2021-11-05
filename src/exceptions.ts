export class TypeException extends Error {
  constructor(message: string) {
    super(`TypeException - input failed enforced type check ${message}`);
  }
}
