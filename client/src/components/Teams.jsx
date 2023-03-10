import Celia from '../assets/Celia.png'
import Antonia from '../assets/Antonia.jpeg'
import Enrirque from '../assets/Enrirque.png'



import { useEffect, useState } from "react";
import Translation from './TranslationEngToSpan/Data.json';

export const Teams = (props) => {

  const {language} = props 
  // const [language,setLanguage]=useState("spanish")
  const [content,setContent]=useState({})

  useEffect(()=>{
      if(language==="english"){
          setContent(Translation.english)
      }else if(language==="spanish"){
          setContent(Translation.spanish)
      }

  }, 
  [language])

return (
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
<div>
<p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-ally8 uppercase rounded-full bg-teal-accent-400">
{content.translate13}
</p>
</div>
<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-ally9 sm:text-4xl md:mx-auto">
<span className="relative inline-block">
<svg
viewBox="0 0 52 24"
fill="currentColor"
className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
>

<rect
fill="url(#247432cb-6e6c-4bec-9766-564ed7c230dc)"
width="52"
height="24"
/>
</svg>
<span className="relative text-ally8">{content.translate14}</span>
</span>{' '}
{content.translate15}
</h2>
<p className="text-base text-ally8 md:text-lg">
{content.translate16}
</p>
</div>
<div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
<div className="flex">
<img
className="object-cover w-20 h-20 mr-4 rounded-full shadow"
src={Celia}
alt="Person"
/>
<div className="flex flex-col justify-center">
<p className="text-lg font-bold text-ally3">Dr. Celia Mercedes</p>
<p className="text-sm text-ally8">Obstetrician/Gynecologist (OBGYNs)
</p>
</div>
</div>
<div className="flex">
<img
className="object-cover w-20 h-20 mr-4 rounded-full shadow"
src={Antonia}
alt="Person"
/>
<div className="flex flex-col justify-center">
<p className="text-lg font-bold text-ally3">
 Dr. Antonia  Novello
</p>
<p className="text-sm text-ally8">Pulmonologist

</p>
</div>
</div>
<div className="flex">
<img
className="object-cover w-20 h-20 mr-4 rounded-full shadow"
src={Enrirque}
alt="Person"
/>
<div className="flex flex-col justify-center">
<p className="text-lg font-bold text-ally3">Dr. Enrique Gonz??lez</p>
<p className="text-sm text-ally8">Gastroenterologist</p>
</div>
</div>
<div className="flex">
<img
className="object-cover w-20 h-20 mr-4 rounded-full shadow"
src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
alt="Person"
/>
<div className="flex flex-col justify-center">
<p className="text-lg font-bold text-ally3">Dr. Maria Montoya</p>
<p className="text-sm text-ally8">Pediatrician</p>
</div>
</div>
<div className="flex">
<img
className="object-cover w-20 h-20 mr-4 rounded-full shadow"
src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
alt="Person"
/>
<div className="flex flex-col justify-center">
<p className="text-lg font-bold text-ally3">Dr. Francisco Mart??nez</p>
<p className="text-sm text-ally8">Endocrinologist</p>
</div>
</div>
<div className="flex">
<img
className="object-cover w-20 h-20 mr-4 rounded-full shadow"
src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
alt="Person"
/>
<div className="flex flex-col justify-center">
<p className="text-lg font-bold text-ally3">Dr. Mateo Ramirez</p>
<p className="text-sm text-ally8">Neurologist</p>
</div>
</div>
<div className="flex">
<img
className="object-cover w-20 h-20 mr-4 rounded-full shadow"
src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
alt="Person"
/>
<div className="flex flex-col justify-center">
<p className="text-lg font-bold text-ally3">Dr. Araceli L??pez</p>
<p className="text-sm text-ally8">Nephrologist</p>
</div>
</div>
<div className="flex">
<img
className="object-cover w-20 h-20 mr-4 rounded-full shadow"
src="https://images.pexels.com/photos/3931553/pexels-photo-3931553.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
alt="Person"
/>
<div className="flex flex-col justify-center">
<p className="text-lg font-bold text-ally3">Dr. Jose Rodriguez</p>
<p className="text-sm text-ally8">Cardiologist</p>
</div>
</div>
<div className="flex">
<img
className="object-cover w-20 h-20 mr-4 rounded-full shadow"
src="https://images.pexels.com/photos/3783255/pexels-photo-3783255.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
alt="Person"
/>
<div className="flex flex-col justify-center">
<p className="text-lg font-bold text-ally3">Dr. Gabriel Gonz??lez </p>
<p className="text-sm text-ally8">Oncologist</p>
</div>
</div>
</div>
</div>
);
};

export default Teams;