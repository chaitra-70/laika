import { useEffect, useState } from "react";
import { getLaunches } from "../services/launchService";
import LaunchCard from "../components/LaunchCard";
import "./Launches.css";

function Launches() {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLaunches() {
      try {
        const data = await getLaunches();
        setLaunches(data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchLaunches();
  }, []);

  return (
    <div className="launches-page">
      <div className="launches-header">
        <h1>Upcoming Launches</h1>
        <p>
          Monitor scheduled launches from agencies and private launch providers
          worldwide.
        </p>
      </div>

      {loading ? (
        <p className="loading">Loading upcoming launches...</p>
      ) : (
        <table className="launch-table">
          <thead>
            <tr>
              <th>Mission</th>
              <th>Vehicle</th>
              <th>Launch Site</th>
              <th>Location</th>
              <th>Date &amp; Time</th>
            </tr>
          </thead>

          <tbody>
            {launches.map((launch) => (
              <LaunchCard
                key={launch.id}
                launch={launch}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Launches;