import React from 'react'
import Navbar from './Navbar'
import classes from './Layout.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Layout = (props) => {
	return (
		<>
			<header className={`section_header ${classes.bg_gradient} py-5 xl:py-12 w-full z-10 fixed`}>
				<div className="container">
					<div className="flex justify-between items-center">
						<div className="logo text-2xl xl:text-4xl text-white">
							Rule of thumb.
						</div>
						<div className="desktop_menu hidden xl:flex">
							<Navbar />
						</div>
						<div className="mobile_menu xl:hidden">
							<Image src="/images/Shape.svg" alt="menu" width={25} height={20}></Image>
						</div>
					</div>
				</div>

			</header>

			<main className="main_section">
				{props.children}
			</main>

			<footer className="footer_section py-12">
				<div className="container">
					<div className="flex justify-between ">
						<div className="pages w-3/5 xl:w-2/5">
							<ul className="flex justify-between text-base md:text-lg flex-col md:flex-row">
								<li><Link href=""><a>Terms and Conditions</a></Link></li>
								<li><Link href=""><a>Privacy Policy</a></Link></li>
								<li><Link href=""><a>Contact Us</a></Link></li>
							</ul>
						</div>
						<div className="social flex flex-col md:flex-row">
							<p className="mr-3">Follow us</p>
							<ul className="flex">
								<li className="mr-3"><a href=""><Image src="/images/facebook.png" alt="facebook" width={24} height={24}/></a></li>
								<li><a href=""><Image src="/images/twitter.png" alt="facebook" width={26} height={22}/></a></li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Layout