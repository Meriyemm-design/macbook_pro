import React, { useEffect, useRef } from 'react'
import titleImage from '../assets/title.png'
import heroVideo from '../assets/videos/hero.mp4'

const HeroSection = () => {
    const videoRef = useRef(null);

    // firstly we used a useRef and then we'll we are ensuring if
    useEffect(() => {
        if (videoRef.current) videoRef.current.playbackRate = 2;
    }, []);
    return (
        <>
            <section id='hero'>
                <div>
                    <h1>MacBook Pro </h1>
                    <img src={titleImage} alt="title image" />
                    <video ref={videoRef} src={heroVideo} autoPlay muted />
                </div>

                <button> Buy </button>
                <p> From $1599 or $133.25/mo. for 12/mo. </p>
            </section>
        </>
    )
}

export default HeroSection