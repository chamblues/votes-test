import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className={`main_nav flex text-white text-lg`}>
            <ul className="flex items-center">
                <li className="mr-5">
                    <Link href="#" className="">
                        <a>Past Trials</a>
                    </Link>
                </li>
                <li className="mr-5">
                    <Link href="#">
                        <a>How It Works</a>
                    </Link>
                </li>
                <li className="mr-5">
                    <Link href="#">
                        <a>Login / Sign Up</a>
                    </Link>
                </li>
            </ul>
            <Image src="/images/Search.svg" alt="search" width={36} height={36}></Image>

        </nav>
    )
}

export default Navbar