import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.chec.io/v1/",
  headers: {
    "Content-Type": "application/json",
    "X-Authorization": "pk_52354d91aba635c79523c2d0c1f1b1e5c7a3f2b2e4a03",
  },
});

export const customApi = axios.create({
  baseURL: "https://api.chec.io/v1/customers/",
  headers: {
    "Content-Type": "application/json",
    "X-Authorization": "sk_52354405e6bcb8e5890af632ffc807d60524db28ebe05",
  },
});
