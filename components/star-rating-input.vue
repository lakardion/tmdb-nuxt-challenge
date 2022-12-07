<script setup>
import { AnFilledStar, AnOutlinedStar } from "@kalimahapps/vue-icons/an";

const props = defineProps(["stars", "initial", "stateKey"]);
const starRange = Array.from({ length: props.stars });
const selectedStars = useState(`stars-${props.stateKey}`, () => {
  return props.initial ?? 0;
});
// creating handlers in VUE are quite the counter intuitive thing to do, you actually have to call it rather than just referencing it
function createStarHandler(index) {
  return () => {
    if (selectedStars.value === index + 1) {
      selectedStars.value = 0;
      return;
    }
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
