import axios from "axios";

export const apiKey = "9c7d21ad10384056b5e58176dddf43bb";

export const fetchArticles = async (
  searchTerm,
  category,
  language,
  country
) => {
  const url = `https://newsapi.org/v2/top-headlines?q=${searchTerm}&from=2023&sortBy=popularity?country=${country}&category=${category}&apiKey=${apiKey}`;
  try {
    const response = await axios.get(url);
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
};
