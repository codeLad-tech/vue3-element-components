import { PropType } from "vue";

export interface ColumnOptions {
  type?: string;
  index?: number;
  label?: string;
  columnKey?: string;
  width?: string | number;
  minWidth?: string | number;
  fixed?: string | boolean;
  renderHeader?: (a: any, b: any) => {};
  sortable?: boolean | string;
  sortMethod?: (a: any, b: any) => {};
  sortBy?: string | Array<any>;
  prop?: string;
  slot?: boolean;
  [propName: string]: any;
}
