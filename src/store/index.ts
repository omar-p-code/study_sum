import { create } from 'zustand';


const study_sum = create((set) => ({
   server: null,
   setServer: (server: string) => set({ server }),

   dark: true,
   setDark: (dark: true) => set({ dark }),
}))

export default study_sum;