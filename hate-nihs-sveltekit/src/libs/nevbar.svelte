<script lang="ts">
  import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from "sveltestrap";

  let isOpen = true;

  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
  }
</script>

<Navbar color="light" light expand="md">
  <NavbarBrand href="/">Hate nihs</NavbarBrand>
  <NavbarToggler on:click={() => (isOpen = !isOpen)} />
  <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
    <Nav class="ms-auto" navbar>
      <NavItem>
        <NavLink href="/send">發文</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="https://github.com/phillychi3/hate_nihs">GitHub</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/login">核彈按鈕</NavLink>
      </NavItem>
    </Nav>
  </Collapse>
</Navbar>
