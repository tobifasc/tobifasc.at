import EdFile from './types/edfile'

export default class EdlinService {
  private edMode = 'CLOSED';
  private file: EdFile = new EdFile();
  
  constructor(pushToBuffer, setPrompt) {
    this.pushToBuffer = pushToBuffer;
    this.setPrompt = setPrompt;
  }

  isActive() {
    return this.edMode != 'CLOSED';
  }

  start(fileName) {
    this.pushToBuffer("fedlin 0.1, copyright (c) 2023 Tobias Fasching")
    this.pushToBuffer("This program comes with ABSOLUTELY NO WARRANTY.")
    this.pushToBuffer(" ");
    this.pushToBuffer(fileName + ": 0 lines read");
    this.setPrompt("*");
    this.edMode = "OPEN";
  }
  
  exec(cmd: String) {
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
        this.file.lines.forEach((line, i) => {
          this.pushToBuffer((i+1) + (i == currLinePointer ? ":*" : ": ") + line);
        });
      } else if (found[2].toLowerCase() == "q") { // quit ed
        this.pushToBuffer("bye :-)");
        this.setPrompt("> ");
        this.edMode = "CLOSED";
      } else if (found[2] == "" && found[1] != "") { // edit line
        currLinePointer = (+found[1] - 1);
        this.file.setLinePointer(currLinePointer);
        this.pushToBuffer((currLinePointer+1) + ":*" + file[currLinePointer]);
        this.setPrompt((currLinePointer+1) + ":");
        this.edMode = "EDITLINE";
      }
    } else if (this.edMode == "A") {
      this.pushToBuffer(" : " + cmd);
      if (cmd == ".") {
        this.setPrompt("*");
        this.edMode = "OPEN";
      } else {
        this.file.lines.push(cmd);
        this.file.setLinePointer(this.file.lines.length - 1);
      }
    } else if (this.edMode == "EDITLINE") {
      this.file[this.file.getLinePointer()] = cmd;
      this.pushToBuffer((this.file.getLinePointer()+1) + ":" + cmd);
      this.setPrompt("*");
      this.edMode = "OPEN";
    }
  }
}
