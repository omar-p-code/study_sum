import SummarizeIcon from '@mui/icons-material/Summarize';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import AssistantIcon from '@mui/icons-material/Assistant';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import clsx from "clsx";
import TextType from "./TextTypet";
import Carousel from "./Carousel";
import type { CarouselItem } from "../constants";
import Button from '@mui/material/Button'

export const carouselItems: CarouselItem[] = [
   {
      title: 'Summarize',
      description: 'Write structured summaries of your lessons with expandable points and subpoints. Keep all your notes organized and easy to revisit.',
      id: 1,
      icon: <SummarizeIcon className='text-primary' />
   },
   {
      title: 'Assistant',
      description: 'Get contextual help, suggestions, or reminders while you study.',
      id: 2,
      icon: <AssistantIcon className='text-primary' />
   },
   {
      title: 'Planner',
      description: 'Plan your study schedule effectively. Set priorities, deadlines, and see your tasks at a glance.',
      id: 3,
      icon: <LeaderboardIcon className='text-primary' />
   },
   {
      title: 'Study',
      description: 'Organize your lessons and subjects in a clear hierarchy. Quickly navigate through topics, check details, and track your progress.',
      id: 5,
      icon: <AvTimerIcon className='text-primary' />
   },
]

function Hero() {
   return (
      <section id='hero' className='max-md:flex-col md:justify-between justify-center lg:justify-center items-center text-start gap-10'>
         <img
            src="/studyBg.png"
            alt="Hero Bg"
            className='absolute w-full h-full -z-10 left-0 top-0 opacity-30 object-cover object-center'
         />
         <div className='min-w-[max(350px,30vw)]'>
            <h1 className={clsx('font-bold text-3xl leading-tight')}>
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

         <Button
            variant="text"
            color='primary'
            style={{ position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)' }}
            onClick={() => location.href = '#about'}
         >
            <KeyboardDoubleArrowDownIcon sx={{ fontSize: 35 }} className='animate-bounce drop-shadow-md drop-shadow-black' />
         </Button>
      </section>
   )
}

export default Hero