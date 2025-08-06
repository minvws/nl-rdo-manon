<script lang="ts">
  import { page } from "$app/state";
</script>

<ul class="accordion">
  <li>
    <button id="accordion-item">
      Voorbeeld-onderwerp
      <span class="icon-expanded" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 9l6 6l6 -6" />
        </svg>
      </span>

      <span class="icon-collapsed" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up"
          ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 15l6 -6l6 6" /></svg
        >
      </span>
    </button>
    <div aria-labelledby="accordion-item">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit egestas leo, eu
        semper erat congue at. Nulla pellentesque nunc nisl, at elementum ex aliquam ac. Fusce sed
        justo ullamcorper, eleifend nibh a, fringilla lorem. Aliquam erat volutpat. Aenean risus
        sem, tempor at rhoncus in, suscipit hendrerit arcu. Suspendisse ultricies semper sapien eget
        lobortis. Phasellus ut sodales sem. Aenean quis libero gravida, fringilla odio venenatis,
        condimentum lorem.
      </p>
    </div>
  </li>
</ul>
