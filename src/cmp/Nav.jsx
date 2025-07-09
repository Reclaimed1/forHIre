import { useState } from "react"
import { Link } from "react-router-dom"
export default function Nav() {
    const [menue, setMenue] = useState(false)
    const des=menue ? 'block h-screen ' : 'hidden';
    const des1=menue ? 'block`':'hidden';
function handleMenue() {
    setMenue(!menue)
}
  return (
    <div className="sticky top-0 z-10 ">
        {/* <div className="flex justify-between bg-[#15312c] py-2 md:px-7">
        <div></div>
        <div className="flex justify-between text-white space-x-3 md:space-x-10">
            <div className="flex ">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#175046" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>01126112
</div>
<div className="flex">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#175046" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>contact@thedust.com
       </div>
        </div>
        <div className="flex space-x-2 md:space-x-5">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#175046" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#175046" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>   
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#175046" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube-icon lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
        </div>
        </div> */}
        <div className="flex justify-between bg-[#B0DB9C] relative px-4 py-3 md:px-18 ">
        <div>
            <img className="h-20 bg-[#B0DB9C]" src="logo.png" alt="" />
        </div>
   
        <div className={`bg-[#93C461] md:bg-[#B0DB9C] absolute top-0 right-0 w-40 shadow-xl/30 text-center md:flex md:relative md:right-0 md:top-0 md:w-full md:h-20 md:shadow-none transition-all duration-500 ease-in-out ${menue ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-20 pointer-events-none'} md:opacity-100 md:translate-x-0 md:pointer-events-auto`}>
            <div className="space-y-4 py-8 text-md my-3 md:flex md:space-x-10 ml-auto  ">
                <div className="md:flex text-xl space-y-5 text-start px-2 md:text-center md:space-x-20 md:mr-80 md:font-semibold md:text-xl md:text-white items-center gap-4">
                    <svg  className={`absolute right-3 transition-all top-3 block md:hidden ${des1}`} onClick={handleMenue} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>

                    <a className="block md:flex hover:underline" href="/">Home</a>
                    <a className="block md:flex hover:underline" href="/about">About Us</a>
                    <a className="block md:flex hover:underline" href="/loading">Property</a>
                    <a className="block md:flex hover:underline" href="#try">Services</a>
                    <div className="mt-4 md:mt-0 md:ml-8">
                         <Link to="/contact">
                <button className="px-4 py-1.5 bg-[#B0DB9C] text-white rounded hover:bg-green-700 transition-colors duration-300">Contact Us</button>
            </Link>
                    </div>
                </div>
        </div>
           </div>

         <div className="block md:hidden">
             <svg className={`lucide lucide-menu-icon lucide-menu mt-6 ${menue ? 'hidden' : 'block'}`} onClick={handleMenue} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16"/><path d="M4 18h16"/><path d="M4 6h16"/></svg>
        </div>
    </div>
   
    </div>
  )
}