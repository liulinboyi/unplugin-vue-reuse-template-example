<script setup>
import { ref } from "vue";
const count = ref(0);
const all = ref([
  { checked: false, name: 1 },
  { checked: false, name: 2 },
  { checked: false, name: 3 },
]);
</script>

<!-- Right Case -->
<!-- 正确写法 -->
<!-- The real template must put the top -->
<!-- 真实的template，必须放到最前面 -->
<template>
  <div>
    <container outlet="menu" />
    <container outlet="listValue" />
    <div v-for="(n, index) in all">
      <container outlet="list" />
    </div>
  </div>
</template>

<template $menu>
  <div class="count" @click="count++">
    {{ count }}
  </div>
</template>

<template $listValue>
  {{ all }}
</template>

<template $list>
  <div class="list">
    <input type="checkbox" :id="n.name" :name="n.name" v-model="n.checked"/>
    <label :for="n.name">{{ n.name }}</label>
  </div>
</template>

<style scoped>
.count {
  font-size: 20px;
}
.list {
  font-size: 16px;
  color: aqua;
}
</style>
