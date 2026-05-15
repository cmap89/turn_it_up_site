import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



export default function SocialStrip (){
    return (
        <div className="flex items-start" >
            <Link className="h-fit" href={"https://www.facebook.com/Turnitupguitar"} target="blank" ><FaFacebookF className="w-10 h-6" /></Link>
            <Link className="h-fit" href={"https://www.instagram.com/turnitupguitar/"} target="blank" ><FaInstagram className="w-10 h-6" /></Link>
        </div>
    )
}