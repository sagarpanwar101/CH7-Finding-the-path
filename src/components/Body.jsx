import React, { useEffect, useState } from "react";
import { GET_RES_API_URL, restaurantList } from "../components/config";
import RestaurantCard from "../components/RestaurantCard";
import Shimmer from "../components/Shimmer";


const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [FilteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loadingData, setLoadingData] = useState(false)

// Filtering resturants based on search
const filterData = (newsearchText, restaurants) => {
  return restaurants.filter(restaurant =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

// Whenever react state updates, react triggers reconcilation cycle (re-renders the component)
  useEffect(() => {
    fetchData();
  }, []);

  // fetch all the original resturants
  const fetchData = async () => {
    try {
      setLoadingData(true)
      const data = await fetch(GET_RES_API_URL);
      const json = await data.json();
      const restList = []
      // console.log(json.data);
      json?.data?.cards.forEach((value) => {
        if (value?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
          value?.card?.card?.gridElements?.infoWithStyle?.restaurants.forEach((val) => {
            restList.push(val);
          });
        }
      }); 
      // const restaurant = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      if (restList) {
        setListOfRestaurant(restList);
        setLoadingData(false)
        setFilteredList(restList);
      }
    } catch (error) {
      console.error("Fetching errror::", error);
    }
  }

  if (loadingData) {
    return <Shimmer/>
  }

  // const handleSearch = (e) => {
  //   setSearchText(e.target.value);
  //   const filteredRestaurants = filterData(searchText, listOfRestaurant);
  //   // console.log(filteredRestaurants);
  //   setListOfRestaurant(filteredRestaurants);
  // }


  const handleSearch = (e) => {
    const newSearchText = e.target.value;
    setSearchText(newSearchText);
    const filteredRestaurants = filterData(newSearchText, listOfRestaurant);
    setFilteredList(filteredRestaurants);
  }

  // filtering top rated

  const handleFilter = () => {
    const filteredList = listOfRestaurant.filter(
      (data) => data?.info?.avgRating >= 4.0
    );
    setFilteredList(filteredList);
  }

  // const handleFilter = () => {
  //   setLoadingData(true)
  //   const filteredList = listOfRestaurant.filter(
  //     (data) => data?.info?.avgRating >=4.0
  //   );
  //   setLoadingData(false)
  //   setListOfRestaurant(filteredList);
  // }

  return (
    <>
      <div className="search-container">
        <input type="text" placeholder="Search restaurants" value={searchText} className="search-input" onChange={handleSearch} />
        <button onClick={() => {location.reload()}}>reset</button>
      </div>
      <div className="filtercontainer">
        <button
          className="filter-btn"
          onClick={handleFilter}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-list">
      {FilteredList.length > 0 ? (
        FilteredList.map((restaurant, index) => (
          <RestaurantCard data={restaurant} key={index} />
        ))
      ) : (
        <p>No restaurants available</p>
      )}
    </div>
     {/* <div className="restaurant-list">
        {listOfRestaurant.length > 0 ? (
          FilteredList.map((restaurant,index) => (
            <RestaurantCard data={restaurant}
              key={index} />
          ))
        ) : (
          <p>No restaurants available</p>
        )}
      </div> */}
    </>
  );
};

export default Body;

