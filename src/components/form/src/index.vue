<template>
  <el-form ref="form" v-if="model" :validate-on-rule-change="false" :model="model" :rules="rules" v-bind="$attrs"
    :label-position="labelPosition" :label-width="labelWidth">
    <el-row :gutter="gutter">
      <template v-for="(item, index) in options" :key="index">
        <el-col :span="item.span || colSpan" v-if="!item.children || !item.children!.length">
          <el-form-item v-bind="item">
            <component v-if="item.type !== 'upload' && item.type !== 'editor'" :placeholder="item.placeholder"
              v-bind="item.attrs" :is="`el-${item.type}`" v-model="model[item.prop!]"></component>
          </el-form-item>
        </el-col>
        <el-col v-if="item.children && item.children.length" :span="item.span || colSpan">
          <el-form-item :prop="item.prop" :label="item.label">
            <component :placeholder="item.placeholder" v-bind="item.attrs" :is="`el-${item.type}`"
              v-model="model[item.prop!]">
              <component v-for="(child, i) in item.children" :key="i" :is="`el-${child.type}`" :label="child.label"
                :value="child.value"></component>
            </component>
          </el-form-item>
        </el-col>
      </template>
      <el-col v-if="custom" :span="colSpan">
        <slot name="custom" :form="form" :model="model" />
      </el-col>
      <el-form-item :style="{ marginLeft: gutter / 2 + 'px' }">
        <slot name="action" :form="form" :model="model" class="action" />
      </el-form-item>
    </el-row>
    <slot name="default" :form="form" :model="model" />
  </el-form>
</template>

<script lang='ts' setup>
import { PropType, ref, onMounted, watch, computed, useSlots } from 'vue'
import { FormInstance, FormOptions, styleObj } from '../types/types'
import cloneDeep from 'lodash/cloneDeep'

const props = defineProps({
  // 表单的配置项
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true
  },
  // 行内表单
  inline: {
    type: Boolean,
    default: true
  },
  labelPosition: {
    type: String,
    default: 'right'
  },
  cows: {
    type: Number,
    default: 4
  },
  gutter: {
    type: Number,
    default: 20
  },
  actionPosition: {
    type: String,
    default: 'right'
  },
  labelWidth: {
    type: String,
    default: '80px'
  }

})

const model = ref<any>(null)
const rules = ref<any>(null)
const form = ref<FormInstance | null>()

// 初始化表单
const initForm = () => {
  if (props.options && props.options.length) {
    let m: any = {}
    let r: any = {}
    props.options.map((item: FormOptions) => {
      item.span = props.inline ? item.span : 24
      m[item.prop!] = item.value
      r[item.prop!] = item.rules
    })
    model.value = cloneDeep(m)
    rules.value = cloneDeep(r)
  }
}

// 重置表单
const resetFields = () => {
  form.value!.resetFields()
}

// 表单验证方法
const validate = (callback: () => {}) => form.value!.validate(callback)

// 暴露出去给父组件使用
defineExpose({ resetFields, validate })

// 生命周期
onMounted(initForm)


// 计算el-col组件的span值
const colSpan = computed(() => {
  return (parseInt(24 as any / props.cows as any) <= 6) ? 6 : (parseInt(24 as any / props.cows as any))
})


// 监听父组件传递进来的options
watch(() => props.options, initForm, { deep: true })


const { custom } = useSlots()
</script>

<style lang='scss' scoped>
.el-form-item {
  margin-bottom: 24px;
}
</style>