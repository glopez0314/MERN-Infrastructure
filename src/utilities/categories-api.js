import sendRequest from "./send-request";
const BASE_URL = "/api/categories";

export function getCats() {
  return sendRequest(BASE_URL);
}

export function addCategory(categoryData) {
  return sendRequest(`${BASE_URL}/add`, "POST", categoryData);
}
