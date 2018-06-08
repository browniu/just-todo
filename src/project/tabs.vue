<template lang="html">
<div class="tabs">
  <div class="left">{{unfinished}} rest</div>
  <div class="center">
    <span
    :class="[state,filter===state?'actived':'']"
    :key="state"
    v-for="state in states"
    @click="toggle(state)"
    >{{state}}</span>
  </div>
  <div class="right" @click="clear()"></div>
</div>
</template>

<script>
export default {
  props: {
    filter: { //获取上级发送的状筛选器状态
      type: String,
      require: true
    },
    todos: {
      type: Array,
      require: true
    }
  },
  data () {
    return {
      states: ['all', 'active', 'completed']
    }
  },
  computed: {
    unfinished () {
      return this.todos.filter(todo => !todo.completed).length;
    }
  },
  methods: {
    toggle (state) {
      this.$emit('toggle', state);
    },
    clear () {
      this.$emit('clear')
    }
  }

}
</script>

<style lang="styl" scoped>
.tabs {
  background: #fff;
  width: 100%;
  display: inline-block;
  box-sizing: border-box;
  height: 55px;
  line-height: 55px;
  padding: 0 20px;
  border-top: 0px solid #f5f5f5;
  margin-top: 5px;
}
.tabs div {
  font-size: 12px;
  color: #999;
  display: inline-block;
}
.tabs div.right {
  float: right;
  cursor: pointer;
  display: block;
  height: 18px;
  width: 18px;
  margin-top: 17px;
  background: url(../assets/images/clear.svg);
  background-repeat: no-repeat;
  background-size: contain;
}
.tabs div.center {
  margin-left: 40px;
}
.tabs div.center span {
  margin-left: 15px;
  padding: 3px 10px;
  border-radius: 0px;
  color: #9fb8e2;
  cursor: pointer;
  box-sizing: border-box;
}
.tabs div.center span.actived {
  border: 1px solid #c5d3ec;
  color: #38527d;
}
</style>
