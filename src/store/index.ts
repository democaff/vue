import { defineStore } from "pinia";
import axios from "axios";
import { nanoid } from "nanoid";
export const useCounterStore = defineStore("counter", {
  actions: {
    increment(value: number) {
      console.log("increment", value);
      this.sum += value;
    },
  },

  state() {
    return {
      sum: 6,
    };
  },
});

export const useTalkStore = defineStore("talk", {
  actions: {
    async getTalk() {
      const {
        data: { content: title },
      } = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json");
      let obj = {
        id: nanoid(),
        title,
      };
      this.talkList.unshift(obj);
    },
  },
  state() {
    return {
      talkList: [
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
      ],
    };
  },
});