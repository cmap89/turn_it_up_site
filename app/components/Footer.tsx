import SocialStrip from "./SocialStrip";
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";


export default function Footer () {
    return <footer className="flex flex-col items-center gap-4 pb-3 pt-8" >
        <div className="flex justify-evenly w-5/6" >
            <ul>
                <li>
                    <CiLocationOn/> Redding, CA
                </li>
                <li>
                    <FaPhone/> (945) 868-2935
                </li>
                <li>
                    <MdEmail/> [EMAIL HERE]
                </li>
            </ul>
            <div className="flex justify-around" >
                OPENING HOURS
                <br />
                Monday-Friday 4:00pm-9:00pm
                <br />
                Saturday 10:00am-9:00pm
            </div>
            <SocialStrip/>
        </div>

        <span> &copy; {`${new Date().getFullYear()}, Turn It Up Lessons`} </span>
    </footer>
}