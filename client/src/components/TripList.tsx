import { useEffect, useState } from 'react';

import type { Trail } from '../interfaces/Trail';
import Backpack from './backpack';
import { Item } from '../interfaces/Item';



const TripList = () => {
    const [trails, setTrails] = useState<Trail[]>([]);
    const [items, setItems] = useState<Item[]>([]);
    
    useEffect(() => {
        const fetchTrails = async () => {
        try {
            const response = await fetch('/api/trails');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data: Trail[] = await response.json();
            setTrails(data);
        } catch (error) {
            console.error('Error fetching trails:', error);
        }
        };

        const fetchItems = async () => {
            try {
                const response = await fetch('/api/items');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: Item[] = await response.json();
                setItems(data);
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };

        fetchTrails();
        fetchItems();
    }, []);


    const removeTrail = (id: number) => {
        if (!trails) return;
        setTrails(trails.filter(trail => trail.id !== id));
    };

    return (
        <>
            {trails && trails.map((trail) => (
                <div className="row mt-3 mx-3" id="searchResults">
                    <div className="card mt-2">
                        <div className="card-body row">
                            <img className ="col-2 card-img-top" src="https://via.placeholder.com/50" alt="..."> </img>
                            <div className="col-10" id = "card-info">
                                <h5 className="card-title">Trail Name</h5>
                                <p className="card-text">
                                    <strong>City:</strong> {trail.city} <br />
                                    <strong>Zip Code:</strong> {trail.zip} <br />
                                    <strong>Address:</strong> {trail.address} <br />
                                    <strong>Transit:</strong> {trail.transit} <br />
                                    <strong>Description:</strong> {trail.desc} <br />
                                    <strong>Distance:</strong> {trail.distance} <br />
                                    <strong>Surface:</strong> {trail.surface} <br />
                                    <strong>Difficulty:</strong> {trail.difficulty} <br />
                                    <strong>Parking:</strong> {trail.parking} <br />
                                    <strong>Facilities:</strong> {trail.facilities} <br />
                                    <strong>Hours:</strong> {trail.hours} <br />
                                    <strong>Attractions:</strong> {trail.attractions} <br />
                                    <strong>Rating:</strong> {trail.rating} <br />
                                    <strong>Modified:</strong> {trail.ModifiedTime} <br />
                                </p>

                                <a href="#collapseExample" className="btn btn-primary" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Things to Bring
                                </a>
                                <a href="#" className="btn btn-danger" onClick={() => removeTrail(trail.id)}>Remove Trip</a>

                                <Backpack items={items? items.filter(item => item.tripId === trail.id): []} tripId={trail.id} />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default TripList;
