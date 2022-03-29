import React from 'react'
import classes from './Featured.module.css'
import ThumbUp from './UI/ThumbUp'
import ThumbDown from './UI/ThumbDown'
import Image from 'next/image'

const Featured = () => {
	return (
		<section className={`section_featured text-white relative`} >
			<div className={`${classes.bg_featured} relative`}>
				<Image src="/images/pope-francis.jpg"
					layout="fill" alt="Pope Francis" objectFit='cover'
					className={`${classes.hero_image}`}
				/>
				<Image src="/images/pope-francis-xs.png"
					layout="fill" alt="Pope Francis" objectFit='cover'
					className={`${classes.hero_image} ${classes.hero_image_xs}`}
				/>

				<div className="container relative">
					<div className={`${classes.bg_filter} backdrop-blur-md w-3/5 md:w-1/2 absolute z-50 top-14 md:top-20 xl:top-40`} >
						<div className="px-4 py-4 md:px-8 md:pt-3 md:pb-5 xl:pb-8">
							<h1 className={`${classes.title} mb-5 xl:mb-9`}><span className="font-light text-xs xl:text-lg">What’s your opinion on</span><br />
								Pope Francis?</h1>
							<p className={`${classes.excerpt} text-base leading-5  xl:text-2xl xl:leading-7 font-light`}>
								He’s talking tough on clergy sexual abuse, or is he just another pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)
							</p>

							<div className="more_info my-4 hidden sm:block">
								<a href="http://wikipedia.com" target="_blank" rel="noreferrer">
									<Image src="/images/wikipedia.svg" width={21} height={15} alt="Wikipedia" />
									<span className="font-thin text-sm xl:text-base underline align-top ml-1">More information</span>
								</a>
							</div>

							<strong className={`${classes.final_question}`}>What’s Your Veredict?</strong>
						</div>
						<div className="flex">
							<ThumbUp className="w-1/2 py-1 md:py-2 xl:py-6" width={16} height={16} />
							<ThumbDown className="w-1/2 py-1 md:py-2 xl:py-6" width={16} height={16} />
						</div>

					</div>
				</div>
			</div>

			<div className="flex absolute bottom-0 w-full font-light items-center">
				<div className={`${classes.left_bar} w-1/3 text-right pr-5 relative text-xs md:text-base xl:text-2xl`}>CLOSING IN</div>
				<div className={`${classes.right_bar} w-full text-left pl-7 color_black text-lg md:text-2xl xl:text-4xl`}><strong>22</strong> days</div>
			</div>
		</section>
	)
}

export default Featured