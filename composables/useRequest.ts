export const useApiRequest = async (endpoint: string) => {
  const API_URL = useApiUrl();
  const response = await $fetch(`${API_URL}/${endpoint}`);
  return response;
};
