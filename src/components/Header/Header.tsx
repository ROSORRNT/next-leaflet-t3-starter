import { FC } from "react"

import Container from "@/components/Container/Container"

import styles from "./Header.module.scss"
// import Navbar from "@/components/Navbar/Navbar"

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        {/* <Navbar /> */}
      </Container>
    </header>
  )
}

export default Header
