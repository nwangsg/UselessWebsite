<template>
  <Button @click="longHorse">开始摸鱼</Button>
  <Button @click="youAreDisgusting">开始摸鱼2</Button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "Home",
  props: {},
  setup: () => {
    const router = useRouter();
    const longHorse = () => {
      router.push({ name: "LongHorse" });
    };
    const youAreDisgusting = () => {
      router.push({ name: "YouAreDisgusting" });
    };
    return { longHorse, youAreDisgusting };
  },
});
</script>