import { useState, useEffect } from "react";
import TripList from "../components/TripList";
import { Trail } from "../interfaces/Trip-Planner";
import { Item } from '../interfaces/Item';

const Trips = () => {
    const [trips, setTrips] = useState<Trail[]>([]);
    const [items, setItems] = useState<Item[]>([]);
    const [loading, setLoading] = useState(true);

    // Function to fetch trips data
    const fetchTrips = async () => {
        try {
            const response = await fetch("");
            const data = await response.json();
            setTrips(data);
        } catch (error) {
            console.error("Error fetching trips:", error);
        } finally {
            setLoading(false);
        }
    };

    const fetchItems = async () => {
        try {
            const response = await fetch("");
            const data = await response.json();
            setItems(data);  // Update state with fetched data
        } catch (error) {
            console.error("Error fetching Items:", error);
        } finally {
            setLoading(false);  // Set loading to false after data is fetched
        }
    };

    // Use useEffect to fetch data when the component mounts
    useEffect(() => {
        fetchTrips();
        fetchItems();
    }, []);  // Empty dependency array ensures this runs only once

    // Render loading state or the TripList component with fetched data
    return (
        <>
            {loading ? (
                <p>Loading trips...</p>  // Display a loading message
            ) : (
                <TripList trails={trips} items={items}  />  // Pass fetched trips data to TripList
            )}
        </>
    );
};

export default Trips;