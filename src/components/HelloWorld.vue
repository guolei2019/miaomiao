<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <!-- 我是一个兵，来自老百姓！ -->
     <!-- 我是一个粗人，不太会说话！ -->
      <!-- 我是一个兵，来自老百姓！
     我是一个粗人，不太会说话！ -->
     <!-- 我在测试 -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
