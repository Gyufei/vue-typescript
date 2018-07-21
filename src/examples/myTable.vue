<template>
  <pagination-table
    :page-sizes="[10,20,40]"
    :t-data="tableData"
    :page-size="5">
    <template slot="tbody">
      <el-table-column 
        prop="id" 
        align="center"
        label="编号"></el-table-column>
      <el-table-column 
        prop="name" 
        align="center"
        label="姓名"></el-table-column>
      <el-table-column 
        prop="date" 
        align="center"
        label="生日"></el-table-column>
    </template>
    </pagination-table>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import PaginationTable from '../components/paginationTable.vue'

import { getTableData } from '../mock'
import { tableRowData }  from '../interfaces/table'

@Component({
  components: {
    PaginationTable
  }
})
export default class MyTable extends Vue{
  tableData: tableRowData[] = []

  created () {
    const res = getTableData()
    this.tableData = res.data
  }
}
</script>

<style></style>
