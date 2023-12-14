<script>
  import lanPhoto from '$lib/assets/lan-photo-1.png';
  import Markdown from '$lib/shared/markdown.svelte';

  /**
   * @type {string}
   */
  export let header;

  /**
   * @type {string}
   */
  export let content;
</script>

<div class="h-screen min-h-screen bg-offwhite grid place-items-center">
  <div class="container mx-auto grid grid-cols-2 place-items-center gap-[80px]">
    <div class="flex flex-col items-start">
      <span class="section-name">About the event</span>

      <h2 class="mt-4"><Markdown source={header} /></h2>
      <span class="mt-8"><Markdown source={content} /></span>
      <a href="/" class="button mt-[41px]">Learn more</a>
    </div>

    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img src={lanPhoto} alt="poLANd.tf group photo" />
  </div>
</div>

<style lang="postcss">
  h2 {
    font-family: Gabarito;
    font-size: 64px;
    font-style: normal;
    font-weight: 600;
    line-height: 64px; /* 100% */
    color: theme(colors.charcoal);
  }
</style>
