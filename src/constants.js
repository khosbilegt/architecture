import { 
     Archicad, Enscape, Revit,
     Photoshop, Procreate, Autocad,
     ThreeDs, Vray
} from './res/images';

import { GrLocation, GrMailOption, GrFacebook } from 'react-icons/gr';
import { HiOutlinePhone, HiMail, HiLocationMarker } from 'react-icons/hi';
import { SiTelegram } from 'react-icons/si';

export const skills_row1 = [
     {
          name: "Graphisoft Archicad",
          percentage: "80%",
          img: Archicad
     },
     {
          name: "Enscape 3D",
          percentage: "80%",
          img: Enscape
     },
     {
          name: "Autodesk Revit",
          percentage: "70%",
          img: Revit
     },
     {
          name: "Adobe Photoshop",
          percentage: "70%",
          img: Photoshop
     }
]

export const skills_row2 = [
     {
          name: "Procreate",
          percentage: "70%",
          img: Procreate
     },
     {
          name: "Autodesk AutoCAD",
          percentage: "60%",
          img: Autocad
     },
     {
          name: "Autodesk 3Ds Max",
          percentage: "50%",
          img: ThreeDs
     },
     {
          name: "Chaos V-Ray",
          percentage: "40%",
          img: Vray
     },
]

export const navLinks = [
     {
          mon: "Танилцуулга",
          rus: "About",
          link: "To hell"
     },
     {
          mon: "Ур Чадвар",
          rus: "Skills",
          link: "To hell"
     },
     {
          mon: "Проектууд",
          rus: "Projects",
          link: "To hell"
     },
     {
          mon: "Холбогдох",
          rus: "Contact",
          link: "To hell"
     }
]

export const contact = [
     {
          text: "Ulaanbaatar, Mongolia",
          icon: HiLocationMarker
     },
     {
          text: "SANCHIRDUL@GMAIL.COM",
          icon: HiMail
     },
     {
          text: "+976 80369023",
          icon: HiOutlinePhone
     }
]

export const social = [
     {
          text: "Д. Санчир",
          icon: GrFacebook,
          link: "https://www.facebook.com/sanchirr.dul?mibextid=ZbWKwL"
     },
     {
          text: "@SanchirD",
          icon: SiTelegram,
          link: "https://telegram.org/tour/groups"
     }
]