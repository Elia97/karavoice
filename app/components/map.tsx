import { FC } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface MapProps {
  lat: number;
  lng: number;
}

const Map: FC<MapProps> = ({ lat, lng }) => {
  const containerStyle = {
    width: "100%",
    height: "500px",
    borderRadius: "20px",
  };
  const center = { lat, lng };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
