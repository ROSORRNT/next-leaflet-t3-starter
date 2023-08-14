import { useEffect, ReactNode, FC } from "react"
import Leaflet from "leaflet"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

import classes from "./Map.module.scss"
interface MapProps {
  children: (components: {
    TileLayer: typeof TileLayer
    Marker: typeof Marker
    Popup: typeof Popup
  }) => ReactNode
  className?: string
  width?: number
  height?: number
  [key: string]: any
}

const Map: FC<MapProps> = ({ children, className, ...rest }) => {
  let mapClassName = classes.map

  if (className) {
    mapClassName = `  ${className}`
  }

  // problem with .prototype._getIconUrl

  useEffect(() => {
    ;(async function init() {
      // delete Leaflet.Icon.Default.prototype._getIconUrl
      Leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: "leaflet/images/marker-icon-2x.png",
        iconUrl: "leaflet/images/marker-icon.png",
        shadowUrl: "leaflet/images/marker-shadow.png",
      })
    })()
  }, [])

  return (
    <MapContainer className={className} 
    style={{ width: "100%", height: "100%" }}
    {...rest}>
      {children({ TileLayer, Marker, Popup })}
    </MapContainer>
  )
}

export default Map
