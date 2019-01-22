<template>
  <div>
    <ul class="tabs1">
      <li class="on">
        <a href="javascript:void(0);" @click="toggleTabs(first);">特色服务</a>
      </li>
      <li>
      <a href="javascript:void(0);" @click="toggleTabs(second);">推荐医院</a>
      </li>
      <li>
      <a href="javascript:void(0);" @click="toggleTabs(third);">宠物百科</a>
      </li>
    </ul>
    <!-- 动态地绑定到它的 is 特性，我们让多个组件可以使用同一个挂载点，并动态切换。如果把切换出去的组件保留在内存中，可以保留它的状态或避免重新渲染。为此可以添加一个 keep-alive 指令参数 -->
    <first :is="currentView" keep-alive></first>
  </div>
</template>
<script>
import first from "./tab1";
import second from "./tab2";
import third from "./tab3";
export default {
  data() {
    return {
      first: "first",
      second: "second",
      third: "third",
      currentView: "first"
    };
  },
  components: {
    first,
    second,
    third
  },
  methods: {
    toggleTabs(tabText) {
      this.currentView = tabText;
    }
  }
};
</script>
<style>
.newsList {
  clear: both;
  margin-bottom: 1rem;
  margin-top: 0.7rem;
}
.tabs {
  background: #ddd;
  height: 50px;
  overflow: hidden;
  margin-top: 20px;
}
.tabs li {
  width: 33.33%;
  height: 50px;
  float: left;
}
.tabs li a {
  display: block;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #444;
}
.tabs li.on a {
  background: #ec6941;
  color: white;
}
.tabs1 {
  background: #f0f0f0;
  height: 50px;
  overflow: hidden;
}
.tabs1 li {
  width: 33.33%;
  height: 50px;
  float: left;
}
.tabs1 li a {
  display: block;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #444;
  box-shadow: 0 -2px 0 0 #aaa inset;
}
.tabs1 li.on a {
  box-shadow: 0 -2px 0 0 #ec6941 inset;
  color: #ec6941;
}
.content > li {
  display: none;
  padding: 15px;
  line-height: 26px;
  color: #666;
  background: white;
}
.next {
  display: block;
  width: 240px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 30px;
  background: #ec6941;
  color: white;
  margin: 10px auto;
}
</style>


