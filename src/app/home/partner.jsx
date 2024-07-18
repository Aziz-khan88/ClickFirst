import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/partner.module.scss"
import { GoogleIcon, LinkedinIcon, MetaIcon, SnapChatIcon, TiktokIcon } from "@/src/app/app-constants"

const Partner = () => {
    return (
        <section className={`ptb-50 ${styles.partnerSec}`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col xxl={8} xl={9} lg={10} className="m-auto text-center">
                        <h2>Our Marketing Partners</h2>
                        <div className={styles.partnerLogo}>
                            <div className={styles.logoBox}>
                                <TiktokIcon />
                            </div>
                            <div className={styles.logoBox}>
                                <GoogleIcon />
                            </div>
                            <div className={styles.logoBox}>
                                <MetaIcon />
                            </div>
                            <div className={styles.logoBox}>
                                <SnapChatIcon />
                            </div>
                            <div className={styles.logoBox}>
                                <LinkedinIcon />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Partner