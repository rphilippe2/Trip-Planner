import TripList from "../components/TripList";

const Trips = () => {
    return (
        <>
            <section className = "container-fluid">
                <div className="row text-center" id="title">
                    <h1 className = "col mt-5 mb-4"> Your Trips </h1>
                </div>

                <TripList/> 
            </section>
        </>
    );
};

export default Trips;