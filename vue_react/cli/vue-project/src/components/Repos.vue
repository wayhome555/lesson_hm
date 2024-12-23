<template>
    <div class="github-repos">
      <h2>Github Repositories</h2>
      <p v-if="loading">Loading...</p>
      <ul v-else>
        <li v-for="repo in repos" :key="repo.id">
          <a :href="repo.html_url">{{ repo.name }}</a>
          <span> 作者：{{ repo.owner.login }}</span>
        </li>
      </ul>
      <p v-if="!loading && repos.length === 0">No Repos</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        repos: [],
        loading: true,
      };
    },
    created() {
      this.fetchRepos();
    },
    methods: {
      async fetchRepos() {
        try {
          const response = await fetch('https://api.github.com/users/wayhome555/repos');
          const data = await response.json();
          this.repos = data;
        } catch (error) {
          console.error('Error fetching repositories:', error);
        } finally {
          this.loading = false;
        }
      }
    }
  };
  </script>
  
  <style scoped></style>