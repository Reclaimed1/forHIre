import { Link } from "react-router-dom";
import Boast from "../../cmp/Boast";

export default function Lowerbeforefooter(){
    return(
       <div className="py-12 md:px-40">
        <div className="grid grid-cols-1 md:grid-cols-2 px-3 gap-3">
<div className="space-y-3">
        <h1 className="text-2xl font-bold md:text-4xl">Your Trusted Partner In Real Estate Excellence</h1>
        <p className="">With decades of experience in the real estate market, 
        we are committed to providing exceptional service and 
        expertise to our clients, ensuring their needs are met
         with the highest level of professionalism.</p>
</div>
<div className="grid grid-cols-1 gap-2 text-[#486D37]">
<div className="bg-[#ECFAE5] px-3 space-y-3 py-7 flex flex-col justify-center rounded-lg ">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#486D37" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-dollar-sign-icon lucide-circle-dollar-sign"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
<h1 className="text-xl font-bold">Find Out You Can Afford</h1>
<p className="text-sm">We will help you understand your budget,giving you a clear understanding of what you can afford. </p>
</div>
<div className="bg-[#ECFAE5] px-3 space-y-3 py-7 flex flex-col justify-center rounded-lg ">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#486D37" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calculator-icon lucide-calculator"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>
<h1 className="text-xl font-bold">Find Out You Can Afford</h1>
<p className="text-sm">We will help you understand your budget,giving you a clear understanding of what you can afford. </p>
</div>
<div className="bg-[#ECFAE5] px-3 space-y-3 py-7 flex flex-col justify-center rounded-lg ">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#486D37" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-coins-icon lucide-coins"><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/></svg>
<h1 className="text-xl font-bold">Find Out You Can Afford</h1>
<p className="text-sm">We will help you understand your budget,giving you a clear understanding of what you can afford. </p>
</div>
 <Link to="/contact">
                <button className="px-4 py-1.5 bg-[#B0DB9C] text-white rounded hover:bg-green-700 w-full md:text-xl">Contact Us</button>
            </Link>
</div>
        </div>
        <Boast />
    
       </div>
    )
}