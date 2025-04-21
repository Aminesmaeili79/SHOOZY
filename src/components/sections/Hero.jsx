import React from "react";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex items-center justify-center text-center h-screen bg-cover bg-center"
            // style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        >
            <div className="absolute opacity-35 w-full h-[100vh] grid hero-grid grid-cols-4 grid-rows-4">
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell items-center justify-center">FIND OUT OUR LATEST COLLECTIONS</div>
                <div className="grid-cell"></div>
                <div className="relative grid-cell">
                    <button className="absolute flex gap-1 left-0 top-[20%] translate-y-[-50%] translate-x-[-50%] animate-bounce">SCROLL TO LEARN ABOUT US <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"/>
</svg>

                    </span></button>
                </div>
                <div className="grid-cell"></div>
            </div>
            {/*<div className="bg-hero absolute top-0 left-0 w-full h-full z-0"/>*/}
            {/*/!* Overlay *!/*/}
            {/*/!*<div className="absolute inset-0 bg-black/50"></div>*!/*/}
            {/*<div className="container relative z-10 text-text">*/}
            {/*    <h1 className="text-5xl font-extrabold mb-4 text-shadow-lg">*/}
            {/*        Wear What Fits Your Style*/}
            {/*    </h1>*/}
            {/*    <p className="text-lg mb-8 max-w-prose mx-auto">*/}
            {/*        Find out the most unique and comfortable shoes.*/}
            {/*    </p>*/}
            {/*    <a*/}
            {/*        href="#features"*/}
            {/*        className="inline-block px-8 py-3 rounded-full text-white bg-primary hover:bg-primary__darker transition duration-300 text-lg"*/}
            {/*    >*/}
            {/*        2025 SUMMER COLLECTION*/}
            {/*    </a>*/}
            {/*</div>*/}
            <div className="relative flex justify-items-center items-center pb-36">
               <h1 className="absolute left-[50%] translate-x-[-75%] text-[16rem] font-light">SHOOZY</h1>
                <div className="absolute hero-img w-6xl h-132 translate-x-[-20%]"></div>
            </div>
        </section>
    );
}
