<template>
  <div class="bg-yellow-600 rounded-lg shadow-lg flex flex-col gap-8">
    <ul>
      <li
        v-for="item in talkList"
        :key="item.id"
        class="text-lg text-white px-5 text-left"
      >
        {{ item.title }}
      </li>
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
import { useTalkStore } from "@/store";

const { talkList, getTalk } = useTalkStore();
</script>

<style scoped>
/* 如果有必要，可以在这里添加CSS */
</style>
