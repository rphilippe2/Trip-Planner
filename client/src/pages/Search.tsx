import SearchBar from '../components/SearchBar';

const Search = () => {
    return (
        <>
            <section className = "container-fluid">
                <div className ="row text-center" id="title">
                    <h1 className = "col mt-5 mb-4"> TripPlanner </h1>
                </div>
                
                <SearchBar />
            </section>
        </>
    );
};

export default Search;
