import apiClient from "../api/apiClient";

export const getSiteDataApi = async () => {
  const response = await apiClient.get("site-data.json");
  return response.data;
};
