import React from 'react';

import type { Trail } from '../interfaces/Trip-Planner';


// Define the props for the component
interface TrailListProps {
    trails: Trail[] | null; // users can be an array of UserData objects or null
}


const TrailList: React.FC<TrailListProps> = ({ trails }) => {
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

                            <a href="#" className="btn btn-primary">Add To Trips</a>
                            
                            {/* <!-- Once added the button will turn grey and text change to added and also disabled--> */}
                            <a href="#" className="btn btn-secondary disabled">Added</a>
                                </div>
                            </div>
                        </div>
                </div>
            ))}
        </>
    );
};

export default TrailList;
