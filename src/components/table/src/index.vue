<template>
  <el-table v-bind="options" @selection-change="handleSelectionChange">
    <template slot="empty" v-if="empty">
      <slot name="empty" />
    </template>
    <el-table-column type="selection" width="55" v-if="!empty && !multiple" />
    <template v-for="(column, i) in columns" :key="column.prop || i" v-if="!empty">
      <el-table-column v-bind="column">
        <template #header="scope" v-if="column.slot?.header">
          <slot :name="`${column.prop}-header`" :row="scope"></slot>
        </template>
        <template #default="scope" v-if="column.slot?.default">
          <slot :name="`${column.prop}-default`" :row="scope"></slot>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script lang='ts' setup>
import { PropType, computed } from 'vue'
import { ColumnOptions } from '../types'

const props = defineProps({
  // table 属性和方法
  options: {
    type: Object,
    default: ({})
  },
  columns: {
    type: Array as PropType<ColumnOptions[]>,
    default: ([])
  },
  multiple: {
    type: Boolean,
    default: false
  }
})

const empty = computed(() => !(props.options.data?.length))

const handleSelectionChange = (val: []) => val
defineExpose({ 'selection-change': handleSelectionChange })
</script>

