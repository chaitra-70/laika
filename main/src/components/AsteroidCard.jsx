import { motion } from "framer-motion";
import "./AsteroidCard.css";
function AsteroidCard({ asteroid }) {
  const approach = asteroid.close_approach_data[0];
  return (
    <motion.div
      className="asteroid-card"
      whileHover={{
        scale: 1.04,
        y: -8,
        boxShadow: "0 0 30px rgba(0,191,255,0.6)",
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="asteroid-title">☄️ {asteroid.name}</h2>

      <div className="badge-container">
        <span
          className={
            asteroid.is_potentially_hazardous_asteroid
              ? "hazard"
              : "safe"
          }
        >
          {asteroid.is_potentially_hazardous_asteroid
            ? "⚠️ Hazardous"
            : "Safe"}
        </span>
      </div>
      <div className="asteroid-info">
        <p>
           <strong>Diameter:</strong>{" "}
          {asteroid.estimated_diameter.kilometers.estimated_diameter_max.toFixed(
            2
          )}{" "}
          km
        </p> 
         <p>
          <strong>Closest Approach:</strong>{" "}
          {approach.close_approach_date}
        </p>
        <p>
          <strong>Miss Distance:</strong>{" "}
          {Number(approach.miss_distance.kilometers).toLocaleString()} km
        </p>
        <p>
           <strong>Velocity:</strong>{" "}
          {Math.round(
            Number(approach.relative_velocity.kilometers_per_hour)
          ).toLocaleString()}{" "}
          km/h
        </p>
      </div>
    </motion.div>
  );
}
export default AsteroidCard;