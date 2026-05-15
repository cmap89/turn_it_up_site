'use client'

import Link from "next/link.js";
import { navItems, navItem } from "../data/navItems";

export default function Navbar () {
    return <nav className="flex justify-between items-center bg-transparent px-5 min-h-[12vh]" >
        <div> <Link href="/" >[TIUL LOGO]</Link></div>
        <ul className="flex gap-6 justify-evenly text-xl" >
                {
                navItems.map((item: navItem) => (
                    <li className="hover:text-white" key={item.id} > 
                        <Link href={`/${item.route}`} > 
                            {item.name} 
                        </Link>
                    </li>)
                    )
                }
        </ul>
    </nav>
};