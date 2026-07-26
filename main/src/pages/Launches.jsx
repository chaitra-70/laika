import { useEffect, useState } from "react";
import "./Launches.css";
import LaunchCard from "../components/LaunchCard";

function Launches() {

    const [launches, setLaunches] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function fetchLaunches() {

            try {

                const response = await fetch(
                    "https://ll.thespacedevs.com/2.2.0/launch/upcoming/?limit=20"
                );

                const data = await response.json();

                setLaunches(data.results);

            } catch (err) {

                console.log(err);

            } finally {

                setLoading(false);

            }

        }

        fetchLaunches();

    }, []);

    if (loading) {

        return <h1 className="loading">Loading Launches...</h1>;

    }

    return (

        <div className="launch-page">

            <h1 className="page-title">
                Upcoming Launches
            </h1>

            <p className="page-subtitle">
                Scheduled missions from NASA, ISRO, SpaceX, ESA,
                JAXA and other launch providers.
            </p>

            <table className="launch-table">

                <thead>

                    <tr>

                        <th>Agency</th>
                        <th>Mission</th>
                        <th>Rocket</th>
                        <th>Date</th>
                        <th>Launch Site</th>
                        <th>Status</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        launches.map((launch) => (

                            <LaunchCard
                                key={launch.id}
                                launch={launch}
                            />

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default Launches;