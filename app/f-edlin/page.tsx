import '../styles/globals.css';
import Link from 'next/link';
import Terminal from '../components/Terminal';
import { marked } from 'marked';

const mdSrc = `
This is a clone of the DOS-editor "EDLIN" called "F-Edlin" aka "Fake-Edlin". 

Is it any good? Let's find out:

- Open a new file by typing \`edlin file.txt\`
- To add lines to this new file type \`a\`
- When you are finished adding lines type \`.\`
- To view everything you just added to the file type \`l\` (for _list_)
`;

function getMarkdownText() {
  var rawMarkup = marked.parse(mdSrc);
  return { __html: rawMarkup };
}

export default function Edlin() {
  return (
    <>
      <div className="container mx-auto text-center p-10">
        <h1 className="text-4xl md:text-7xl font-bold">F-Edlin</h1>
      </div>
      <div className="flex flex-col md:flex-row mx-auto items-center space-x-4 p-10">
        <Terminal />
        <div className="flex-1 w-full bg-stone-950/90 p-4">
          <div className="prose md:prose-lg prose-invert max-w-none" dangerouslySetInnerHTML={getMarkdownText()}></div>
        </div>
      </div>
    </>
  )
}
