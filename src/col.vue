<template>
    <div class="col" :class="[`col-${span}`]">
        <slot></slot>
    </div>
</template>


<script>
    export default{
        name:'GuluCol',
        props:{
            span:{
                type:[Number,String]
            }
        }
    }
</script>

<style scoped lang="scss">
    .col {
        width: 50%;
        height: 100px;
        background: blue;
        border: 1px solid black;

       $class-prefix: col-;   /*申明一个class前缀*/
        @for $n from 1 through 24 {   /*for循环，从1到24*/
            &.#{$class-prefix}#{$n} {  /*前缀加上数字  " #{$n} " 相当于js的插值语法*/
                width: ($n / 24) * 100%
            }
        }
    }
</style>
