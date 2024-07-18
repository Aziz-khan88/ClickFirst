"use client"
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/home/brand.module.scss";
import Link from "next/link";
import BrandCarousel from "@/src/components/brandcarosusel";
import { useState, useEffect, useRef } from "react";
import Youtube from 'media/home/brands/icons/youtube.png'
import Facebook from 'media/home/brands/icons/facebook.png'
import Instagram from 'media/home/brands/icons/instagram.png'
import Tiktok from 'media/home/brands/icons/tiktok.png'
import Image from "next/image";
import VideoModal from "@/src/components/videomodal";

const Brand = () => {
    const [activevideoUrl, setActiveVideoUrl] = useState("");
    const [modalShow, setModalShow] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const videoRef = useRef(null);

    const handleVideoSelect = (videoUrl) => {
        setActiveVideoUrl(videoUrl);
        setModalShow(true);
    };

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
            videoRef.current.play();
        }
    }, [activevideoUrl]);

    const checkScreenSize = () => {
        if (window.innerWidth <= 800) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
            setModalShow(false);
        }
    };

    useEffect(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <section className={`ptb-100 ${styles.BrandSec}`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col xxl={7} xl={7} lg={7} className='my-auto'>
                        <h2><span className={styles.first}>Skyrocket Your Brand</span>
                            <span className={styles.last}>with Influencer Stardom</span>
                        </h2>
                        <p>Boost your brand&apos;s visibility with influencer marketing from Click First SMM. Our expert strategists excel in creating genuine, impactful partnerships with top niche influencers. By tapping into their loyal followers and leveraging their trust, we&apos;ll help you reach your target audience, build credibility, and drive a surge in website traffic and conversions.</p>
                        <p>Eliminate the guesswork with Click First SMM&apos;s data-driven influencer marketing approach. We&apos;ll connect you with the ideal influencers, design engaging campaigns, and deliver measurable results that elevate your business. Amplify your reach and enhance your brand with Click First SMM&apos;s influencer marketing expertise.</p>
                        <Link href="#" className={styles.buttonClass}>Get a Free Quote</Link>
                        <BrandCarousel onVideoSelect={handleVideoSelect} />
                    </Col>
                    <Col xxl={5} xl={5} lg={5} className='my-auto'>
                        {!isMobile && (
                            <div className={styles.influenceVideo}>
                                <Image src={Youtube} className={styles.Youtube} alt="Img_01" />
                                <Image src={Facebook} className={styles.Facebook} alt="Img_01" />
                                <Image src={Instagram} className={styles.Instagram} alt="Img_01" />
                                <Image src={Tiktok} className={styles.Tiktok} alt="Img_01" />

                                <video width="100%" controls autoPlay muted preload="none" ref={videoRef}>
                                    <source src={activevideoUrl} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        )}
                        {isMobile && (
                            <VideoModal show={modalShow} videoUrl={activevideoUrl} isMobile={isMobile}
                                onHide={() => setModalShow(false)} className="brandModal" />
                        )}

                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Brand;
