// import { ref, onMounted, onUnmounted } from "vue";
// export function useMousePosition() {
//   const x = ref(0);
//   const y = ref(0);
//   function update(e: any) {
//     x.value = e.pageX;
//     y.value = e.pageY;
//   }
//   onMounted(() => {
//     window.addEventListener("mousemove", update);
//   });
//   onUnmounted(() => {
//     window.removeEventListener("mousemove", update);
//   });
//   return { x, y };
// }

import { watch } from "vue";

function request() {
  const xhr = new XMLHttpRequest();
}

export function useRequest(query: any) {
  /**
   * 1. 接受query查询条件
   *
   */
  watch(query, () => {});
}
