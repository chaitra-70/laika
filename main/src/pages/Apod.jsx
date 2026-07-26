import { useState, useEffect } from "react";
import { getApod } from "../services/apodService";
import ApodCard from "../components/ApodCard";
function Apod() {
  const [apod, setApod] = useState(null);
  useEffect(() => {
    async function fetchApod() {
      const data = await getApod();
      console.log(data);
      setApod(data);
    }
    fetchApod();
  }, []);
  return (
    <div className="apod-page">
      <h1>Astronomy Picture of the Day</h1>
      {apod && <ApodCard apod={apod} />}
    </div>
  );
}
export default Apod;