import styles from "@/styles/components/pricnigplan.module.scss"
import { ArrowPriceIcon } from "@/src/app/app-constants"

const PricingPlan = ({ data }) => {
    return (
        <div className={styles.priceContainer}>

            <div className={styles.priceBox}>
                <div className={styles.priceHeader}>
                    <h5>Starter Plan</h5>
                    <p>The perfect starter plan for your basic design needs.</p>
                </div>
                <div className={styles.priceBody}>
                    <div className={styles.priceNumber}>
                        <div className={styles.Amount}>
                            <div className={styles.Price}>
                                {/* <span>$700</span> */}
                                ${data.starter}/month</div>
                            <div className={styles.Time}>(When Billed {data.valid})</div>
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
                            <li><ArrowPriceIcon />TikTok / LinkedIn</li>
                        </ul>
                        <h6>Social Ads Management </h6>
                        <ul>
                            <li><ArrowPriceIcon />Facebook & Instagram Paid Ads</li>
                            <li><ArrowPriceIcon />Unlimited Campaigns Per Month</li>
                            <li><ArrowPriceIcon />Unlimited Ad sets Per Month</li>
                            <li><ArrowPriceIcon />Detailed Campaign Monitoring & Optimization</li>
                        </ul>
                        <h6>Total Designated Team Members</h6>
                        <ul>
                            <li><ArrowPriceIcon />01 Dedicated Social Media Copywriter</li>
                            <li><ArrowPriceIcon />01 Dedicated Graphic Designer</li>
                            <li><ArrowPriceIcon />01 Video Editor</li>
                            <li><ArrowPriceIcon />01 Dedicated Ads Expert</li>
                            <li><ArrowPriceIcon />01 Dedicated Project Manager</li>
                        </ul>
                        <h6>Social Media Posts</h6>
                        <ul>
                            <li><ArrowPriceIcon />Total 15 Posts Per Month</li>
                            <li><ArrowPriceIcon />10 Graphic Social Posts</li>
                            <li><ArrowPriceIcon />03 Stories</li>
                            <li><ArrowPriceIcon />02 GIFS/Carousel Posts</li>
                        </ul>
                        <h6>Social Ads Management </h6>
                        <ul>
                            <li><ArrowPriceIcon />Monthly Social Posts Scheduling</li>
                            <li><ArrowPriceIcon />Social Community Management</li>
                            <li><ArrowPriceIcon />Social Page Optimization</li>
                            <li><ArrowPriceIcon />Meta Business Manager Setup</li>
                            <li><ArrowPriceIcon />Meta Ads Manager Setup</li>
                            <li><ArrowPriceIcon />Meta Pixel Integration</li>
                            <li><ArrowPriceIcon />Monthly Statistical Reporting</li>
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
                    <h5>Pro Plan</h5>
                    <p>The perfect pro plan for your
                        basic design needs.</p>
                </div>
                <div className={styles.priceBody}>
                    <div className={styles.priceNumber}>
                        <div className={styles.Amount}>
                            <div className={styles.Price}> ${data.pro}/month</div>
                            <div className={styles.Time}>(When Billed {data.valid})</div>
                        </div>
                    </div>
                    <div className={styles.pricePoints}>
                        <h6>Social Media Posts</h6>
                        <ul>
                            <li><ArrowPriceIcon />Total 25 Posts Per Month</li>
                            <li><ArrowPriceIcon />18 Graphic Social Posts</li>
                            <li><ArrowPriceIcon />07 Videos/Reels</li>
                            <li><ArrowPriceIcon />Stories</li>
                        </ul>
                        <h6>Social Platforms Supported</h6>
                        <ul>
                            <li><ArrowPriceIcon />Facebook</li>
                            <li><ArrowPriceIcon />Instagram</li>
                            <li><ArrowPriceIcon />YouTube</li>
                            <li><ArrowPriceIcon />Twitter (X)</li>
                            <li><ArrowPriceIcon />TikTok / LinkedIn</li>
                        </ul>
                        <h6>Social Ads Management </h6>
                        <ul>
                            <li><ArrowPriceIcon />All Social Ad Platforms are Supported</li>
                            <li><ArrowPriceIcon />Unlimited Campaigns Per Month</li>
                            <li><ArrowPriceIcon />Unlimited Ad sets Per Month</li>
                            <li><ArrowPriceIcon />Detailed Campaign Monitoring & Optimization</li>
                        </ul>
                        <h6>Total Designated Team Members</h6>
                        <ul>
                            <li><ArrowPriceIcon />01 Dedicated Social Media Copywriter</li>
                            <li><ArrowPriceIcon />01 Dedicated Graphic Designer</li>
                            <li><ArrowPriceIcon />01 Video Editor</li>
                            <li><ArrowPriceIcon />01 Dedicated Ads Expert</li>
                            <li><ArrowPriceIcon />01 Dedicated Project Manager</li>
                        </ul>
                        <h6>Social Ads Management </h6>
                        <ul>
                            <li><ArrowPriceIcon />Monthly Social Posts Scheduling</li>
                            <li><ArrowPriceIcon />Social Community Management</li>
                            <li><ArrowPriceIcon />Social Page Optimization</li>
                            <li><ArrowPriceIcon />Meta Business Manager Setup</li>
                            <li><ArrowPriceIcon />Meta Ads Manager Setup</li>
                            <li><ArrowPriceIcon />Meta Pixel Integration</li>
                            <li><ArrowPriceIcon />Monthly Statistical Reporting</li>
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
                    <h5>Elite Plan</h5>
                    <p>The perfect elite plan for your
                        basic design needs.</p>
                </div>
                <div className={styles.priceBody}>
                    <div className={styles.priceNumber}>
                        <div className={styles.Amount}>
                            <div className={styles.Price}> ${data.elite}/month</div>
                            <div className={styles.Time}>(When Billed {data.valid})</div>
                        </div>
                    </div>
                    <div className={styles.pricePoints}>
                        <h6>Social Media Posts</h6>
                        <ul>
                            <li><ArrowPriceIcon />Total 35 Posts Per Month</li>
                            <li><ArrowPriceIcon />23 Graphic Social Posts</li>
                            <li><ArrowPriceIcon />12 Videos/Reels</li>
                            <li><ArrowPriceIcon />Stories</li>
                            <li><ArrowPriceIcon />Highlights</li>
                        </ul>
                        <h6>Social Platforms Supported</h6>
                        <ul>
                            <li><ArrowPriceIcon />Facebook</li>
                            <li><ArrowPriceIcon />Instagram</li>
                            <li><ArrowPriceIcon />Twitter (X)</li>
                            <li><ArrowPriceIcon />LinkedIn</li>
                            <li><ArrowPriceIcon />TikTok</li>
                            <li><ArrowPriceIcon />Pinterest</li>
                            <li><ArrowPriceIcon />Snapchat</li>
                        </ul>
                        <h6>Social Ads Management </h6>
                        <ul>
                            <li><ArrowPriceIcon />All Social Ad Platforms</li>
                            <li><ArrowPriceIcon />Unlimited Campaigns Per Month</li>
                            <li><ArrowPriceIcon />All Ad Objectives Supported</li>
                            <li><ArrowPriceIcon />Unlimited Ad sets Per Month</li>
                            <li><ArrowPriceIcon />Detailed Campaign Monitoring</li>
                            <li><ArrowPriceIcon />Daily Campaign Optimization</li>
                        </ul>
                        <h6>Total Designated Team Members</h6>
                        <ul>
                            <li><ArrowPriceIcon />03 Dedicated Social Media Copywriter</li>
                            <li><ArrowPriceIcon />03 Dedicated Graphic Designer</li>
                            <li><ArrowPriceIcon />03 Dedicated Video Editors</li>
                            <li><ArrowPriceIcon />03 Dedicated Ads Expert</li>
                            <li><ArrowPriceIcon />02 Message/Chat Experts</li>
                            <li><ArrowPriceIcon />01 Dedicated Project Manager</li>
                        </ul>

                        <h6>Social Medai Management</h6>
                        <ul>
                            <li><ArrowPriceIcon />Monthly Social Posts Scheduling</li>
                            <li><ArrowPriceIcon />Social Community Management </li>
                            <li><ArrowPriceIcon />Social Page Optimization</li>
                            <li><ArrowPriceIcon />Meta Business Manager Setup </li>
                            <li><ArrowPriceIcon />Meta Ads Manager Setup</li>
                            <li><ArrowPriceIcon />Meta Pixel Integration</li>
                            <li><ArrowPriceIcon />LinkedIn Business Manager Setup</li>
                            <li><ArrowPriceIcon />LinkedIn Ads Manager Setup</li>
                            <li><ArrowPriceIcon />LinkedIn Pixel Integration</li>
                            <li><ArrowPriceIcon />TikTok Business Manager Setup</li>
                            <li><ArrowPriceIcon />TikTok Ads Manager Setup</li>
                            <li><ArrowPriceIcon />TikTok Pixel Integration</li>
                            <li><ArrowPriceIcon />Monthly Statistical Reporting</li>
                            <li><ArrowPriceIcon />Weekly Ads/Campaign Report</li>
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