<script setup>
import { AnFilledStar, AnOutlinedStar } from "@kalimahapps/vue-icons/an";

const props = defineProps(["stars", "initial", "stateKey", "disabled"]);
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
const disabled = computed(() => props.disabled);
</script>

<template>
  <section aria-label="star input">
    <div>{{ disabled }}</div>
    <ul class="flex gap-2">
      <li v-for="(item, index) in starRange" :key="index">
        <button
          v-if="index + 1 <= selectedStars"
          @click="createStarHandler(index)()"
          :disabled="disabled"
          class="disabled:cursor-not-allowed disabled:opacity-75"
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
