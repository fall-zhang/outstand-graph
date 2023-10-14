<!--
作者：张博飞
用作：表单嵌套表单
-->
<!-- type 类型为 array 或者 object 时，调用 FormZone -->
<template>
  <div class="form-item">
    <template
      v-if="['array', 'object'].includes(currentSetter) || (formOption.children && formOption.children.length > 0)">
      <FormZone :formOption="formOption" :receiveValue="formValue" @change="onChangeZone">
      </FormZone>
    </template>
    <template v-else>
      <!-- label -->
      <div v-if="!basicSetterType.includes(currentSetter)" class="default-container">
        <div style="display: flex;align-items: center;">
          {{ formOption.keyName }}
          <el-tooltip v-if="formOption.tips" placement="top">
            <el-icon>
              <QuestionFilled />
            </el-icon>
            <template #content>
              <div v-html="formOption.tips"></div>
            </template>
          </el-tooltip>
        </div>
        <div v-if="allSetters.length > 1" class="toggle-icon" :class="setterIndex % 2 == 0 ? 'reverse' : ''"
          @click="onChangeSetter">
          <el-icon>
            <Refresh />
          </el-icon>
        </div>
      </div>
      <!-- 简单类型的数据处理 -->
      <div v-if="basicSetterType.includes(currentSetter)" class="basic-container">
        <div class="basic-label">{{ formOption.keyName }}
          <el-tooltip v-if="formOption.tips" :content="formOption.tips" placement="top">
            <el-icon>
              <QuestionFilled />
            </el-icon>
          </el-tooltip>
        </div>
        <div class="basic-form-item">
          <el-input v-if="currentSetter == 'input'" v-model="formValue" type="text" size="small"
            @input="onChangeInput"></el-input>
          <div v-else-if="currentSetter == 'color'">
            <el-input v-model="formValue" style="width: 68px;" size="small" type="color"
              @change="onChangeValue"></el-input>
            {{ formValue || '未选择颜色' }}
          </div>
          <el-input-number v-else-if="currentSetter == 'number'" v-model="formValue" size="small"
            @change="onChangeValue"></el-input-number>
          <el-switch v-else-if="currentSetter == 'switch'" v-model="formValue" size="small"
            @change="onChangeValue"></el-switch>
          <el-slider v-else-if="currentSetter == 'slider'" v-model="formValue" size="small" style="width: 100px;" :min="0"
            :max="60" @change="onChangeValue"></el-slider>
          <el-select v-else-if="currentSetter == 'select'" v-model="formValue" size="small" :min="0" :max="20"
            @change="onChangeValue">
            <el-option v-for="optionItem in formOption.optionalValue" v-bind="optionItem"
              :key="optionItem.value"></el-option>
          </el-select>
        </div>
        <div v-if="allSetters.length > 1" class="toggle-icon" :class="setterIndex % 2 == 0 ? 'reverse' : ''"
          @click="onChangeSetter">
          <el-icon>
            <Refresh />
          </el-icon>
        </div>
        <!-- 自定义组件类型的数据处理 -->
      </div>
      <!-- 复杂数据处理，标题会独占一行 -->
      <template v-else-if="complexSetterType.includes(currentSetter)">
        <el-input v-if="currentSetter == 'textarea'" v-model="formValue" size="small" type="textarea"
          style="max-height: 72px;" @input="onChangeInput"></el-input>
        <FormJSON v-else-if="currentSetter == 'json'" v-model="formValue" class="complex-container"
          @change="onChangeComplexValue">
        </FormJSON>
      </template>
      <!-- 需要递归的数据处理 -->
      <!-- form-item 中递归 -->
      <!-- <el-card v-else-if="formOption.children && formOption.children.length > 0">
        <FormItem v-for="child in formOption.children" :key="child.keyId" :formOption="child"
          :receiveValue="formValue[child.keyId]" @change="onChangeChild">
        </FormItem>
      </el-card> -->
      <!-- form-zone 中递归 -->
      <FormZone v-else-if="formOption.children && formOption.children.length > 0" :formOption="formOption"
        :receiveValue="formValue" @change="onChangeZone">
      </FormZone>
    </template>
  </div>
</template>

