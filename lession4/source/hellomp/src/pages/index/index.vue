<template>
  <div class="page">
    <div class="row">
      <input v-model="source" />
      <button @click="result=sqrt(source)">确定</button>
    </div>
    <div class="result"> {{ result }} </div>
  </div>
</template>

<script>
module.exports = {
  data: () => ({
    source: 2,
    result: ''
  }),
  methods: {
    sqrt: require('sqrt2')
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
