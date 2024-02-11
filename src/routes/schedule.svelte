<script>
  import Tabs from '$lib/shared/tabs/tabs.svelte';
  import Tab from '$lib/shared/tabs/tab.svelte';
</script>

<div class="min-h-screen bg-offwhite grid place-items-center">
  <div class="container mx-auto grid place-items-center">
    <div class="flex flex-col">
      <span class="section-name">Event schedule</span>

      <h4 class="mt-4">Weekend packed with competitive TF2</h4>

      <div class="mt-[64px]">
        <Tabs>
          <Tab label="Friday">
            <div class="schedule">
              <span class="time-span">14:30 - 17:00</span>
              <span class="event">MGE: Finals (Scout & Soldier)</span>

              <div class="divider"></div>

              <span class="time-span">14:30 - 01:30</span>
              <span class="event">6v6 Draft Cup - Group Phase</span>

              <div class="divider"></div>

              <span class="time-span">20:00 - 22:00</span>
              <span class="event">Poland v Czechia 6v6 Showmatch</span>
            </div>
          </Tab>

          <Tab label="Saturday">Saturday</Tab>

          <Tab label="Sunday">Sunday</Tab>
        </Tabs>
      </div>
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

  .schedule {
    display: grid;
    grid-template-columns: 1fr 2fr;
    row-gap: 32px;

    margin-top: 32px;

    .time-span {
      color: #4e4e4e;
      font-family: Gabarito;
      font-size: 32px;
      font-style: normal;
      font-weight: 600;
      line-height: 32px; /* 100% */

      padding-left: 35px;
    }

    .event {
      color: #626262;
      font-family: 'Space Mono';
      font-size: 32px;
      font-style: normal;
      font-weight: 400;
      line-height: 32px; /* 100% */
    }

    .divider {
      @apply col-span-2;
      background-color: #d9d9d9;
      height: 1px;
      width: 100%;
    }
  }
</style>
