import { Link } from "react-router-dom"
export default function Sayhello(){
    return (
        <div >
            <div className="imagine4 mt-18 bg-cover bg-center h-[40vh] w-full relative rounded-t-xl md:h-[90vh] ">
             <div className="font-[Tektur] text-white px-3 py-3">
             <h1 className="text-4xl font-semibold">Say hello to brighter days together</h1>
             <p>indulge in the Ultimate Real Estate Experience</p>
             </div>
             <div className="absolute bottom-0 text-white px-3 py-3">
               <p className="text-sm">Join us in making your real estate dreams a reality.</p>
               <Link to="/contact">
                <button className="px-4 py-1.5 bg-[#B0DB9C] text-white rounded hover:bg-green-700 ">Contact Us</button>
            </Link>
             </div>
            </div>
        </div>
    )
}