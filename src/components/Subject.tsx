import { useState } from "react";
import type { SubjectType } from "../constants";
import clsx from "clsx";

type OpenState = {
   [key: string]: boolean;
};

function Subject({ subject }: { subject: SubjectType }) {
   const [openItems, setOpenItems] = useState<OpenState>({});

   const toggleItem = (id: string, childrenIds?: string[]) => {
      setOpenItems(prev => {
         const isOpen = !!prev[id];
         const updated = { ...prev, [id]: !isOpen };

         if (isOpen && childrenIds) {
            childrenIds.forEach(cid => {
               updated[cid] = false;
            });
         }

         return updated;
      });
   };

   const isOpen = (id: string) => !!openItems[id];

   return (
      <div className="subject">
         <h2 className="font-bold text-2xl mb-5">{subject.name}</h2>

         {subject.unites.map(unite => {
            const uniteId = `unite-${subject.name}-${unite.name}`;
            const lessonIds = unite.lessons.map(l => `lesson-${unite.name}-${l.name}`);

            return (
               <div key={uniteId} className="mb-3">
                  <Item
                     id={uniteId}
                     title={unite.name || `Unite ${unite.number}`}
                     open={isOpen(uniteId)}
                     type="Unite"
                     onToggle={() => toggleItem(uniteId, lessonIds)}
                  />

                  {isOpen(uniteId) &&
                     unite.lessons.map(lesson => {
                        const lessonId = `lesson-${unite.name}-${lesson.name}`;
                        const pointIds = lesson.points.map(p => `point-${lesson.name}-${p.title}`);

                        return (
                           <div key={lessonId} className="ml-4">
                              <Item
                                 id={lessonId}
                                 title={lesson.name || `Lesson ${lesson.number}`}
                                 open={isOpen(lessonId)}
                                 type="Lesson"
                                 onToggle={() => toggleItem(lessonId, pointIds)}
                              />

                              {isOpen(lessonId) &&
                                 lesson.points.map(point => {
                                    const pointId = `point-${lesson.name}-${point.title}`;
                                    const subIds = point.subPoints?.map((s, i) => `sub-${pointId}-${i}`) || [];

                                    return (
                                       <div key={pointId} className="ml-4">
                                          <Item
                                             id={pointId}
                                             title={point.title}
                                             text={point.text}
                                             open={isOpen(pointId)}
                                             onToggle={() => toggleItem(pointId, subIds)}
                                          />

                                          {isOpen(pointId) &&
                                             point.subPoints?.map((sub, index) => {
                                                const subId = `sub-${pointId}-${index}`;

                                                return (
                                                   <div key={subId} className="ml-4">
                                                      <Item
                                                         id={subId}
                                                         title={sub.title}
                                                         text={sub.text}
                                                         open={isOpen(subId)}
                                                         onToggle={() => toggleItem(subId)}
                                                      />
                                                   </div>
                                                );
                                             })}
                                       </div>
                                    );
                                 })}
                           </div>
                        );
                     })}
               </div>
            );
         })}
      </div>
   );
}

function Item({
   id,
   title,
   text,
   open,
   type,
   onToggle
}: {
   id: string;
   title: string;
   text?: string;
   open: boolean;
   type?: string;
   onToggle: () => void;
}) {
   return (
      <div
         className={clsx(
            "bg-surface w-full py-4 px-5 rounded-md border border-border transition-all duration-300 mb-2 title"
         )}
         data-set={type ? `${type}` : `Point`}
         key={id}
      >
         <div
            onClick={onToggle}
            className="flex justify-between items-center cursor-pointer"
         >
            <h2 className="font-bold text-lg">{title}</h2>

            <svg
               className={clsx(
                  "h-6 w-6 transition-transform duration-300",
                  open && "rotate-90"
               )}
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
            >
               {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
               ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
               )}
            </svg>
         </div>

         <div
            className={clsx(
               "overflow-hidden transition-all duration-300",
               open ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
            )}
         >
            {text && <p className="text-sm text-gray-400">{text}</p>}
         </div>
      </div>
   );
}

export default Subject;
