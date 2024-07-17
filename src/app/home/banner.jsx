import VideoPlayer from '@/src/components/videoplayer'
import { Col, Container, Row } from 'react-bootstrap'
import styles from '@/styles/home/banner.module.scss';
import { AdvertisingIcon } from '@/src/app/app-constants'

const Banner = () => {
    return (
        <section className={styles.homeSec}>
            <Container>
                <Row>
                    <Col>
                        <VideoPlayer video={"home/click-first-banner-video.mp4"} />
                        <div className={styles.bannerContent}>
                            <div className={styles.bannerTagline}><AdvertisingIcon /> No#1 SMM Company in USA</div>
                            <h1><span>Digital Marketing Agency</span>
                                Equipping Businesses for the
                                Digital Era</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner