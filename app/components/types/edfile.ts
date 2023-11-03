export default class EdFile {
  private lines: string[];

  private linePointer: number;
  constructor() {
      this.lines = [];
      this.linePointer = null;
  }

  public setLinePointer(lp: number) {
      this.linePointer = lp;
  }

  public getLinePointer(): number {
      return this.linePointer;
  }
}
