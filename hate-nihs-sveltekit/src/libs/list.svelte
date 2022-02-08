<script>
  import repos from "./store";
  import { paginate, LightPaginationNav } from "svelte-paginate";
  import { get } from "svelte/store";
  import { Group, Card, Text } from "@kahi-ui/framework";

  let paginatedItems;
  let currentPage = 1;
  let pageSize = 10;


  function getdata() {
    var datas = get(repos);
    var items = datas.data;
    if (items === false) {
      items = ["error"];
    } else {
      

      paginatedItems = paginate({ items, pageSize, currentPage });
    }
    return items;
  }

  let items = getdata();
</script>

<ul class="items">
  {#if $repos.status === "loading"}
    <span>Loading...</span>
  {:else if $repos.status === "success"}
    {#each paginatedItems as item}
      <Group>
        <Card.Container class="card-preview" palette="auto">
          <Card.Section>
            <Text>
              {item.content}
            </Text>
          </Card.Section>
        </Card.Container>
      </Group>
    {/each}
  {:else if $repos.status === "error"}
    <span>error</span>
  {/if}
</ul>

<LightPaginationNav
  totalItems={items.length}
  {pageSize}
  {currentPage}
  limit={1}
  showStepOptions={true}
  on:setPage={(e) => (currentPage = e.detail.page)}
/>
