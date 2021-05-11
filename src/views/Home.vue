<template>
  <Button @click="moyu">开始摸鱼</Button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from 'vue-router';
export default defineComponent({
  name: "Home",
  props: {},
  setup: () => {
    const router = useRouter();
    const moyu = ()=> {
        router.push({ name: 'LongHorse' });
    };
    return { moyu };
  },
});
</script>