import { useEffect, useState } from "react";
import "./Asteroids.css";
import { getAsteroids } from "../services/asteroidService";
import AsteroidCard from "../components/AsteroidCard";

function Asteroids() {
  const [asteroids, setAsteroids] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchAsteroids() {
      try {
        const data = await getAsteroids();
        if (!data.near_earth_objects) {
          console.log(data);
          return;
        }
        const asteroidList = Object.values(
          data.near_earth_objects
        ).flat();
        setAsteroids(asteroidList);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchAsteroids();
  }, []);
  const hazardousCount = asteroids.filter(
    (asteroid) => asteroid.is_potentially_hazardous_asteroid
  ).length;
  const closestAsteroid =
    asteroids.length > 0
      ? [...asteroids].sort(
          (a, b) =>
            Number(a.close_approach_data[0].miss_distance.kilometers) -
            Number(b.close_approach_data[0].miss_distance.kilometers)
        )[0]
      : null;
  const fastestAsteroid =
    asteroids.length > 0
      ? [...asteroids].sort(
          (a, b) =>
            Number(
              b.close_approach_data[0].relative_velocity
                .kilometers_per_hour
            ) -
            Number(
              a.close_approach_data[0].relative_velocity
                .kilometers_per_hour
            )
        )[0]
      : null;
  if (loading) {
    return <h2 className="loading">Loading Asteroids...</h2>;
  }
  return (
    <div className="asteroids-page">
      <h1 className="page-title">
         Near Earth Asteroids
      </h1>
      <p className="page-subtitle">
        Track asteroids approaching Earth in real time.
      </p>
      <div className="stats-container">
        <div className="stat-box">
          <h2>{asteroids.length}</h2>
          <p>Total Asteroids</p>
        </div>
        <div className="stat-box">
          <h2>{hazardousCount}</h2>
          <p>Hazardous</p>
        </div>
        <div className="stat-box">
          <h2>
            {closestAsteroid
              ? Number(
                  closestAsteroid.close_approach_data[0]
                    .miss_distance.kilometers
                ).toLocaleString()
              : "--"}
          </h2>
          <p>Closest (km)</p>
        </div>
        <div className="stat-box">
          <h2>
            {fastestAsteroid
              ? Math.round(
                  Number(
                    fastestAsteroid.close_approach_data[0]
                      .relative_velocity.kilometers_per_hour
                  )
                ).toLocaleString()
              : "--"}
          </h2>
          <p>Fastest (km/h)</p>
        </div>
      </div>
      <div className="asteroid-container">
        {asteroids.map((asteroid) => (
          <AsteroidCard
            key={asteroid.id}
            asteroid={asteroid}
          />
        ))}
      </div>
    </div>
  );
}
export default Asteroids;