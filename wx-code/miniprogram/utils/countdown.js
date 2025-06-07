export const countdown = (remainingTime, cb) => {
  const startTime = Date.now()
  let timer = null;
  const timerFn = () => {
    timer = setTimeout(() => {
      const curTime = Date.now() - startTime;
      if (curTime < remainingTime) {
        timerFn();
        cb(remainingTime - curTime)
      } else {
        timer = null
        cb(0)
      }
    }, 1000)
  }
  timerFn()
  return () => {
    timer && clearTimeout(timer)
  }
}

export const convertMillisecondsToHMS = (totalMilliseconds) => {
  const totalSeconds = totalMilliseconds / 1000; // 将毫秒转换为秒
  const h = Math.floor(totalSeconds / 3600); // 计算小时数
  const m = Math.floor((totalSeconds % 3600) / 60); // 计算分钟数
  const s = Math.floor(totalSeconds % 60);
  const times = {
    hours: h.toString().padStart(2, "0"),
    minutes: m.toString().padStart(2, "0"),
    seconds: s.toString().padStart(2, "0")
  }
  return times
}
