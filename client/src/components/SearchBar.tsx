import { useState, ChangeEvent, FormEvent } from "react";
import { Trail } from "../interfaces/Trail";
import TrailList from "./TrailList"
import { ParkInt } from "../interfaces/ParkInt";
import ParkList from "./ParkList";
import { fetchParkByCityName } from "../api/parkAPI";
const SearchBar = () => {
    const [searchOption, setSearchOption] = useState<string>('');
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [search, setSearch] = useState<boolean>(false);
    // const [trails, setTrails] = useState<Trail[]>([]);
    const [parks, setParks] = useState<ParkInt[]>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchOption(e.target.value);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            //API HERE
            if (searchOption === 'parks') {
                const data = await fetchParkByCityName(searchTerm);
                
                const newParksArray: ParkInt[] =  [];
                let count = 0;
                data.data.map((fetchdata: { fullname: string; url: string; description: string; states: string; designation: string; images: { url: string }[] }) => {
                    const park: ParkInt = {
                        id: count,
                        name: fetchdata.fullname,
                        url: fetchdata.url,
                        description: fetchdata.description,
                        states: fetchdata.states.split(',').map(state => state.trim()),
                        designation: fetchdata.designation,
                        images: fetchdata.images[0].url
                    };
                    count++;
                    newParksArray.push(park);
                });

                setParks(newParksArray);
                setSearch(true);
            }else {
                // const data = await fetchTrailByName(searchTerm);
                // setTrails(data);
                // setSearch(true);
            }

            setSearch(true);
        } catch (err) {
            console.error('Failed to search', err);
        }
    };

    return (
        <>
            <div className="d-flex justify-content-center mt-5" id="search">
                <div className="col-md-6 text-center">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input 
                            className="form-control" 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)} />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </div>

                        <div className="d-flex justify-content-end mt-2">
                            <div className="form-check form-check-inline">
                                <input                                 className="form-check-input" 
                                    type="radio" 
                                    name="searchOption" 
                                    id="parks" 
                                    value="parks" 
                                    onChange={handleChange}
                                    checked={searchOption === 'parks'} 
                                />
                                <label className="form-check-label" htmlFor="parks">Parks</label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    name="searchOption" 
                                    id="trails" 
                                    value="trails" 
                                    onChange={handleChange}
                                    checked={searchOption === 'trails'}
                                />
                                <label className="form-check-label" htmlFor="trails">Trails</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {!search ? 
                <>
                    <h3 className="text-center mt-5">Search for parks or trails</h3>
                </>
                : 
                <>
                    {/* {searchOption === 'parks' ? <ParkList parks={parks} /> :
                    <TrailList trails={trails} />} */}
                    <ParkList parks={parks}></ParkList>
                </>
        }
        </>
    );
};

export default SearchBar;