import { useState } from "react";
import "./ApodCard.css";

function ApodCard({ apod }) {
  const [showExplanation, setShowExplanation] = useState(false);

  const shortDescription =
    apod.explanation.length > 180
      ? apod.explanation.substring(0, 180) + "..."
      : apod.explanation;

  return (
    <>
      <div className="apod-container">
        <div className="apod-image-section">
          {apod.media_type === "image" ? (
            <img
              src={apod.hdurl || apod.url}
              alt={apod.title}
              className="apod-image"
            />
          ) : (
            <iframe
              src={apod.url}
              title={apod.title}
              className="apod-video"
              allowFullScreen
            />
          )}
        </div>

        <div className="apod-info">
          <span className="apod-tag">NASA APOD</span>

          <h2>{apod.title}</h2>

          <p className="apod-date">{apod.date}</p>

          <p className="apod-description">
            {shortDescription}
          </p>

          <button
            className="explanation-btn"
            onClick={() => setShowExplanation(true)}
          >
            Brief Explanation
          </button>
        </div>
      </div>

      {showExplanation && (
        <div
          className="modal-overlay"
          onClick={() => setShowExplanation(false)}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{apod.title}</h2>

            <p>{apod.explanation}</p>

            <button
              className="close-btn"
              onClick={() => setShowExplanation(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ApodCard;