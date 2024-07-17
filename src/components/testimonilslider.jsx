import { CarouselArrow, PlayButton } from '@/src/app/app-constants'
import styles from "@/styles/components/testimonialslider.module.scss"
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { useState, useEffect } from 'react'
import VideoModal from './videomodal'


const TestimonilSlider = (props) => {
    const { slides, options } = props
    const [emblaRef, embla] = useEmblaCarousel(options, [
        Autoplay({ playOnInit: false, delay: 3000 })
    ]);

    const [modalShow, setModalShow] = useState(false);
    const [videoUrl, setvideoUrl] = useState("");
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

    const handleSlideClick = (videoUrl) => {
        setModalShow(true);
        setvideoUrl(videoUrl);

    };

    const prevButtonHandler = () => {
        if (embla) embla.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (embla) embla.scrollNext();
    };
    return (
        <section className={`${styles.embla}`}>
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {slides.map((item, index) => (
                        <div className={styles.embla__slide} key={index} >
                            <div className={styles.testimonialBox} style={{ backgroundImage: `url(${item.img})` }}>
                                <div className={styles.itemMain}>
                                    <div className={styles.itemText}>
                                        {item.name}<span>{item.position}</span>
                                    </div>
                                    <div className={styles.playBtn} onClick={() => handleSlideClick(item.videoUrl)}><PlayButton /></div>
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

            <VideoModal show={modalShow} videoUrl={videoUrl}
                onHide={() => setModalShow(false)} />


        </section>

    )
}

export default TestimonilSlider