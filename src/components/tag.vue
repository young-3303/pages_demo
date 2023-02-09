<template>
  <div @click="tagClick" :class="['tag', {'active': modelValue}]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean
    }
  },
  setup(props, {emit}) {
    function tagClick() {
      emit('update:modelValue', !props.modelValue)
    }
    return {
      tagClick
    }
  }
}
</script>

<style scoped lang="less">
.tag {
  //width: 40px;
  //height: 40px;
  border: 1px solid;
  cursor: pointer;
  padding: 10px;
  margin-right: 10px;
}

.active {
  background: skyblue;
}
</style>
