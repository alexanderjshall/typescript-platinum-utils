export class CartesianFactory {
  public static TwoDimensionalPoint(initX = 0, initY = 0) {
    return new TwoDimensionalPoint(initX, initY);
  }

  public static ThreeDimensionalPoint(initX = 0, initY = 0, initZ = 0) {
    return new ThreeDimensionalPoint(initX, initY, initZ);
  }
}

class TwoDimensionalPoint {
  private x = 0;
  private y = 0;

  constructor(initX = 0, initY = 0) {
    this.x = initX;
    this.y = initY;
  }

  public getX(): number {
    return this.x;
  }

  public getY(): number {
    return this.y;
  }

  public add(changeToX: number, changeToY: number): TwoDimensionalPoint {
    this.x += changeToX;
    this.y += changeToY;
    return this;
  }

  public scale(factor: number): TwoDimensionalPoint {
    this.x *= factor;
    this.y *= factor;
    return this;
  }
}

class ThreeDimensionalPoint {
  private x = 0;
  private y = 0;
  private z = 0;

  constructor(initX = 0, initY = 0, initZ = 0) {
    this.x = initX;
    this.y = initY;
    this.z = initZ;
  }

  public getX(): number {
    return this.x;
  }

  public getY(): number {
    return this.y;
  }

  public getZ(): number {
    return this.z;
  }

  public add(
    changeToX: number,
    changeToY: number,
    changeToZ: number
  ): ThreeDimensionalPoint {
    this.x += changeToX;
    this.y += changeToY;
    this.z += changeToZ;
    return this;
  }

  public scale(factor: number): ThreeDimensionalPoint {
    this.x *= factor;
    this.y *= factor;
    this.z *= factor;
    return this;
  }
}
