<template>
  <div class="wrapper">
    <div class="margins" style="padding-top: 3rem; ">
      <SearchBar />
    </div>
  </div>
</template>
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    background-color: white;
    color: black;
    font-size: 18px;
  }

  /* Layout */
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    min-height: 100vh;
    color: black;
    background-color: grey;
  }
  .margins {
    padding-left: 1rem;
    padding-right: 1rem;

    @media (min-width: 1024px) {
      padding-left: 5rem;
      padding-right: 5rem;
    }
  }

</style>
