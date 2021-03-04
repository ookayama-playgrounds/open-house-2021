<template>
  <div class="about">
    <h1>ビデオとかポスターとか</h1>
    試しにビデオ貼ってみましたけど、全員分のをいい感じにあれする
    <Video :link="video.link" :desc="video.description" />
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from "vue";
import Video from '@/components/Video.vue';

export default defineComponent({
  name: "Showcase",
  components: {
    Video
  },
  setup() {
    const video = ref({
      link: "https://player.vimeo.com/video/232439098",
      description: "Social Viewpoint Finder (Visualize US political blogs) from Riku Takano on Vimeo."
    });
    return {
      video
    };
  },
});
</script>