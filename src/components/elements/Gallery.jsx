import React from 'react'

const Gallery = () => {
    return (
        <section className="my-48">
            <div className="flex flex-col gap-0 text-center mb-24">
                <h1 className="font-bold">
                    GET LOST IN THE WORLD OF SHOES
                </h1>
                <p className='font-extralight italic'>you can't get it out of your head</p>
            </div>
            <div className="grid grid-cols-3 gap-x-16 gap-y-12 ">
                <img src="/shoe-1.avif" alt="shoe-1" className="shoe shoe-1"/><img src="/shoe-2.avif" alt="shoe-2"
                                                                                   className="shoe shoe-2"/><img
                src="/shoe-3.avif"
                alt="shoe-3"
                className="shoe shoe-3"/><img
                src="/shoe-4.avif" alt="shoe-4" className="shoe shoe-4"/><img src="/shoe-5.avif" alt="shoe-5"
                                                                              className="shoe shoe-5"/><img
                src="/shoe-6.avif"
                alt="shoe-6"
                className="shoe shoe-6"/><img
                src="/shoe-7.avif" alt="shoe-7" className="shoe shoe-7"/><img src="/shoe-8.avif" alt="shoe-8"
                                                                              className="shoe shoe-8"/><img
                src="/shoe-9.avif"
                alt="shoe-9"
                className="shoe shoe-9"/>
            </div>
        </section>
    )
}
export default Gallery
