"use client"
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/home/testimonials.module.scss"
import TestimonilSlider from '@/src/components/testimonilslider'
import IMG01 from "media/home/test/test01.png"
import IMG02 from "media/home/test/test02.png"
import IMG03 from "media/home/test/test03.png"
import Link from 'next/link'


const OPTIONS = { align: 'start', loop: false }
const SLIDES = [
    {
        name: "Mustafa Sharif",
        position: "Marketania",
        videoUrl: "/home/test/video1.mp4",
        img: IMG01.src

    }, {
        name: "Mustafa Sharif",
        position: "Marketania",
        videoUrl: "/home/test/video2.mp4",
        img: IMG02.src

    }
    , {
        name: "Mustafa Sharif",
        position: "Marketania",
        videoUrl: "/home/test/video3.mp4",
        img: IMG03.src

    }
]
const Testimonials = () => {
    return (
        <section className={`ptb-100 ${styles.testimonialSec}`}>
            <Container>
                <Row>
                    <Col xl={12} lg={12} className="m-auto text-center">
                        <h2><span>Client Chronicles: </span> Stories of Success</h2>
                        <TestimonilSlider slides={SLIDES} options={OPTIONS} />
                        <Link href="#" className={styles.buttonClass}>Let’s Discuss Your Project</Link>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Testimonials