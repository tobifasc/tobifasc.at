import EdFile from './types/edfile'

export default class EdlinService {
  private edMode = 'CLOSED';
  private file: EdFile = new EdFile();
  private pushToBuffer: (a: string) => void;
  private setPrompt: (a: string) => void;
  
  constructor(pushToBuffer: (a: string) => void, setPrompt: (a: string) => void) {
    this.pushToBuffer = pushToBuffer;
    this.setPrompt = setPrompt;
  }

  isActive() {
    return this.edMode != 'CLOSED';
  }

  start(fileName: string) {
    this.pushToBuffer("fedlin 0.1, copyright (c) 2023 Tobias Fasching")
    this.pushToBuffer("This program comes with ABSOLUTELY NO WARRANTY.")
    this.pushToBuffer(" ");
    this.pushToBuffer(fileName + ": 0 lines read");
    this.setPrompt("*");
    this.edMode = "OPEN";
  }
  
  exec(cmd: string) {
    if (this.edMode == "OPEN") {
      this.pushToBuffer("*" + cmd);
      const found = cmd.match(/^(\d*)(["a"|"l"|"q"]?)$/i);
      let currLinePointer = this.file.getLinePointer();
      if (found == null) {
        this.pushToBuffer("invalid");
      } else if (found[2].toLowerCase() == "a") { //append
        this.setPrompt(" : ");
        this.edMode = "A";
      } else if (found[2].toLowerCase() == "l") { //list file
        if (found[1] != "") {
          currLinePointer = (+found[1] - 1);
          this.file.setLinePointer(currLinePointer);
        }
        this.file.getLines().forEach((line, i) => {
          this.pushToBuffer((i+1) + (i == currLinePointer ? ":*" : ": ") + line);
        });
      } else if (found[2].toLowerCase() == "q") { // quit ed
        this.pushToBuffer("bye :-)");
        this.setPrompt("> ");
        this.edMode = "CLOSED";
      } else if (found[2] == "" && found[1] != "") { // edit line
        currLinePointer = (+found[1] - 1);
        this.file.setLinePointer(currLinePointer);
        this.pushToBuffer((currLinePointer+1) + ":*" + this.file.getLine(currLinePointer));
        this.setPrompt((currLinePointer+1) + ":");
        this.edMode = "EDITLINE";
      }
    } else if (this.edMode == "A") {
      this.pushToBuffer(" : " + cmd);
      if (cmd == ".") {
        this.setPrompt("*");
        this.edMode = "OPEN";
      } else {
        this.file.addLine(cmd);
        this.file.setLinePointer(this.file.getLineCount() - 1);
      }
    } else if (this.edMode == "EDITLINE") {
      this.file.setLine(this.file.getLinePointer(), cmd);
      this.pushToBuffer((this.file.getLinePointer()+1) + ":" + cmd);
      this.setPrompt("*");
      this.edMode = "OPEN";
    }
  }
}
