"use client";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useMemo } from "react";

interface MapProps {
  lat: number;
  lng: number;
}

const containerStyle = {
  width: "100%",
  height: "300px",
  borderRadius: "10px",
};

export default function GoogleMaps({ lat, lng }: MapProps) {
  const center = useMemo(() => ({ lat, lng }), [lat, lng]);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  if (loadError) return <p>Errore nel caricamento di Google Maps</p>;
  if (!isLoaded) return <p>Caricamento mappa in corso...</p>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
      <Marker position={center} />
    </GoogleMap>
  );
}