<script>
import { deepClone } from '@/utils/utils'
import FormJSON from './components/FormJSON.vue'
import { QuestionFilled, Refresh } from '@element-plus/icons-vue'
// import FormZone from './FormZone.vue';
// import FormZone from './FormZone.vue'
import { defineAsyncComponent } from 'vue'
export default {
  name: 'FormItem',
  components: {
    FormJSON,
    QuestionFilled,
    Refresh,
    FormZone: defineAsyncComponent(() => import('./FormZone.vue'))
  },
  props: {
    formOption: {
      require: true,
      default: () => ({
        type: 'input',
        optional: []
      })
    },
    receiveValue: {
      require: true,
    }
  },
  emits: ['change'],
  data() {
    return {
      setterIndex: 0,
      currentSetter: '',
      allSetters: [],
      formValue: '',
      timberFun: null,
      basicSetterType: ['input', 'color', 'switch', 'slider', 'number', 'select'],
      complexSetterType: ['json', 'textarea'],
      // value: "card"
    }
  },
  watch: {
    // formValue(newVal) {
    //  this.$emit("change", newVal)
    // }
  },
  created() {
    // console.log('传输过来的 id', this.formOption.keyId);
    const state = import.meta.env || {}
    if (state.DEV === true) {
      // 开发时打开，用于捕获默认值的错误
      this.catchError()
    }
    this.formValue = deepClone(this.receiveValue)
    // 赋值为初始值，如果有对象
    if (this.formValue === undefined) {
      if (typeof this.formOption.default === 'object' && this.formOption.children) {
        this.formValue = {}
      } else {
        this.formValue = this.formOption.default
      }
    }
    // console.log(this.formValue);
    this.allSetters = this.formOption.setters
    // console.log(this.formOption.keyId, this.allSetters);
    this.currentSetter = this.allSetters[0]
    this.setterIndex = 0
  },
  methods: {
    onChangeInput() {
      clearTimeout(this.timberFun)
      this.timberFun = setTimeout(this.onChangeValue, 500)
    },
    catchError() {
      const defaultSetter = this.formOption.setters[0]
      const defaultVal = this.formOption.default
      if (defaultSetter === 'slider') {
        if (typeof defaultVal === 'string') {
          console.error('该配置出现错误', this.formOption)
        }
      }
    },
    // 嵌套数据类型时的处理方法嵌套 FormItem
    onChangeChild(option, value) {
      this.formValue[option.keyId] = value
      // console.log('当前的值为', value)
      // console.log('当前的属性', option.keyId)
      // console.log('更改后的值为', this.formValue)
      this.$emit('change', this.formOption, deepClone(this.formValue))
      // console.log(option, this.formValue);
    },
    // 简单数据类型时的处理方法
    onChangeValue(child) {
      // console.log('当前的值为', this.formValue)
      // console.log('当前的属性', this.formOption)
      this.$emit('change', this.formOption, this.formValue)
    },
    onChangeComplexValue() {
      this.$emit('change', this.formOption, this.formValue)
    },
    onChangeZone(option, value) {
      // console.log(JSON.stringify(this.formValue, null, 2));
      this.formValue = value
      // console.log(JSON.stringify(this.formValue, null, 2));
      // console.log(option, value);
      this.$emit('change', this.formOption, this.formValue)
    },
    onChangeSetter() {
      // console.log('pico');
      this.setterIndex++
      if (this.setterIndex >= this.allSetters.length) this.setterIndex = 0
      this.currentSetter = this.allSetters[this.setterIndex]
      // console.log(this.currentSetter);
    }
  }
}
</script>
<style lang="scss">
.basic-container {
  display: flex;
  align-items: center;
  height: 32px;
  margin-bottom: 12px;

  .basic-form-item {
    flex: 1;
  }

  .basic-label {
    min-width: 110px;
  }
}

.default-container {
  display: flex;
  justify-content: space-between;
}

.toggle-icon {
  position: relative;
  display: flex;
  align-items: center;
  font-size: 16px;
  // width: 20px;
  padding: 0 6px;
  cursor: pointer;
  transition: 0.6s;

  &.reverse {
    transform: rotate(0.5turn);
  }
}

.complex-container {
  margin-bottom: 8px;
}

.el-textarea {
  :deep(.el-textarea__inner) {
    max-height: 102px;
  }
}
</style>