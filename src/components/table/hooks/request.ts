interface Params {
  url: string;
  data: { [propsName: string]: any };
  baseURL: string;
  withCredentials: boolean;
}
type method = "GET" | "PUT" | "POST" | "DELETE";

import { watch } from "vue";
