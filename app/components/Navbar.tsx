'use client'

interface NavbarProps {
    navList: string,
    navItem:string,
    navWrapper:string,
}

export default function Navbar ({
    navList,
    navItem,
    navWrapper,
}: NavbarProps) {
    return <nav className={navWrapper} >
        <ul className={navList} >
            <li className={navItem} >Home</li>
            <li className={navItem} >About</li>
            <li className={navItem} >Instructor</li>
        </ul>
    </nav>
}