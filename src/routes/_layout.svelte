<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    position: relative;
    min-height: 80vh;
    max-width: 56em;
    background-color: white;
    box-sizing: border-box;
  }
</style>

<header>
  <h1>blog</h1>
  <Nav {segment} />
</header>

<main>
  <slot />
</main>

<footer>Footer</footer>
