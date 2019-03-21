<template>
	<div>
		<!--v-model="msg"-->
		<input type="text" v-split="msg" :maxlength="2">
	</div>
</template>

<script>
    export default {
        name: "input-index",
        filters: {},
        directives: {
            //el ==> 元素,bindingd,vnode===> 虚拟dom
            'split': {
                //第一种实现
                /* bind(el, bindings, vnode) {
					 console.log(el);
					 let ctx = vnode.context;//获取当前元素上下文
					 ctx[bindings.expression] = el.value.slice(0, 3)
				 },
				 update(el, bindings, vnode) {
					 console.log(el);
					 let ctx = vnode.context;//获取当前元素上下文
					 ctx[bindings.expression] = el.value.slice(0, 3)
				 }*/
                //第二种实现
                inserted(el, bindings, vnode) {
                    console.log(el);
                    console.log(bindings);
                    console.log(vnode);
                },

                //第三种实现  包含v-module实现
                update(el, bindings, vnode) {
                    let ctx = vnode.context;//获取当前元素上下文
                    ctx[bindings.expression] = el.value.slice(0, 3)
                },
                bind(el, bindings, vnode) {
                    let ctx = vnode.context;//获取当前元素上下文
                    el.addEventListener('input', (e) => {
                        let val = e.target.value.slice(0, 3);
                        ctx[bindings.expression] = val;
                        el.value = val;
                    });
                    el.value = ctx[bindings.expression].slice(0, 3)
                },
            }
        },
        data() {
            return {
                msg: 'dd'
            }
        },
        methods: {}
    }
</script>

<style scoped>

</style>
