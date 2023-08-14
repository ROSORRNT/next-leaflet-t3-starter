import dynamic from 'next/dynamic';

import { FC } from "react"
import { TileLayer, Marker, Popup } from "react-leaflet"

// create DynamicMap with dynamic import for charging ./DynamicMap only on client side
const DynamicMap = dynamic(() => import('./DynamicMap'), {
  ssr: false
});

interface MapProps {
  width: number
  height: number
  children: (components: {
    TileLayer: typeof TileLayer
    Marker: typeof Marker
    Popup: typeof Popup
  }) => React.ReactNode
  [key: string]: any
}


const Map: FC<MapProps> = (props) => {
  const { width, height } = props
  return (
    <div style={{ aspectRatio: width / height }}>
      <DynamicMap {...props} />
    </div>
  )
}

export default Map;