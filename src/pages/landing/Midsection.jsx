import { useRef, useEffect, useState } from "react"
import Properties from "./properties";
export default function Midsection() {
    const propRef = useRef(null)
    const [show, setShow] = useState(false)
    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setShow(true)
            },
            { threshold: 0.2 }
        )
        if (propRef.current) observer.observe(propRef.current)
        return () => { if (propRef.current) observer.unobserve(propRef.current) }
    }, [])
    return(
        <div id="try" className="py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 ">
                <h1 className="text-[#486D37] text-2xl font-[Roboto]">Handpicked Properties</h1>
                <p className="font-[Tektur] text-[#486D37] text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#486D37" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                Browse our exclusive selection of top-rated properties. From modern apartments
                in the city to spacious family homes in the subhurbs, we have something
                to suit every lifestyle and budget.</p>
            </div>
            <div ref={propRef} className={`transition-all duration-700 ease-out ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <Properties />
            </div>
        </div>
    )
}