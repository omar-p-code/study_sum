import SummarizeIcon from '@mui/icons-material/Summarize';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import AssistantIcon from '@mui/icons-material/Assistant';
import clsx from "clsx";
import TextType from "./TextTypet";
import Carousel from "./Carousel";
import type { CarouselItem } from "../constants";

export const carouselItems: CarouselItem[] = [
   {
      title: 'Summarize',
      description: 'Summarize your Subjects',
      id: 1,
      icon: <SummarizeIcon className='text-primary' />
   },
   {
      title: 'Assistant',
      description: 'Study more with your best partner |sumy|',
      id: 2,
      icon: <AssistantIcon className='text-primary' />
   },
   {
      title: 'Planner',
      description: 'Make the best plan to achive your goal',
      id: 3,
      icon: <LeaderboardIcon className='text-primary' />
   },
   {
      title: 'Time Manager',
      description: 'Track and manage your day time',
      id: 4,
      icon: <AvTimerIcon className='text-primary' />
   },
]

function Hero() {
   return (
      <section className="flex max-md:flex-col md:justify-between justify-center lg:justify-center items-center w-dvw min-h-52 px-10 py-15 text-start max-w-dvw overflow-hidden gap-10">
         <div className='min-w-[max(350px,30vw)]'>
            <h1 className={clsx('font-bold text-3xl')}>
               Summarize
               <span
                  className="text-primary font-extrabold"> Your</span>
               <TextType
                  text={[" Subjects", " Lectures"]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor
                  cursorCharacter="_"
                  deletingSpeed={50}
                  cursorBlinkDuration={0.5}
               />
            </h1>
            <p className="text-muted">Organize your studies to get best <span className="text-accent font-bold">marks</span></p>
         </div>
         <div className="relative w-fit flex-center min-w-[max(350px,30vw)]">
            <Carousel
               baseWidth={300}
               autoplay
               autoplayDelay={3000}
               pauseOnHover
               items={carouselItems}
               loop
            />
         </div>
      </section>
   )
}

export default Hero