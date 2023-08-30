import sendRequest from "./send-request";
const BASE_URL = "/api/products";

export async function getAll() {
  return sendRequest(BASE_URL);
}

export async function addProduct(productData) {
  return (
    sendRequest(`${BASE_URL}/add`, "POST", productData),
    console.log(productData)
  );
}
export async function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}
