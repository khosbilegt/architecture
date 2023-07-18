import { 
     Archicad, Enscape, Revit,
     Photoshop, Procreate, Autocad,
     ThreeDs, Vray,
     Project1_Default, Project1_Expanded,
     Project2_Default, Project2_Expanded,
     Project3_Default, Project3_Expanded
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

export const projects = [
     {
          small: Project1_Default,
          large: Project1_Expanded,
          text: "Lorem ipsum",
          expanded_img: Project1_Expanded,
          expanded_text: "Lorem ipsum dolores"
     },
     {
          small: Project2_Default,
          large: Project2_Expanded,
          text: "Lorem ipsum",
          expanded_img: Project1_Expanded,
          expanded_text: "Lorem ipsum dolores"
     },
     {
          small: Project3_Default,
          large: Project3_Expanded,
          text: "Lorem ipsum",
          expanded_img: Project1_Expanded,
          expanded_text: "Lorem ipsum dolores"
     },
     {
          small: Project1_Default,
          large: Project1_Expanded,
          text: "Lorem ipsum",
          expanded_img: Project1_Expanded,
          expanded_text: "Lorem ipsum dolores"
     }
]

export const quote = {
     mon: [
          "Миний портфолиод тавтай морилно уу!",
          "Та бүхэнд өөрийн одоогоор төлөвлөсөн цөөн хэдэн проектоо танилцуулахад таатай байна.",
          "Суралцаж буй хугацаандаа би дизайны зарчим, орон зайн баримжаа, гар зургийн болон мэргэжилийн программууд дээр ажиллах чадварыг эзэмшсэн бөгөөд цаашид Монголын түүхэн барилга архитектурыг гүнзгий судлахаар төлөвлөж байгаа.",
          "Үндэсний соёл уламжилал, хэв шинжийг агуулсан, тав тухтай, утга төгөлдөр үзэмжит загваруудыг бий болгох нь миний эрхэм зорилго билээ. Та бүхнийг миний портфолиотой танилцаж миний архитектурын салбарт сэтгэл зүрхээ зориулах үйл хэрэгт маань хамтран ажиллахыг урьж байна!",
          "Зочилсонд баярлалаа, санал болгох боломжит хамтын ажиллагаа, боломжуудыг тэсэн ядан хүлээж байя.",
          "Хүндэтгэсэн Д.Санчир"
     ]
}


