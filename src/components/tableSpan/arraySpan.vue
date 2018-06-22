<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%"
    :span-method="spanHandler">
    <el-table-column
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
    <el-table-column
      prop="ssss"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name: "col-span",
    data() {
      return {
        tableData: [
          {
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
            ssss: 2
          },
          {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
            ssss: 2
          }, {
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
            ssss: 2
          }, {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
            ssss: 2
          }, {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
            ssss: 2
          }, {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
            ssss: 2
          }],
        column_row_offset: {
          date: [3, 1, 1, 1],
          name: [2, 1, 1, 1, 1],
          province: [1, 1, 1, 1, 1, 1],
          city: [1, 1, 1, 1, 1, 1],
          address: [1, 1, 1, 1, 1, 1],
          zip: [1, 1, 1, 1, 1, 1]
        },
        now_col_row_num: {},
        now_col_offset: {},
      }
    },
    methods: {
      spanHandler({row, column, rowIndex, columnIndex}) {
        if (!this.now_col_row_num[column.property]) {
          this.now_col_row_num[column.property] = Object.assign([], this.column_row_offset[column.property]);
          let a = this.now_col_row_num[column.property].shift();
          this.now_col_offset[column.property] = a;
          return {
            rowspan: a,
            colspan: 1
          };
        }
        else if (rowIndex >= this.now_col_offset[column.property]) {
          let a = this.now_col_row_num[column.property].shift();
          this.now_col_offset[column.property] += a;
          return {
            rowspan: a,
            colspan: 1
          };
        }
        else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    }
  }
</script>

<style scoped>

</style>
