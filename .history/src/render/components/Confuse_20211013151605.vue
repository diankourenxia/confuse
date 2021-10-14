<template>
  <a-button type="primary" @click="showDrawer">查看操作记录</a-button>
  <a-drawer
    title="操作记录"
    placement="left"
    :closable="false"
    width="500px"
    v-model:visible="visible"
    :after-visible-change="afterVisibleChange"
  >
    <div v-for="item in logs">{{ item }}</div>
    <a-button type="primary" @click="logs = []" style="position:absolute;bottom:100px">清空</a-button>
  </a-drawer>
  <a-card
    title="混淆 - 静态资源"
    type="inner"
    style="min-width:500px;width:100%;max-width:999px;margin:auto;margin-bottom:20px"
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
        <a-textarea v-model:value="formState.assetsFilePath" placeholder="input placeholder" />
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
      <!-- <a-form-item label="前缀">
        <a-input
          addon-before="assets_"
          addon-after="_img_"
          v-model:value="formState.extHeader"
          style="width:230px;float:left"
        />
        <a-button type @click="createUUID">随机</a-button>
      </a-form-item>-->
      <a-form-item label="类目录">
        <a-textarea v-model:value="formState.classFilePath" />
      </a-form-item>
      <!-- <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
      <a-button type="primary">Submit</a-button>
      </a-form-item>-->
    </a-form>
  </a-card>
  <a-card title="增加xml-activity" style="min-width:500px;width:100%;max-width:999px;margin:auto">
    <template #extra>
      <a-button @click="addXML" type="primary" style="margin-right:10px">添加</a-button>
      <!-- <a-button @click="reBack">还原</a-button> -->
    </template>
    <a-form :model="formState" v-bind="formItemLayout">
      <a-form-item label="包名">
        <a-input v-model:value="formState.packageInfo" />
      </a-form-item>
      <a-form-item label="xml目录">
        <a-textarea v-model:value="formState.addXmlFilePath" />
      </a-form-item>
      <a-form-item label="activity目录">
        <a-textarea v-model:value="formState.addXmlActivityPath" />
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
      assetsFilePath: '/Users/yaohui/Downloads/HummerVpn/app/src/main/res/drawable',
      xmlFilePath: '/Users/yaohui/Downloads/HummerVpn/app/src/main/res/layout',
      classFilePath: '/Users/yaohui/Downloads/HummerVpn/app/src/main/java/com/simple/hummervpn/ui',
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
    const visible = ref<boolean>(false);
    const logs = ref<any[]>([])
    const afterVisibleChange = (bool: boolean) => {
      console.log('visible', bool);
    };

    const showDrawer = () => {
      visible.value = true;
    };
    const confuse = function () {
      logs.value.push('开始修改静态资源名称')
      formState.assetsFilePath.split(';').forEach((item: string) => {
        let result = editFileName('edit', item, `assets_${formState.extHeader}_img_`)
        console.log(1111, result)
        logs.value.push(result)
      });

      logs.value.push('开始修改静态资源引用处的名称')
      formState.xmlFilePath.split(';').forEach((item: string) => {
        editFileContentAssetsName('edit', item, `assets_${formState.extHeader}_img_`)
      });

    }
    const confuseClass = function () {
      formState.assetsFilePath.split(';').forEach((item: string) => {
        editFileName('edit', item, `assets_${formState.extHeader}_img_`)
      });
      formState.xmlFilePath.split(';').forEach((item: string) => {
        editFileContentAssetsName('edit', item, `assets_${formState.extHeader}_img_`)
      });
    }
    const reBack = function () {
      logs.value.push('开始还原静态资源名称')
      formState.classFilePath.split(';').forEach((item: string) => {
        editFileContentAssetsName('back', item)
      });
      logs.value.push('开始还原静态资源引用处的名称')
      formState.assetsFilePath.split(';').forEach((item: string) => {
        editClassFileName('back', item)
      });
    }
    const reBackClass = function () {
      formState.assetsFilePath.split(';').forEach((item: string) => {
        editFileContentAssetsName('back', item)
      });
      formState.assetsFilePath.split(';').forEach((item: string) => {
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
      visible,
      logs,
      afterVisibleChange,
      showDrawer,
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
