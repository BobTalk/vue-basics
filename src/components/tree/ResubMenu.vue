<template>
	<SubMenu>
		<template slot='title'>
			<div>{{data.title}}</div>
		</template>
		<template v-for="(child,idx) in data.children">
			<div :key="`${idx}_${_uid}`" :a="`${idx}_${_uid}`" v-if="!child.children">{{child.title}}</div>
			<resub-menu :key="`${idx}_${_uid}`"  :a="`${idx}_${_uid}`" v-else :data="child"></resub-menu>
		</template>
	</SubMenu>
</template>

<script>
    import SubMenu from './SubMenu.vue'

    export default {
        name: "resub-menu",
        props: {
            data: {
                type: Object,
                default: () => {
                    return {}
                }
            }
        },
        components: {
            SubMenu
        }
    }
</script>

<style scoped>

</style>
