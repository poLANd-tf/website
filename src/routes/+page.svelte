<script>
  import About from './about.svelte';
  import NavigationBar from './navigation-bar.svelte';
  import NextEvent from './next-event.svelte';
  import TravelAdvice from './travel-advice.svelte';

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<svelte:head>
  <title>poLANd.tf</title>
</svelte:head>

<div class="flex flex-col h-full">
  <div class="banner flex flex-col">
    <NavigationBar />
    <NextEvent />
    <div class="h-[124px]"></div>
  </div>

  <About {...data.about} />
  <TravelAdvice />
</div>

<style lang="postcss">
  .banner {
    flex: 1 1 0%;
    height: 100vh;
    min-height: 100vh;
    background:
      linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%),
      url(/bg.png) center / cover,
      lightgray 50% / cover no-repeat;
  }
</style>
