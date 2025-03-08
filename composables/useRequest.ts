interface propFetch {
  endpoint: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  body?: any | null;
}
export const useApiRequest = async (obj: propFetch): Promise<any> => {
  const API_URL = useApiUrl();
  const response = await $fetch(`${API_URL}/${obj.endpoint}`, {
    method: obj.method,
    body: obj.method !== "GET" ? obj.body : undefined,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};
