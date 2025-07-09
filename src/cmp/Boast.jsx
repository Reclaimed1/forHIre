
export default function Boast() {
    return(
        <div className="text-center text-[#486D37] my-7 ">
            <div className="grid grid-cols-2 px-3 border-b border-[#486D37] md:grid-cols-3 gap-5 py-3">
            <div className="border-r border-[#486D37]">
                <h1 className="text-3xl">70+</h1>
                <p className="text-sm">Various house models</p>
            </div>
            <div className="md:border-r border-[#486D37]">
                <h1 className="text-3xl">10+</h1>
                <p className="text-sm">convenience stores</p>
            </div>
            <div className="hidden md:block">
                <h1 className="text-3xl">5+</h1>
                <p className="text-sm">Nearby schools and educational institutions</p>
            </div>
            </div>

              <div className="grid grid-cols-2 px-3 border-[#486D37] md:grid-cols-3 gap-5 py-3">
            <div className="border-r border-[#486D37]">
                <h1 className="text-3xl">15+</h1>
                <p className="text-sm">Minute to city</p>
            </div>
            <div className="md:border-r border-[#486D37]">
                <h1 className="text-3xl">130+</h1>
                <p className="text-sm">Various house plant</p>
            </div>
            <div className="hidden md:block">
                <h1 className="text-3xl">19+</h1>
                <p className="text-sm">Nearby schools and educational institutions</p>
            </div>
            </div>
        </div>
    )
}