<template>
  <div id="top_bar">
    <TabBar>
      <TabBarItem path="/home" activeColor=''>
        <span>主页</span>
      </TabBarItem>
      <TabBarItem path="/login">
        <span>我的音乐</span>
      </TabBarItem>
      <TabBarItem path="/mall">
        <span>音乐人</span>
      </TabBarItem>
      <TabBarItem path="/star">
        <span>商城</span>
      </TabBarItem>
      <TabBarItem path='/search'>
        <input type="text" />
      </TabBarItem>
      <TabBarItem path="/login">
        <span>登录</span>
      </TabBarItem>
    </TabBar>
    
  </div>
</template>

<script>
import TabBar from "../common/tabbar/TabBar";
import TabBarItem from "../common/tabbar/TabBarItem";
export default {
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
#top_bar {
  background: #242424;
}
a {
  color: #fff;
}
</style>