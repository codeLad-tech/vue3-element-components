
<template>
  <v-table :options="tableOptions" :columns="columns">
    <template #date-header>1</template>
  </v-table>
</template>

<script lang='ts' setup>
import { ColumnOptions } from '../../components/table/types'
import Item from "./slot"
const tableOptions = {
  data: [{
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  }],
  stripe: true,
  border: true,
  defaultSort: { prop: 'date', order: 'descending' }
}

const columns: ColumnOptions[] = [
  { prop: 'date', label: 'date', fixed: true, width: "150", slot: { header: true, default: false } },
  { prop: 'name', label: 'name', width: "150" },
  { prop: 'state', label: 'state', width: "300" },
  { prop: 'address', label: 'address', width: "300" },
  { prop: 'city', label: 'city', width: "300" },
  { prop: 'zip', label: 'zip', width: "150" },
]
</script>

