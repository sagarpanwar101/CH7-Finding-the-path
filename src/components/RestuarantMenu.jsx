import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { GET_MENU_API_URL, IMG_CDN } from "./config";

const RestuarantMenu = () => {
    const [resInfo, SetresInfo] = useState(null);
    const { resId } = useParams(); // call params and get value of restaurant id using object destructuring 
    const [menuItems, setMenuItems] = useState([]);
   
    useEffect(() => {
        fetchMenu();
    }, []);
 
    const fetchMenu = async () => {
        const data = await fetch(GET_MENU_API_URL);
        const json = await data.json();

        //SetresInfo(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info);
        if (json?.message?.includes("Oops!! Something Went Wrong")) {
            throw new Error("API Error: " + json.message); // If the API response contains the error message, throw an error.
          }
    
          console.log('json data::',json);
          

        const restaurantData = json?.data?.cards?.find(card => card?.card?.info)?.card?.info;
        SetresInfo(restaurantData);

        const menuItemsData = json?.data?.cards?.find(card => card?.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards
            ?.flatMap(card => card?.card?.info) || [];
        setMenuItems(menuItemsData);

    };

    if (resInfo === null) {
        return <Shimmer />
    }

    return (
            <div className="restaurant-menu">
                <div className="restaurant-summary">
                    <img src={IMG_CDN} alt={name} />
                    <div>
                        <h2>{resInfo.name}</h2>
                        <p>{resInfo.cuisines.join(", ")}</p>
                        <p>{resInfo.avgRating} ★ | {resInfo.sla.slaString} | {resInfo.costForTwoMessage}</p>
                    </div>
                </div>

                <div className="recommendation">
                    {/* <p className="menu-count">
                {menuItems.length} ITEMS
                </p> */}
            </div>
            </div>

            );
};
            export default RestuarantMenu;