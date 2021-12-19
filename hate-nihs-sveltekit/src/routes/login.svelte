<script>
  import Navbar from "../libs/nevbar.svelte";
  let getdata = getimage();
  async function getimage() {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");

    if (res.ok) {
      return res.json();
    } else {
      throw new Error(res);
    }
  }
</script>

<Navbar />
<main>
  {#await getdata}
    <p>loading image</p>
  {:then outdata}
    <img src={outdata[0].url} alt="Dog image" />
  {/await}
</main>
