<!-- app.vue Vue 根文件 -->
<template lang="html">
  <!-- template 根模板内只能有一个节点 -->
<div id="app">
  <!-- 注入组件 -->
  <app_header></app_header>
  <app_container></app_container>
  <app_footer></app_footer>
</div>
</template>

<script>
//引入组件
import app_header from './project/header.vue';
import app_container from './project/container.vue';
import app_footer from './project/footer.vue';
export default {
  // 声明组件
  components: {
    app_header,
    app_container,
    app_footer
  }
};
console.log('运转正常');
</script>
<!-- 设置样式表采用stylus编译，设置scoped 限制样式选择器的作用域限制在该组件内部 -->
<style lang="stylus" scoped>

#app{

  text-align: center;
  margin: 0 auto;
}
</style>
