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
      name: 'About',
      path: '/about'
   },
   {
      name: 'quizzes',
      path: '/quizzes'
   },
   {
      name: 'Contact',
      path: '/contact'
   },
]

export const footerLinks = [
   {
      name: 'Home',
      path: '/'
   },
   {
      name: 'About',
      path: '/about'
   },
   {
      name: 'quizzes',
      path: '/quizzes'
   },
   {
      name: 'Contact',
      path: '/contact'
   },
]

export const contactInfo: ContactInfo = {
   email: ['omraldyb2020@gmail.com'],
   whatsapp: ['01067466894', '01202919251'],
   phone: ['01067466894', '01202919251']
}

export const about: About = {
   contactInfo,
   about: "The study_sum program is one I designed for training and honing my user interface and server development skills. I plan to develop it into a comprehensive web application later, but currently it's limited to summarizing my high school study materials and putting them into the application, thus achieving two goals at once."
}