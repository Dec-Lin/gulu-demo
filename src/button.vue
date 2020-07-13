<template>
    <button class="g-button" :class="{[`i${iconPosition}`]:true}">
        <g-icon v-if="icon" :name="icon"></g-icon>
        <div class="content">
            <slot></slot>
        </div>

    </button>
</template>

<script>
    export default{
        // props:['icon','iconPosition']
        props:{
            icon:{},
            iconPosition:{
                type:String,
                default:'left',
                validator(value){ //属性检查器
                    return value !== 'left' && value !== 'right' ? false : true;
                }
            }
        }
    }
</script>

<style lang="scss">
    .g-button{
        height: var(--button-height);
        padding:0 .9em;
        font-size:var(--font-size);
        border-radius:var(--border-radius);
        background: var(--button-bg);
        border:1px solid var(--border-color);
        display:inline-flex;
        justify-content: center;
        align-items:center;
        vertical-align: middle;
        > .icon{
            order:1;
            margin-right:.3em;
        }
        > .content{
            order:2;
        }
        &:hover{
        border-color:var(--border-color-hover);
        }
        &:active{
            background-color:var(--button-active-bg);
        }
        &:focus{
            outline:none;
        }
        &.iright{
            > .content{
                order:1;
            }
            > .icon{
                order:2;
                margin-right:0;
                margin-left:.3em;
            }
        }
    }

</style>