# el-table-export-excel
vue2 element-ui 表格一键导出excel，依赖xlsx+xlsx-js-style

只需传入数据 自动根据页面表格样式导出<br>
[在线demo](http://xc-dev.work/el-table-export-excel/)<br><br>

使用方法（组件：src/components/exportTableExcel.vue）需安装依赖：xlsx，xlsx-js-style
```
import ExportTableExcel from "@/components/exportTableExcel.vue";

<!--导出组件-->
<export-table-excel :parent="this" type="data" :data-list="data"/>

<!--el-table-->
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
```


效果图
<br>
web页面：
![img.png](http://xc-dev.work/el-table-export-excel/imgs/img.png)<br>
导出：<br>
![img_1.png](http://xc-dev.work/el-table-export-excel/imgs/img_1.png)
