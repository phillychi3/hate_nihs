<script>
  import repos from "./store";
  import { paginate, LightPaginationNav } from "svelte-paginate";
  import { get } from "svelte/store";
  import { Group ,Card,Text} from "@kahi-ui/framework";

  var datas = get(repos);

  var items = datas.data;
  let currentPage = 1;
  let pageSize = 10;
  $: paginatedItems = paginate({ items, pageSize, currentPage });
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
