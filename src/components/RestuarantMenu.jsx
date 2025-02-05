import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { IMG_CDN } from "./config";


const BASE_IMAGE_UEL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"


const RestuarantMenu = () => {
    const [resInfo, SetresInfo] = useState(null);
    const { id } = useParams(); // call params and get value of restaurant id using object destructuring 

    // console.log('id::',id);

    const [menuItems, setMenuItems] = useState([]);

    const GET_MENU_API_URL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=${id}&submitAction=Enter`


    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        console.log(GET_MENU_API_URL);

        const data = await fetch(GET_MENU_API_URL);
        const json = await data.json();


        if (json?.message?.includes("Oops!! Something Went Wrong")) {
            throw new Error("API Error: " + json.message); // If the API response contains the error message, throw an error.
        }

        console.log('json data::', json);

        const restaurantData = json?.data?.cards[2]?.card?.card?.info

        SetresInfo(restaurantData);

        const menuItemsData = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards

        setMenuItems(menuItemsData);

        console.log('menuItemsData::', menuItemsData);
    };

    if (resInfo === null) {
        return <Shimmer />
    }

    return (
        <div className="restaurant-menu">
            <div className="restaurant-summary">
                <img src={IMG_CDN} alt={name} />
                <div>
                    <h2>{resInfo?.name}</h2>
                    <p>{resInfo?.cuisines?.join(", ")}</p>
                    <p>{resInfo?.avgRating} ★ | {resInfo?.sla?.slaString} | {resInfo?.costForTwoMessage}</p>
                </div>
            </div>

            <div className="recommendation">
                {
                    menuItems.map((item, index) => {
                        return (
                            <div className="menu-item" key={index}>
                                <img src={BASE_IMAGE_UEL + item?.card?.info?.imageId} alt={item?.card?.info?.name} />
                                <div>
                                    <h3>{item?.card?.info?.name}</h3>
                                    <p>{item?.card?.info?.description}</p>
                                    <p>₹ {item?.card?.info?.price}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>

    );
};

export default RestuarantMenu;