import { 
     Archicad, Enscape, Revit,
     Photoshop, Procreate, Autocad,
     ThreeDs, Vray
} from './res/images';

import { GrFacebook } from 'react-icons/gr';
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
          name: "Chaos V-Ray",
          percentage: "40%",
          img: Vray
     },
]

export const skills_row2 = [
     {
          name: "Procreate",
          percentage: "70%",
          img: Procreate
     },
     {
          name: "Adobe Photoshop",
          percentage: "70%",
          img: Photoshop
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
]

export const skills_text = {
     en: "I have diligently pursued a range of programs, attaining varying degrees of proficiency in each. The software I'm most familiar with are the following.",
     mon: "Би их сургуульд сурах болон хувиараа дадлага хийх хугацаандаа зураг болон рендерлэлтийн дараах программуудыг тодорхой хэмжээнд эзэмшсэн."
}

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
          link: "https://telegram.org/"
     }
]