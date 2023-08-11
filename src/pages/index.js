import Head from "next/head"

import Layout from "@components/Layout/Layout"
import Section from "@components/Section/Section"
import Container from "@components/Container/Container"
import Map from "@components/Map/Map"

import styles from "@styles/Home.module.scss"

const DEFAULT_CENTER = [38.907132, -77.036546]

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Next.js Leaflet Starter</title>
        <meta
          name="description"
          content="Create mapping apps with Next.js Leaflet Starter"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section>
        <Container>
          <h1 className={styles.title}>Next.js Leaflet Starter</h1>

          <Map
            className={styles.homeMap}
            width="800"
            height="400"
            center={DEFAULT_CENTER}
            zoom={12}
          >
            {({ TileLayer, Marker, Popup }) => (
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={DEFAULT_CENTER}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </>
            )}
          </Map>
        </Container>
      </Section>
    </Layout>
  )
}