import React, { useEffect } from "react";

const Park: React.FC = () => {
  // Fetch parks based on user input
  const fetchParkByName = async (parkName: string): Promise<void> => {
    const apiKey = process.env.API_KEY_PARKS;
    try {
      const response = await fetch(
        `https://developer.nps.gov/api/v1/parks?api_key=${apiKey}&q=${parkName}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data;
    } catch (err) {
      console.log("Error from data retrieval:", err);
    }
  };

  const fetchParkByCityName = async (cityName: string): Promise<void> => {
    const apiKey = process.env.API_KEY_PARKS;
    try {
      const response = await fetch(
        `https://developer.nps.gov/api/v1/parks?api_key=${apiKey}&q=${cityName}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data;
    } catch (err) {
      console.log("Error from data retrieval:", err);
    }
  };

  // Fetch parks when the component mounts
  useEffect(() => {
    fetchParkByName("Yellowstone");
    fetchParkByCityName("Denver");
  }, []);

  return <div>Park Component</div>;
};

export default Park;
