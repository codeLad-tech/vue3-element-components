import { App } from "vue";
import menu from "./menu/src/index.vue";
import form from "./form/src/index.vue";
import table from "./table/src/index.vue";
import calendar from "./calendar/src/index.vue";

const components = [
  { Component: menu, name: "VMenu" },
  { Component: form, name: "VForm" },
  { Component: table, name: "VTable" },
  { Component: calendar, name: "VCalendar" },
];

const installComponents = components.map((e) => ({
  install: (app: App) => {
    app.component(e.name, e.Component);
  },
}));

export default {
  install(app: App) {
    installComponents.map((item) => {
      app.use(item);
    });
  },
};
