import React from 'react';

import type { ParkInt } from '../interfaces/ParkInt';
// import type { Trip } from '../interfaces/Trip';
// import auth from '../utils/auth';


// Define the props for the component
interface ParkListProps {
    parks: ParkInt[] | null; // users can be an array of UserData objects or null
}


const TrailList: React.FC<ParkListProps> = ({ parks }) => {
    // const [trips, setTrips] = useState<Trip[]>([]);


    // const handleAddToTrips = (e: React.FormEvent<HTMLAnchorElement>) => {
    //     e.preventDefault();
    //     const form = e.currentTarget.closest('form');
    //     if (form) {
    //         if (parks) {
    //             const parkIndex = parseInt(form.id, 10);
    //             if (!isNaN(parkIndex) && parks[parkIndex]) {
    //                 setTrips([...trips, {
    //                     name: parks[parkIndex].name,
    //                     parkId: parks[parkIndex].id,
    //                     userId: auth.getUserId(),
    //                     city: parks[parkIndex].states[0],
    //                     zip: "",
    //                 }]);
    //             }
    //         }
    //     }
    // }

    return (
        <>
            {parks && parks.map((park) =>
                (
                <div className="row mt-3 mx-3" id="searchResults">
                    <div className="card mt-2">
                        <div className="card-body row">
                            <img className ="col-2 card-img-top" src={park.images} alt="..."/>
                            <div className="col-10" id = "card-info">
                                <h5 className="card-title">Park Name</h5>
                                <form action = "" id = {park.id?.toString()}>
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
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default TrailList;
