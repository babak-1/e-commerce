// get all products
import { api, customApi } from "./index";
import axios from "axios";

export async function getProducts(
  limit = 5,
  categories = null,
  sortBy = "sort_order",
  page = 1,
  query
) {
  return api.get(
    `/products?limit=${limit}&${
      categories && "category_slug=" + categories
    }&sortBy=${sortBy}&page=${page}&${query ? "query=" + query : null}`
  );
}

export async function getCategoryMenu() {
  return api.get("/categories");
}

export async function getDetails(id) {
  return api.get(`/products/${id}`);
}

export async function getSearch(query) {
  return api.get(`/products?query=${query !== null && query}`);
}

export async function getBasket(cart_id) {
  return api.get(`/carts/${cart_id}`);
}

export async function createBasket() {
  return api.get(`/carts`);
}

// export async function addBasket(cartId, quantity, id, variant_id, options) {
//   return api.post(`/carts/${cartId}`, { quantity, id, variant_id, options });
// }

export async function addBasket(cartId, data) {
  return api.post(`/carts/${cartId}`, data);
}

export async function customDetails(id) {
  return customApi.get(`${id}`);
}

export async function deleteBasketItem(basketId, id) {
  return api.delete(`/carts/${basketId}/items/${id}`);
}
