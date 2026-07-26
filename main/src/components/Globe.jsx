import Globe from "react-globe.gl";
import { useRef, useEffect } from "react";

function GlobeView({ iss }) {
  const globeRef = useRef();

  useEffect(() => {
    if (globeRef.current && iss.latitude && iss.longitude) {
      globeRef.current.pointOfView(
        {
          lat: iss.latitude,
          lng: iss.longitude,
          altitude: 2,
        },
        1000
      );
    }
  }, [iss]);

  const points = [
    {
      lat: iss.latitude,
      lng: iss.longitude,
      size: 0.8,
      color: "#ff4d4d",
    },
  ];

  const rings = [
    {
      lat: iss.latitude,
      lng: iss.longitude,
      color: "#4da6ff",
      maxR: 3,
      propagationSpeed: 2,
      repeatPeriod: 900,
    },
  ];

  return (
    <Globe
      ref={globeRef}
      width={850}
      height={700}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      backgroundColor="rgba(0,0,0,0)"
      pointsData={points}
      pointLat="lat"
      pointLng="lng"
      pointColor="color"
      pointAltitude={0.02}
      pointRadius="size"
      ringsData={rings}
      ringLat="lat"
      ringLng="lng"
      ringColor="color"
      ringMaxRadius="maxR"
      ringPropagationSpeed="propagationSpeed"
      ringRepeatPeriod="repeatPeriod"
    />
  );
}

export default GlobeView;