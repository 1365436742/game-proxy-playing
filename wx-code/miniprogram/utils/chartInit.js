import * as echarts from '../ec-canvas/echarts';
export function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // 像素比
  });
  canvas.setChart(chart);
  const labelOption = {
    show: true,
  };
  var option = {
    grid: {
      left: '0%',
      right: '0%',
      top: '8%',
      bottom: '8%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        axisLabel: {
          interval: 0,
        },
        data: ['计算机', '人工智能', '金融科技', '物联网', '信息安全']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Forest',
        type: 'bar',
        barGap: 0,
        label: labelOption,
        emphasis: {
          focus: 'series'
        },
        itemStyle: {
          color: '#1989fa'
        },
        data: [99, 80, 60, 40, 20]
      },
    ]
  };
  chart.setOption(option);
  return chart;
}