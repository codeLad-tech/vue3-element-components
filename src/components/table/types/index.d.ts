export interface ColumnOptions {
  type?: "selection" | "index" | "expand";
  index?: number;
  label?: string;
  columnKey?: string;
  prop?: string;
  width?: string | number;
  minWidth?: string | number;
  fixed?: string | boolean;
  renderHeader?: (a: any, b: any) => {};
  sortable?: boolean | string;
  sortMethod?: (a: any, b: any) => number;
  sortBy?: string | Array<any>;
  sortOrders?: [];
  resizable?: boolean;
  formatter?: () => any;
  slot?: { default?: boolean; header?: boolean };
  align?: string;
  showOverflowTooltip?: object;
  headerAlign?: "left" | "center" | "right";
  className?: string;
  labelClassName?: string;
  selectable?: () => {};
  reserveSelection?: boolean;
  filters?: Array<{ text: string; value: string }>;
  filterPlacement?: string;
  filterMultiple?: boolean;
  filterMethod?: () => boolean;
  filteredValue?: [];
}

import { Component } from "vue";
export interface paginations {
  small?: boolean;
  background?: boolean;
  pageSize?: number;
  defaultPageSize?: number;
  total?: number;
  pageCount?: number;
  pagerCount?: number;
  currentPage?: number;
  layout?: "prev, pager, next, total, jumper, ->" | string;
  pageSizes?: number[];
  popperClass?: string;
  prevText?: string;
  prevIcon?: string | Component;
  nextText?: string;
  nextIcon?: string | Component;
  disabled?: boolean;
  position?: "left" | "center" | "right";
  hideOnSinglePage?: boolean;
  [propName: string]: any;
}
