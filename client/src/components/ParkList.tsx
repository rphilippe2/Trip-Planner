import React from 'react';

import type { ParkInt } from '../interfaces/ParkInt';


// Define the props for the component
interface ParkListProps {
    parks: ParkInt[] | null; // users can be an array of UserData objects or null
}


const TrailList: React.FC<ParkListProps> = ({ parks }) => {
    return (
        <>
            {parks && parks.map((park) => (
                <div className="row mt-3 mx-3" id="searchResults">
                    <div className="card mt-2">
                        <div className="card-body row">
                            <img className ="col-2 card-img-top" src={park.images} alt="..."> </img>
                            <div className="col-10" id = "card-info">
                                <h5 className="card-title">Trail Name</h5>
                                <p className="card-text">
                                    <strong>Park Name:</strong> {park.name} <br />
                                    <strong>Park URL:</strong> {park.url} <br />
                                    <strong>Description:</strong> {park.description} <br />
                                    <strong>State:</strong> {park.states} <br />
                                    <strong>Designation:</strong> {park.designation} <br />
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
