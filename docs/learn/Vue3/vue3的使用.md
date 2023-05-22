# Vue3指令

## `setup`

setup 函数是一个新的组件选项, 作为组件中 `compositionAPI` 的起点

1. 从生命周期角度来看， `setup` 会在 `beforeCreate` 钩子函数之前执行
2. **`setup` 中不能使用 `this` ， `this` 指向 `undefined` **
3. 在模版中需要使用的数据和函数，需要在 `setup` 中 `return` 返回，只有返回的值才能在模板中使用。

```vue
<template>
  <div class="container">
    <h1 @click="say()">{{msg}}</h1>
  </div>
</template>

<script>
export default {
  setup () {
    console.log('setup执行了')
    console.log(this)
    // 定义数据和函数
    const msg = 'hi vue3'
    const say = () => {
      console.log(msg)
    }

    return { msg , say}
  },
  beforeCreate() {
    console.log('beforeCreate执行了')
    console.log(this)
  }
}
</script>
```

## `reactive`

1. setup 需要有返回值, 只有返回的值才能在模板中使用
2. 默认普通的数据, 不是响应式的

在传入一个复杂数据类型，需要将复杂类型数据, 转换成响应式数据 （返回该对象的响应式代理）

```vue
<template>
  <div>{{ obj.name }}</div>
  <div>{{ obj.age }}</div>
  <button @click="add">改值</button>
</template>

<script>
import { reactive } from 'vue'

export default {
  setup () {
    // 1. setup 需要返回值, 返回的值才能在模板中使用
    // 2. 默认的普通的值不是响应式的, 需要用 reactive 函数
    const obj = reactive({
      name: 'zs',
      age: 18
    })

    return {
      obj
    }
  },
  methods: {
    add() {
      this.obj.age += 1
      console.log(this.obj);
    }
  }
}
</script>

```

