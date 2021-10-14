<template>
  <a-card
    title="混淆 - 静态资源"
    type="inner"
    style="min-width:500px;width:100%;max-width:999px;margin:auto"
  >
    <template #extra>
      <a-button @click="confuse" type="primary" style="margin-right:10px">混淆</a-button>
      <a-button @click="reBack">还原</a-button>
    </template>

    <a-form :model="formState" v-bind="formItemLayout">
      <a-form-item label="前缀">
        <a-input
          addon-before="assets_"
          addon-after="_img_"
          v-model:value="formState.extHeader"
          style="width:230px;float:left"
        />
        <a-button type @click="createUUID">随机</a-button>
      </a-form-item>
      <a-form-item label="静态资源目录">
        <a-textarea v-model:value="formState.assetsfilePath" placeholder="input placeholder" />
      </a-form-item>
      <a-form-item label="引用资源目录">
        <a-textarea v-model:value="formState.xmlFilePath" placeholder="input placeholder" />
      </a-form-item>
      <!-- <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
      <a-button type="primary">Submit</a-button>
      </a-form-item>-->
    </a-form>
  </a-card>

  <a-card
    title="混淆 - 类"
    type="inner"
    style="min-width:500px;width:100%;max-width:999px;margin:auto"
  >
    <template #extra>
      <a-button @click="confuseClass" type="primary" style="margin-right:10px">混淆</a-button>
      <a-button @click="reBack">还原</a-button>
    </template>
    <a-form :model="formState" v-bind="formItemLayout">
      <a-form-item label="前缀">
        <a-input
          addon-before="assets_"
          addon-after="_img_"
          v-model:value="formState.extHeader"
          style="width:230px;float:left"
        />
        <a-button type @click="createUUID">随机</a-button>
      </a-form-item>
      <a-form-item label="类目录">
        <a-textarea v-model:value="formState.assetsfilePath" />
      </a-form-item>
      <a-form-item label="引用文件目录">
        <a-textarea v-model:value="formState.xmlFilePath" />
      </a-form-item>
      <!-- <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
      <a-button type="primary">Submit</a-button>
      </a-form-item>-->
    </a-form>
  </a-card>
  <a-card title="增加xml-activity">
    <template #extra>
      <a-button @click="addXML" type="primary" style="margin-right:10px">添加</a-button>
      <!-- <a-button @click="reBack">还原</a-button> -->
    </template>
    <a-form :model="formState" v-bind="formItemLayout">
      <a-form-item label="包名">
        <a-input v-model:value="formState.packageInfo" />
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script lang="ts">
import { ref, defineComponent, computed, reactive, UnwrapRef } from 'vue'
import { getUUID, editFileName, editFileContentAssetsName, editClassFileName } from '../../../script/confuse'
import { addXmlWithActivity } from '../../../script/append'
export default defineComponent({
  name: 'Confuse',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    //@ts-ignore
    const formState: UnwrapRef<FormState> = reactive({
      layout: 'horizontal',
      extHeader: 'xxx',
      assetsfilePath: '/Users/yaohui/Downloads/HummerVpn/app/src/main/res/drawable',
      xmlFilePath: '/Users/yaohui/Downloads/HummerVpn/app/src/main/res/layout',
      classFilePath: ' /Users/yaohui/Downloads/HummerVpn/app/src/main/java/com/simple/hummervpn/ui',
      addXmlFilePath: '/Users/yaohui/Downloads/HummerVpn/app/src/main/res/layout',
      addXmlActivityPath: '/Users/yaohui/Downloads/HummerVpn/app/src/main/java/com/simple/hummervpn/ui',
      packageInfo: 'com.simple.hummervpn'
    });
    const formItemLayout = computed(() => {
      const { layout } = formState;
      return layout === 'horizontal'
        ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
        }
        : {};
    });
    const buttonItemLayout = computed(() => {
      const { layout } = formState;
      return layout === 'horizontal'
        ? {
          wrapperCol: { span: 14, offset: 4 },
        }
        : {};
    });

    const confuse = function () {
      formState.assetsfilePath.split(';').forEach((item: string) => {
        editFileName('edit', item, `assets_${formState.extHeader}_img_`)
      });
      formState.xmlFilePath.split(';').forEach((item: string) => {
        editFileContentAssetsName('edit', item, `assets_${formState.extHeader}_img_`)
      });
    }
    const confuseClass = function () {
      formState.assetsfilePath.split(';').forEach((item: string) => {
        editFileName('edit', item, `assets_${formState.extHeader}_img_`)
      });
      formState.xmlFilePath.split(';').forEach((item: string) => {
        editFileContentAssetsName('edit', item, `assets_${formState.extHeader}_img_`)
      });
    }
    const reBack = function () {
      formState.classfilePath.split(';').forEach((item: string) => {
        editFileContentAssetsName('back', item)
      });
      formState.assetsfilePath.split(';').forEach((item: string) => {
        editClassFileName('back', item)
      });
    }
    const reBackClass = function () {
      formState.assetsfilePath.split(';').forEach((item: string) => {
        editFileContentAssetsName('back', item)
      });
      formState.assetsfilePath.split(';').forEach((item: string) => {
        editFileName('back', item)
      });
    }
    const createUUID = function () {
      formState.extHeader = getUUID()
    }
    const addXML = function () {
      addXmlWithActivity(formState.xmlFilePath, formState.addXmlActivityPath, formState.packageInfo)
    }
    return {
      confuse,
      reBack,
      createUUID,
      formState,
      addXML,
      confuseClass,
      reBackClass,
      formItemLayout,
      buttonItemLayout,
    }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
