export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex items-center justify-center text-center h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        >
            <div className="bg-hero absolute top-0 left-0 w-full h-full z-0"/>
            {/* Overlay */}
            {/*<div className="absolute inset-0 bg-black/50"></div>*/}
            <div className="container relative z-10 text-text">
                <h1 className="text-5xl font-extrabold mb-4 text-shadow-lg">
                    Wear What Fits Your Style
                </h1>
                <p className="text-lg mb-8 max-w-prose mx-auto">
                    Find out the most unique and comfortable shoes.
                </p>
                <a
                    href="#features"
                    className="inline-block px-8 py-3 rounded-full text-white bg-primary hover:bg-primary__darker transition duration-300 text-lg"
                >
                    2025 SUMMER COLLECTION
                </a>
            </div>
        </section>
    );
}
