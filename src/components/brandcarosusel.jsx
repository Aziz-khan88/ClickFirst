
"use client"
import { React, useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import styles from "@/styles/components/brandslider.module.scss"
import IMG01 from "media/home/brands/img01.png"
import IMG02 from "media/home/brands/img02.png"
import IMG03 from "media/home/brands/img03.png"
import IMG04 from "media/home/brands/img04.png"
import IMG05 from "media/home/brands/img05.png"
import { CarouselArrow, PlayIcon } from '@/src/app/app-constants'

const data = [
    {
        title: "@kyleecampbell",
        img: IMG01.src,
        videoUrl: "home/brands/@kyleecampbell.mp4"
    },
    {
        title: "@_bysarv",
        img: IMG02.src,
        videoUrl: "home/brands/@kyleecampbell.mp4"
    }
    ,
    {
        title: "@natalieoffduty",
        img: IMG03.src,
        videoUrl: "home/brands/@kyleecampbell.mp4"
    },
    {
        title: "@wrjght_",
        img: IMG04.src,
        videoUrl: "home/brands/@kyleecampbell.mp4"
    },
    {
        title: "@karlieplace",
        img: IMG05.src,
        videoUrl: "home/brands/@kyleecampbell.mp4"
    },
    {
        title: "@kyleecampbell",
        img: IMG01.src,
        videoUrl: "home/brands/@kyleecampbell.mp4"
    },
    {
        title: "@_bysarv",
        img: IMG02.src,
        videoUrl: "home/brands/@kyleecampbell.mp4"
    }
    ,
    {
        title: "@natalieoffduty",
        img: IMG03.src,
        videoUrl: "home/brands/@kyleecampbell.mp4"
    },
    {
        title: "@wrjght_",
        img: IMG04.src,
        videoUrl: "home/brands/@kyleecampbell.mp4"
    },
    {
        title: "@karlieplace",
        img: IMG05.src,
        videoUrl: "home/brands/@kyleecampbell.mp4"
    },

]

const BrandCarousel = ({ onVideoSelect }) => {
    const [emblaRef, embla] = useEmblaCarousel([
        Autoplay({ playOnInit: false, delay: 3000 })
    ]);

    const [activeIndex, setActiveIndex] = useState(null);
    const [isPrevDisabled, setIsPrevDisabled] = useState(true);
    const [isNextDisabled, setIsNextDisabled] = useState(false);

    useEffect(() => {
        if (!embla) return;

        const updateButtons = () => {
            setIsPrevDisabled(!embla.canScrollPrev());
            setIsNextDisabled(!embla.canScrollNext());
        };

        embla.on('select', updateButtons);

        return () => embla.off('select', updateButtons);
    }, [embla]);

    const handleSlideClick = (index, videoUrl) => {
        setActiveIndex(index);
        onVideoSelect(videoUrl);
    };

    const prevButtonHandler = () => {
        if (embla) embla.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (embla) embla.scrollNext();
    };

    return (
        <div className={styles.embla} ref={emblaRef}>
            <div className={`${styles.embla__container}`}>
                {data.map((item, index) => (
                    <div
                        className={styles.embla__slide}
                        key={index}
                        onClick={() => handleSlideClick(index, item.videoUrl)}
                    >
                        <div className={styles.itemBrand} >
                            <div style={{ backgroundImage: `url(${item.img})` }} className={`${styles.itemImg} ${activeIndex === index ? `${styles.active}` : ''}`}>
                                <div className={styles.overlaySce}></div>
                                <div className={styles.itemName}>{item.title}</div>
                                <div className={styles.playBtn}>
                                    <PlayIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.embla__button__container}>
                <div className={`${styles.embla__prev} ${isPrevDisabled ? `${styles.disabled}` : ''}`} onClick={prevButtonHandler}>
                    <CarouselArrow direction="prev" />
                </div>
                <div className={`${styles.embla__next} ${isNextDisabled ? `${styles.disabled}` : ''}`} onClick={nextButtonHandler}>
                    <CarouselArrow direction="next" />
                </div>
            </div>
        </div>
    )
}

export default BrandCarousel