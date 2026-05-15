'use client'

import Link from "next/link.js";
import { navItems, navItem } from "../data/navItems";

export default function Navbar () {
    return <nav className="flex flex-col items-center bg-transparent" >
        <ul className="flex gap-9 justify-evenly w-1/2 text-xl" >
                {
                navItems.map((item: navItem) => (
                    <li className="hover:text-amber-50 hover:-translate-y-1" key={item.id} > 
                        <Link href={`/${item.route}`} > 
                            {item.name} 
                        </Link>
                    </li>)
                    )
                }
        </ul>
    </nav>
};