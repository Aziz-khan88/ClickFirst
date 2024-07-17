"use client"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/priceing.module.scss"
import PricingPlan from "@/src/components/pricingplan"
import { useState } from 'react';


const tabData = [
    { name: 'Monthly', discount: 'SAVE 20%' },
    { name: 'Quarterly', discount: 'SAVE 35%' },
    { name: 'Annually', discount: 'SAVE 50%' }
]


const Priceing = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    return (
        <section className={`ptb-50 ${styles.priceingSec}`}>
            <Container>
                <Row>
                    <Col xl={9} lg={9} className="m-auto text-center">
                        <h2><span>Quality Over Discounts</span>
                            Elevate Your Social Media Presence Today!</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xl={12} lg={12} className="m-auto">
                        <div className={styles.tabHeader}>
                            {tabData.map((tab, index) => (
                                <div
                                    key={index}
                                    className={`${styles.tabName} ${activeTab === index ? `${styles.active}` : ''}`}
                                    onClick={() => handleTabClick(index)}
                                >{tab.name}<span>({tab.discount})</span>
                                </div>
                            ))}
                        </div>
                        <div className={styles.tabBody}>
                            {tabData.map((tab, index) => (
                                <div
                                    key={index}
                                    className={`${styles.tabContent} ${activeTab === index ? `${styles.active}` : ''}`}
                                >
                                    <PricingPlan />
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Priceing