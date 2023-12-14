<script>
  import { parse } from 'marked';

  /**
   * @type {string}
   */
  export let source;

  /**
   * @type {string | Promise<string>}
   */
  let parsed;

  $: parsed = parse(source);
</script>

{@html parsed}
