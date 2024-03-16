import axios from "axios";

//todo later move to .env
export const apiNewsKey = "9c7d21ad10384056b5e58176dddf43bb";
export const  apiGuardianKey = "412ded76-582a-4f78-91e8-e508f619dd5f";

export const fetchNewsArticles = async (
  searchTerm,
  category,
  country
) => {
  const url = `https://newsapi.org/v2/top-headlines?q=${searchTerm}&from=2023&sortBy=popularity?country=${country}&category=${category}&apiKey=${apiNewsKey}`;
  try {
    const response = await axios.get(url);
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
};

export async function fetchGuardianArticles() {
  try {
    
    const response = await fetch(
      `https://content.guardianapis.com/search?api-key=${apiGuardianKey}&show-fields=headline,shortDescription,sectionName,sectionId`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data from Guardian API");
    }
    const data = await response.json();
    return data.response.results;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
