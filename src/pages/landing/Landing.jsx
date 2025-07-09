import { useState, useEffect } from "react"
import Nav from "../../cmp/Nav"
import Contactusbutton from "../../cmp/Contactusbutton"
import Textonpicturetop from "./Textonpicturetop"
import Midsection from "./Midsection"
import Lowerbeforefooter from "./Lowerbeforefooter"
import Footer from "../../cmp/Footer"
export default function Landing() {
  const [show, setShow] = useState(false)
  const [showContact, setShowContact] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true)
      setTimeout(() => setShowContact(true), 700) 
    }, 2000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <div>
      <div className="bg-[url(bgimglanding.jpg)] bg-cover bg-center h-[70vh]">
        <Nav />
        <div className={`transition-all duration-700 ease-out ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}> 
          <Textonpicturetop />
        </div>
        <div className={` absolute top-85 right-10 transition-all duration-700 ease-out ${showContact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Contactusbutton />
        </div>
      </div>
      <Midsection />
      <Lowerbeforefooter />
      <Footer />
    </div>
  )
}