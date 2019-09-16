for (let 鸡=1; 鸡<35; 鸡=鸡+1) {
    let 兔 = 35 - 鸡
    let 腿 = 鸡 * 2 + 兔 * 4
    if (腿 === 94) {
        console.log(鸡)
        console.log(兔)
    }
}