import classes from './Referred.module.css'

const Referred = () => {
    return (
        <section className="section_referred mt-6 xl:mt-9">
            <div className="container">
                <div className={`${classes.box_referred} flex flex-col md:flex-row w-full px-2 xl:px-6 py-4 items-center`}>
                    <h3 className={`${classes.title} w-full md:w-2/3`}>Is there anyone else you would want us to add?</h3>
                    <button className={`${classes.btn_referrer} md:w-1/3 border-2 border-solid border-black py-2 xl:py-3 px-12 whitespace-nowrap`}>Submit a name</button>
                </div>     
            </div>
        </section>

    )
}

export default Referred