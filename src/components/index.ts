import { App } from "vue";
import menu from "./menu";
import form from "./form";
import table from "./table";
import calendar from "./calendar";

const components = [menu, form, table, calendar];

export default {
  install(app: App) {
    components.map((item) => {
      app.use(item);
    });
  },
};
