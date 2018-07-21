<template>
  <div class="chart-con">
    <chart :chartId="lineChartId"></chart>
    <chart :chartId="pieChartId" :chartOptions="pieChartOptions"></chart>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

import Chart from '../components/chart.vue'

import { getPieChartData } from '../mock'
import { pieData } from '../interfaces/pie'

@Component({
  components: {
    Chart
  }
})

export default class MyCharts extends Vue{

  constructor () {
    super()

    const response = getPieChartData()
    const seriesData: pieData[] = response.data

    const legend = seriesData.map(item => item.name)

    let option = {
        backgroundColor: '#fff',
        title: {
            x: '2%',
            y: '2%',
            textStyle: {
                fontWeight: 400,
                fontSize: 16,
                color: '#687284'
            },
            text: '饼图'
        },
        tooltip: {
            trigger: 'item',
            show: true
        },
        legend: {
            orient: 'horizontal',
            top: 16,
            icon: 'circle',
            selectedMode: false,
            itemWidth: 6,
            itemHeight: 6,
            itemGap: 6,
            borderRadius: 6,
            data: legend
        },
        series: [{
            type: 'pie',
            hoverAnimation: true,
            radius: ['40%', '67%'],
            color: ['#3FA7DC', '#7091C4', '#5170A2', '#E1CA74'],
            label: {
                normal: {
                    position: 'inner',
                    // formatter: '{d}%',
                    formatter: function(param:any):string {
                        if (!param.percent) return ''
                        var f = Math.round(param.percent * 10) / 10;
                        var s = f.toString();
                        var rs = s.indexOf('.');
                        if (rs < 0) {
                            rs = s.length;
                            s += '.';
                        }
                        while (s.length <= rs + 1) {
                            s += '0';
                        }
                        return s + '%';
                    },
                    textStyle: {
                        color: '#fff',
                        fontSize: 12
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: seriesData
        }]
    }

    this.pieChartOptions = option
  }

  lineChartId: string = 'lineChart'
  pieChartId: string = 'pieChart'
  pieChartOptions: object
}
</script>

<style lang="css" scoped>
.chart-con {
  padding-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
 
}
</style>
