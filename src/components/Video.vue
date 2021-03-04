<template>
  <div id="video">
    <iframe v-bind:src="videoUrl" width="640" height="526" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
    <p v-show="description">{{description}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    link: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    }
  },
  setup(props) {
    // https://player.vimeo.com/video/232439098
    const videoUrl = ref(props.link);
    const description = ref(props.desc);
    return {
      videoUrl,
      description
    };
  },
});
</script>