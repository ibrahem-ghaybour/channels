import { defineStore } from "pinia";
// import { useApiRequest } from "#imports";

interface Group {
  id: string;
  name: string;
  created_at: TimeRanges;
  updated_at: TimeRanges;
}

export const useGroupStore = defineStore("group", {
  state: () => ({
    groups: [] as Group[],
    loding: false,
  }),
  actions: {
    async fetchGroups() {
      this.loding = true;
      const groupList = await useApiRequest("groups");
      this.loding = false;
      this.groups = [...groupList];
    },
  },
  getters: {},
});
