<template>
  <div id="app">
    <b-container fluid class="hero">
      <b-row>
        <b-col cols="12">
          <div class="hero--chooseHero">
            <div class="hero--chooseHero__content">
              <h1>IT幫幫忙 - 鐵人賽 30 天</h1>
              <p>自討苦吃</p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-navbar type="dark" variant="dark">

			<!-- 這邊使用 BV 支援 <router-link to=...>的元件 -->
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/about">About Me</b-nav-item>
      </b-navbar-nav>

			<!-- 這邊使用 BV navbar 的搜尋框元件，後面用以搜尋文章 -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-navbar>

		<!-- 負責顯示所有內容 -->
    <router-view/>

  </div>
</template>