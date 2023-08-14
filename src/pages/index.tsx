import Head from "next/head"
import Layout from "@/components/Layout/Layout"
import Section from "@/components/Section/Section"
import Container from "@/components/Container/Container"
import Map from "@/components/Map/Map"
import styles from "@/styles/Home.module.scss"

const DEFAULT_CENTER: [number, number] = [44.552641, 3.290079]

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Leaflet T3 Starter</title>
        <meta
          name="description"
          content="Create mapping apps with Next.js Leaflet Starter"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section>
        <Container>
          <h1 className="bg-red-500 text-4xl font-bold text-center mb-8">
            Leaflet T3 Starter
          </h1>

          <Map
            className={styles.homeMap}
            width={800}
            height={400}
            center={DEFAULT_CENTER}
            zoom={16}
          >
            {({ TileLayer, Marker, Popup }) => (
              <>
                <TileLayer
                  {...({
                    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                    attribution:
                      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                  } as any)}
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