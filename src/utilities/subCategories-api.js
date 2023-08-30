import sendRequest from "./send-request";
const BASE_URL = "/api/subCategories";

export function getSubCats() {
  return sendRequest(BASE_URL);
}

export function addSubCategory(subCategoryData) {
  return sendRequest(`${BASE_URL}/add`, "POST", subCategoryData);
}
