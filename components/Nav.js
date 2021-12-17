import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function Nav() {
    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, [])

    return (
        <div className={`fixed top-0 p-[20px] w-full h-14 z-10 transition-all ease-in duration-500 ${show && 'bg-black'}`}>
            <div className="flex justify-between">
                <img
                    className="fixed left-0 pl-[20px] w-[80px] object-contain cursor-pointer"
                    src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
                    alt="netflix"
                />

                <img
                    src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                    alt=""
                    className="fixed right-[20px] top-3 w-[30px] h-[30px] cursor-pointer"
                />
            </div>
        </div>
    )
}

export default Nav
