import { Link } from "react-router-dom";

export default function Contactusbutton() {
    return (
        <div className=" transform -translate-x-1/2">
            <Link to="/contact">
                <button className="md:px-9 px-4 py-1.5 bg-[#B0DB9C] text-white rounded hover:bg-green-700 transition-colors duration-300">Contact Us<span className="hidden md:inline"> Today</span></button>
            </Link>
        </div>
    )
}