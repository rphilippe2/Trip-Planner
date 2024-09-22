import React, { useState, useEffect } from "react";
import TripList from "../components/Trips";

const Trips = () => {
    const [trips, setTrips] = useState([]);  // State to hold trips data
    const [loading, setLoading] = useState(true); // State to manage loading

    // Function to fetch trips data
    const fetchTrips = async () => {
        try {
            const response = await fetch("https://api.example.com/trips");  // Replace with actual API URL
            const data = await response.json();
            setTrips(data);  // Update state with fetched data
        } catch (error) {
            console.error("Error fetching trips:", error);
        } finally {
            setLoading(false);  // Set loading to false after data is fetched
        }
    };

    // Use useEffect to fetch data when the component mounts
    useEffect(() => {
        fetchTrips();
    }, []);  // Empty dependency array ensures this runs only once

    // Render loading state or the TripList component with fetched data
    return (
        <>
            {loading ? (
                <p>Loading trips...</p>  // Display a loading message
            ) : (
                <TripList trips={trips} />  // Pass fetched trips data to TripList
            )}
        </>
    );
};

export default Trips;