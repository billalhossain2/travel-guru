import GoogleMapReact from 'google-map-react'
const location = {
    address: "Cox's Bazar",
    lat: 21.5833,
    lng: 92.0167,
  }
const Map = () => {
  return (
    <div>
       <GoogleMapReact
       bootstrapURLKeys={{ key: 'AIzaSyAkiB0LLz5ZhBf69aZ4hjQc9BAoXDkY9G4' }}
       defaultCenter={location}
       defaultZoom={15}
       />
    </div>
  )
}

export default Map