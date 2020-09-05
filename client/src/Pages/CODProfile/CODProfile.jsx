import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CODProfile.css";

const CODProfile = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/v1/profile/${process.env.REACT_APP_PLATFORM}/${process.env.REACT_APP_GAMERTAG}`
        );
        const data = response.data.data;
        console.log("DATA API", data);
        setData(data);
        setLoading(false);
      } catch (err) {
        /*setLoading(false);
        const error = err.response.data.message;
        setError(err);*/
      }
    };
    fetch();
  }, []);

  return (
    <div className="main">
      {loading ? <h3>Loading Stats...</h3> : null}
      {error ? <p>{error}</p> : null}
      <h1>Warzone Stats</h1>
      {data ? (
        <h2>{`Gamer Name: ${data.platformInfo.platformUserHandle}`}</h2>
      ) : null}
      <div className="container">
        <span className="wins">
          {data ? `Wins ${data.segments[0].stats.wins.displayValue}` : null}
        </span>
        <span className="kd">
          {data
            ? `K/D \n ${data.segments[0].stats.kdRatio.displayValue}`
            : null}
        </span>
        <span className="kills">
          {data ? `Kills ${data.segments[0].stats.kills.displayValue}` : null}
        </span>
        <span className="deaths">
          {data ? `Deaths ${data.segments[0].stats.deaths.displayValue}` : null}
        </span>
        <span className="downs">
          {data ? `Downs ${data.segments[0].stats.downs.displayValue}` : null}
        </span>
        <span className="damageGame">
          {data
            ? `Damage/game ${data.segments[0].stats.weeklyDamagePerMatch.displayValue}`
            : null}
        </span>
        <span className="scoreGame">
          {data
            ? `Score/game ${data.segments[0].stats.scorePerGame.displayValue}`
            : null}
        </span>
      </div>
    </div>
  );
};

export default CODProfile;
