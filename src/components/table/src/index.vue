<template>
  <div>
    <el-table v-bind="options" :data="tableData" @selection-change="handleSelectionChange">
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
    <div v-if="isPagination" :class="['pagination-position', `pagination-position-${pagination.position}`]">
      <el-pagination v-bind="pagination" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>
  </div>
</template>

<script lang='ts' setup>
import { PropType, computed, ref, defineEmits, defineExpose, reactive, watch } from 'vue'
import cloneDeep from 'lodash/cloneDeep'
// import { useMousePosition } from "../hooks/request"
import { ColumnOptions, paginations } from '../types'

const props = defineProps({
  // table 属性
  options: {
    type: Object,
    default: ({})
  },
  // el-table-colums 参数
  columns: {
    type: Array as PropType<ColumnOptions[]>,
    default: ([])
  },
  // 是否复选
  multiple: {
    type: Boolean,
    default: false
  },
  // 分页空间
  pagination: {
    type: Object as PropType<paginations>,
    default: ({})
  }
})

const tableData = reactive([])
const empty = computed(() => !(tableData.length)) // table数据是否为空
defineExpose({ tableData })

const emits = defineEmits(['selection-change'])

// const { x, y } = useMousePosition();
// watch([x, y], () => {
//   console.log(1)
// })

// 多选
const handleSelectionChange = (val: []) => emits('selection-change', val)

// 不传pagination，不需要pagination控件，反之
const isPagination = computed(() => Object.keys(props.pagination))

const pagination = ref<any>(null)
pagination.value = cloneDeep(props.pagination)

const handleSizeChange = (val: number) => {
  pagination.value.pageSize = val
}

const handleCurrentChange = (val: number) => {
  console.log('handleCurrentChange', val)
}
</script>

<style lang="scss" scoped>
.pagination-position {
  margin-top: 20px;
  display: flex;
}

.pagination-position-center {
  justify-content: center;
}

.pagination-position-right {
  justify-content: right;
}
</style>
