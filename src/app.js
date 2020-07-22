import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'


Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input',Input)
new Vue({
    el: "#app",
    data: {
        loading1: false,
        loading2: false,
        loading3: true
    },
    methods:{
        inputChange(e){
            console.log('inputChange触发')
            console.log(e)
            console.log(e.target.value)
        }
    }
})

//
// //单元测试
// import chai from 'chai'
//
// const expect = chai.expect
// import spies from 'chai-spies'
//
// chai.use(spies)
// try {
//
//     {
//         //动态生成一个按钮
//         const div = document.createElement('div')
//         document.body.appendChild(div)
//         const Constructor = Vue.extend(Button) //把button组件变成一个构造函数
//         const vm = new Constructor({
//             propsData: {
//                 icon: 'settings'
//             }
//         }) //通过构造函数生成一个实例
//         vm.$mount(div) //把实例挂载到div上面
//         let useElement = vm.$el.querySelector('use')
//         let href = useElement.getAttribute('xlink:href')
//         expect(href).to.equal('#isettings')  //期望 href 等于 '#isettings'
//         vm.$el.remove()
//         vm.$destroy()
//     }
//
// //测试loading
//     {
//         const div = document.createElement('div')
//         document.body.appendChild(div)
//         const Constructor = Vue.extend(Button)
//         const vm = new Constructor({
//             propsData: {
//                 icon: 'settings',
//                 loading: true
//             }
//         })
//         vm.$mount(div)
//         let useElement = vm.$el.querySelector('use')
//         let href = useElement.getAttribute('xlink:href')
//         expect(href).to.equal('#iloading')
//         vm.$el.remove()
//         vm.$destroy()
//     }
//
// //测试order1或2
//     {
//         const div = document.createElement('div')
//         document.body.appendChild(div)
//         const Constructor = Vue.extend(Button)
//         const vm = new Constructor({
//             propsData: {
//                 icon: 'settings',
//             }
//         })
//         vm.$mount(div)
//         let svg = vm.$el.querySelector('svg')
//         let order = window.getComputedStyle(svg).order
//         expect(order).to.equal('1')
//         vm.$el.remove()
//         vm.$destroy()
//     }
//
//
// //iconPosition
//     {
//         const div = document.createElement('div')
//         document.body.appendChild(div)
//         const Constructor = Vue.extend(Button)
//         const vm = new Constructor({
//             propsData: {
//                 icon: 'settings',
//                 iconPosition: 'right'
//             }
//         })
//         vm.$mount(div)
//         let svg = vm.$el.querySelector('svg')
//         let order = window.getComputedStyle(svg).order
//         expect(order).to.equal('2')
//         vm.$el.remove()
//         vm.$destroy()
//     }
//
// //测试click
// //需要mock
//     {
//         const Constructor = Vue.extend(Button)
//         const vm = new Constructor({
//             propsData: {
//                 icon: 'settings',
//             }
//         })
//         vm.$mount()
//         let spy = chai.spy(function () {
//         })
//         vm.$on('click', spy) //触发spy（间谍）函数
//         let button = vm.$el
//         button.click()
//         expect(spy).to.have.been.called()  //期待当button.click()执行之后，间谍函数已经被调用了
//     }
//
// } catch (error) {
//     window.errors = [error]
// } finally {
//     window.errors && window.errors.forEach((error) => {
//         console.error(error.message)
//     })
// }