import React from 'react'
import { Link } from 'react-router-dom'

import myProjects from '../media/images/icos/myProjects.svg'
import myContacts from '../media/images/icos/myContacts.svg'
import aboutMe from '../media/images/icos/aboutMe.svg'

export function ProjectsButton({ text }) {
   return (
      <Link className="topRight topRight_home" to="/Projects">
         {text.projects}
      </Link>
   )
}

export function HomeButton({ text, id }) {
   return (
      <Link id={id} className="topRight topRight_projects" to="/">
         {text}
      </Link>
   )
}

export function LangButtons({ text, props }) {
   return (
      <div className="langContainer">
         <div className="lang">
            <span
               className={text.active === 'en' ? 'en active' : 'en'}
               onClick={() => props.changeLangToEn()}
            >
               En
            </span>
            <span
               className={text.active === 'ru' ? 'ru active' : 'ru'}
               onClick={() => props.changeLangToRu()}
            >
               Ru
            </span>
         </div>
      </div>
   )
}

export function MenuButton({
   isNavShownClass,
   menuIconClass,
   toggleMenuIconClass
}) {
   return (
      <div className="menuContainer">
         <div className="menuIcon">
            <button
               className={menuIconClass}
               onClick={() => toggleMenuIconClass()}
            >
               <span />
            </button>
         </div>

         <div className={isNavShownClass}>
            <ul>
               <li>
                  <Link to="/aboutMe">
                     <img src={aboutMe} alt="About Me" />
                  </Link>
                  <span>About</span>
               </li>

               <li>
                  <Link to="/contacts">
                     <img src={myContacts} alt="My Contacts" />
                  </Link>
                  <span> Contacts </span>
               </li>

               <li>
                  <Link to="/projects">
                     <img src={myProjects} alt="My Projects" />
                  </Link>
                  <span> My Work </span>
               </li>
            </ul>
         </div>
      </div>
   )
}
