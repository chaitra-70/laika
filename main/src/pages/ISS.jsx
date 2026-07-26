import { useEffect, useState } from "react";
import { getISSLocation } from "../services/issServices";
import GlobeView from "../components/Globe";
import TelemetryCard from "../components/TelemetryCard";
import "./ISS.css";

export default function ISS() {
  const [iss, setIss] = useState({});
  const [location, setLocation] = useState({
    region: "--",
    country: "--",
  });

  useEffect(() => {
    async function fetchISS() {
      const data = await getISSLocation();
      setIss(data);
    }

    fetchISS();

    const interval = setInterval(fetchISS, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="iss-page">

      <div className="iss-header">
        <h1>ISS Mission Control</h1>
        <p>
          Track the International Space Station in real time.
        </p>
      </div>

      <div className="iss-layout">

        <div className="globe-wrapper">
          <GlobeView iss={iss} />
        </div>

        <TelemetryCard
          iss={iss}
          location={location}
        />

      </div>

    </div>
  );
}