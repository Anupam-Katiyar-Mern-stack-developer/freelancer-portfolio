import apiClient from "../../../api/apiClient";

export const updateHeroService = async (
  payload
) => {
  const response = await apiClient.put(
    "/api/admin/hero",
    payload
  );

  return response.data.data;
};