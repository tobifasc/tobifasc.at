"use client"; 
import { useEffect, useState, useRef } from 'react';
import EdlinService from './edlinService';

export default function Terminal() {
  const [term, setTerm] = useState({cmdLine: "", buffer: []});
  const [prompt, setPrompt] = useState("> ");
  const [cursorStyle, setCursorStyle] = useState('');
  const [file, setFile] = useState([]);
  const [linePointer, setLinePointer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorStyle((prev) => prev == "" ? "hidden" : "");
    }, 300);
    // clean up
    return () => {
      clearInterval(interval);
    };
  }, []);

  function pushToBuffer(line: String) {
    setTerm((prev) => {
      prev.buffer.push(line);
      return {cmdLine: "", buffer: prev.buffer}
    });
  }
  
  // read-only state with lazy initializer to get Singleton
  const [edlin] = useState(() => new EdlinService(pushToBuffer, setPrompt));
  
  function keyDownHandler(e: KeyboardEvent) {
    if (e.key.length === 1) {
      setTerm((prev) => {
        return {...prev, cmdLine: prev.cmdLine + e.key};
      });
    } else if (e.code == "Enter") {
      const cmd = term.cmdLine;
      if (!edlin.isActive()) {
        pushToBuffer("> " + cmd);
        execute(cmd);
      } else {
        edlin.exec(cmd);
      }
    } else if (e.code == "Backspace") { 
      setTerm((prev) => ({...prev, cmdLine: prev.cmdLine.substr(0, prev.cmdLine.length - 1)}));
    }
  }

  function execute(cmd: String) {
    if (cmd.startsWith("edlin ") && cmd.length > 5) {
      const fileName = cmd.split(" ")[1];
      edlin.start(fileName);
    } else if (cmd.trim() == "dir") {
        pushToBuffer("Directory of C:\\lol");
        pushToBuffer("");
        pushToBuffer(".        <DIR> 06-17-2023 09:42a");
        pushToBuffer("..       <DIR> 06-17-2023 09:42a");
        pushToBuffer("    0 file(s)      0 bytes");
        pushToBuffer("    2 dir(s)   5,000 bytes free");
    } else if (cmd.trim() == "q" || cmd.trim() == "quit") { 
      //router.push('/');
    } else {
      pushToBuffer("not implemented");
    }
  }

  
  return (
      <div onKeyDown={keyDownHandler} tabIndex="0" className="flex-1 w-full max-w-5xl font-mono bg-black p-8 text-white">
          {term.buffer.slice(-10).map((row, i) => <p key={i} className="whitespace-pre">{row}</p>)}
          <p className="whitespace-pre">{prompt}<span>{term.cmdLine}</span><span className={cursorStyle}>_</span></p>
      </div>
  )
}
