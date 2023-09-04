import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
const position = [21.80, 90.18]
import "leaflet/dist/leaflet.css";
const Map = () => {
  return (
    <MapContainer center={position} zoom={12} scrollWheelZoom={false} className="leaflet-container">
    <TileLayer
       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  )
}

export default Map