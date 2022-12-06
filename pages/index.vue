<script setup>
const currentPage = useState("currentPage", () => 1);
const reactivePageParam = computed(() => ({
  page: currentPage.value,
}));
const { data: paginatedDiscover, refresh } = useAsyncData(
  `movie-discover-page-${currentPage.value}`,
  () =>
    $fetch("/api/movies/discover", {
      params: reactivePageParam.value,
    })
);
watch(reactivePageParam, refresh);
const hasNextPage = computed(
  () => paginatedDiscover.value.page + 1 <= paginatedDiscover.value.total_pages
);
const hasPreviousPage = computed(() => paginatedDiscover.value.page - 1 >= 1);
const nextPage = () => {
  if (!hasNextPage.value) {
    return;
  }
  currentPage.value++;
};
const previousPage = () => {
  if (!hasPreviousPage.value) {
    return;
  }
  currentPage.value--;
};
</script>
<template>
  <main>
    <div>
      Current page: {{ currentPage }} -- total pages:
      {{ paginatedDiscover.total_pages }}
    </div>
    <ul>
      <li v-for="movie in paginatedDiscover.results" key="movie.id">
        {{ movie.title }}
      </li>
    </ul>
    <button type="button" :disabled="!hasPreviousPage" @click="previousPage">
      Previous
    </button>
    <button type="button" :disabled="!hasNextPage" @click="nextPage">
      Next
    </button>
  </main>
</template>
