import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/services.module.scss"
import { ArrowIcon, ServicesIcon1, ServicesIcon2, ServicesIcon3, ServicesIcon4, ServicesIcon5, ServicesIcon6 } from "@/src/app/app-constants"
import Link from "next/link"



const Services = () => {



    const data = [
        {
            title: "Social Media Marketing",
            txt: "Our social media marketing solutions help brands create an ever-lasting impression on their target audience.",
            icon: ServicesIcon1,
            link: "/"
        },
        {
            title: "Search Engine Optimization",
            txt: "Boost your visibility with data-driven SEO strategies tailored to drive traffic and increase conversions.",
            icon: ServicesIcon2,
            link: "/"
        },
        {
            title: "Influencer Marketing",
            txt: "Harness the power of influencers to amplify your brand's reach and connect with your target audience.",
            icon: ServicesIcon3,
            link: "/"
        },
        {
            title: "Google Ads",
            txt: "To help businesses reach potential consumers, we use Google Ads based on the demographics of the intended users.",
            icon: ServicesIcon4,
            link: "/"
        },
        {
            title: "Email Marketing",
            txt: "Engage your audience with personalized email campaigns designed to nurture leads and drive sales.",
            icon: ServicesIcon5,
            link: "/"
        },
        {
            title: "YouTube Optimization",
            txt: "Maximize your YouTube presence with optimized content that attracts views and grows your subscriber base.",
            icon: ServicesIcon6,
            link: "/"
        }
    ]
    return (
        <section className={`ptb-100 ${styles.servicesSec}`}>
            <Container>
                <Row>
                    <Col xl={8} lg={10} className="m-auto text-center">
                        <h2>What <span>Marketing Opportunities</span> We Bring To Your Disposal?</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xl={12} lg={12} className="m-auto">
                        <div className={styles.serviceContainer}>
                            {data.map((item, index) => (
                                <div className={styles.servicesItem} key={index}>
                                    <div className={styles.itemIcon}>
                                        <item.icon />
                                    </div>
                                    <div className={styles.itemTxt}>
                                        <h3>{item.title}</h3>
                                        <p>{item.txt}</p>
                                        <Link href={item.link}>See More Details <ArrowIcon /></Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Services