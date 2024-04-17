<template>
  <div class="bg-yellow-600 rounded-lg shadow-lg flex flex-col gap-8">
    <ul>
      <li v-for="item in taik" :key="item.id">{{ item.title }}</li>
    </ul>
    <button
      @click="getTalk"
      class="bg-indigo-500 p-4 w-[120px] rounded shadow-orange-50"
    >
      获取一句话
    </button>
  </div>
</template>

<script lang="ts" setup>
const getTalk = async () => {
  const {
    data: { content: title },
  } = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json");
  const obj = {
    id: nanoid(),
    title,
  };
  console.log(obj);
};

import { reactive } from "vue";

import axios from "axios";
import { nanoid } from "nanoid";

const taik = reactive([
  {
    id: 1,
    title: "什么东西",
  },
  {
    id: 2,
    title: "东西",
  },
  {
    id: 3,
    title: "什么",
  },
]);
</script>

<style scoped></style>
