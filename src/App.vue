<template>
  <div>
    <export-table-excel
      :parent="this"
      :data-list="data"
      :ignore="['操作']"
      :formatter="{
        col6:(val)=>val===1?'在线':'离线'
      }"
      export-name="测试数据导出"
    />
    <el-table :data="data">
      <el-table-column label="序号" type="index" width="80"/>
      <el-table-column label="第一列" prop="abc" :formatter="(row)=>row.abc+'+尾巴'"/>
      <el-table-column label="第二块" prop="abc">
        <el-table-column label="第二列" prop="abc"/>
        <el-table-column label="第三块" prop="abc">
          <el-table-column label="第三列" prop="abc"/>
          <el-table-column label="第四列" prop="abc"/>
        </el-table-column>
        <el-table-column label="第五列" prop="abc"/>
      </el-table-column>
      <el-table-column label="第六列" prop="col6">
        <template #default="{row}">
          <el-tag v-if="row.col6 === 1" type="primary" size="small">在线</el-tag>
          <el-tag v-else type="info" size="small">离线</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <el-button type="primary" size="small">编辑</el-button>
        <el-button type="danger" size="small">删除</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

import ExportTableExcel from "@/components/exportTableExcel.vue";

export default {
  name: "App",
  components: {ExportTableExcel},
  data() {
    return {
      data: [
        {
          abc: 'text1',
          col6:0
        },
        {
          abc: 'text2',
          col6:1
        }
      ]
    };
  }
};
</script>

<style scoped>

</style>
