<template>
    <button class="g-button" :class="{[`i${iconPosition}`]:true}" @click="$emit('click')">
        <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
        <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
        <div class="content">
            <slot></slot>
        </div>

    </button>
</template>

<script>
    import Icon from './icon'
    export default {
        name:'GuluButton',
        components:{
            'g-icon':Icon
        },
        // props:['icon','iconPosition']
        props: {
            icon: {},
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) { //属性检查器
                    return value !== 'left' && value !== 'right' ? false : true;
                }
            },
            loading:{
                type:Boolean,
                default:false,
            }
        }
    }
</script>

<style lang="scss" scoped>
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .g-button {
        height: var(--button-height);
        padding: 0 .9em;
        font-size: var(--font-size);
        border-radius: var(--border-radius);
        background: var(--button-bg);
        border: 1px solid var(--border-color);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;

        > .icon {
            order: 1;
            margin-right: .3em;
        }

        > .content {
            order: 2;
        }

        &:hover {
            border-color: var(--border-color-hover);
        }

        &:active {
            background-color: var(--button-active-bg);
        }

        &:focus {
            outline: none;
        }

        &.iright {
            > .content {
                order: 1;
            }

            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: .3em;
            }
        }
        .loading{
            animation: spin 2s infinite linear;
        }
    }

</style>