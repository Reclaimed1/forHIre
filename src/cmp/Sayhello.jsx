import { Link } from "react-router-dom"
export default function Sayhello(){
    return (
        <div >
            <div className="imagine4 mt-18 bg-cover bg-center h-[40vh] w-full relative rounded-t-xl md:h-[90vh] ">
             <div className="font-[Tektur] text-white px-3 py-3 md:px-20 md:py-20">
             <h1 className="text-4xl font-semibold md:text-6xl">Say hello to brighter days together</h1>
             <p>Indulge in the Ultimate Real Estate Experience</p>
             </div>
             <div className="absolute bottom-0 text-white px-3 py-3">
               <p className="text-sm md:text-lg">Join us in making your real estate dreams a reality.</p>
               <Link to="/contact">
                <button className="px-4 py-1 bg-[#B0DB9C] text-white rounded hover:bg-green-700 md:px-7 md:py-1.5">Contact Us</button>
            </Link>
             </div>
            </div>
        </div>
    )
}