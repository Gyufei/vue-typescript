<template>
  <div :id="chartId" :style="chartStyle"></div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

import echarts from 'echarts'

const defaultOptions = {
  title: {
      x: '2%',
      y: '2%',
      textStyle: {
          fontWeight: 400,
          fontSize: 16,
          color: '#687284'
      },
      text: '柱状图'
  },
  tooltip: {},
  legend: {
      data:['数据']
  },
  xAxis: {
      data: ["系列1","系列2","系列3","系列4","系列5","系列6"]
  },
  yAxis: {},
  series: [{
      name: '数据',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
  }]
};

@Component
export default class Chart extends Vue{
  @Prop(String) chartId!: string
  @Prop({default: () => defaultOptions}) chartOptions:any
  @Prop({default: () => 400}) width!: number
  @Prop({default: () => 400}) height!: number


  get chartStyle () {
    return {
      width: `${this.width}px`,
      height: `${this.height}px`
    }
  }

  @Watch('chartOptions')
  onChartOptionsChange (val: object) {
    const chartDOM: HTMLElement | null = document.getElementById(`${this.chartId}`)

    if (!chartDOM) return
    let chart = echarts.getInstanceByDom(<HTMLDivElement>chartDOM)
    if (!chart) {
      chart = echarts.init(<HTMLDivElement>chartDOM)
    }

    chart.setOption(val)
  }

  mounted () {
    const chartDOM: HTMLElement | null = document.getElementById(`${this.chartId}`)
    const chart = echarts.init(<HTMLDivElement>chartDOM)
    chart.setOption(this.chartOptions)
  }
}
</script>

<style lang="" scoped>
</style>