>  `reactive()` 的局限性
>
>  `reactive()` API 有两条限制：
>
>  1. 仅对对象类型有效（对象、数组和 `Map`、`Set` 这样的[集合类型](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects#使用键的集合对象)），而对 `string`、`number` 和 `boolean` 这样的 [原始类型](https://developer.mozilla.org/zh-CN/docs/Glossary/Primitive) 无效。
>
>  2. 因为 Vue 的响应式系统是通过属性访问进行追踪的，因此我们必须始终保持对该响应式对象的相同引用。这意味着我们不可以随意地“替换”一个响应式对象，因为这将导致对初始引用的响应性连接丢失：
>
>     js
>
>     ```js
>     let state = reactive({ count: 0 })
>     
>     // 上面的引用 ({ count: 0 }) 将不再被追踪（响应性连接已丢失！）
>     state = reactive({ count: 1 })
>     ```

## `ref`

`reactive` 处理的数据, 必须是复杂类型,  如果是简单类型无法处理成响应式, 所以有 `ref` 函数！

作用: 对传入的数据（一般简单数据类型），包裹一层对象,  转换成响应式。

1. `ref` 函数接收一个的值, 返回一个 `ref` 响应式对象,  有唯一的属性 `value` 。
2. 在 `setup` 函数中, 通过 `ref` 对象的 `value` 属性, 可以访问到值。
3. 在模板中， `ref` 属性会自动解套, 不需要额外的 `.value` 。
4. `ref` 函数也支持传入复杂类型，传入复杂类型，也会做响应式处理。

```vue
<script>
import { ref } from "vue";
export default {
  setup() {
    const num = ref(0)

    const add = () => {
      num.value += 1
    }

    return {num, add}
  }
}
</script>

<template>
	<h1>{{num}}</h1>
	<button @click="add">+</button>
</template>

```

ref 和 reactive 的最佳使用方式：

- **明确的对象，明确的属性，用reactive，其他用 ref**
- 从vue3.2之后，更推荐使用ref

## `script setup`语法

> script setup是在单文件组件 (SFC) 中使用组合式 API 的编译时语法糖。相比于普通的 script 语法更加简洁

要使用这个语法，需要将 `setup` attribute 添加到 `<script>` 代码块上：

```vue
<script setup></script>
```

顶层的绑定会自动暴露给模板，所以定义的变量，函数和import导入的内容都可以直接在模板中直接使用

```vue
<script setup>
import { ref } from 'vue';

console.log('setup钩子执行啦');
const num = ref(100)

const add = () => {
  num.value += 100
}
</script>

<template>
  <h1>{{num}}</h1>
  <button @click="add">+</button>
</template>

```

## v-model

vue3中子组件 `v-model` 原理为 `:value` 绑定变量，`@update:value` 修改变量并通过 `$emit` 通知父组件，如下：

父组件：

```vue
<input :value="title" @update:value="change" />
```

子组件：

```js
props: ['value'],
emit: ['update:value'],
change(e) {
    this.title = e.target.value,
    this.$emit('update:value', e)
}
```

因此父组件可以简写为以下语法糖形式：

```vue
<input v-model:value="title" />
```

如果把 `:value` 改为 `:modelValue` 依旧生效

父组件：

```vue
<input v-model:modelValue="title" />
```

子组件：

```js
props: ['modelValue'],
emit: ['update:value'],
change(e) {
    this.title = e.target.value,
    this.$emit('update:modelValue', e)
}
```

且父组件的 `:modelValue` 也能省略（子组件必须有 `props: ['modelValue']` ）

```vue
<input v-model="title" />
```

## 计算属性

1. 根据一个依赖项计算出新结果，接收一个处理函数
2. 处理函数中 `return` 返回

```vue
<script setup>
import { ref, computed } from 'vue';

const myAge = ref(21)

const nextAge = computed(()=> {
  return myAge.value + 1
})

const theAge = computed({
  get() {
    return myAge.value + 2
  },
  set(val) {
    myAge.value = val - 2
  }
})
</script>

<template>
<div>this year <input type="text" v-model.number="myAge" /></div>
<div>next year {{nextAge}}</div>
<div>two years ago <input type="text" v-model="theAge"></div>
</template>

<style>

</style>

```

> 注意：
>
> - Getter 不应有副作用
>
>   计算属性的 getter 应只做计算而没有任何其他的副作用，这一点非常重要，请务必牢记。举例来说，**不要在 getter 中做异步请求或者更改 DOM**！一个计算属性的声明中描述的是如何根据其他值派生一个值。因此 getter 的职责应该仅为计算和返回该值。在之后的指引中我们会讨论如何使用[监听器](https://cn.vuejs.org/guide/essentials/watchers.html)根据其他响应式状态的变更来创建副作用。
>
> - 避免直接修改计算属性值
>
>   从计算属性返回的值是派生状态。可以把它看作是一个“临时快照”，每当源状态发生变化时，就会创建一个新的快照。更改快照是没有意义的，因此计算属性的返回值应该被视为只读的，并且永远不应该被更改——应该更新它所依赖的源状态以触发新的计算。

## 侦听器

侦听器有三个参数，分别是：

1. 参数1: 监视的数据源，该变量不需要加 `.value` ，底层代码已经帮我们自动处理了。
2. 参数2: 回调函数
3. 参数3: 额外的配置

### 基础数据类型的侦听器

```vue
<script setup>
import { ref, watch } from 'vue';

const money = ref(10000)

const cost = () => {
  return money.value -= 520
}

watch(money, ()=> {
  console.log('花钱了');
})
</script>

<template>
  <div>{{money}}</div>
  <button @click="cost">花费</button>
</template>

<style>

</style>

```

#### 侦听多个数据

```vue
<script setup>
import { ref, watch } from 'vue';

const money = ref(10000)
const love = ref(0)

const cost = () => {
  return money.value -= 520, love.value += 1
}

watch([money, love], ([newMoney, newLove], [oldMoney, oldLove])=> {
  console.log('花钱了，好感度上升了');
  console.log(newMoney, newLove);
  console.log(oldMoney, oldLove);
})
</script>

<template>
  <div>{{money}}，{{love}}</div>
  <button @click="cost">花费</button>
</template>

<style>

</style>

```

### 复杂数据类型的侦听器

```vue
<script setup>
import { ref, watch } from 'vue';

const user = ref({
  age: 21,
  name: 'chao'
})

watch(
  user,
  (value)=> {
    console.log('user对象发生变化');
  },
  {
    deep: true,
    immediate: true
  }
)
</script>

<template>
  <div>{{user}}</div>
  <div>{{user.name}}</div>
  <button @click="user.name = 'tie'">改名</button>
  <div>{{user.age}}</div>
  <button @click="user.age += 1">长大了</button>
</template>

<style>

</style>

```

#### 侦听对象单个数据

```vue
<script setup>
import { ref, watch } from 'vue';

const user = ref({
  age: 21,
  name: 'chao'
})

watch(
  ()=>{
    return user.value.age
  },
  (value)=> {
    console.log('user年龄发生变化');
  },
  {
    deep: true,
    immediate: true
  }
)
</script>

<template>
  <div>{{user}}</div>
  <div>{{user.name}}</div>
  <button @click="user.name = 'tie'">改名</button>
  <div>{{user.age}}</div>
  <button @click="user.age += 1">长大了</button>
</template>

<style>

</style>

```

## 生命周期钩子函数

vue3 中的生命周期函数, 需要在 `setup` 中调用。

![通讯](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e799f58f8f254c5484964b3b3c61660c~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

在 `vue3` 中，生命周期触发时回调函数的执行可以多个，按照代码顺序从上往下依次执行。

## 组件通讯

### 父传子

#### 参数

1. `type` ：类型限制
2. `default` ：默认值
3. `validator` ：校验规则
4. `required` ：是否必传

- 父组件

  ```vue
  <script setup>
  import { ref } from "vue";
  import Son from "./Son.vue";
  
  const money = ref(1400)
  </script>
  
  <template>
    <div>daodao{{money}}</div>
    <Son :money="money"></Son>
  </template>
  
  <style>
  
  </style>
  
  ```

- 子组件

  ```vue
  <script setup>
  // defineProps({
  //   money: Number
  // })
  defineProps({
    money: { 
      type: Number,
      required: true,
      validator(v) {
          return ['a', 'b'].includes(v)
      } // 校验
    }
  })
  </script>
  
  <template>
    <div>😀{{money}}</div>
  </template>
  
  <style>
  
  </style>
  ```

#### 事件

- 父组件

  ```vue
  <child @click="show"></child>
  ```

- 子组件

  ```vue
  <div v-bind="$attrs"></div>
  ```

### 子传父

- 子组件

  ```vue
  <script setup>
  defineProps({
    money: { 
      type: Number,
      required: true
    }
  })
  
  const emit = defineEmits(['changeMoney'])
  
  const change = () => {
    emit('changeMoney', 10)
  }
  </script>
  
  <template>
    <div>😀{{money}}</div>
    <button @click="change">花钱</button>
  </template>
  
  ```

- 父组件

  ```vue
  <script setup>
  import { ref } from "vue";
  import Son from "./Son.vue";
  
  const money = ref(1400)
  
  const changeMoney = (num) => {
    money.value = money.value -= num
  }
  </script>
  
  <template>
    <div>daodao{{money}}</div>
    <Son @changeMoney="changeMoney" :money="money"></Son>
  </template>
  
  ```

### 父组件使用子组件数据

`setup` 语法糖的变量不允许跨组件使用，想要使用子组件的变量需要子组件通过 `defineExpose` 导出允许父组件使用的变量和方法。

## 依赖注入

- `provide` ：

  ```vue
  <script setup>
  import { provide, ref } from "vue";
  import Son from "./Son.vue";
  
  const money = ref(1400)
  
  const changeMoney = () => {
    console.log(1);
  }
  
  provide('money', money)
  provide('changeMoney', changeMoney)
  </script>
  
  <template>
    <div ref="dao">daodao{{money}}</div>
    <Son></Son>
  </template>
  
  ```

- `inject` ：

  ```vue
  <script setup>
  import { inject } from 'vue';
  
  const money = inject('money')
  const changeMoney = inject('changeMoney')
  </script>
  
  <template>
    <div>😀{{money}}</div>
    <button @click="changeMoney">花钱</button>
  </template>
  
  ```

## 模板 `ref` 的使用

### 获取元素

1. 创建一个空的 `ref`

   ```csharp
   const h1Ref = ref(null)
   
   ```

2. 模板中建立关联，模板挂在完毕后，自动把DOM节点的内存地址传给 `ref`

   ```ini
   <div ref="dao">daodao</div>
   
   ```

3. 组件挂载完毕后，获取 `DOM` 节点了

   ```scss
   onMounted(()=>{
     console.log(dao);
   })
   
   ```

```vue
<script setup>
import { onMounted, ref } from "vue";

const dao = ref(null)

onMounted(()=>{
  console.log(dao);
})
</script>

<template>
  <div ref="dao">daodao</div>
</template>

```

### 操作组件

父组件操作子组件，子组件需要先把自己的数据暴露出去。

- 父组件

  ```vue
  <script setup>
  import { onMounted, ref } from "vue";
  import Son from "./Son.vue";
  
  const son = ref(null)
  
  onMounted(()=>{
    console.log(son);
  })
  </script>
  
  <template>
    <Son ref="son"></Son>
  </template>
  
  ```

- 子组件

  ```vue
  <script setup>
  import { ref } from 'vue';
  
  const count = ref(0)
  defineExpose({
    count
  })
  </script>
  
  <template>
    <button @click="changeMoney">花钱</button>
  </template>
  
  ```

### `toRefs` 函数

如果对一个响应数据，进行解构 或者 展开，会丢失他的响应式特性！

1. reactive/ref的响应式功能是赋值给对象的, 如果给对象解构或者展开, 会让数据丢失响应式的能力
2. **使用 toRefs 可以保证该对象展开的每个属性都是响应式的**

```vue
<template>
  <div>{{ money }}</div>
  <div>{{ car }}</div>
  <div>{{ name }}</div>
  <button @click="money++">改值</button>
</template>

<script setup>
import { reactive, ref, toRefs } from 'vue'
const user = ref({
  name: 'zs',
  age: 18,
})
const { name, age } = toRefs(user.value)
</script>
```