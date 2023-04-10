<template>
  <el-table :data="options.data" v-on="options.event">
    <template slot="empty" v-if="emptySlot">
      <slot name="empty" />
    </template>
    <template v-for="column in columns" :key="column.prop">
      <el-table-column v-bind="column">
        <template #default="scope" v-if="column.slot">
          <slot :name="column.prop" :row="scope"></slot>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script lang='ts' setup>
import { PropType, reactive, useSlots } from 'vue'
import cloneDeep from 'lodash/cloneDeep'
import { ColumnOptions } from '../types'

const props = defineProps({
  // table 属性和方法
  options: {
    type: Object,
    required: true
  },
  columns: {
    type: Array as PropType<ColumnOptions[]>,
    required: true
  },
  noText: {
    type: String,
    default: '暂无数据'
  }
})

const columns: ColumnOptions[] = reactive([{}])

const { emptySlot } = useSlots()
</script>
