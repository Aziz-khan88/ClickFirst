import Link from 'next/link'
import styles from "../../../styles/layout/navigation.module.scss"

const Navigation = () => {
    return (
        <div className={styles.mainMenu}>
            <ul>
                <li>
                    <Link href="#">Home</Link>
                </li>
                <li>
                    <Link href="#">Services</Link>
                </li>
                <li>
                    <Link href="#">YouTube monetization</Link>
                </li>
                <li>
                    <Link href="#">Influencer Marketing</Link>
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