<template>
  <div>
    <m-form ref="form" :options="options" label-position="left" :cows="5" action-position="right">
      <template #action="scope">
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </template>
      <template #custom="scope">
        <el-form-item label="测试">
          <input />
        </el-form-item>
      </template>
      <template #default="scope">
        <div>1</div>
      </template>
    </m-form>
  </div>
</template>

<script lang='ts' setup>
import { FormInstance, FormOptions } from '../../components/form/src/types/types';
import { ElMessage } from 'element-plus'
import { ref } from 'vue'

interface Scope {
  form: FormInstance,
  model: any
}

const options: FormOptions[] = [
  {
    type: 'input',
    value: '',
    label: '用户名',
    prop: 'username',
    placeholder: '请输入用户名',
    rules: [
      {
        required: true,
        message: '用户名不能为空',
        trigger: 'blur'
      },
      {
        min: 2,
        max: 6,
        message: '用户名在2-6位之间',
        trigger: 'blur'
      }
    ],
    attrs: {
      clearable: true,
    }
  },
  {
    type: 'input',
    value: '',
    label: '密码',
    prop: 'password',
    placeholder: '请输入密码',
    rules: [
      {
        required: true,
        message: '密码不能为空',
        trigger: 'blur'
      },
      {
        min: 6,
        max: 15,
        message: '密码在6-15位之间',
        trigger: 'blur'
      }
    ],
    attrs: {
      showPassword: true,
      clearable: true
    }
  },
  {
    type: 'select',
    value: '',
    placeholder: '请选择职位',
    prop: 'role',
    label: '职位',
    attrs: {
      style: {
        width: '100%'
      },
    },
    rules: [
      {
        required: true,
        message: '职位不能为空',
        trigger: 'change'
      }
    ],
    children: [
      {
        type: 'option',
        label: '经理',
        value: '1'
      },
      {
        type: 'option',
        label: '主管',
        value: '2'
      },
      {
        type: 'option',
        label: '员工',
        value: '3'
      }
    ]
  },
  {
    type: 'input',
    value: '',
    label: '用户名',
    prop: 'username',
    placeholder: '请输入用户名',
    rules: [
      {
        required: true,
        message: '用户名不能为空',
        trigger: 'blur'
      },
      {
        min: 2,
        max: 6,
        message: '用户名在2-6位之间',
        trigger: 'blur'
      }
    ],
    attrs: {
      clearable: true
    }
  },
  {
    type: 'time-picker',
    prop: 'time',
    value: [],
    label: '时间',
    attrs: {
      'is-range': true,
      'range-separator': 'To',
      'start-placeholder': 'Start time',
      'end-placeholder': 'End time'
    },
    rules: [
      {
        required: true,
        message: '用户名不能为空',
        trigger: 'blur'
      }
    ]
  },
  {
    type: 'select',
    value: '',
    placeholder: '请选择职位',
    prop: 'woker',
    label: '职位',
    attrs: {
      style: {
        width: '100%'
      },
    },
    rules: [
      {
        required: true,
        message: '职位不能为空',
        trigger: 'change'
      }
    ],
    children: [
      {
        type: 'option',
        label: '经理',
        value: '1'
      },
      {
        type: 'option',
        label: '主管',
        value: '2'
      },
      {
        type: 'option',
        label: '员工',
        value: '3'
      }
    ]
  },
  {
    type: 'color-picker',
    value: '#000',
    prop: 'color',
    label: '评分',
  }
]

const form = ref()

// 提交表单
const submitForm = (scope: Scope) => {
  form.value.validate((valid: boolean) => {
    if (valid) {
      ElMessage.success('提交成功')
    } else {
      ElMessage.error('表单填写有误,请检查')
    }
  })
}

// 重置表单
const resetForm = () => form.value.resetFields()
</script>

<style lang='scss' scoped></style>