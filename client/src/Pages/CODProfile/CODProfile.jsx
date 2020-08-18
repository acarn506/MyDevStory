import React, { useState, useEffect } from "react";
import axios from "axios";

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
        setLoading(false);
        const error = err.response.data.message;
        setError(err);
      }
    };
    fetch();
  }, []);

  return (
    <div>
      {loading ? <p>Loading Stats...</p> : null}
      {error ? <p>{error}</p> : null}
    </div>
  );
};

export default CODProfile;
