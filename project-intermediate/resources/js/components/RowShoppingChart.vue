<template>
    <tr>
        <td>{{shopping_list.barang}}</td>
        <td>{{shopping_list.quantity}}</td>
        <td>{{shopping_list.price}}</td>
        <td>{{shopping_list.quantity*shopping_list.price}}</td>
        <td><button-component @emitclick="buttonClick" text="delete"></button-component></td>
     </tr>
</template>
<script>
export default({
    props:{
        shopping_list:{
            type: Object,
            default: ""
        }
    },
    methods:{
        buttonClick(){
            this.$emit('emitclick')
        }
    }
})
</script>
