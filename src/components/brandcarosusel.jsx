
"use client"
import { React, useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import styles from "@/styles/components/brandslider.module.scss"
import IMG01 from "media/home/brands/img01.png"
import JulesJessica from "media/home/brands/img01.png"
import ListingWithLexi from "media/home/brands/img01.png"
import JaimeGabaldoni from "media/home/brands/img01.png"
import IMG05 from "media/home/brands/img05.png"
import { CarouselArrow, PlayIcon } from '@/src/app/app-constants'
const data = [
    {
        title: "@kyleecampbell",
        img: IMG01.src,
        videoUrl: "home/brands/video/@kyleecampbell.mp4"
    },
    {
        title: "@julesjessica",
        img: JulesJessica.src,
        videoUrl: "home/brands/video/@julesjessica.mp4"
    }
    ,
    {
        title: "@ListingWithLexi",
        img: ListingWithLexi.src,
        videoUrl: "home/brands/video/@ListingWithLexi.mp4"
    },
    {
        title: "@jaime_gabaldoni",
        img: JaimeGabaldoni.src,
        videoUrl: "home/brands/video/@jaime_gabaldoni.mp4"
    },
    {
        title: "@blissedhappiness",
        img: IMG05.src,
        videoUrl: "home/brands/video/@blissedhappiness.mp4"
    },
    {
        title: "@pbadvancedaesthetics",
        img: IMG01.src,
        videoUrl: "home/brands/video/@pbadvancedaesthetics.mp4"
    },
    {
        title: "@odysseyelixir",
        img: IMG01.src,
        videoUrl: "home/brands/video/@odysseyelixir.mp4"
    }
    ,
    {
        title: "@cece_barnes",
        img: IMG01.src,
        videoUrl: "home/brands/video/@cece_barnes.mp4"
    },
    {
        title: "@juliakhara",
        img: IMG01.src,
        videoUrl: "home/brands/video/@juliakhara.mp4"
    },
    {
        title: "@micheleonstyle",
        img: IMG05.src,
        videoUrl: "home/brands/video/@micheleonstyle.mp4"
    },
    {
        title: "@micheleonstyle",
        img: IMG05.src,
        videoUrl: "home/brands/video/@micheleonstyle.mp4"
    },
    {
        title: "@micheleonstyle",
        img: IMG05.src,
        videoUrl: "home/brands/video/@micheleonstyle.mp4"
    },

]

const BrandCarousel = ({ onVideoSelect }) => {
    const [emblaRef, embla] = useEmblaCarousel([
        Autoplay({ playOnInit: false, delay: 3000 })
    ]);

    const [activeIndex, setActiveIndex] = useState(0);
    const [isPrevDisabled, setIsPrevDisabled] = useState(true);
    const [isNextDisabled, setIsNextDisabled] = useState(false);

    useEffect(() => {
        if (!embla) return;

        const updateButtons = () => {
            setIsPrevDisabled(!embla.canScrollPrev());
            setIsNextDisabled(!embla.canScrollNext());
        };

        embla.on('select', updateButtons);
        embla.on('init', () => embla.scrollTo(activeIndex));

        return () => {
            embla.off('select', updateButtons);
        };
    }, [embla]);

    useEffect(() => {
        if (!embla) return;
        const videoUrl = data[activeIndex].videoUrl;
        onVideoSelect(videoUrl);
        if (embla) {
            embla.scrollTo(activeIndex);
        }
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => {
                const newIndex = (prevIndex + 1) % data.length;
                const videoUrl = data[newIndex].videoUrl;
                embla.scrollTo(newIndex);
                onVideoSelect(videoUrl);
                return newIndex;
            });
        }, 10000);

        return () => clearInterval(interval);
    }, [embla, onVideoSelect]);


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
                    //  onClick={() => handleSlideClick(index, item.videoUrl)}
                    >
                        <div className={styles.itemBrand} >
                            <div style={{ backgroundImage: `url(${item.img})` }} className={`${styles.itemImg} ${activeIndex === index ? `${styles.active}` : ''}`}>
                                <div className={styles.overlaySce}></div>
                                <div className={styles.itemName}>{item.title}</div>
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