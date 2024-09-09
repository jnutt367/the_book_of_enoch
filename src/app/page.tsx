import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 pl-2 pr-2">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed pl-2 left-0 top-1 right-1 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Book of Enoch&nbsp;
          <code className="font-mono font-bold">Translated from the Ethiopian by R.H. Charles, 1906.</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
         The BOOK of ENOCH
        </div>
      </div>

      <div className="relative pt-5 pb-5 z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
      The BOOK of ENOCH & the WATCHERS   
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://www.ancienttexts.org/library/ethiopian/enoch/1watchers/watchers.htm"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
          The Book of the Watchers{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
          
          is a sacred text found among the Dead Sea Scrolls in 1947. Initially accepted by the Jewish and Christian communities as a viable book of scripture, the Book of Enoch is presently pseudepigraphical or not included in any biblical canon.
          </p>
        </a>

        <a
          href="https://www.ancienttexts.org/library/ethiopian/enoch/2parables/parables.htm"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
          Parables of Enoch or ... {" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
          (The Similitudes), a text from around the turn of the era that claims to be the ancient patriarchs revelation of secrets about the cosmos and the end-time, which had, in turn, been revealed to him during an angelically guided tour of heaven and the outermost parts of the earth.
          </p>
        </a>

        <a
          href="https://www.ancienttexts.org/library/ethiopian/enoch/3astron/astro.htm"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
          The Course of the Luminaries {" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
          The Book of the Courses of the Heavenly Luminaries is a scholarly work by R. H. Charles that analyzes the astronomical content of the biblical Book of Enoch. The Book of Enoch is an ancient text that is attributed to the biblical figure Enoch and is said to contain a wealth of astronomical knowledge. 
 
          </p>
        </a>

        <a
          href="https://www.ancienttexts.org/library/ethiopian/enoch/4dreams/dreams.htm"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
          Dreams & Visions{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
          
        
          The book of Dreams and Visions appears to been compiled from an older Canaanite text in the early Persian era and was likely attached to the Astronomical Book 
          from the beginning. 
          The Heavenly Luminaries Book was written from the view of Methuselah, Enochs son, which Dream Visions continues 

          </p>
        </a>





      </div>

     
    </main>
  );
}
