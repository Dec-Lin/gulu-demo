<template>
    <div class="col" :class="[span && `col-${span}`,offset && `offset-${offset}`]"
         :style="{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}">
        <div style="border:1px solid green; height:100px;">
            <slot></slot>
        </div>

    </div>

</template>

<script>
    export default {
        name: 'GuluCol',
        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            },

        },
        data() {
            return {
                gutter: 0
            }
        },
        created() {
            console.log('col created')
        },
        mounted() {
            console.log('col mounted')
        }
    }
</script>

<style scoped lang="scss">
    .col {
        width: 50%;


        $class-prefix: col-; /*申明一个 class 前缀*/
        @for $n from 1 through 24 { /*for循环 从1 到24*/
            &.#{$class-prefix}#{$n} {
                /*  相当于 js 的插值语法 */
                width: ($n / 24) * 100%;
            }
        }
        $class-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }
</style>