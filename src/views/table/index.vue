
<template>
  <v-table :options="tableOptions" :columns="columns" :pagination="pagination" @selection-change="handleSelectionChange">
    <template #date-default>
      <el-button>增加</el-button>
      <el-button>删除</el-button>
    </template>
  </v-table>
</template>

<script lang='ts' setup>
import { ColumnOptions, paginations } from '../../components/table/types'
const tableOptions = {
  stripe: true,
  defaultSort: { prop: 'date', order: 'descending' }
}

const columns: ColumnOptions[] = [
  { prop: 'date', label: 'date', fixed: true, width: "150", slot: { header: false, default: true } },
  { prop: 'name', label: 'name', width: "150" },
  { prop: 'state', label: 'state', width: "300" },
  { prop: 'address', label: 'address', width: "300" },
  { prop: 'city', label: 'city', width: "300" },
  { prop: 'zip', label: 'zip', width: "150" },
]

const pagination: paginations = {
  pageSize: 20,
  total: 1000,
  position: "right",
  background: true,
  layout: "total, sizes, prev, pager, next, jumper",
  pageSizes: [20, 200, 300, 400]
}

const handleSelectionChange = (val: []) => {
  console.log(val)
}
</script>

