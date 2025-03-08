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
    groups: new Map<string, Group>(),
    loading: false,
  }),

  actions: {
    async fetchGroups() {
      this.loading = true;
      const groupList: Group[] = await useApiRequest({
        endpoint: "groups",
        method: "GET",
      });
      this.loading = false;
      this.groups = new Map(groupList.map((group) => [group.id, group]));
    },
    async updateGroup(id: string, body: Partial<Group>) {
      this.loading = true;
      const updatedGroup: Group = await useApiRequest({
        endpoint: `groups/${id}`,
        method: "PATCH",
        body,
      });
      if (this.groups.has(id)) {
        this.groups.set(id, updatedGroup);
      }

      this.loading = false;
    },
    async addGroup(body: Omit<Group, "id">) {
      this.loading = true;
      const newGroup: Group = await useApiRequest({
        endpoint: "groups",
        method: "POST",
        body,
      });

      this.groups.set(newGroup.id, newGroup);
      this.loading = false;
    },

    async deleteGroup(id: string) {
      this.loading = true;
      await useApiRequest({
        endpoint: `groups/${id}`,
        method: "DELETE",
      });

      this.groups.delete(id);
      this.loading = false;
    },
  },

  getters: {
    groupsArray: (state) => Array.from(state.groups.values()),
    getGroupById: (state) => (id: string) => state.groups.get(id),
  },
});
