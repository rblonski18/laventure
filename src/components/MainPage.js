import React, { useState, useEffect } from 'react';
import NavBar from "./NavBar"
import SideBar from "./SideBar"
import SearchBar from "./SearchBar"
import data from "./demo.json"
import Map from "./Map"

const MainPage = (props) => {

    const [keyword, setKeyword] = useState('');
    const [activityList, setActivityList] = useState([]);
    const [ratingList, setRatingList] = useState([]);
    const [recentList, setRecentList] = useState([]);
    const [wasFiltered, setWF] = useState(false);
    const [filterBy,setFilter] = useState('Title');
    const [ userLoggedIn, setULI ] = useState(false);

    const handleSearch = (input) => {
        console.log(keyword + ", " + activityList + ", " + wasFiltered + ", " + filterBy + ", " + userLoggedIn);
        const filteredList = activityList.filter(activity => {
            if(filterBy === "Title") {
                return activity.name.toString().toLowerCase().includes(input.toString().toLowerCase());
            } else {
                return activity.location.toString().toLowerCase().includes(input.toString().toLowerCase());
            }
        })
        
        setWF(true)
        setActivityList(filteredList) 
    }

    useEffect(() => {
        setActivityList(data);
    }, [setActivityList])

    const resetListing = (event) => {
        setActivityList(data);
        setWF(false)
    } 

    // write function to fetch data from db upon search keyword change

    return(
        // render navbar
        <div className="content">
            <div>
                <NavBar userLoggedIn={userLoggedIn} setULI={setULI} />
            </div>
            <div className="under">
                <div className="sidebar">
                    <SideBar activityListing={activityList} />
                </div>
                <div className="mp-right">
                    <div className="searchBar-div">
                        <SearchBar
                            keyword={keyword}
                            setKeyword={setKeyword}
                            setMainPageFilter={setFilter}
                            handleSearch={handleSearch}
                            resetListing={resetListing}
                            wf={wasFiltered}
                        />
                    </div>
                    <div className="map-div">
                        <Map activityList={activityList} />
                    </div>
                </div>
            </div>
        </div>

    );

}

export default MainPage
