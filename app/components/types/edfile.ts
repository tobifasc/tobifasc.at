export default class EdFile {
  private lines: string[];
  private linePointer: number;
  constructor() {
      this.lines = [];
      this.linePointer = 0;
  }

  public setLinePointer(lp: number) {
      this.linePointer = lp;
  }

  public getLinePointer(): number {
      return this.linePointer;
  }

  public addLine(line: string) {
    this.lines.push(line);
  }
  
  public getLineCount(): number {
    return this.lines.length;
  }
  
  public getLines(): string[] {
    return this.lines;
  }
  
  public getLine(index: number): string {
    return this.lines[index];
  }
  
  public setLine(index: number, line: string) {
    return this.lines[index] = line;
  }
}
