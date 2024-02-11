<script>
  import { getContext, onMount } from 'svelte';
  import { contextKey } from './tabs';

  /**
   * @type {String}
   */
  export let label;

  const tab = Symbol();
  const { register, activate, active } = getContext(contextKey);

  register(label);
</script>

{#if $active === label}
  <div class="tab-content">
    <slot />
  </div>
{/if}

<style lang="postcss">
</style>
