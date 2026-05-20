export const fetchMeals = async () => {
  try {
    const response = await fetch("https://api.freeapi.app/api/v1/public/meals");

    const json = await response.json();

    return json.data.data;
  } catch (error) {
    console.log(error);

    return [];
  }
};
