<template>
	<div class="relative clearfix">
		<div class="iconClass">
			<i class="el-icon-arrow-left" @click="leftFn"></i>
		</div>
		<div class="mainClass">
			<el-menu :default-active="activeIndex"
			         class="el-menu-demo menuClass"
			         mode="horizontal"
			         @select="handleSelect">
				<template v-for="(item,key) in defaultList[index]">
					<el-submenu :index="key.toString()" :key="key">
                        <template slot="title">{{item.title}}</template>
						<template v-for="(val,valIndex) in item.children">
							<el-menu-item :index="gernerateId(key,valIndex)" :data-path="val.path" :key="valIndex">{{val.title}}
							</el-menu-item>
							<template v-if="val.children.length">
								<el-submenu :index="gernerateId(key,valIndex)" :key="valIndex">
									<template slot="title">{{val.title}}</template>
									<template v-for="(v,k) in val.children">
										<el-menu-item :index="gernerateId(key,valIndex,k)" :data-path="v.path" :key="k">
											{{v.title}}
										</el-menu-item>
									</template>
								</el-submenu>
							</template>
						</template>
					</el-submenu>
				</template>
			</el-menu>
		</div>
		<div class="iconClass" style="float: right">
			<i class="el-icon-arrow-right" @click="rightFn"></i>
		</div>
	</div>
</template>

