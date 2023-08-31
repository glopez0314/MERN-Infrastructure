import sendRequest from "./send-request";

const BASE_URL = "/api/orders";

export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

export function addItemToCart(itemId) {
  return sendRequest(`${BASE_URL}/cart/item/${itemId}`, "POST");
}

export function changeQty(itemId, newQty) {
  return sendRequest(`${BASE_URL}/cart/qty`, "PUT", { itemId, newQty });
}

export function getHistory() {
  return sendRequest(`${BASE_URL}`);
}

export function checkout() {
  return sendRequest(`${BASE_URL}/cart/checkout`);
}
