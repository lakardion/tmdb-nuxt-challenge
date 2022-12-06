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

const currentSearchPage = useState("currentSearchPage", () => 1);
const searchValue = useDebouncedRef("", 400);
//not sure how I feel about this... coming from react and useEffect hell (which can be avoided by attaching side effects to event handlers...), in vue it looks like we don't have a way to do that?
watch([searchValue, currentSearchPage], async ([newSearch, newPage]) => {
  if (!newSearch) {
    searchResult.value = null;
    return;
  }
  const result = await $fetch("/api/search/movie", {
    params: {
      search: newSearch,
      page: newPage,
    },
  });
  searchResult.value = result;
});
const searchResult = ref(null);

const hasSearchNextPage = computed(
  () => searchResult.value.page + 1 <= searchResult.value.total_pages
);
const hasSearchPreviousPage = computed(() => searchResult.value.page - 1 >= 1);
const nextSearchPage = () => {
  if (!hasSearchNextPage.value) {
    return;
  }
  currentSearchPage.value++;
};
const previousSearchPage = () => {
  if (!hasSearchPreviousPage.value) {
    return;
  }
  currentSearchPage.value--;
};
</script>

<template>
  <main class="pt-2 px-3">
    <div>Current pages are: {{ currentPage }} -- {{ currentSearchPage }}</div>
    <StarRatingInput />
    <label class="flex gap-2 py-3">
      <p>Search</p>
      <input
        v-model="searchValue"
        type="text"
        class="border border-gray-600/50"
      />
    </label>
    <ul v-if="!Boolean(searchResult)">
      <li v-for="movie in paginatedDiscover.results" key="movie.id">
        {{ movie.title }}
      </li>
    </ul>
    <ul v-else>
      <li v-for="movie in searchResult.results" key="movie.id">
        {{ movie.title }}
      </li>
    </ul>
    <section
      aria-label="action buttons"
      class="flex gap-3 pt-3"
      v-if="!Boolean(searchResult)"
    >
      <button
        type="button"
        :disabled="!hasPreviousPage"
        @click="previousPage"
        class="p-2 rounded-lg bg-amber-200 text-gray-500 font-bold hover:bg-amber-400 hover:text-gray-200"
      >
        Previous
      </button>
      <button
        type="button"
        :disabled="!hasNextPage"
        @click="nextPage"
        class="p-2 rounded-lg bg-amber-200 text-gray-500 font-bold hover:bg-amber-400 hover:text-gray-200"
      >
        Next
      </button>
    </section>
    <section v-else>
      <button
        type="button"
        :disabled="!hasSearchPreviousPage"
        @click="previousSearchPage"
        class="p-2 rounded-lg bg-amber-200 text-gray-500 font-bold hover:bg-amber-400 hover:text-gray-200"
      >
        Previous
      </button>
      <button
        type="button"
        :disabled="!hasSearchNextPage"
        @click="nextSearchPage"
        class="p-2 rounded-lg bg-amber-200 text-gray-500 font-bold hover:bg-amber-400 hover:text-gray-200"
      >
        Next
      </button>
    </section>
  </main>
</template>
