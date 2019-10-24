<template>
  <div>
    <div style="height:40vw;background-color: #d8be84;position:relative;">
      <div style="display:inline-block;line-height:40vw;">
        <image src="/static/images/user.png" style="width:20vw;height:20vw;vertical-align:middle;margin-left:1em;border-radius:10vw;" />
        <div style="display:inline-block;height:2.6rem;vertical-align:middle;margin-left:1em;">
          <div style="font-size:1.3rem;line-height:1.3rem; opacity:0.5;">未登录 </div>
          <div style="font-size:1rem;line-height:1rem;margin-top:0.3em; opacity:0.5;">点击登录账号 </div>
        </div>
      </div>
      <image src="/static/images/user.png" style="width:10vw;height:10vw;position:absolute;right:1em;top:0.5em;opacity:0.5;" />
    </div>
  </div>
</template>
<style scoped>
div {
  box-sizing: border-box;
}
</style>

<script>
module.exports = {
}
</script>
