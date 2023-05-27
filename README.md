# el-table-export-excel
vue2 element-ui 表格一键导出excel，依赖xlsx+xlsx-js-style

只需传入数据 自动根据页面表格样式导出<br>
[在线demo](http://xc-dev.work/el-table-export-excel/?_blank)<br><br>

## 用法

使用方法（组件：src/components/exportTableExcel.vue）需安装依赖：xlsx，xlsx-js-style
```
import ExportTableExcel from "@/components/exportTableExcel.vue";

<!--导出组件-->
<export-table-excel
    :parent="this"
    :data-list="data"
    :ignore="['操作']"
    :formatter="{
        col6:(val)=>val===1?'在线':'离线'
    }"
    export-name="测试数据导出"
/>

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

---
组件参数
---
| 参数                    | 类型      | 说明                             | 默认值      |
|-----------------------|---------|--------------------------------|----------|
| type                  | String  | 导出数据类型                         | data     |
| parent                | Object  | 表格所在组件this(必传用于获取表格)           |          |
| dataList              | Array   | 导出数据数组                         |          |
| exportName            | String  | 导出文件名                          | 数据导出     |
| ignore                | Array   | 需要忽略列的label数组                  | []       |
| formatter             | Object  | 数据格式化{ prop:Function(value) }  |          |
| elTableTag            | String  | 表格的tag(el-table-column的父组件tag) | el-table |
| headerBackgroundColor | String  | 导出表头背景色                        | #D9D9D9  |
---
效果图
<br>
web页面：
![img.png](http://xc-dev.work/el-table-export-excel/imgs/img.png)<br>
导出：<br>
![img_1.png](http://xc-dev.work/el-table-export-excel/imgs/img_1.png)
