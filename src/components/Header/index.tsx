'use client'

import Image from "next/image"
import styles from './styles.module.css'

const Header = () => {
    return(
        <header className={styles.header}>
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Game</a>
            <a href="">Blog</a>
        </header>
    )
}

export default Header 