import { subjects } from "../constants";
import Subject from "./Subject";

function Study() {
   return (
      <section className="subjects gap-5 flex flex-col justify-start w-full items-start">
         {subjects.map(subject => (
            <Subject subject={subject} />
         ))}
      </section>
   )
}

export default Study