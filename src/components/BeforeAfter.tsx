import React, { useRef, useState, useEffect, LegacyRef } from 'react'

const beforeImage = require("../img/before.png")
const afterImage = require("../img/after.png")

function BeforeAfter() {
    const slider: LegacyRef<HTMLDivElement> = useRef(null)
    const before: LegacyRef<HTMLDivElement> = useRef(null)
    const beforeImg: LegacyRef<HTMLImageElement> = useRef(null)
    const delimiter: LegacyRef<HTMLDivElement> = useRef(null)
    const [isSliderActive, setIsSliderActive] = useState(false)

    useEffect(() => {
        let width: number = slider?.current?.offsetWidth!
        beforeImg.current!.style.width = `${width}px`
    }, [])

    const beforeAfterSlider = (x: number) => {
        let shift: number = Math.max(0, Math.min(x, slider?.current?.offsetWidth!))
        before.current!.style.width = `${shift}px`
        delimiter.current!.style.left = `${shift}px`
    }

    const pauseEvents = (e: MouseEvent) => {
        e.stopPropagation()
        e.preventDefault()
        return false
    }

    const sliderMouseDown = () => {
        setIsSliderActive(true)
    }

    const sliderMouseUp = () => {
        setIsSliderActive(false)
    }

    const sliderMouseLeave = () => {
        setIsSliderActive(true)
    }

    const sliderMouseMove = (e: MouseEvent) => {
        if(!isSliderActive) {
            return
        }
        let x = e.pageX
        x -= slider.current!.getBoundingClientRect().left
        beforeAfterSlider(x)
        pauseEvents(e)
    }

    const sliderTouchStart = () => {
        setIsSliderActive(true)
    }

    const sliderTouchEnd = () => {
        setIsSliderActive(false)
    }

    const sliderTouchCancel = () => {
        setIsSliderActive(false)
    }

    const sliderTouchMove = (e: TouchEvent) => {
        if(!isSliderActive) {
            return
        }
    
        let x: number = 0
        let i: number
    
        for(i = 0; i < e.changedTouches.length; i++) {
            x = e.changedTouches[i].pageX
        }
    
        x -= slider.current!.getBoundingClientRect().left
        beforeAfterSlider(x)
        setIsSliderActive(true)
    }

    return (
        <section className="second_section" id="second_section">
            <div className="container">
                <h2 className="title second_section__title">До/после</h2>
                <div className="slider" 
                    ref={slider} 
                    onMouseDown={() => sliderMouseDown} 
                    onMouseUp={() => sliderMouseUp} 
                    onMouseLeave={() => sliderMouseLeave} 
                    onMouseMove={() => sliderMouseMove}
                    onTouchStart={() => sliderTouchStart}
                    onTouchEnd={() => sliderTouchEnd}
                    onTouchCancel={() => sliderTouchCancel}
                    onTouchMove={() => sliderTouchMove}>
                    <div className="before" ref={before}>
                        <img src={beforeImage} alt="До" ref={beforeImg} />
                    </div>
                    <div className="after">
                        <img src={afterImage} alt="После" />
                    </div>
                    <div className="delimiter" ref={delimiter}></div>
                </div>
            </div>
        </section>
    )
}

export default BeforeAfter