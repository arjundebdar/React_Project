export default function Herosection() {
    const banner = "./banner-stack.png"
    return (
        <section className="w-full bg-white mx-auto">
            <div className="mx-auto flex min-h-[450px] max-w-[1110px] flex-col items-center justify-between px-5 py-10 sm:px-6 sm:py-12 md:flex-row md:py-0">
                {/* Left Content */}
                <div className="w-full text-center md:w-[55%] md:text-left">
                    <h1 className="text-[36px] sm:text-[50px] lg:text-[56px] ">
                        Build Your Ideal <br />
                        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-900 bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>
                    <p className="mx-auto mt-5 max-w-[540px] text-[15px] leading-[1.6] text-slate-600 sm:text-[16px] md:mx-0 md:mt-6 md:text-[17px]">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that
                        fits your next project.
                    </p>
                    {/* Buttons */}
                    <div className="mt-8 flex items-center justify-center gap-3 md:mt-12 md:justify-start">
                        <button className="rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-2.5 text-[12px] font-semibold text-white transition hover:opacity-90 sm:px-5 sm:text-[13px] cursor-pointer ">Explore Technologies</button>

                        <button className="rounded-lg border border-slate-200 bg-white px-6 py-2.5 text-[12px] font- text-slate-600 transition hover:bg-slate-50 
                        sm:px-[43px] sm:text-[13px]g cursor-pointer">Learn More</button>
                    </div>
                </div>
                {/* Right Image */}
                <div className="mt-10 flex w-full justify-center md:mt-0 md:w-[45%] md:justify-end">
                    <img
                        src={banner}
                        alt="Development Stack"
                        className="w-[1000px] object-contain sm:w-[270px]
                        md:w-[300px] lg:w-[500px]"
                    />
                </div>
            </div>
        </section>
    )
}