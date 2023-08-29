import sendRequest from "./send-request";
const BASE_URL = "/api/categories";

export function addCategory(categoryData) {
  return sendRequest(`${BASE_URL}/add`, "POST", categoryData);
}
