<script>
  import { IconArrowUpRight } from '@tabler/icons-svelte';
</script>

<div class="min-h-screen bg-[#e9e9e9] grid place-items-center">
  <div class="container mx-auto grid place-items-center">
    <div class="flex flex-col">
      <span class="section-name">Travel advice</span>

      <h4 class="mt-4">Useful tips to make your travel easier</h4>

      <div class="content mt-[72px]">
        <div class="separator col-span-2"></div>

        <h5>Getting to & around Łódź</h5>
        <a href="/" class="row-span-2 link">Learn more<IconArrowUpRight size={42} /></a>
        <span
          >Lorem ipsum dolor sit amet consectetur. Amet commodo sed sed amet sit sit pulvinar.
          Pulvinar congue egestas urna lacus in dui. Ante enim egestas in enim odio imperdiet diam
          id. Tristique nisi ipsum mauris sed a vulputate leo non egestas. Sit ac lacus et lectus
          risus eu sollicitudin feugiat libero. Erat montes metus duis sem aliquet ipsum lobortis
          purus. At mi tincidunt adipiscing vivamus placerat. Enim eget a elit enim leo orci enim
          vel.</span
        >

        <div class="separator col-span-2"></div>

        <h5>Accomodation</h5>
        <a href="/" class="row-span-2 link">Learn more<IconArrowUpRight size={42} /></a>
        <span
          >Lorem ipsum dolor sit amet consectetur. Amet commodo sed sed amet sit sit pulvinar.
          Pulvinar congue egestas urna lacus in dui. Ante enim egestas in enim odio imperdiet diam
          id. Tristique nisi ipsum mauris sed a vulputate leo non egestas. Sit ac lacus et lectus
          risus eu sollicitudin feugiat libero. Erat montes metus duis sem aliquet ipsum lobortis
          purus. At mi tincidunt adipiscing vivamus placerat. Enim eget a elit enim leo orci enim
          vel.</span
        >

        <div class="separator col-span-2"></div>
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

  h5 {
    font-family: Gabarito;
    font-size: 42px;
    font-style: normal;
    font-weight: 500;
    line-height: 72px; /* 171.429% */
    color: theme(colors.charcoal);
  }

  .separator {
    height: 1px;
    background-color: #c7c7c7;
    width: 100%;
  }

  .content {
    display: grid;
    grid-template-columns: 1fr auto;
    column-gap: 173px;
    row-gap: 32px;

    .link {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;

      color: #4e4e4e;
      font-family: Gabarito;
      font-size: 32px;
      font-style: normal;
      font-weight: 400;
      line-height: 100%; /* 32px */
      text-transform: uppercase;
    }
  }
</style>
