
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
    blogs: [] as Blog[],
    loading: false,
  }),

  actions: {
    async fetchBlogs(id: string, callback: (val: any) => any) {
      this.loading = true;

      const blogsList: Blog[] = await useApiRequest({
        endpoint: `blogs/group/${id}`,
        method: "GET",
      });

      this.blogs = blogsList;
      this.loading = false;
      callback(this.blogs);
    },

    async updateBlog(
      id: string,
      body: Partial<Blog>,
      callback: (find: number) => any
    ) {
      this.loading = true;

      const updatedBlog: Blog = await useApiRequest({
        endpoint: `blogs/${id}`,
        method: "PATCH",
        body,
      });

      const index = this.blogs.findIndex((blog) => blog.id === id);
      if (index !== -1) {
        this.blogs[index] = updatedBlog;
        callback(index);
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

      this.blogs.push(newBlog);
      this.loading = false;
    },

    async deleteBlog(id: string) {
      this.loading = true;

      await useApiRequest({
        endpoint: `blogs/${id}`,
        method: "DELETE",
      });

      this.blogs = this.blogs.filter((blog) => blog.id !== id);
      this.loading = false;
    },

    clearBlogs() {
      this.blogs = [];
    },
  },

  getters: {
    getBlogById: (state) => (id: string) =>
      state.blogs.find((blog) => blog.id === id),
  },
});
