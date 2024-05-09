<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import { reactive } from 'vue'

const config = reactive({
  content: 'Element Plus',
  font: {
    fontSize: 30,
    color: 'rgba(192, 185, 185, 0.15)',
  },
  zIndex: -1,
  rotate: -22,
  gap: [100, 100] as [number, number],
  offset: [] as unknown as [number, number],
})
</script>

<template>
    <!-- <el-watermark content="" :font="config.font"> -->
  <header>
    
    <NavBar></NavBar>
    <div class="h-6" />

    <div class="logo"><router-link to="/">CinemaScope: Behind the Screen</router-link></div>


  </header>

  <RouterView />
	<!-- </el-watermark> -->
</template>

<style>
* {
	margin: 0;
	padding: 0;
}

body, html {
	box-sizing: border-box;
	background-color: var(--gs-bg-color);
	/* background: linear-gradient(rgba(47, 38, 33), rgba(16, 12, 42)); */
	
}

img {
	width: 100%;
	height: 100%;
}
a {
	text-decoration: none;
	color: inherit;
}
div.logo {
  margin: 70px 0 20px 90px;
  padding-bottom: 10px;
  width: fit-content;
  /* margin: 0 auto; */
  font-size: 20px;
  font-weight: 600;
  border-bottom: 1px solid ;
}
</style>
