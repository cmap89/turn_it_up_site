'use client'

import Link from "next/link.js";
import { navItems, navItem } from "../data/navItems";

interface NavbarProps {
    navList: string,
    navWrapper:string,
};

export default function Navbar ({
    navList,
    navWrapper,
}: NavbarProps) {
    return <nav className={navWrapper} >
        <ul className={navList} >
                {
                navItems.map((item: navItem) => (
                    <li key={item.id} > 
                        <Link href={`/${item.route}`} > 
                            {item.name} 
                        </Link>
                    </li>)
                    )
                }
        </ul>
    </nav>
};