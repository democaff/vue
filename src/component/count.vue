<template>
  <div class="bg-blue-200 p-10 rounded-lg shadow-lg flex gap-8">
    <h2 class="text-2xl">当前求和{{ sum }}</h2>

    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button class="bg-slate-700 p-4 text-white rounded-[12px]" @click="add">
      加
    </button>
    <button
      class="bg-slate-700 p-4 text-white rounded-[12px]"
      @click="decrement"
    >
      减
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const n = ref(1);
const sum = ref(0);

const add = () => {
  sum.value += n.value;
};
const decrement = () => {
  sum.value -= n.value;
};
</script>

<style scoped></style>
