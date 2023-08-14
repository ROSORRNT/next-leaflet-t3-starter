import { FC } from "react"

import Container from "@/components/Container/Container"

import styles from "./Footer.module.scss"

interface FooterProps {
  [key: string]: any
}

const Footer: FC<FooterProps> = ({ ...rest }) => {
  return (
    <footer className={styles.footer} {...rest}>
      <Container className={`${styles.footerContainer} ${styles.footerLegal}`}>
        <p>
          &copy; <a href="#">Next.js Leaflet Starter</a>,{" "}
          {new Date().getFullYear()}
        </p>
      </Container>
    </footer>
  )
}

export default Footer
