import React, { useEffect, useState } from "react";
import { ArrivalPredictions } from "../interfaces/arrivalPredictions";
import useFetchData from "../hooks/useFetchData";
import Header from "../components/Header";

export default function MainPage() {
  const [arrivalPredictions, setArrivalPredictions] =
    useState<ArrivalPredictions[]>();
  const { fetchArrivalPredictions } = useFetchData();

  const init = async () => {
    const data = await fetchArrivalPredictions("490008660N");
    setArrivalPredictions(data);
  };

  useEffect(() => {
    init();
  }, []);

  console.log(`arrivlan predictions ${JSON.stringify(arrivalPredictions)}`);

  return (
    <div className="mainpage-container">
      <Header />
      {arrivalPredictions?.map((prediction) => {
        const dateString = new Date(
          prediction.expectedArrival
        ).toLocaleTimeString();
        return (
          <div>
            <h3>Bus Line {prediction?.lineName}</h3>
            <h3>Arriving at {dateString}</h3>
          </div>
        );
      })}
    </div>
  );
}
