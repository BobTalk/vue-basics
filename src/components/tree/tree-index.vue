<template>
	<div class="tree">
		<MyMenu>
			<template v-for="(item,key) in menuList">
				<div
					:key="`${key}-${_uid}`"
					:a="`${key}-${_uid}`"
					v-if="!(item.children)">
					{{item.title}}
				</div>
				<MyReSub
					:key="`${key}-${_uid}`"
					:a="`${key}-${_uid}`"
					v-else
					:data="item"></MyReSub>
			</template>
		</MyMenu>
	</div>
</template>
<style scoped lang="less">

</style>
<script>
    import MyMenu from './menu.vue'
    import MyReSub from './ResubMenu.vue'

    export default {
        data() {
            return {
                menuList: [
                    {
                        title: '菜单1',
                        children: [
                            {title: '菜单1-1'},
                            {title: '菜单1-2'},
                            {
                                title: '菜单1-3',
                                children: [
                                    {title: '菜单1-3-1'},
                                    {title: '菜单1-3-2'},
                                    {title: '菜单1-3-3'},
                                    {title: '菜单1-3-4'}
                                ]
                            },
                            {
                                title: '菜单1-4',
                                children: [
                                    {title: '菜单1-4-1'},
                                    {title: '菜单1-4-2'},
                                    {title: '菜单1-4-3'},
                                    {title: '菜单1-4-4'}
                                ]
                            }
                        ]
                    },
                    {
                        title: '菜单2'
                    },
                    {
                        title: '菜单3'
                    },
                    {
                        title: '菜单4'
                    }
                ]
            }
        },
        components: {
            MyMenu,
            MyReSub
        },
        methods: {}
    }
</script>
<style scoped>
	.tree {
		text-align: left;
	}
</style>
