import { defineStore } from "pinia";

interface Blog {
  id: string;
  userName: string;
  title: string;
  groupId: string;
  created_at: TimeRanges;
  updated_at: TimeRanges;
}

export const useBlogsStore = defineStore("blogs", {
  state: () => ({
    blogs: new Map<string, Blog>(),
    loading: false,
  }),

  actions: {
    async fetchBlogs(id: string) {
      this.loading = true;
      const blogsList: Blog[] = await useApiRequest({
        endpoint: `blogs/group/${id}`,
        method: "GET",
      });
      this.loading = false;
      this.blogs = new Map(blogsList.map((blog) => [blog.id, blog]));
    },
    async updateBlog(id: string, body: Partial<Blog>) {
      this.loading = true;
      const updatedGroup: Blog = await useApiRequest({
        endpoint: `blogs/${id}`,
        method: "PATCH",
        body,
      });
      if (this.blogs.has(id)) {
        this.blogs.set(id, updatedGroup);
      }

      this.loading = false;
    },
    async addBlog(body: Omit<Blog, "id">) {
      this.loading = true;
      const newBlog: Blog = await useApiRequest({
        endpoint: "blogs",
        method: "POST",
        body,
      });

      this.blogs.set(newBlog.id, newBlog);
      this.loading = false;
    },

    async deleteGlog(id: string) {
      this.loading = true;
      await useApiRequest({
        endpoint: `blogs/${id}`,
        method: "DELETE",
      });

      this.blogs.delete(id);
      this.loading = false;
    },
    async clearBlogs() {
      if (this.blogs.size > 0) this.blogs.clear();
    },
  },

  getters: {
    blogsArray: (state) => Array.from(state.blogs.values()),
    getBlogById: (state) => (id: string) => state.blogs.get(id),
  },
});
