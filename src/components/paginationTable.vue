<template>
  <div>
    <div class="table">
      <el-table
        :data="tableData">
        <slot name="tbody"></slot>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
      layout="total,sizes,prev,pager,next"
      @size-change="handleSizeChange"
      :page-sizes="sizes"
      :total="total"
      :current-page.sync="currentPageNumber"
      :page-size="size">
      </el-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

import { tableRowData } from '../interfaces/table'

const tableProp = Vue.extend({
  props: {
    //表格总数据
    tData: {
      type: Array,
      require: true,
      default () {
        return []
      }
    },
    pageSize: {
      type: Number,
      require: true,
      default () {
        return 5
      }
    },
    pageSizes:{
      type: Array,
      default () {
        return [10,50,100]
      }
    }
  },
})

export default class PaginationTable extends tableProp {
  @Prop() tData!: tableRowData[]
  @Prop() pageSize!: number
  @Prop() pageSizes!: number

  //当前页码
  currentPageNumber: number = 1
  //每页显示条数
  size: number = this.pageSize
  //页码条数选项
  sizes: number =  this.pageSizes

  get tableData () { 
      const nowIndex = this.size * (this.currentPageNumber - 1)
    return this.tData.slice(nowIndex, nowIndex+this.size)
  }
  
  //表格数据总条数
  get total (): number {
    return this.tData.length
  }

  handleSizeChange (newSize:number): void {
    this.size = newSize
  }

}
</script>

<style>
  .pagination {
    text-align: center;
  }
</style>
