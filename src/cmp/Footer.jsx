import Sayhello from "../cmp/Sayhello";
export default function Footer() {
  return (
    <footer className="">
        <Sayhello />
        <div className="bg-black text-white py-10 px-3 lg:px-20 w-full">
            <div className="grid grid-cols-1  md:grid-cols-3 gap-3 border-b pb-6 w-full">
           
            <div>
                <div className="font-bold pb-3">
                <h1>QUICK LINKS</h1>
                </div>
                <div className="flex-col flex space-y-1 text-md">
                    <a href="">Home</a>
                    <a href="">About Us</a>
                    <a href="">Services</a>
                    <a href="">Cities</a>
                </div>
            </div>
            <div className="">
                <div className="font-bold text-xl pb-3  ">
                <h1>SERVICES</h1>
                </div>
                <div className="flex-col flex  text-md space-y-1">
                    <p>House</p>
                    <p>Commercial</p>
                    <p>Office </p>
                    <p>Carpet</p>
                    <p>Window</p>
                </div>
            </div>
            <div>
                <div className="pb-3">
                <h1 className="font-bold">CONTACT US</h1>
                </div>
                <div className="flex ">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#70bd27" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg><span className="ml-2">08152611202</span>
                </div>
                <div className="hidden md:block">
                    contact@ecohome.com
                </div>
            </div>
           </div>

           <div className="justify-between flex text-sm py-4"> 
            <p>@2025 The Dust Details</p>
            <div className="flex space-x-3">
                <p className="hidden md:block">sitemap</p>
                <p className="hidden md:block">Accessiblity</p>
                <p>Terms & Condition</p>
                <p>Privacy Policy</p>
            </div>
           </div>
        </div>
    </footer>
  )
}