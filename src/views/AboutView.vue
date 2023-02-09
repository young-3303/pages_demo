<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div :key="index" v-for="(item, index) in list">
      <el-checkbox @change="(e) => change(e, item)" v-model="item.selectAll">全选/取消全选</el-checkbox>
      <h2>{{ item.title }}</h2>
      <div class="tag_list">
        <tag v-model="it.selected" v-for="it in item.heroList">
          {{ it.name }}
        </tag>
      </div>
    </div>
  </div>
</template>

<script>
import {reactive, ref, watch} from 'vue';
import Tag from '@/components/tag.vue';

export default {
  components: {
    Tag
  },
  setup() {
    const list = reactive(require('@/mock/tmp').data.list)
    const checked1 = ref(false)
    const checked2 = ref(false)
    let selected = ref(false)
    function change(val, item) {
      list.forEach(it => {
        it.heroList.forEach(h => {
          if (it.title === item.title) {
            h.selected = val
          }
        })
      })
    }

    watch(list, val => {
      val.forEach(item => {
        item.selectAll = item.heroList.every(it => it.selected)
      })
    }, {
      deep: true
    })
    return {
      list,
      checked1,
      checked2,
      change
    }
  }
}
</script>
<style lang="less">
h2 {
  margin: 0;
}

.tag_list {
  display: flex;
  justify-content: center;
}
</style>
