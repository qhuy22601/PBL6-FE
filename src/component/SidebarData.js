import {React, useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

const click =() =>{
  localStorage.removeItem("Token");
  localStorage.removeItem("Email");
  localStorage.removeItem("User");
}

export const SidebarData = [
  
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  // {
  //   title: 'Main Page',
  //   path: '/mainpage',
  //   icon: <IoIcons.IoIosPaper />,
  //   cName: 'nav-text'
  // },
  {
    title: 'Cart',
    path: '/cart',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Profile',
    path: '/user',
    icon: <IoIcons.IoMdPeople />,
    // onClick: {check},
    cName: 'nav-text'
  },
  {
    title: 'Log Out',
    path: '/',
    onclick: click(),
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  }
//   {
//     title: 'Support',
//     path: '/support',
//     icon: <IoIcons.IoMdHelpCircle />,
//     cName: 'nav-text'
//   }
];