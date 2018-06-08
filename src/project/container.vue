<!-- container.vue 主组件（数据计算中心） -->
<template lang="html">
<div class="container">
  <div class="main">
  <input
  id="things"
  class="add-input"
  placeholder="继续沉迷学习？"
  @keyup.enter="add"
  type="text">
  <div id="confirm"></div>
  <div class="items">
    <!-- :todo(v-bind:todo)向子组件注入todo对象
    v-for...遍历todos数组
    :key 用key管理可复用的元素
    @del(@del=v-on:del)监听子组件del事件 -->
  <app_item
    :todo='todo'
    v-for="todo in filterList"
    :key="todo.id"
    @del="dele"
  ></app_item>
  </div>
  </div>
  <app_tabs
    :filter="filter"
    :todos='todos'
    @toggle="toggle"
    @clear="clear"
  ></app_tabs>
</div>
</template>

<script>
//引入子组件
import app_item from '../project/item.vue';
import app_tabs from '../project/tabs.vue';
//设置初始数据
let id = 0;
export default {
  //声明数据
  data () {
    return {
      todos: [],
      filter: 'all'
    }
  },
  //声明组件
  components: {
    app_item,
    app_tabs
  },
  //声明计算
  computed: {
    filterList () { // 筛选器
      if (this.filter === 'all') { //如果筛选器为all，直接返回完整列表
        return this.todos
      };
      const completed = this.filter === 'completed'; //返回匹配该筛选标签的对象
      return this.todos.filter(todo => completed === todo.completed);
    }
  },
  //声明事件
  methods: {
    add (e) { //添加行为事件
      if (e.target.value.trim()) {
        this.todos.unshift({
          id: id++,
          content: e.target.value.trim(),
          completed: false
        })
      };
      e.target.value = ''
    },
    dele (id) { //删除行为事件
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
    },
    toggle (state) {
      this.filter = state;
    },
    clear () {
      this.todos = this.todos.filter(todo => !todo.completed)
    }
  }
}
</script>

<style lang="styl" scoped>
.container {
  position: relative;
  text-align: left;
  color: green;
  width: 70%;
  max-width: 520px;
  min-width: 360px;
  margin: 0 auto;
  box-shadow: 1px 3px 3px rgba(38, 54, 64, 0.15);
}
.container input {
  width: 100%;
  height: 80px;
  padding: 0 20px;
  font-size: 18px;
  color: #333;
  border: 0;
  border-bottom: 1px solid #f5f5f5;
  box-sizing: border-box;
}
.container input::-webkit-input-placeholder {
  color: #aaa;
  font-weight: lighter;
}
#confirm {
  height: 20px;
  width: 20px;
  position: absolute;
  background: url(../assets/images/add.svg);
  background-repeat: no-repeat;
  background-size: contain;
  top: 30px;
  right: 20px;
}
</style>
