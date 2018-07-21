<template>
  <div id="app">
    <el-menu :default-active="activeIndex" mode="horizontal">
      <el-menu-item index="1" @click="goToTable">myTable</el-menu-item>
      <el-menu-item index="2" @click="goToCharts">myCharts</el-menu-item>
      </el-menu>
      <div>
        <keep-alive>
          <component :is="currentComp"></component>
        </keep-alive>
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import MyCharts from './examples/myCharts.vue'
import MyTable from './examples/myTable.vue'

@Component({
  components: {
    MyCharts,
    MyTable
  }
})
export default class App extends Vue{

  activeIndex: string = '2'
  currentComp: string = 'myCharts'

  goToCharts (): void {
      this.currentComp = 'myCharts'
  }

  goToTable (): void {
    this.currentComp = 'myTable'
  }
}
</script>

<style>
</style>
