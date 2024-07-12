import { Col, Container, Row } from "react-bootstrap"
import styles from "../../../styles/home/campaigns.module.scss"
import Image from "next/image"
import CampaignsImg from "../../../public/home/CampaignsImg.png"


const Campaigns = () => {
    return (
        <section className={`ptb-100 ${styles.campaignsSec}`}
        // style={{ backgroundImage: `url(${CampaignsImg.src})` }}
        >
            <Container className={`h-100 ${styles.mainContainer}`}>
                <Row className="h-100">
                    <Col xl={6} lg={6} className="my-auto">
                        <h2><span className={styles.first}>Drive Results with Targeted</span>
                            <span className={styles.last}>Paid Campaigns</span>
                        </h2>
                        <p>Without the right strategies, you might waste resources and miss out on potential customers, which can be discouraging and hinder your brand’s success.</p>
                        <p>Navigating the complexities of paid marketing, identifying the right niches, and reaching your ideal target audience can be overwhelming. Ineffective ad targeting, poor optimization, and lack of actionable insights can lead to subpar results and wasted investment.</p>
                        <p>Release the full potential of your brand with Click First SMM&apos;s Paid Marketing Services. Our expert team creates and manages effective paid marketing campaigns tailored to your niche, ensuring you reach your target audience and achieve your marketing goals.</p>
                        <p>Ready to take your brand to the next level? Contact Click First SMM today and start seeing real results!</p>
                    </Col>
                    <Col xl={6} lg={6} className="mt-auto">
                        <Image src={CampaignsImg} alt="CampaignsImg" height={600} />
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Campaigns