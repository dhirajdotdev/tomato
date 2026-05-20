const mockRestaurantDetails = [
  {
    restaurantName: "Tomato Kitchen",
    description:
      "Fresh, flavorful meals from local chefs delivered hot to your door.",
    cuisine: "Indian Street Food",
    deliveryTime: "25 mins",
    rating: 4.6,
    location: "Downtown",
  },
  {
    restaurantName: "Spice Corner",
    description: "Bold spices and vibrant tastes in every order.",
    cuisine: "Asian Fusion",
    deliveryTime: "30 mins",
    rating: 4.8,
    location: "City Center",
  },
  {
    restaurantName: "Green Harvest",
    description: "Healthy bowls, salads, and wraps made fresh for busy days.",
    cuisine: "Healthy Eats",
    deliveryTime: "20 mins",
    rating: 4.5,
    location: "Uptown",
  },
  {
    restaurantName: "Grill House",
    description: "Juicy grilled favorites with house-made sauces and sides.",
    cuisine: "BBQ & Grill",
    deliveryTime: "28 mins",
    rating: 4.7,
    location: "Market Street",
  },
];

export const fetchMeals = async () => {
  try {
    const response = await fetch("https://api.freeapi.app/api/v1/public/meals");
    const json = await response.json();

    return json.data.data.map((item: any, index: number) => {
      const detail =
        mockRestaurantDetails[index % mockRestaurantDetails.length];

      return {
        ...item,
        restaurantName: detail.restaurantName,
        restaurantDescription: detail.description,
        restaurantCuisine: detail.cuisine,
        restaurantDeliveryTime: detail.deliveryTime,
        restaurantRating: detail.rating,
        restaurantLocation: detail.location,
      };
    });
  } catch (error) {
    console.log(error);

    return [];
  }
};
