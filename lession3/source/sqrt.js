function 平方根(x) {
    for (let 最小值=0, 最大值=x;;) {
       let 平均值 = (最大值 + 最小值) / 2
       if (平均值 === 最小值) {
          console.log(平均值)
          break
       }
       let 平均值的平方 = 平均值 * 平均值
       if (平均值的平方 > x) {
           最大值 = 平均值
       } else if (平均值的平方 < x) {
           最小值 = 平均值
       } else {
           console.log(平均值)
           break
       }
    }
}
平方根(2)