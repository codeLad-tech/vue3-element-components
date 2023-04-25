<template>
  <div>
    <v-form ref="form" :options="options" label-position="left" :cows="5" action-position="right">
      <template #action="scope">
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </template>
      <template #custom="scope">
        <el-form-item label="测试插槽">
          自定义表单插槽
        </el-form-item>
      </template>
      <template #default="scope">
        自定义其他内容
      </template>
    </v-form>
  </div>
</template>

<script lang='ts' setup>
import { options } from "./options"
import { ref } from 'vue'

const form = ref()

// 提交表单
const submitForm = () => {
  form.value.validate((valid: boolean) => { })
}

// 重置表单
const resetForm = () => form.value.resetFields()
</script>
