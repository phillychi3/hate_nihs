<script>
    import Navbar from "../libs/nevbar.svelte";
    import { Form, FormGroup, Button , Input, Label } from 'sveltestrap';
    import Typewriter from 'svelte-typewriter'
    let inner;
    let name
    let content
    let verify01 = "5L2g5piv5pm66Zqc5ZeO"
    let verify02 = "6YKE5oOz56C06Kej6Zi/"
    const resize = () => {
      inner.style.height = 'auto';
      inner.style.height = 4 + inner.scrollHeight + 'px';
    };

    async function doPost () {

      const res = await fetch('http://127.0.0.1:5500/api/message/postdata', {
        method: 'POST',
        body: JSON.stringify({
          name,
          content,
          verify01,
          verify02
        })
      })
      const json = await res.json()
      console.log(json)
  }

  </script>
  
<style>
.post {
  height: 1000px;
  background-image: url(https://i.imgur.com/9cSpdWy.jpg);
  background-size: cover;
  position: relative;

}
.form {
  max-width: 320px;
  width: 90%;
  background-color: #67a9df;
  padding: 40px;
  border-radius: 4px;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  color: #fff;
  box-shadow: 3px 3px 4px rgba(0,0,0,0.2);
}
</style>

<Navbar />
  
<section class="post">
  <div class="form">
    <Form>

      <FormGroup>
        <Label for="Nickname">暱稱</Label>
        <Input
          type="text"
          name="name"
          id="Nickname"
          placeholder="請輸入暱稱"
          bind:value={name}
        />
      </FormGroup>
      <FormGroup>
        <Typewriter loop>
          
          <Label for="content">想說甚麼?</Label>
          <Label for="content">今天我想要說...</Label>
          <Label for="content">我看到了什麼...</Label>
        </Typewriter>
        
        <Input
        type="textarea"
          name="content"
          id="content"
          placeholder="內容"
          bind:value={content}
          bind:inner on:input={resize}
        />
      </FormGroup>
      <Button block on:click={doPost}>sned</Button>

    </Form>
  </div>

</section>