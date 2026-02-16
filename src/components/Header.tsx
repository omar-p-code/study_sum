// src/components/Header.tsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { headerLinks } from "../constants";

function Header() {
   const [isOpen, setIsOpen] = useState(false);
   const location = useLocation();

   return (
      <header className="bg-surface border-b border-border shadow-sm sticky top-0 z-50 w-dvw">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">

               {/* Logo */}
               <Link
                  to="/"
                  className="text-xl font-bold flex items-center justify-start gap-3 text-text hover:text-primary transition-colors"
               >
                  <img src="/logo.svg" alt="logo" className="max-w-14 max-h-14" />
                  <span>STUDYSUM</span>
               </Link>

               {/* Desktop Navigation */}
               <nav className="hidden md:flex items-center gap-6">
                  {headerLinks.map((link) => {
                     const isActive = location.pathname === link.path;

                     return (
                        <Link
                           key={link.path}
                           to={link.path}
                           className={`
                  relative px-2 py-1 text-sm font-medium transition-colors
                  ${isActive
                                 ? "text-primary"
                                 : "text-text-secondary hover:text-primary"
                              }
                  `}
                        >
                           {link.name}

                           {/* Active underline */}
                           {isActive && (
                              <span className="absolute left-0 -bottom-2 h-0.5 w-full bg-primary rounded-full" />
                           )}
                        </Link>
                     );
                  })}
               </nav>

               {/* Mobile Button */}
               <div className="md:hidden">
                  <button
                     type="button"
                     className="inline-flex items-center justify-center p-2 rounded-lg
                        text-text-secondary hover:text-primary
                        hover:bg-surface-hover
                        focus:outline-none focus:ring-2 focus:ring-primary/30
                        transition cursor-pointer"
                     onClick={() => setIsOpen(!isOpen)}
                     aria-expanded={isOpen}
                  >
                     <svg
                        className={`h-6 w-6 transition-transform duration-300 ${isOpen ? "rotate-90" : ""
                           }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        {isOpen ? (
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                           />
                        ) : (
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 6h16M4 12h16M4 18h16"
                           />
                        )}
                     </svg>
                  </button>
               </div>
            </div>
         </div>

         {/* Mobile Menu */}
         <div
            className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96" : "max-h-0"
               }`}
         >
            <div className="px-4 py-3 space-y-2 bg-surface border-t border-border shadow-sm">
               {headerLinks.map((link) => {
                  const isActive = location.pathname === link.path;

                  return (
                     <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`
                  block px-3 py-2 rounded-lg text-sm font-medium transition
                  ${isActive
                              ? "bg-primary/10 text-primary"
                              : "text-text-secondary hover:bg-surface-hover hover:text-primary"
                           }
               `}
                     >
                        {link.name}
                     </Link>
                  );
               })}
            </div>
         </div>
      </header>
   );
}

export default Header;
