<script>
  import venue from '$lib/assets/venue.png';
</script>

<div class="min-h-screen bg-offwhite grid place-items-center">
  <div class="container mx-auto grid grid-cols-2 gap-[36px] place-items-center">
    <div class="flex flex-col">
      <span class="section-name">The venue</span>
      <h4 class="mt-4">BaseStack is an internet café and an e-sports arena</h4>

      <p class="mt-[32px]">
        with over 600m2 of space, two floors and over 90 gaming station seats (PC). Thanks to that,
        we have a possibility of renting a gaming rig to compete on fair grounds against the other
        players. BaseStack provides attendees with not only whole gaming rigs, but also peripherals.
        People who are used to playing with their favourite mouses and keyboards are welcome to take
        their own peripherals. The place is known for its tournaments, hosted every weekend, that
        gain sizeable popularity on TikTok.
      </p>

      <p class="font-bold mt-[32px]">Gaming rigs offered by BaseStack:</p>
      <ul class="list-disc list-inside">
        <li>CPU: Intel i5-12400F</li>
        <li>GPU: GeForce RTX 3060</li>
        <li>RAM: 16 GB</li>
        <li>Mouse: SPC Gear GEM</li>
        <li>Keyboard: KRUX ATAX PRO RGB</li>
        <li>Headphones: SPC Gear VIRO</li>
        <li>Monitor: AOC G2 Series 24G2ZU/BK 240 Hz</li>
      </ul>
    </div>

    <div>
      <img src={venue} alt="BaseStack venue" width="804" height="640" />
    </div>
  </div>
</div>

<style lang="postcss">
  h4 {
    font-family: Gabarito;
    font-size: 64px;
    font-style: normal;
    font-weight: 600;
    line-height: 64px; /* 100% */
    color: theme(colors.charcoal);
  }
</style>
