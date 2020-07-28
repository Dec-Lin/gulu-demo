<template>
    <div class="col" :class="colClass" :style="colStyle">
            <slot></slot>
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
        computed:{
            colClass(){
                let {span,offset} = this
                return [span && `col-${span}`,offset && `offset-${offset}`]
            },
            colStyle(){
                return {
                    paddingLeft:this.gutter/2+'px',
                    paddingRight:this.gutter/2+'px'
                }
            }


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