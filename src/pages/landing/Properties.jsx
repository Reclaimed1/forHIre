import Contactusbutton from "../../cmp/Contactusbutton"
export default function Properties() {
return (
    <div className="my-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-5">
        <div className="imagine1 bg-cover bg-center h-[30vh] w-full rounded-t-2xl md:h-[30vh] lg:h-[40vh] group relative ">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                <div className="text-start  ">
                <h1>Luxury Modern Villa</h1>
                <div className="relative flex flex-col items-start">
                    <p>locaton: Iyana-paja</p>
                    <p>price: $720,000</p>
                    <div className="absolute top-19 left-17">
                    <Contactusbutton />
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="imagine2 bg-cover bg-center h-[30vh] w-full rounded-t-2xl md:h-[30vh] lg:h-[40vh] group relative ">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                <div className="text-start  ">
                <h1>Luxury Modern Villa</h1>
                <div className="relative flex flex-col items-start">
                    <p>locaton: Kwara</p>
                    <p>price: $920,000</p>
                    <div className="absolute top-19 left-17">
                    <Contactusbutton />
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="imagine3 bg-cover bg-center h-[30vh] w-full rounded-t-2xl md:h-[30vh] lg:h-[40vh] group relative ">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                <div className="text-start  ">
                <h1>Luxury Modern Villa</h1>
                <div className="relative flex flex-col items-start">
                    <p>locaton: Ibadan</p>
                    <p>price: $720,000</p>
                    <div className="absolute top-19 left-17">
                    <Contactusbutton />
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    </div>
)
}