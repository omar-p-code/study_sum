// functions

// function getAge(birthDate: string): number {
//    const currentYear = new Date().getFullYear();
//    const birthYear = new Date(birthDate).getFullYear();
//    const age = currentYear - birthYear;
//    return age;
// }


// interfaces

export interface SubjectType {
   name: string;
   unites: {
      number: number,
      name?: string,
      lessons: {
         number:number,
         name?: string
         points: {
            title: string,
            text: string,
            subPoints: {
               title: string,
               text:string,
            }[]
         }[]
      }[]
   }[]
}

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


export const subjects: SubjectType[] = [
  {
    name: 'Chemistry',
    unites: [
      {
        number: 1,
        name: 'Atoms & Bases',
        lessons: [
          {
            number: 1,
            name: 'Atomic Structure',
            points: [
              {
                title: 'Atomic Structure',
                text: `Atoms are the fundamental units of matter, forming everything in the universe. 
They are composed of a dense nucleus containing protons and neutrons, surrounded by electrons in energy levels or shells. 
The number of protons determines the atomic number and defines the element. 
Electrons are responsible for chemical bonding and reactivity, moving between shells according to energy requirements. 
Understanding atomic structure is essential to explain chemical reactions, bonding, and the behavior of elements in compounds. 
This knowledge is the foundation of modern chemistry, allowing prediction of element properties and interaction mechanisms.`,
                subPoints: [
                  {
                    title: 'Electron Configuration',
                    text: `Electrons in an atom occupy specific energy levels or shells arranged around the nucleus. 
The arrangement follows the Aufbau principle, Pauli exclusion principle, and Hund's rule. 
Electrons fill lower energy orbitals first, then higher ones, and their arrangement determines chemical reactivity. 
Electron configuration explains why elements in the same group exhibit similar chemical properties. 
It also helps in understanding magnetic behavior, ion formation, and participation in covalent and ionic bonding. 
Mastering electron configuration allows chemists to predict molecule formation and stability.`
                  },
                  {
                    title: 'Isotopes',
                    text: `Isotopes are variants of the same element with the same number of protons but differing neutrons. 
This difference in neutron number gives them different atomic masses. 
Some isotopes are stable, while others are radioactive and decay over time, emitting radiation. 
Isotopes are crucial in dating geological samples, medical imaging, and nuclear energy applications. 
They maintain identical chemical behavior but differ in physical properties like mass and density, affecting reaction kinetics. 
Understanding isotopes helps in advanced chemistry studies and applications in research and industry.`
                  }
                ]
              },
              {
                title: 'Periodic Table',
                text: `The periodic table organizes all known chemical elements in order of increasing atomic number. 
It reveals recurring patterns of chemical and physical properties, allowing prediction of element behavior. 
Elements are arranged in periods (rows) and groups (columns), with elements in the same group sharing similar valence electron configurations. 
Trends in electronegativity, atomic radius, ionization energy, and reactivity can be inferred directly from the table. 
The periodic table serves as a roadmap for chemists, guiding the understanding of compounds, reactions, and material properties. 
It also aids in discovering new elements and understanding their potential applications in technology and medicine.`,
                subPoints: [
                  {
                    title: 'Groups',
                    text: `Groups are vertical columns in the periodic table. 
All elements in a group share the same number of valence electrons, which determines similar chemical reactivity. 
For example, alkali metals in group 1 are highly reactive and form similar compounds with water. 
Group trends also affect atomic radius, ionization energy, and electron affinity. 
Understanding groups is essential for predicting reactions, forming compounds, and studying periodic trends.`
                  },
                  {
                    title: 'Periods',
                    text: `Periods are horizontal rows in the periodic table. 
Elements in the same period have increasing atomic numbers and progressively filled electron shells. 
This results in gradual changes in properties such as metallic character, electronegativity, and atomic size. 
Period trends explain why elements change behavior across a row and why certain reactivity patterns emerge. 
Studying periods allows chemists to understand bonding, predict chemical interactions, and design new materials.`
                  }
                ]
              }
            ]
          },
          {
            number: 2,
            name: 'Chemical Reactions',
            points: [
              {
                title: 'Chemical Bonds',
                text: `Chemical bonds are forces that hold atoms together in molecules or compounds. 
They arise from interactions between electrons, including sharing, transfer, or delocalization. 
Understanding bonds is essential for predicting molecule structure, reactivity, and physical properties. 
Ionic bonds form through electron transfer, creating charged ions that attract each other, while covalent bonds involve electron sharing between atoms. 
Metallic bonds consist of delocalized electrons among a lattice of metal ions, explaining conductivity and malleability. 
Studying chemical bonds helps chemists design new compounds, understand biological molecules, and develop materials with desired properties.`,
                subPoints: [
                  {
                    title: 'Ionic Bonds',
                    text: `Ionic bonds form when one atom donates electrons to another, usually between metals and non-metals. 
The resulting positive and negative ions attract each other strongly, creating crystalline solids. 
Ionic compounds typically have high melting and boiling points, and they conduct electricity when dissolved in water. 
Understanding ionic bonding is essential for studying salts, electrolytes, and many industrial chemicals. 
These bonds explain solubility, lattice energy, and chemical reactivity patterns in inorganic chemistry.`
                  },
                  {
                    title: 'Covalent Bonds',
                    text: `Covalent bonds involve sharing pairs of electrons between atoms, typically non-metals. 
The shared electrons allow each atom to achieve a stable octet configuration. 
Covalent bonds can be polar or non-polar depending on the difference in electronegativity between bonded atoms. 
They form the basis of molecular compounds, including organic molecules and biological macromolecules. 
Understanding covalent bonds is key to predicting molecule geometry, polarity, and reactivity in chemistry and biology.`
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];



