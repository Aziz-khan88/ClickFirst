import Link from 'next/link'
import styles from "../../../styles/layout/navigation.module.scss"
import { MenuIcon, SubMenuIcon } from '../app-constants'


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
                                <Link href="#"><MenuIcon />Social Media Management</Link>
                            </div>
                            <div className={styles.MenuList}>
                                <Link href="#"><MenuIcon />Social Media Marketing</Link>
                            </div>
                            <div className={styles.MenuList}>
                                <Link href="#"><MenuIcon />Instagram Marketing</Link>
                            </div>
                            <div className={styles.MenuList}>
                                <Link href="#"><MenuIcon />ClickFirstSMM Tiktok Marketing</Link>
                            </div>
                            <div className={styles.MenuList}>
                                <Link href="#"><MenuIcon />Social Media Advertising</Link>
                            </div>
                            <div className={styles.MenuList}>
                                <Link href="#"><MenuIcon />Facebook Marketing</Link>
                            </div>
                            <div className={styles.MenuList}>
                                <Link href="#"><MenuIcon />Influencers Marketing</Link>
                            </div>
                            <div className={styles.MenuList}>
                                <Link href="#"><MenuIcon /> Snapchat Marketing</Link>
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