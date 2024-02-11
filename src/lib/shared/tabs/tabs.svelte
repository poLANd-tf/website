<script>
  import { onDestroy, setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { contextKey } from './tabs';

  const tabs = writable([]);
  const active = writable();

  const activate = tab => {
    active.set(tab);
  };

  setContext(contextKey, {
    register: tab => {
      tabs.update($tabs => [...$tabs, tab]);
      active.update($active => $active ?? tab);

      onDestroy(() => {
        tabs.update($tabs => $tabs.filter(t => t !== tab));
      });
    },

    activate,
    active,
  });
</script>

<div class="tabs">
  {#each $tabs as tab}
    <button class="tab" class:active={$active === tab} on:click={() => activate(tab)}>
      {tab}
    </button>
  {/each}
</div>

<slot />

<style lang="postcss">
  .tabs {
    display: grid;
    grid-auto-flow: column;
    align-content: space-between;
    justify-content: space-around;

    padding: 16px;

    border-radius: 9999px;
    border: 1px solid #cfcfcf;

    .tab {
      padding: 20px 42px;

      color: #626262;
      font-family: 'Space Mono';
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 100% */
      text-transform: uppercase;
      border-radius: 9999px;
    }

    .active {
      background-color: #e9e9e9;
    }
  }
</style>
