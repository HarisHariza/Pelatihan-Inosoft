<template>
    <button type="button" @click="buttonClick">{{text}}</button>
</template>

<script>
export default{
    props:{
        text:{
            type: String,
            default: ""
        }
    },
    methods:{
        buttonClick(){
            this.$emit('emitclick')
        }
    }
}
</script>
