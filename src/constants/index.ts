// functions

// function getAge(birthDate: string): number {
//    const currentYear = new Date().getFullYear();
//    const birthYear = new Date(birthDate).getFullYear();
//    const age = currentYear - birthYear;
//    return age;
// }


// interfaces


export interface ContactInfo {
   whatsapp: string[],
   email: string[],
   phone?: string[],
   address?: string
}

export interface CarouselItem {
   title: string;
   description: string;
   id: number;
   icon: React.ReactNode;
}

export interface CarouselProps {
   items?: CarouselItem[];
   baseWidth?: number;
   autoplay?: boolean;
   autoplayDelay?: number;
   pauseOnHover?: boolean;
   loop?: boolean;
   round?: boolean;
}

export interface About {
   bio?: string,
   contactInfo: ContactInfo,
   about?: string,
   detaildAbout: {
      intro: string[],
      keyFeatures: object
      why: string[]
   }
}

export interface StudySum {
   server?: string | null;
   dark?: string;

   setServer?: (server: string) => void;
   setDark?: (mode: string) => void;
}


// data
export const headerLinks = [
   {
      name: 'Home',
      path: '/'
   },
   {
      name: 'Study',
      path: '/study'
   },
   {
      name: 'Summarize',
      path: '/summarize'
   },
   {
      name: 'quizzes',
      path: '/quizzes'
   },
]

export const footerLinks = [
   {
      name: 'Home',
      path: '/'
   },
   {
      name: 'Study',
      path: '/study'
   },
   {
      name: 'Summarize',
      path: '/summarize'
   },
   {
      name: 'quizzes',
      path: '/quizzes'
   },
]

export const contactInfo: ContactInfo = {
   email: ['omraldyb2020@gmail.com'],
   whatsapp: ['01067466894', '01202919251'],
   phone: ['01067466894', '01202919251']
}

export const about: About = {
   contactInfo,
   about: "Study_Sum is a personal project I designed to train and improve my user interface and server-side development skills. Currently, the program focuses on summarizing my high school study materials and organizing them efficiently within the application.",
   detaildAbout: {
      intro: [
         "*Study_sum* is a personal project I designed to train and improve my user interface and server-side development skills. Currently, the program focuses on summarizing my high school study materials and organizing them efficiently within the application.",
         "Although it's a simple tool now, the goal is to gradually develop it into a full-featured web application. This approach allows me to achieve two objectives at once: improving my development skills while creating a practical study aid."
      ],
      keyFeatures: {
         Summarize: {
            state: "Planned",
            text: "Write and organize lesson summaries with expandable points"
         },
         Study: 
         {
            state: "Planned",
            text: "Structure and manage your subjects and lessons for easy navigation"
         },
         Planner: {
            state: "Planned", 
            text:"Set study schedules, priorities, and track progress"
         },
         Assistant: {
            state: "Planned",
            text:"Contextual guidance and suggestions while studying"
         },
      },
      why: [
         "It’s minimal, practical, and focused on real study workflows, helping you organize materials efficiently while giving me a platform to experiment and improve my development skills."
      ]
   }
}