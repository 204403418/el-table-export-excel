<template>
  <div>
    <export-table-excel :parent="this" type="data" :data-list="data"/>
    <el-table :data="data">
      <el-table-column label="序号" prop="abc"/>
      <el-table-column label="第一列" prop="abc"/>
      <el-table-column label="第二块" prop="abc">
        <el-table-column label="第二列" prop="abc"/>
        <el-table-column label="第三块" prop="abc">
          <el-table-column label="第三列" prop="abc"/>
          <el-table-column label="第四列" prop="abc"/>
        </el-table-column>
        <el-table-column label="第五列" prop="abc"/>
      </el-table-column>
      <el-table-column label="第六列" prop="abc"/>
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
          abc: 'text'
        }
      ]
    };
  }
};
</script>

<style scoped>

</style>
