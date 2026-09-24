import apiClient from "../../../api/apiClient";

export const getHeroService = async () => {
  const response = await apiClient.get(
    "/api/admin/hero"
  );

  return response.data.data;
};