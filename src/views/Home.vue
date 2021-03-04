<template>
  <div class="home">
    <h1>OpenHouse 2021</h1>
    <p>あいうえおあいうえお</p>
    <p>かきくけこかきくけこ</p>

    <div class="card">
      <h2>Program</h2>
      <Timeline :value="events">
        <template #opposite="slotProps">
          <small class="p-text-secondary">{{slotProps.item.date}}</small>
        </template>
        <template #content="slotProps">
          {{slotProps.item.status}}
        </template>
      </Timeline>
    </div>

    <h2>Posters</h2>
    <p>TBD</p>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Timeline from 'primevue/timeline';

export default defineComponent({
  name: "Home",
  components: {
    Timeline
  },
  setup() {
    const events = ref([
          {status: 'Opening', date: '2021/3/20 14:00'},
          {status: 'Poster Session', date: '2021/3/20 14:15-16:30'},
          {status: 'Closing', date: '2021/3/20 16:30'},
    ]);
    return {
      events
    }
  },
});
</script>
