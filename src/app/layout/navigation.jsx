import Link from 'next/link'
import styles from "../../../styles/layout/navigation.module.scss"
import { MenuIcon, ServicesIcon1, ServicesIcon2, ServicesIcon3, ServicesIcon4, ServicesIcon5, ServicesIcon6, SubMenuIcon } from '../app-constants'


const Navigation = (props) => {

    return (
        <div className={`${styles.mainMenu} ${props.isActive ? `${styles.active}` : ''}`}>
            <ul>
                <li>
                    <Link href="#">Home</Link>
                </li>
                <li >
                    <Link href="#" >Services <SubMenuIcon /></Link>
                    <div className={styles.subMenu} >
                        <div className={styles.MenuListing}>
                            <div className={styles.MenuList}>
                                <Link href="#"><ServicesIcon1 />Social Media Management</Link>
                            </div>
                            <div className={styles.MenuList}>
                                <Link href="#"><ServicesIcon2 />Search Engine Optimization</Link>
                            </div>
                            <div className={styles.MenuList}>
                                <Link href="#"><ServicesIcon3 />Influencer Marketing</Link>
                            </div>
                            <div className={styles.MenuList}>
                                <Link href="#"><ServicesIcon4 />Google Ads</Link>
                            </div>
                            <div className={styles.MenuList}>
                                <Link href="#"><ServicesIcon5 />Email Marketing</Link>
                            </div>
                            <div className={styles.MenuList}>
                                <Link href="#"><ServicesIcon6 />YouTube Optimization</Link>
                            </div>
                            <div className={styles.MenuList}>
                                <Link href="#"><ServicesIcon6 />YouTube Monetization</Link>
                            </div>
                        </div>
                    </div>

                </li>
                <li>
                    <Link href="#">Influencer Marketing</Link>
                </li>
                <li>
                    <Link href="#">YouTube monetization</Link>
                </li>
                <li>
                    <Link href="#">About</Link>
                </li>
                <li>
                    <Link href="#">Contact Us</Link>
                </li>
                <li>
                    <Link href="#">Call Now: 346-299-2202</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigation