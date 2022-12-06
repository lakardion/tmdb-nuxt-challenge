<script setup>
import { AnFilledStar, AnOutlinedStar } from "@kalimahapps/vue-icons/an";
const starRange = Array.from({ length: 5 });
const selectedStars = ref(0);
const handler = () => () => {
  console.log("hello 2");
};
// creating handlers in VUE are quite the counter intuitive thing to do, you actually have to call it rather than just referencing it
function createStarHandler(index) {
  return () => {
    console.log("hello??");
    selectedStars.value = index + 1;
  };
}
</script>

<template>
  <section aria-label="star input">
    <ul class="flex gap-2">
      <li v-for="(item, index) in starRange" :key="index">
        <button
          v-if="index + 1 <= selectedStars"
          @click="createStarHandler(index)()"
        >
          <AnFilledStar />
        </button>
        <button v-else @click="createStarHandler(index)()">
          <AnOutlinedStar />
        </button>
      </li>
    </ul>
  </section>
</template>
