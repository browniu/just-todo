<template lang="html">
  <div :class="['item']">
    <input
    type="checkbox"
    :id="todo.id"
    v-model="todo.completed"
    >
    <label :for="todo.id">{{todo.content}}</label>
    <button type="button" name="button" class="delete" @click="dele"></button>
  </div>
</template>

<script>
export default {
  props: { //声明上级数据接收器
    todo: { //接收上级组件传入的todo对象
      type: Object,
      require: true
    }
  },
  methods: {
    dele () { //唤醒上级del事件，并且返回id
      this.$emit('del', this.todo.id)
    }
  }
}
</script>

<style lang="styl" scoped>
.item {
  position: relative;
  background: #fff;
  width: 100%;
  display: inline-block;
  box-sizing: border-box;
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
  border-bottom: 1px solid #f5f5f5;
}
.item input {
  display: inline-block;
  height: 18px;
  width: 18px;
  position: absolute;
  z-index: 1;
  opacity: 1;
  left: 16px;
  top: 13px;
  opacity: 0;
  cursor: pointer;
}
.item input[type="checkbox"] + label::before {
  content: "";
  position: absolute;
  left: -23px;
  top: 2px;
  display: inline-block;
  height: 16px;
  width: 16px;
  background: #fff;
  border: 1px solid #7aa0e0;
  box-sizing: border-box;
  z-index: 0;
  opacity: 1;
}
input[type="checkbox"]:checked + label::before {
  content: "";
  background: url(../assets/images/select.svg);
  background-size: contain;
  opacity: 1;
  border: 1px solid #c5d8f7;
}
input[type="checkbox"]:checked + label {
  text-decoration: line-through;
  color: #aaa;
}
.item label {
  color: #666;
  position: relative;
  margin-left: 25px;
  cursor: pointer;
  user-select: none;
}
.item button {
  float: right;
  margin-top: 15px;
  color: #7aa0e0;
  background: none;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  border: 0;
  font-size: 18px;
  cursor: pointer;
  display: block;
  background: url(../assets/images/delete.svg);
  background-size: contain;
  background-repeat: no-repeat;
  height: 20px;
  width: 20px;
  display: none;
}
.item:hover > button {
  display: block;
}
</style>
