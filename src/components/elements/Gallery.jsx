import React from 'react';

const shoeData = [
    {
        id: 1,
        lines: [
            'Crafted with century‑old techniques',
            'Timeless silhouettes reimagined',
            'Wear tradition with every step',
        ],
    },
    {
        id: 2,
        lines: [
            'Sleek lines meet street‑ready grit',
            'Bold colors for city nights',
            'Adventure‑proof comfort',
        ],
    },
    {
        id: 3,
        lines: [
            'Understated elegance defined',
            'Pure forms, zero distractions',
            'Less is endlessly more',
        ],
    },
    {
        id: 4,
        lines: [
            'Hand‑stitched leather panels',
            'Details that tell a story',
            'Born for the connoisseur',
        ],
    },
    {
        id: 5,
        lines: [
            'Performance DNA, luxury finish',
            'Breathable mesh meets soft suede',
            'Elevate your active every day',
        ],
    },
    {
        id: 6,
        lines: [
            'Vintage vibes, modern fit',
            'Nostalgic palettes remastered',
            'Old‑school cool, new‑school comfort',
        ],
    },
    {
        id: 7,
        lines: [
            'Sustainable materials inside out',
            'Vegan-friendly, planet-first design',
            'Style that leaves no footprint',
        ],
    },
    {
        id: 8,
        lines: [
            'Boundary‑pushing silhouettes',
            'Futuristic accents take center stage',
            'For those who dare to stand out',
        ],
    },
    {
        id: 9,
        lines: [
            'Fresh drops for every season',
            'Trend‑setting color stories',
            'Your next must-have rotation',
        ],
    },
];

const Gallery = () => {
    return (
        <section className="my-48">
            <div className="flex flex-col gap-0 text-center mb-24 col-span-3">
                <h1 className="font-bold">GET LOST IN THE WORLD OF SHOES</h1>
                <p className="font-extralight italic">you can't get it out of your head</p>
            </div>

            <div className="grid grid-cols-3 gap-x-16 gap-y-12">
                {shoeData.map(({ id, lines }) => (
                    <div key={id} className="relative shoe group w-full aspect-square">
                        <div
                            className={`absolute  left-0 top-0 origin-center shoe-card grayscale-100 shoe-${id} group-hover:grayscale-25 group-hover:blur-[3px] transition-all duration-300`}
                        />
                        <div className="absolute shoe-text w-sm font-light opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:backdrop-blur-2xl text-white">
                            {lines.map((text, idx) => (
                                <div key={idx}>{text}</div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
