
<template>
  <m-table :options="tableOptions" :columns="columns"> </m-table>
</template>

<script lang='ts' setup>
import { ColumnOptions } from '../../components/table/types'
const tableOptions = {
  data: [],
  event: {},
}
const columns: ColumnOptions = []

// let tableData = ref<any[]>([])
// let editRowIndex = ref<string>('')
// let svg = `
//         <path class="path" d="
//           M 30 15
//           L 28 17
//           M 25.61 25.61
//           A 15 15, 0, 0, 1, 15 30
//           A 15 15, 0, 1, 1, 27.99 7.5
//           L 15 15
//         " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
//       `
// setTimeout(() => {
// tableData.value = [
//   {
//     date: '2016-05-03',
//     name: 'Tom1',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-02',
//     name: 'Tom2',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-04',
//     name: 'Tom3',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-01',
//     name: 'Tom4',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
// ]
// }, 3000)

// let current = ref<number>(1)
// let pageSize = ref<number>(10)
// let total = ref<number>(0)
// let getData = () => {
//   axios.post('/api/list', {
//     current: current.value,
//     pageSize: pageSize.value,
//   }).then((res: any) => {
//     if (res.data.code === '200') {
//       tableData.value = res.data.data.rows
//       total.value = res.data.data.total
//       console.log(res.data.data)
//     }
//   })
// }
// let handleSizeChange = (val: number) => {
//   pageSize.value = val
//   getData()
// }
// let handleCurrentChange = (val: number) => {
//   current.value = val
//   getData()
// }
// onMounted(() => {
//   getData()
// })


// let edit = (scope: any) => {
//   // console.log(scope)
//   editRowIndex.value = 'edit'
// }
// let sure = (scope: any) => {
//   console.log(scope)
// }
// let confirm = (scope: any) => {
//   // console.log(scope)
// }
</script>

<style lang='scss' scoped></style>