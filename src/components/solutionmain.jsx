
"use client"
import styles from "@/styles/components/solutionmain.module.scss"
import IMG01 from "media/home/solution/solution01.webp"
import IMG02 from "media/home/solution/solution02.webp"
import IMG03 from "media/home/solution/solution03.webp"
import IMG04 from "media/home/solution/solution04.webp"
import IMG05 from "media/home/solution/solution05.webp"
import IMG06 from "media/home/solution/solution06.webp"
import IMG07 from "media/home/solution/solution07.webp"
import IMG08 from "media/home/solution/solution08.webp"
import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"



const data = [
    {
        title: "Awareness",
        txt: "Show your Ads to people who are most likely to remember them.",
        img: IMG01.src
    },
    {
        title: "Sales",
        txt: "Find people likely to purchase your product or service.",
        img: IMG02.src
    }
    ,
    {
        title: "Leads",
        txt: "Collect leads for your business via instant forms, messages, calls, and sign-ups.",
        img: IMG03.src
    },
    {
        title: "Bookings / Appointments",
        txt: "Encourage customers to book appointments directly with your business.",
        img: IMG04.src
    },
    {
        title: "App Installs",
        txt: "Promote your app to drive downloads and increase user engagement.",
        img: IMG05.src
    },
    {
        title: "Website Traffic",
        txt: "Direct potential customers to your website to explore your offerings.",
        img: IMG06.src
    },
    {
        title: "Messages/Calls",
        txt: "Facilitate direct communication with your customers through messages and calls.",
        img: IMG07.src
    },
    {
        title: "Views",
        txt: "Boost the visibility of your videos and content to attract more viewers",
        img: IMG08.src
    }
]

const SolutionMain = () => {
    return (
        <section className={styles.solutoinMain}>
            <Container>
                <Row>
                    <Col xxl={12}>
                        <div className={styles.solutionBox}>
                            {data.map((item, index) => (
                                <div className={styles.solutionItem} key={index} style={{ backgroundImage: `url(${item.img})` }}>
                                    <div className={styles.solutionContent}>
                                        <h3>{item.title}</h3>
                                        <p>{item.txt}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={styles.btnFlex}>
                            <Link href="#" className={styles.buttonBlack}>Get a Free Quote</Link>
                            <Link href="#" className={styles.buttonTrans}>Call Now: 346-299-2202</Link>
                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default SolutionMain