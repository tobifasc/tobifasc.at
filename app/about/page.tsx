import '../styles/globals.css';
import Link from 'next/link';
import { marked } from 'marked';

const mdSrc = `
## Baby steps
  Since I was a child I loved fooling around with our family computer.
  My brother had a lot of floppy disks with games on them. 
  "Dangerous Dave" and some obscure Formula 1 game stayed in my memory 
  the most. Later on there were also often CDs with video games in 
  cereal boxes. There were a lot of hours spent on what was probably 
  very limited content looking back to it now.

  When Windows XP came, and with it the greatest pinball game ever, 
  I started focussing a little bit more on the underlying technology 
  instead of the games. Becoming more aware what an OS is, what 
  the commandline can be used for, sometimes also downloading weird 
  things from the internet and breaking things... My interest in 
  computers was getting bigger and bigger.

  At the peak era of flash games in the mid-2000s it was obvious for me to try 
  and find out how those are made. Fooling around with Adobe Flash and 
  ActionScript (v3 I think?) was a lot of fun. You could quickly create things 
  that one can see. Something moving around the screen because you
  programmed it to do so? Amazing! What also became apparent at that time 
  was that I am not talented in designing good looking UIs/frontends 
  but trying different algorithms and APIs was fun enough to me. No desire 
  to publish a polished flash game or anything like that. 

  
  Anyway just trying things in ActionScript I read on the internet not knowing 
  why something would work and something else wouldn't wasn't satisfying 
  in the long run so I decided I wanted to learn more about how coding works and 
  convinced my mum to buy me a book called "C++ for beginners". 
  I haven't touched it in forever, it's probably a good book, but the concepts 
  didn't really make a lot of sense to 11 year old me. 
  What's the stdlib? How does cout work? Why do i need classes? 
  I did work through the book and wrote some CLI celsius to fahrenheit 
  converter... But that wasn't really encouraging. If I could speak to my former
  self I would have told me to NOT try learning C++ as a "first" language.
  
  
## Education 

  Fortunately I picked a good school for studying IT (HTL Wiener Neustadt). 
  There I was introduced to Python, Java, various RDBMS, networking, UNIX,
  app development, ... I even got back to coding in C++ 
  (while learning about threading) now with a better understanding of 
  the underlying concepts. 

  After HTL I started studying Medical Informatics at TU Wien. I wanted 
  to deepen my knowledge but also extend it with another field that interests 
  me and in which I see a lot of potential for new innovative IT solutions.


## Work

  While still in HTL during the summer holidays I got the opportunity to work 
  at very interesting companies where I got a first glimpse into what 
  software development in enterprise settings looks like. I did a lot of 
  different things:

  - fixing network and printer problems...
  - writing VB macros (longest time I was ever looking for a missing comma...)
  - adding services to a web-app written in Laravel (still one of my 
  favorite frameworks)
  - adding Node-JS services to a mobile-app

  Later after starting uni I got a job as a software developer in a small
  office where I was in charge of designing and implementing a new web-app
  for collecting and evaluating data about a research project. This was 
  a great experience because working for such a long time on ONE project, 
  adding new features, going through the different stages of the 
  project, questioning earlier decisions, having setbacks. 
  But then seeing it finally being used. IN PRODUCTION. I learned a lot
  during these years. 

  But I wanted to make use of my new found medical science knowledge.
  So in 2021 I started working for a healthcare provider. This was a 
  big jump from the small office I was at before to a company with 
  about 70 employees. In the beginning I was implementing middleware
  for a medication logistics robot but this soon became only 
  maintanance work and my focus switched to a new team implementing 
  a web-based HIS. Additionally I am also responsible for providing 
  ELGA connectivity to our products.

  `;
  
function getMarkdownText() {
  var rawMarkup = marked.parse(mdSrc);
  return { __html: rawMarkup };
}

export default function About() {
  return (
    <>
      <div className="container mx-auto text-center p-10">
        <h1 className="text-4xl md:text-7xl font-bold">About me</h1>
      </div>
      <div className="lg:mx-20 xl:mx-80 p-10 bg-stone-950/90">
        <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={getMarkdownText()}></div>
      </div>
    </>
  )
}
