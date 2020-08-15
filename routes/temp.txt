import React from "react";
import axios from "axios";

const Node = () => {
  const getData = async () => {
    /*let response = await axios.get(
      "http://public-api.tracker.gg/v2/warzone/standard/profile/psn/b4mk14",
      {
        headers: {
          "TRN-Api-Key": "d217d2cc-8441-4639-83db-ee053fc8f697",

          "Access-Control-Allow-Origin": "http://localhost:3000"
        }
      }
    );
    try {
      let warData = response.data.data;
      console.log(warData);
    } catch (error) {
      console.log(error);
    }*/
    //let bearer = "Bearer " + bearer_token;

    const response = await fetch(
      "https://public-api.tracker.gg/v2/warzone/standard/profile/psn/b4mk14",
      {
        method: "GET",
        mode: "no-cors",
        credentials: "include",
        header: {
          "TRN-Api-Key": "d217d2cc-8441-4639-83db-ee053fc8f697",
          "Content-Type": "application/json"
        }
      }
    );
  };

  return (
    <div>
      <button onClick={() => getData()}>Start</button>
      <h1>Node</h1>
    </div>
  );
};

export default Node;
