<template>
    <div class="col" :class="[span && `col-${span}`]">
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
        height: 50px;
        background: grey;
        width: 50%;
        border: 1px solid red;

        $class-prefix: col-; /*申明一个 class 前缀*/
        @for $n from 1 through 24 { /*for循环 从1 到24*/
            &.#{$class-prefix}#{$n} {
                /*  相当于 js 的插值语法 */
                width: ($n / 24) * 100%;
            }
        }
    }
</style>