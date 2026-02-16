import type { ReactNode } from "react"
import { about } from "../constants"

function formateText(text: string) {
   return text.split(" ").map((text) => (
      <>
         {
            /\*\w+\*/gmi.test(text)
               ? <b className="font-extrabold text-accent">{text.replaceAll("*", "") + ' '}</b>
               : text + ' '
         }
      </>
   ))
}

function getEntries(object: object): ReactNode[] {
   const items: ReactNode[] = []
   for (let [key, value] of Object.entries(object)) {
      items.push((
         <li key={key} className="flex items-center justify-start gap-3 w-full">
            <p className="font-bold text-xl flex-1">
               {key}{value.state.toLowerCase() === 'planned' && ` (${value.state})`}:
            </p>
            <p className="lg:flex-2 flex-1 text-start font-semibold">{value.text as string}</p>
         </li>
      ))
   }
   return items
}

function About() {
   return (
      <section id="about" className="sm:flex-col sm:justify-center md:flex-row md:justify-between items-start">
         <div className="about flex flex-col gap-5">
            <h2 className="w-full text-center font-bold text-2xl mb-10">About Us</h2>
            <div className="intro flex flex-col gap-10 mb-15">
               {about.detaildAbout.intro.map(text => (
                  <p>{formateText(text)}</p>
               ))}

            </div>

            <div className="group lg:flex lg:justify-center lg:items-center">
               <div className="features w-full flex flex-col gap-10 lg:flex-3">
                  <h2 className="font-bold text-xl">Key Features</h2>
                  <ul className="list-disc flex flex-col gap-2 mb-15">
                     {getEntries(about.detaildAbout.keyFeatures)}
                  </ul>
               </div>

               <div className="why flex flex-col gap-10 mb-10 lg:flex-1 border-border border-l pl-15">
                  <h2 className="font-bold text-xl">Why sudy_sum</h2>
                  {about.detaildAbout.why.map((text, ind) => (
                     <p key={`text-${ind * Math.random()}`}>{formateText(text)}</p>
                  ))}
               </div>
            </div>
         </div>
      </section >
   )
}

export default About