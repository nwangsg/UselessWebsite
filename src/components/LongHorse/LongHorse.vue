<template>
  <h1>你的马很长</h1>
  <div class="banner">你的马有{{ displayLength }}m</div>
  <div class="word">{{ word }}</div>
  <div class="wrapper">
    <pre>
                          _(\_/) 
                        ,((((^`\
                         ((((  (6 \ 
                       ,((((( ,    \
   ,,,_              ,(((((  /"._  ,`,
  ((((\\ ,...       ,((((   /    `-.-'
  )))  ;'    `"'"'""((((   (      
 (((  /            (((      \
  )) |                      |
 ((  |        .       '     |
 ))  \     _ '      `t   ,.')
 (   |   y;- -,-""'"-.\   \/  
 )   / ./  ) /         `\  \
    |./   ( (           / /'
    ||     \\          //'|
    ||      \\        //'||
    ||       ||      ||  ||</pre
    >
  </div>
  <ul id="legs">
    <li v-for="leg in legs" v-bind:key="leg">
      <pre>||       ||      ||  ||  </pre>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LongHorse",
  msg: "LongHorse",
  data() {
    return {
      bottom: false,
      legs: [String],
      length: 0,
      displayLength: 0,

      words: ["好长!", "真长!", "真心长！", "好长呀！", "太长了！！"],
    };
  },
  created() {
    window.addEventListener("scroll", () => {
      this.bottom = this.bottomVisible();
    });
  },
  mounted() {
    this.loadMore();
  },
  methods: {
    bottomVisible() {
      const scrollY = window.scrollY;
      const visible = document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const bottomOfPage = visible + scrollY >= pageHeight - 50;
      return bottomOfPage || pageHeight < visible;
    },
    loadMore() {
      const count = Math.ceil(Math.random() * (200 - 50)) + 50;
      this.length += count;
      for (var i = count; i > 0; i--) {
        this.legs.push("1");
      }
      this.injectWords;
    },
    injectWords() {
      const newWord = document.createElement("div");
      const content = this.words[Math.floor(Math.random() * this.words.length)];
      newWord.innerText = content;
      newWord.style.left = Math.random() * window.innerWidth - 200 + "px";
      newWord.style.top = wrapper.offsetHeight - 200 + "px";
      newWord.style.position = "absolute";
      document.body.appendChild(newWord);
    },
  },
  computed: {
    word() {
      const level = Math.min(Math.floor(this.length / 5000), this.words.length-1);
      return this.words[level];
    },
  },
  watch: {
    bottom(bottom) {
      if (bottom) {
        this.loadMore();
      }
    },
    length() {
      if (this.length == this.displayLength) {
        return;
      }
      window.setInterval(() => {
        if (this.displayLength < this.length) {
          let change = (this.length - this.displayLength) / 10;
          change = change >= 0 ? Math.ceil(change) : Math.floor(change);
          this.displayLength = this.displayLength + change;
        }
      }, 20);
    },
  },
});
</script>
<style scoped>
html,
body {
  margin: 0;
  min-width: 100%;
  min-height: 100%;
}
.wrapper {
  padding-top: 40vh;
}
ul {
  list-style-type: none;
}
pre {
  margin: 0;
  min-width: 100%;
  min-height: 100%;
}
ul,
ui,
pre {
  margin: 0;
}
.banner {
  position: fixed;
  left: 5vw;
  top: 30vh;
  width: 30vw; /* take up the full browser width */
  z-index: 200; /* high z index so other content scrolls underneath */
  height: 100px; /* define height for content */
  text-align: left;
  overflow-wrap: break-word;
}
.word {
  position: fixed;
  right: 5vw;
  top: 30vh;
  width: 30vw; /* take up the full browser width */
  z-index: 200; /* high z index so other content scrolls underneath */
  height: 100px; /* define height for content */
  text-align: right;
}
</style>