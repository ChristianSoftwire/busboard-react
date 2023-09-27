import React, { useEffect, useState } from "react";
import { ArrivalPredictions } from "../interfaces/arrivalPredictions";

export default function () {
  const fetchArrivalPredictions = async (stopPointId: string) => {
    const response = await fetch(
      `https://api.tfl.gov.uk/StopPoint/${stopPointId}/Arrivals`
    );
    const data: ArrivalPredictions[] = await response.json();
    const predicitions = data.map((prediction) => {
      return {
        lineName: prediction.lineName,
        expectedArrival: prediction.expectedArrival,
        stationName: prediction.stationName,
      };
    });
    return predicitions;
  };

  return {
    fetchArrivalPredictions,
  };
}
