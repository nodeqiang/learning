<template>
  <div style="display:block;">
    <div style="width:100vw;height:40vw;background-color: #d8be84;position:relative;align-items:center;">
      <div style="align-items:center;">
        <image src="/static/images/user.png" style="width:20vw;height:20vw;margin-left:1em;border-radius:10vw;" />
        <div style="margin-left:1em; flex-direction:column;">
          <div style="font-size:1.3rem; opacity:0.5;">未登录 </div>
          <div style="font-size:1rem; margin-top:0.3em; opacity:0.5;">点击登录账号 </div>
        </div>
      </div>
      <image src="/static/images/user.png" style="width:10vw;height:10vw;position:absolute;right:1em;top:0.5em;opacity:0.5;" />
    </div>

    <div style="flex-direction:row;" class="parent">
      <div class="child" /> <div class="child" style="flex:2;" /> <div class="child" />
      <div class="child" /> <div class="child" /> <div class="child" />
    </div>
    <div style="flex-direction:column;" class="parent">
      <div class="child" /> <div class="child" style="flex:2;" /> <div class="child" />
      <div class="child" /> <div class="child" /> <div class="child" />
    </div>
  </div>
</template>
<style scoped>
.parent {
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: stretch;
  border:1px solid red;
  width: 50vw;
  height:50vw;
}
.child {
  flex-grow: 1;
  flex-shrink: 0;
  border:1px solid blue;
}
div {
  box-sizing: border-box;
  display: flex;
}
</style>

<script>
module.exports = {
}
</script>
