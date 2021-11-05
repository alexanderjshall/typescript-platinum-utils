export class TypeException extends TypeError {
  constructor(message: string) {
    super(`TypeException - input failed enforced type check ${message}`);
  }
}
