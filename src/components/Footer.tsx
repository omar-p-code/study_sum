import { Link, useLocation } from "react-router-dom";
import { contactInfo, footerLinks, about } from "../constants";
import clsx from "clsx";

function Footer() {
   const location = useLocation()
   return (
      <footer id='footer' className={clsx('bg-surface border-t border-border py-5 px-10 flex justify-center flex-wrap items-center gap-10')}>
         <div className="rounded-full max-w-14 max-h-14 flex flex-col justify-center items-center gap-1">
            <img src="/logo.svg" alt="logo" />
            <h2 className="font-extrabold text-lg">STUDYSUM</h2>
         </div>

         <ul className={clsx('text-text min-w-36 border-border border-l pl-10 h-full')}>
            {footerLinks.map(link => {
               const isActive = location.pathname === link.path
               return (
                  <li>
                     <Link
                        key={link.path}
                        to={link.path}
                        className={clsx('hover:font-extrabold transition-all duration-100', isActive && 'font-extrabold text-text-secondary')}
                     >
                        {link.name}
                     </Link>
                  </li>
               )
            }
            )}
         </ul>

         <div className="flex flex-col justify-center items-start gap-1 border-border border-l pl-10 text-text h-full text-text-secondary min-w-[30vw]">
            {contactInfo.email && <div>Email: {contactInfo.email.join(' | ')}</div>}
            {contactInfo.whatsapp && <div>Whatsapp: {contactInfo.whatsapp.join(' | ')}</div>}
            {contactInfo.phone && <div>Phone: {contactInfo.phone.join(' | ')}</div>}
         </div>

         <div className="flex flex-col justify-center items-start gap-1 border-border border-l pl-10 text-text h-full text-text-muted max-w-[30vw]">
            {about.about}            
         </div>
      </footer>
   )
}

export default Footer