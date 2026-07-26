function TelemetryCard({ iss, location }) {
  return (
    <div className="telemetry-card">
      <div className="telemetry-header">
        <h2>Mission Telemetry</h2>
        <div className="live-status">
          <span className="live-dot"></span>
          LIVE
        </div>
      </div>

      <div className="telemetry-grid">
        <div className="row">
          <span>Latitude</span>
          <strong>
            {iss.latitude
              ? `${Number(iss.latitude).toFixed(2)}°`
              : "--"}
          </strong>
        </div>

        <div className="row">
          <span>Longitude</span>
          <strong>
            {iss.longitude
              ? `${Number(iss.longitude).toFixed(2)}°`
              : "--"}
          </strong>
        </div>

        <div className="row">
          <span>Region</span>
          <strong>{location.region || "--"}</strong>
        </div>

        <div className="row">
          <span>Country</span>
          <strong>{location.country || "--"}</strong>
        </div>

        <div className="row">
          <span>Altitude</span>
          <strong>
            {iss.altitude
              ? `${Math.round(iss.altitude)} km`
              : "--"}
          </strong>
        </div>

        <div className="row">
          <span>Velocity</span>
          <strong>
            {iss.velocity
              ? `${Math.round(iss.velocity)} km/h`
              : "--"}
          </strong>
        </div>

        <div className="row">
          <span>Visibility</span>
          <strong>{iss.visibility || "--"}</strong>
        </div>

        <div className="row">
          <span>Updated</span>
          <strong>{new Date().toUTCString()}</strong>
        </div>
      </div>
    </div>
  );
}

export default TelemetryCard;