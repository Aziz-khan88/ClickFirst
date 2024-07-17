import styles from "@/styles/components/pricnigplan.module.scss"
import { ArrowPriceIcon } from "@/src/app/app-constants"

const PricingPlan = () => {
    return (
        <div className={styles.priceContainer}>
            <div className={styles.priceBox}>
                <div className={styles.priceHeader}>
                    <h5>SIMPLE START PLAN</h5>
                    <p>The perfect starter plan for your
                        basic design needs.</p>
                </div>
                <div className={styles.priceBody}>
                    <div className={styles.priceNumber}>
                        <div className={styles.Amount}>
                            <div className={styles.Price}><span>$700</span>$350/m</div>
                            <div className={styles.Time}>($750 QUARTERLY)</div>
                        </div>
                    </div>
                    <div className={styles.pricePoints}>
                        <h6>Social Media Posts</h6>
                        <ul>
                            <li><ArrowPriceIcon />Total 15 Posts Per Month</li>
                            <li><ArrowPriceIcon />10 Graphic Social Posts</li>
                            <li><ArrowPriceIcon />03 Stories</li>
                            <li><ArrowPriceIcon />02 GIFS/Carousel Posts</li>
                        </ul>
                        <h6>Social Platforms Supported</h6>
                        <ul>
                            <li><ArrowPriceIcon />Facebook</li>
                            <li><ArrowPriceIcon />Instagram</li>
                        </ul>
                        <h6>Social Ads Management </h6>
                        <ul>
                            <li><ArrowPriceIcon />Facebook and Instagram Ads</li>
                            <li><ArrowPriceIcon />Total 1 Campaign Per Month</li>
                            <li><ArrowPriceIcon />05 Adsets Per Month</li>
                        </ul>
                        <h6>Total Designated Team Members</h6>
                        <ul>
                            <li><ArrowPriceIcon />01 Dedicated Social Media Copywriter</li>
                            <li><ArrowPriceIcon />01 Dedicated Graphic Designer</li>
                            <li><ArrowPriceIcon />01 Dedicated Ads Expert</li>
                            <li><ArrowPriceIcon />01 Dedicated Account Manager</li>
                        </ul>
                        <h6>Social Media Posts</h6>
                        <ul>
                            <li><ArrowPriceIcon />Total 15 Posts Per Month</li>
                            <li><ArrowPriceIcon />10 Graphic Social Posts</li>
                            <li><ArrowPriceIcon />03 Stories</li>
                            <li><ArrowPriceIcon />02 GIFS/Carousel Posts</li>
                        </ul>
                        <h6>Social Platforms Supported</h6>
                        <ul>
                            <li><ArrowPriceIcon />Facebook</li>
                            <li><ArrowPriceIcon />Instagram</li>
                        </ul>
                        <h6>Social Ads Management </h6>
                        <ul>
                            <li><ArrowPriceIcon />Facebook and Instagram Ads</li>
                            <li><ArrowPriceIcon />Total 1 Campaign Per Month</li>
                            <li><ArrowPriceIcon />05 Adsets Per Month</li>
                        </ul>
                    </div>
                    <div className={styles.priceButton}>
                        <div className={styles.contactBtn}>
                            Buy Your Plan
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.priceBox} ${styles.active}`}>
                <div className={styles.priceHeader}>
                    <h5>ESSENTIAL PLAN</h5>
                    <p>The perfect starter plan for your
                        basic design needs.</p>
                </div>
                <div className={styles.priceBody}>
                    <div className={styles.priceNumber}>
                        <div className={styles.Amount}>
                            <div className={styles.Price}><span>$1500</span>$700/m</div>
                            <div className={styles.Time}>($1500 QUARTERLY)</div>
                        </div>
                    </div>
                    <div className={styles.pricePoints}>
                        <h6>Social Media Posts</h6>
                        <ul>
                            <li><ArrowPriceIcon />Total 15 Posts Per Month</li>
                            <li><ArrowPriceIcon />10 Graphic Social Posts</li>
                            <li><ArrowPriceIcon />03 Stories</li>
                            <li><ArrowPriceIcon />02 GIFS/Carousel Posts</li>
                        </ul>
                        <h6>Social Platforms Supported</h6>
                        <ul>
                            <li><ArrowPriceIcon />Facebook</li>
                            <li><ArrowPriceIcon />Instagram</li>
                        </ul>
                        <h6>Social Ads Management </h6>
                        <ul>
                            <li><ArrowPriceIcon />Facebook and Instagram Ads</li>
                            <li><ArrowPriceIcon />Total 1 Campaign Per Month</li>
                            <li><ArrowPriceIcon />05 Adsets Per Month</li>
                        </ul>
                        <h6>Total Designated Team Members</h6>
                        <ul>
                            <li><ArrowPriceIcon />01 Dedicated Social Media Copywriter</li>
                            <li><ArrowPriceIcon />01 Dedicated Graphic Designer</li>
                            <li><ArrowPriceIcon />01 Dedicated Ads Expert</li>
                            <li><ArrowPriceIcon />01 Dedicated Account Manager</li>
                        </ul>
                        <h6>Social Media Posts</h6>
                        <ul>
                            <li><ArrowPriceIcon />Total 15 Posts Per Month</li>
                            <li><ArrowPriceIcon />10 Graphic Social Posts</li>
                            <li><ArrowPriceIcon />03 Stories</li>
                            <li><ArrowPriceIcon />02 GIFS/Carousel Posts</li>
                        </ul>
                        <h6>Social Platforms Supported</h6>
                        <ul>
                            <li><ArrowPriceIcon />Facebook</li>
                            <li><ArrowPriceIcon />Instagram</li>
                        </ul>
                        <h6>Social Ads Management </h6>
                        <ul>
                            <li><ArrowPriceIcon />Facebook and Instagram Ads</li>
                            <li><ArrowPriceIcon />Total 1 Campaign Per Month</li>
                            <li><ArrowPriceIcon />05 Adsets Per Month</li>
                        </ul>
                    </div>
                    <div className={styles.priceButton}>
                        <div className={styles.contactBtn}>
                            Buy Your Plan
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.priceBox}>
                <div className={styles.priceHeader}>
                    <h5>BUSINESS PLAN</h5>
                    <p>The perfect starter plan for your
                        basic design needs.</p>
                </div>
                <div className={styles.priceBody}>
                    <div className={styles.priceNumber}>
                        <div className={styles.Amount}>
                            <div className={styles.Price}><span>$2400</span>$1200/m</div>
                            <div className={styles.Time}>($1200 QUARTERLY)</div>
                        </div>
                    </div>
                    <div className={styles.pricePoints}>
                        <h6>Social Media Posts</h6>
                        <ul>
                            <li><ArrowPriceIcon />Total 15 Posts Per Month</li>
                            <li><ArrowPriceIcon />10 Graphic Social Posts</li>
                            <li><ArrowPriceIcon />03 Stories</li>
                            <li><ArrowPriceIcon />02 GIFS/Carousel Posts</li>
                        </ul>
                        <h6>Social Platforms Supported</h6>
                        <ul>
                            <li><ArrowPriceIcon />Facebook</li>
                            <li><ArrowPriceIcon />Instagram</li>
                        </ul>
                        <h6>Social Ads Management </h6>
                        <ul>
                            <li><ArrowPriceIcon />Facebook and Instagram Ads</li>
                            <li><ArrowPriceIcon />Total 1 Campaign Per Month</li>
                            <li><ArrowPriceIcon />05 Adsets Per Month</li>
                        </ul>
                        <h6>Total Designated Team Members</h6>
                        <ul>
                            <li><ArrowPriceIcon />01 Dedicated Social Media Copywriter</li>
                            <li><ArrowPriceIcon />01 Dedicated Graphic Designer</li>
                            <li><ArrowPriceIcon />01 Dedicated Ads Expert</li>
                            <li><ArrowPriceIcon />01 Dedicated Account Manager</li>
                        </ul>
                        <h6>Social Media Posts</h6>
                        <ul>
                            <li><ArrowPriceIcon />Total 15 Posts Per Month</li>
                            <li><ArrowPriceIcon />10 Graphic Social Posts</li>
                            <li><ArrowPriceIcon />03 Stories</li>
                            <li><ArrowPriceIcon />02 GIFS/Carousel Posts</li>
                        </ul>
                        <h6>Social Platforms Supported</h6>
                        <ul>
                            <li><ArrowPriceIcon />Facebook</li>
                            <li><ArrowPriceIcon />Instagram</li>
                        </ul>
                        <h6>Social Ads Management </h6>
                        <ul>
                            <li><ArrowPriceIcon />Facebook and Instagram Ads</li>
                            <li><ArrowPriceIcon />Total 1 Campaign Per Month</li>
                            <li><ArrowPriceIcon />05 Adsets Per Month</li>
                        </ul>
                    </div>
                    <div className={styles.priceButton}>
                        <div className={styles.contactBtn}>
                            Buy Your Plan
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingPlan