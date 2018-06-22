<template>
  <el-table
    :data="practiceInfos"
    :span-method="mergeTable"
    tooltip-effect="light"
    :fit='true'
    border
    style="width:100%"
    align="center"
    empty-text=" ">
    <el-table-column
      prop="businessName"
      :resizable='false'
      label="适用业态"
      header-align="center"
      width="114"
      align="center"
      :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column
      prop="suitPartName"
      :resizable='false'
      label="适用部位"
      header-align="center"
      width="114"
      align="center"
      :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column
      prop="spacePracticeCode"
      :resizable='false'
      label="做法编号"
      header-align="center"
      width="190"
      align="center"
      :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column
      prop="spacePracticeName"
      :resizable='false'
      label="做法名称"
      header-align="center"
      width="156"
      align="center"
      :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column
      prop="quence"
      :resizable='false'
      label="序号"
      header-align="center"
      width="60"
      align="center"
      :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column
      prop="materialLayerPractice"
      :resizable='false'
      label="用料及分层做法"
      header-align="center"
      width="360"
      align="center"
      :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column
      prop="practiceReferenceThick"
      :resizable='false'
      label="做法参考厚度"
      header-align="center"
      width="142"
      align="center"
      :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column
      prop="suitSpaceNames"
      :resizable='false'
      label="适用空间"
      header-align="center"
      width="182"
      align="center"
      :show-overflow-tooltip="true">
    </el-table-column>
    <!--待定-->
    <el-table-column
      prop=""
      :resizable='false'
      label="基层材质"
      header-align="center"
      width="182"
      align="center"
      :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column
      prop="payStandard"
      :resizable='false'
      label="交付标准"
      header-align="center"
      width="142"
      align="center"
      :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column
      prop="suitConfigurationStandardName"
      :resizable='false'
      label="适用配置标准"
      header-align="center"
      width="114"
      align="center"
      :show-overflow-tooltip="true">
    </el-table-column>
    <!--待定-->
    <el-table-column
      prop=""
      :resizable='false'
      label="地上/地下属性"
      header-align="center"
      width="114"
      align="center"
      :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column
      prop="isKeepWarm"
      :resizable='false'
      label="是否保温"
      header-align="center"
      width="114"
      align="center"
      :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column
      prop="isJiangban"
      :resizable='false'
      label="是否降板"
      header-align="center"
      width="114"
      align="center"
      :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column
      prop="isWaterProof"
      :resizable='false'
      label="是否防水"
      header-align="center"
      width="114"
      align="center"
      :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column
      prop="reportProjectPractice"
      :resizable='false'
      label="提审工程做法"
      header-align="center"
      width="142"
      align="center"
      :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column
      prop="technicalRequirement"
      :resizable='false'
      label="技术要求"
      header-align="center"
      width="114"
      align="center"
      :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column
      prop="threedUi"
      :resizable='false'
      label="3D设计界面"
      header-align="center"
      width="132"
      align="center"
      :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column
      prop="fourListCode"
      :resizable='false'
      label="4D清单编码"
      header-align="center"
      width="132"
      align="center"
      :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column
      prop="fourdListName"
      :resizable='false'
      label="4D清单名称"
      header-align="center"
      width="200"
      align="center"
      :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column
      prop="fourdListDescription"
      :resizable='false'
      label="4D清单描述"
      header-align="center"
      width="200"
      align="center"
      :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column
      prop="fivedUi"
      :resizable='false'
      label="5D施工界面"
      header-align="center"
      width="132"
      align="center"
      :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column
      prop="nodeImage"
      class="node_abc"
      :resizable='false'
      label="节点图"
      header-align="center"
      width="114"
      align="center">
      <template slot-scope="scope">
        <img class="node_img"
             src=""
             alt="">
      </template>
    </el-table-column>
    <el-table-column
      :resizable='false'
      prop=""
      label="文件"
      header-align="center"
      align="center"
      width="156"
      :show-overflow-tooltip="true">
      <template slot-scope="scope">
        <span class="node_img">filePathfilePath</span>
      </template>
    </el-table-column>
    <el-table-column
      :resizable='false'
      prop="remark"
      label="备注说明"
      header-align="center"
      align="center"
      width="156"
      :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column
      :resizable='false'
      header-align="center"
      align="left"
      label="操作"
      width="200"
      :show-overflow-tooltip="true">
      <template slot-scope="scope">
        <el-button
          class="edit_data"
          type="text"
          size="small">
          空间
        </el-button>
        <el-upload
          class="upload-demo single_upload"
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple
          :limit="3">
          <span class="edit_data" size="small" type="text">图片</span>
        </el-upload>
        <el-upload
          class="upload-demo single_upload"
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple
          :limit="3">
          <span class="edit_data" size="small" type="text">文件</span>
        </el-upload>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name: 'table_user',
    data() {
      return {
        cellColRenderAll: ["3", "0", "0", "1", "1", "5", "0", "0", "0", "0"],
        cellColRenderDefaultAll: ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
        dataArrc: [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1],//表格列是否合并 土建
        spanArr: [],
        practiceInfos: [
          {
            practiceId: "",
            businessCode: "",
            businessName: "C2",
            suitPartId: "",
            suitPartName: "地面",
            payStandard: "B",
            suitSpaceNames: "",
            suitConfigurationStandardId: "",
            suitConfigurationStandardName: "",
            isKeepWarm: "A070101003",
            isJiangban: "碎石垫层/滤水层",
            isWaterProof: "",
            technicalRequirement: "",
            spacePracticeCode: "重庆-土建-地面-001",
            spacePracticeName: "喷固化剂金刚砂地坪(较高档标准车库)，无防水燃烧性能：A",
            threedUi: "",
            quence: "3",
            materialLayerPractice: "130mm厚C20素砼垫层；",
            practiceReferenceThick: "",
            fourListCode: "",
            fourdListName: "",
            fourdListDescription: "",
            fivedUi: "",
            fivedUnit: "",
            nodeImage: "",
            reportProjectPractice: "",
            baseMaterial: "",
            groundOrUndergroundAttributes: "",
            remark: "",
            filePath: "",
            errorMessage: ""
          },
          {
            practiceId: "",
            businessCode: "",
            businessName: "C2",
            suitPartId: "",
            suitPartName: "地面",
            payStandard: "B",
            suitSpaceNames: "",
            suitConfigurationStandardId: "",
            suitConfigurationStandardName: "",
            isKeepWarm: "A070101003",
            isJiangban: "碎石垫层/滤水层",
            isWaterProof: "",
            technicalRequirement: "",
            spacePracticeCode: "重庆-土建-地面-001",
            spacePracticeName: "喷固化剂金刚砂地坪(较高档标准车库)，无防水燃烧性能：A",
            threedUi: "",
            quence: "2",
            materialLayerPractice: "60mm厚碎石层；",
            practiceReferenceThick: "",
            fourListCode: "",
            fourdListName: "",
            fourdListDescription: "",
            fivedUi: "",
            fivedUnit: "",
            nodeImage: "",
            reportProjectPractice: "",
            baseMaterial: "",
            groundOrUndergroundAttributes: "",
            remark: "",
            filePath: "",
            errorMessage: ""
          },
          {
            practiceId: "",
            businessCode: "",
            businessName: "C2",
            suitPartId: "",
            suitPartName: "地面",
            payStandard: "B",
            suitSpaceNames: "",
            suitConfigurationStandardId: "",
            suitConfigurationStandardName: "",
            isKeepWarm: "A070101003",
            isJiangban: "碎石垫层/滤水层",
            isWaterProof: "",
            technicalRequirement: "",
            spacePracticeCode: "重庆-土建-地面-001",
            spacePracticeName: "喷固化剂金刚砂地坪(较高档标准车库)，无防水燃烧性能：A",
            threedUi: "",
            quence: "2",
            materialLayerPractice: "60mm厚碎石层；",
            practiceReferenceThick: "",
            fourListCode: "",
            fourdListName: "",
            fourdListDescription: "",
            fivedUi: "",
            fivedUnit: "",
            nodeImage: "",
            reportProjectPractice: "",
            baseMaterial: "",
            groundOrUndergroundAttributes: "",
            remark: "",
            filePath: "",
            errorMessage: ""
          },
          {
            practiceId: "",
            businessCode: "",
            businessName: "C2",
            suitPartId: "",
            suitPartName: "地面",
            payStandard: "B",
            suitSpaceNames: "",
            suitConfigurationStandardId: "",
            suitConfigurationStandardName: "",
            isKeepWarm: "A070101003",
            isJiangban: "碎石垫层/滤水层",
            isWaterProof: "",
            technicalRequirement: "",
            spacePracticeCode: "重庆-土建-地面-001",
            spacePracticeName: "喷固化剂金刚砂地坪(较高档标准车库)，无防水燃烧性能：A",
            threedUi: "",
            quence: "2",
            materialLayerPractice: "60mm厚碎石层；",
            practiceReferenceThick: "",
            fourListCode: "",
            fourdListName: "",
            fourdListDescription: "",
            fivedUi: "",
            fivedUnit: "",
            nodeImage: "",
            reportProjectPractice: "",
            baseMaterial: "",
            groundOrUndergroundAttributes: "",
            remark: "",
            filePath: "",
            errorMessage: ""
          },
          {
            practiceId: "",
            businessCode: "",
            businessName: "C2",
            suitPartId: "",
            suitPartName: "地面",
            payStandard: "B",
            suitSpaceNames: "",
            suitConfigurationStandardId: "",
            suitConfigurationStandardName: "",
            isKeepWarm: "A070101003",
            isJiangban: "碎石垫层/滤水层",
            isWaterProof: "",
            technicalRequirement: "",
            spacePracticeCode: "重庆-土建-地面-001",
            spacePracticeName: "喷固化剂金刚砂地坪(较高档标准车库)，无防水燃烧性能：A",
            threedUi: "",
            quence: "2",
            materialLayerPractice: "60mm厚碎石层；",
            practiceReferenceThick: "",
            fourListCode: "",
            fourdListName: "",
            fourdListDescription: "",
            fivedUi: "",
            fivedUnit: "",
            nodeImage: "",
            reportProjectPractice: "",
            baseMaterial: "",
            groundOrUndergroundAttributes: "",
            remark: "",
            filePath: "",
            errorMessage: ""
          },
          {
            practiceId: "",
            businessCode: "",
            businessName: "C2",
            suitPartId: "",
            suitPartName: "地面",
            payStandard: "B",
            suitSpaceNames: "",
            suitConfigurationStandardId: "",
            suitConfigurationStandardName: "",
            isKeepWarm: "A070101003",
            isJiangban: "碎石垫层/滤水层",
            isWaterProof: "",
            technicalRequirement: "",
            spacePracticeCode: "重庆-土建-地面-001",
            spacePracticeName: "喷固化剂金刚砂地坪(较高档标准车库)，无防水燃烧性能：A",
            threedUi: "",
            quence: "2",
            materialLayerPractice: "60mm厚碎石层；",
            practiceReferenceThick: "",
            fourListCode: "",
            fourdListName: "",
            fourdListDescription: "",
            fivedUi: "",
            fivedUnit: "",
            nodeImage: "",
            reportProjectPractice: "",
            baseMaterial: "",
            groundOrUndergroundAttributes: "",
            remark: "",
            filePath: "",
            errorMessage: ""
          },
          {
            practiceId: "",
            businessCode: "",
            businessName: "C2",
            suitPartId: "",
            suitPartName: "地面",
            payStandard: "B",
            suitSpaceNames: "",
            suitConfigurationStandardId: "",
            suitConfigurationStandardName: "",
            isKeepWarm: "A070101003",
            isJiangban: "碎石垫层/滤水层",
            isWaterProof: "",
            technicalRequirement: "",
            spacePracticeCode: "重庆-土建-地面-001",
            spacePracticeName: "喷固化剂金刚砂地坪(较高档标准车库)，无防水燃烧性能：A",
            threedUi: "",
            quence: "2",
            materialLayerPractice: "60mm厚碎石层；",
            practiceReferenceThick: "",
            fourListCode: "",
            fourdListName: "",
            fourdListDescription: "",
            fivedUi: "",
            fivedUnit: "",
            nodeImage: "",
            reportProjectPractice: "",
            baseMaterial: "",
            groundOrUndergroundAttributes: "",
            remark: "",
            filePath: "",
            errorMessage: ""
          },
          {
            practiceId: "",
            businessCode: "",
            businessName: "C2",
            suitPartId: "",
            suitPartName: "地面",
            payStandard: "B",
            suitSpaceNames: "",
            suitConfigurationStandardId: "",
            suitConfigurationStandardName: "",
            isKeepWarm: "A070101003",
            isJiangban: "碎石垫层/滤水层",
            isWaterProof: "",
            technicalRequirement: "",
            spacePracticeCode: "重庆-土建-地面-001",
            spacePracticeName: "喷固化剂金刚砂地坪(较高档标准车库)，无防水燃烧性能：A",
            threedUi: "",
            quence: "2",
            materialLayerPractice: "60mm厚碎石层；",
            practiceReferenceThick: "",
            fourListCode: "",
            fourdListName: "",
            fourdListDescription: "",
            fivedUi: "",
            fivedUnit: "",
            nodeImage: "",
            reportProjectPractice: "",
            baseMaterial: "",
            groundOrUndergroundAttributes: "",
            remark: "",
            filePath: "",
            errorMessage: ""
          },
          {
            practiceId: "",
            businessCode: "",
            businessName: "C2",
            suitPartId: "",
            suitPartName: "地面",
            payStandard: "B",
            suitSpaceNames: "",
            suitConfigurationStandardId: "",
            suitConfigurationStandardName: "",
            isKeepWarm: "A070101003",
            isJiangban: "碎石垫层/滤水层",
            isWaterProof: "",
            technicalRequirement: "",
            spacePracticeCode: "重庆-土建-地面-001",
            spacePracticeName: "喷固化剂金刚砂地坪(较高档标准车库)，无防水燃烧性能：A",
            threedUi: "",
            quence: "2",
            materialLayerPractice: "60mm厚碎石层；",
            practiceReferenceThick: "",
            fourListCode: "",
            fourdListName: "",
            fourdListDescription: "",
            fivedUi: "",
            fivedUnit: "",
            nodeImage: "",
            reportProjectPractice: "",
            baseMaterial: "",
            groundOrUndergroundAttributes: "",
            remark: "",
            filePath: "",
            errorMessage: ""
          },
          {
            practiceId: "",
            businessCode: "",
            businessName: "C2",
            suitPartId: "",
            suitPartName: "地面",
            payStandard: "B",
            suitSpaceNames: "",
            suitConfigurationStandardId: "",
            suitConfigurationStandardName: "",
            isKeepWarm: "A070101003",
            isJiangban: "碎石垫层/滤水层",
            isWaterProof: "",
            technicalRequirement: "",
            spacePracticeCode: "重庆-土建-地面-001",
            spacePracticeName: "喷固化剂金刚砂地坪(较高档标准车库)，无防水燃烧性能：A",
            threedUi: "",
            quence: "2",
            materialLayerPractice: "60mm厚碎石层；",
            practiceReferenceThick: "",
            fourListCode: "",
            fourdListName: "",
            fourdListDescription: "",
            fivedUi: "",
            fivedUnit: "",
            nodeImage: "",
            reportProjectPractice: "",
            baseMaterial: "",
            groundOrUndergroundAttributes: "",
            remark: "",
            filePath: "",
            errorMessage: ""
          }
        ]
      }
    },
    computed: {},
    methods: {
      //colspan 跨列
      mergeTable({row, column, rowIndex, columnIndex}) {
        var _this = this;
        if (_this.spanArr[columnIndex][rowIndex] != 0) {
          return {
            rowspan: _this.spanArr[columnIndex][rowIndex],
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      },
      dataFor() {
        var _this = this;
        this.dataArrc.forEach(item => {
          if (!!item) {
            _this.spanArr.push(_this.cellColRenderAll);
          } else {
            _this.spanArr.push(_this.cellColRenderDefaultAll);
          }
        });
      }
    },
    created() {
      this.dataFor();
      console.log(JSON.stringify(this.spanArr));
    }
  }
</script>