<script>
    export default {
        name: "lunbo",
        props: {
            permissionMenus: {
                type: Array,
                required: false
            },
        },
        data() {
            return {
                activeIndex: '1',
                defaultList: [],
                index: 0,
                //模拟页面的假数据
                arr: [
                    {
                        "id": '1',
                        "appName": "应用统一管理平台1",
                        "appCode": "ADMIN",
                        "appStatus": 1,
                        "appUrl": "http://10.16.161.32:9530",
                        "appDesc": "222222",
                        "addTime": "2018-07-03 17:09:34",
                        "icon": "http://10.16.161.41:8762/bfe34845-293e-49b7-b282-3ccec6bfcb6d.png",
                        "appFullname": "应用统一管理平台",
                        "children": ["选项1", "选项2", "选项3"],
                    },
                    {
                        "id": '2',
                        "appName": "应用统一管理平台2",
                        "appCode": "ADMIN",
                        "appStatus": 1,
                        "appUrl": "http://10.16.161.32:9530",
                        "appDesc": "222222",
                        "addTime": "2018-07-03 17:09:34",
                        "icon": "http://10.16.161.41:8762/bfe34845-293e-49b7-b282-3ccec6bfcb6d.png",
                        "appFullname": "应用统一管理平台",
                        "children": ["选项2-1", "选项2-2", "选项2-3"],
                    },
                    {
                        "id": '3',
                        "appName": "应用统一管理平台3",
                        "appCode": "ADMIN",
                        "appStatus": 1,
                        "appUrl": "http://10.16.161.32:9530",
                        "appDesc": "222222",
                        "addTime": "2018-07-03 17:09:34",
                        "icon": "http://10.16.161.41:8762/bfe34845-293e-49b7-b282-3ccec6bfcb6d.png",
                        "appFullname": "应用统一管理平台"
                    },
                    {
                        "id": '4',
                        "appName": "应用统一管理平台4",
                        "appCode": "ADMIN",
                        "appStatus": 1,
                        "appUrl": "http://10.16.161.32:9530",
                        "appDesc": "222222",
                        "addTime": "2018-07-03 17:09:34",
                        "icon": "http://10.16.161.41:8762/bfe34845-293e-49b7-b282-3ccec6bfcb6d.png",
                        "appFullname": "应用统一管理平台"
                    },
                    {
                        "id": '5',
                        "appName": "应用统一管理平台5",
                        "appCode": "ADMIN",
                        "appStatus": 1,
                        "appUrl": "http://10.16.161.32:9530",
                        "appDesc": "222222",
                        "addTime": "2018-07-03 17:09:34",
                        "icon": "http://10.16.161.41:8762/bfe34845-293e-49b7-b282-3ccec6bfcb6d.png",
                        "appFullname": "应用统一管理平台"
                    },
                    {
                        "id": '6',
                        "appName": "应用统一管理平台6",
                        "appCode": "ADMIN",
                        "appStatus": 1,
                        "appUrl": "http://10.16.161.32:9530",
                        "appDesc": "222222",
                        "addTime": "2018-07-03 17:09:34",
                        "icon": "http://10.16.161.41:8762/bfe34845-293e-49b7-b282-3ccec6bfcb6d.png",
                        "appFullname": "应用统一管理平台"
                    },
                    {
                        "id": '7',
                        "appName": "应用统一管理平台7",
                        "appCode": "ADMIN",
                        "appStatus": 1,
                        "appUrl": "http://10.16.161.32:9530",
                        "appDesc": "222222",
                        "addTime": "2018-07-03 17:09:34",
                        "icon": "http://10.16.161.41:8762/bfe34845-293e-49b7-b282-3ccec6bfcb6d.png",
                        "appFullname": "应用统一管理平台"
                    },
                    {
                        "id": '8',
                        "appName": "应用统一管理平台8",
                        "appCode": "ADMIN",
                        "appStatus": 1,
                        "appUrl": "http://10.16.161.32:9530",
                        "appDesc": "222222",
                        "addTime": "2018-07-03 17:09:34",
                        "icon": "http://10.16.161.41:8762/bfe34845-293e-49b7-b282-3ccec6bfcb6d.png",
                        "appFullname": "应用统一管理平台"
                    },
                    {
                        "id": '9',
                        "appName": "应用统一管理平台8",
                        "appCode": "ADMIN",
                        "appStatus": 1,
                        "appUrl": "http://10.16.161.32:9530",
                        "appDesc": "222222",
                        "addTime": "2018-07-03 17:09:34",
                        "icon": "http://10.16.161.41:8762/bfe34845-293e-49b7-b282-3ccec6bfcb6d.png",
                        "appFullname": "应用统一管理平台"
                    },
                    {
                        "id": '10',
                        "appName": "应用统一管理平台8",
                        "appCode": "ADMIN",
                        "appStatus": 1,
                        "appUrl": "http://10.16.161.32:9530",
                        "appDesc": "222222",
                        "addTime": "2018-07-03 17:09:34",
                        "icon": "http://10.16.161.41:8762/bfe34845-293e-49b7-b282-3ccec6bfcb6d.png",
                        "appFullname": "应用统一管理平台"
                    },
                    {
                        "id": '11',
                        "appName": "应用统一管理平台8",
                        "appCode": "ADMIN",
                        "appStatus": 1,
                        "appUrl": "http://10.16.161.32:9530",
                        "appDesc": "222222",
                        "addTime": "2018-07-03 17:09:34",
                        "icon": "http://10.16.161.41:8762/bfe34845-293e-49b7-b282-3ccec6bfcb6d.png",
                        "appFullname": "应用统一管理平台"
                    },
                    {
                        "id": '12',
                        "appName": "应用统一管理平台8",
                        "appCode": "ADMIN",
                        "appStatus": 1,
                        "appUrl": "http://10.16.161.32:9530",
                        "appDesc": "222222",
                        "addTime": "2018-07-03 17:09:34",
                        "icon": "http://10.16.161.41:8762/bfe34845-293e-49b7-b282-3ccec6bfcb6d.png",
                        "appFullname": "应用统一管理平台"
                    },
                    {
                        "id": '13',
                        "appName": "应用统一管理平台8",
                        "appCode": "ADMIN",
                        "appStatus": 1,
                        "appUrl": "http://10.16.161.32:9530",
                        "appDesc": "222222",
                        "addTime": "2018-07-03 17:09:34",
                        "icon": "http://10.16.161.41:8762/bfe34845-293e-49b7-b282-3ccec6bfcb6d.png",
                        "appFullname": "应用统一管理平台"
                    }
                ]
            }
        },
        created() {
            var _this = this;
            var splitArr = this.SplitArray(5, _this.arr);
            for (var i = 0; i < splitArr.length; i++) {
                _this.defaultList.push(splitArr[i]);
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                var _this = this;
                event = window.event || event.srcElement;
                var path = event.target.getAttribute("data-path");
                var portUrl = window.location.host;
                window.location.href = "http://" + portUrl + path;
            },
            gernerateId(parentIndex, childrenIndex, k) {
                if (k != undefined) {
                    return (parentIndex + 1) + "-" + (childrenIndex + 1) + "-" + (k + 1);
                } else {
                    return (parentIndex + 1) + "-" + (childrenIndex + 1);
                }
            },
            leftFn() {
                if (this.index < this.defaultList.length - 1) {
                    this.index = ++this.index;
                }
            },
            rightFn() {
                if (this.index > 0) {
                    this.index = --this.index;
                }
            },
            //把原有的数组拆分成小数组
            SplitArray(N, Q) {
                var R = [], F;
                for (F = 0; F < Q.length;) R.push(Q.slice(F, F += N))
                return R
            }
        }
    }
</script>

<style scoped>
	.relative {
		position: relative;
		line-height: 60px;
		width: 100% !important;
		height: 60px !important;
		color: #fff !important;
		white-space: nowrap !important;
		overflow: hidden
	}

	.iconClass {
		float: left;
		cursor: pointer;
	}

	.mainClass {
		float: left;
		overflow: hidden;
		max-width: calc(100% - 35px) !important;
	}

	.menuClass {
		background: rgb(84, 92, 100);
	}

	:global(.el-menu--horizontal .el-submenu .el-submenu__title) {
		color: #fff !important;
		line-height: 60px !important;
		height: 100%;
		background: rgb(84, 92, 100);
	}
</style>
