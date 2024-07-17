"use client"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/industries.module.scss"
import IndustriesSlider from "@/src/components/industriesslider"
import IMG01 from "media/home/industries/img01.png"
import IMG02 from "media/home/industries/img02.png"
import IMG03 from "media/home/industries/img03.png"
import IMG04 from "media/home/industries/img04.png"
import IMG05 from "media/home/industries/img05.png"
import IMG06 from "media/home/industries/img06.png"
import IMG07 from "media/home/industries/img07.png"
import IMG08 from "media/home/industries/img08.png"
import IMG09 from "media/home/industries/img09.png"
import IMG10 from "media/home/industries/img10.png"
import IMG11 from "media/home/industries/img11.png"
import Link from "next/link"

const OPTIONS = { align: 'center', dragFree: true, loop: true }

const SLIDES = [
    {
        title: "Cleaning Service",
        txt: "Are you looking for information about cleaning services, or do you need help with something specific related to cleaning services?",
        img: IMG01.src,
        links: "#"
    },
    {
        title: "Real Estate",
        txt: "Are you looking for information about cleaning services, or do you need help with something specific related to cleaning services?",
        img: IMG02.src,
        links: "#"
    }, {
        title: "Finance",
        txt: "Are you looking for information about cleaning services, or do you need help with something specific related to cleaning services?",
        img: IMG03.src,
        links: "#"
    }
    , {
        title: "Furniture / Interior Designers",
        txt: "Are you looking for information about cleaning services, or do you need help with something specific related to cleaning services?",
        img: IMG04.src,
        links: "#"
    }, {
        title: "Fashion",
        txt: "Are you looking for information about cleaning services, or do you need help with something specific related to cleaning services?",
        img: IMG05.src,
        links: "#"
    }, {
        title: "Health & Wellness",
        txt: "Are you looking for information about cleaning services, or do you need help with something specific related to cleaning services?",
        img: IMG06.src,
        links: "#"
    }, {
        title: "Dry Cleaning",
        txt: "Are you looking for information about cleaning services, or do you need help with something specific related to cleaning services?",
        img: IMG07.src,
        links: "#"
    }, {
        title: "Cosmetics",
        txt: "Are you looking for information about cleaning services, or do you need help with something specific related to cleaning services?",
        img: IMG08.src,
        links: "#"
    }
    , {
        title: "Security Service",
        txt: "Are you looking for information about cleaning services, or do you need help with something specific related to cleaning services?",
        img: IMG09.src,
        links: "#"
    }
    , {
        title: "Sports",
        txt: "Are you looking for information about cleaning services, or do you need help with something specific related to cleaning services?",
        img: IMG10.src,
        links: "#"
    }
    , {
        title: "Automotive",
        txt: "Are you looking for information about cleaning services, or do you need help with something specific related to cleaning services?",
        img: IMG11.src,
        links: "#"
    }
]
const Industries = () => {
    return (
        <section className={`ptb-100 ${styles.industriesSec}`}>
            <Container>
                <Row>
                    <Col xxl={6} xl={6} lg={8} className="text-center m-auto">
                        <h2>Transforming Businesses in
                            <span> Various Industries</span></h2>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col xxl={12} xl={12} lg={12} className="m-auto p-0">
                        <IndustriesSlider slides={SLIDES} options={OPTIONS} />
                        <Link href="#" className={styles.buttonClass}>Let’s Discuss Your Project</Link>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Industries