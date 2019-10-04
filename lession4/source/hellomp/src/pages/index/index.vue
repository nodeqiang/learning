<template>
  <div class="page">
    <div class="row">
      <input v-model="source" />
      <button @click="calc">确定</button>
    </div>
    <div class="result"> {{ result }} </div>
  </div>
</template>

<script>
let 平方根 = require('sqrt2')
module.exports = {
  data () {
    return {
      source: 2,
      result: 1.414
    }
  },
  methods: {
    calc () {
      this.result = 平方根(this.source)
    }
  }
}
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.row {
  display: flex;
  align-items: stretch;
  margin-top: 200rpx;
  margin-bottom: 20rpx;
}

input {
  border: 1px solid #8c8c8c;
  padding: 10rpx;
  text-align: center;
  height: 50rpx;
}

button {
  line-height: 2;
}

</style>
