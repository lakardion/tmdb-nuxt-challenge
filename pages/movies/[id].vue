<script setup>
const {
  params: { id },
} = useRoute();
const { data: movie, pending } = useFetch(`/api/movies/${id}`);
const imageConfig = useImageConfiguration();
</script>

<template>
  <NuxtLink to="/">
    <div class="p-3">
      <button
        class="p-2 rounded-lg bg-amber-200 text-gray-500 font-bold hover:bg-amber-400 hover:text-gray-200"
      >
        Back
      </button>
    </div>
  </NuxtLink>
  <div v-if="pending">Loading...</div>
  <div v-else class="flex flex-col gap-3">
    <img
      :src="`${imageConfig.images.base_url}/w154/${movie.poster_path}`"
      class="w-52"
    />
    <h1 class="text-2xl font-semibold">
      {{ movie.title }}
    </h1>
    <section>
      <h1 class="text-2xl font-semibold">Overview</h1>
      <p class="text-lg">
        {{ movie.overview }}
      </p>
    </section>
  </div>
</template>
