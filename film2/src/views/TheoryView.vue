<script setup lang="ts">
import { ref, onMounted } from 'vue';
import WOW from "wow.js";

onMounted( () => {
  new WOW().init()
})
 const items = ref([
    {cover: '../assets/banner.jpg'},
    {cover: '../assets/banner.jpg'},
    {cover: '../assets/banner.jpg'},
    {cover: '../assets/banner.jpg'},
  ])
</script>

<template>
    <div class="main wow fadeInDown">
        <div class="header">Film Theory</div>
        <div class="chief">
            <router-link to="/detail?id=1" class="infoBx">
                <div class="container">
                    <div class="card">
                        <div class="imgBx"><img src="../assets/Home/1.png" alt="" class="img"></div>
                        <div class="content">
                        <h2 style="text-transform: uppercase;">The History of Movie</h2>
                        <p>The origins of cinema can be traced back to the late 19th century, with the invention of motion picture cameras</p>
                        </div>
                    </div>
                </div>
            </router-link to="/detail">

            <router-link to="/detail?id=2" class="infoBx">
                <div class="container">
                    <div class="card">
                        <div class="imgBx"><img src="../assets/Home/3.png" alt="" class="img"></div>
                        <div class="content">
                        <h2 style="text-transform: uppercase;">The technology development of movie</h2>
                        <p>The late 1920s marked a significant milestone with the introduction of synchronized sound in films. This innovation revolutionized the film</p>
                        </div>
                    </div>
                </div>
            </router-link to="/detail">

            <router-link to="/detail?id=3" class="infoBx">
                <div class="container">
                    <div class="card">
                        <div class="imgBx"><img src="../assets/Home/7.png" alt="" class="img"></div>
                        <div class="content">
                        <h2 style="text-transform: uppercase;">The culture influence of the movie</h2>
                        <p>Characters, stories, and symbols from films can become cultural icons.</p>
                        </div>
                    </div>
                </div>
            </router-link to="/detail">
        </div>
    </div>
</template>

<style scoped lang="scss">
.container {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px;
  margin: 0 auto;
  box-sizing: border-box;
  .card {
    position: relative;
    max-width: 300px;
    // width: 400px;
    height: 350px;
    background-color: #fff;
    transition: 0.3s ease-in-out;
    margin: 30px 10px;
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    .imgBx {
      position: relative;
      width: 260px;
      // height: 260px;
      top: -60px;
      left: 20px;
      z-index: 1;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
      transition: 0.3s ease-in-out;
      img {
        max-width: 100%;
      }
    }
    .content {
      position: relative;
      margin-top: -140px;
      padding: 10px 15px;
      text-align: center;
      color: #111;
      visibility: hidden;
      opacity: 0;
      transition: 0.3s ease-in-out;
    }
  }
  .card:hover {
    height: 500px;
    .content {
      visibility: visible;
      opacity: 1;
      margin-top: -40px;
      transition-delay: 0.3s;
    }
  }
}
.main {
    width: 80%;
    margin: 0 auto;
    .header {
        font-size: 20px;
        font-weight: 600;
    }
    .chief {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 10px 5px;
        .infoBx {
            width: 45%;
            .title {
                padding: 10px 5px;
                width: fit-content;
                margin: 0 auto;
            }
            .cover {
                width: 300px;
                margin: auto;
                img {
                    width: 100%;
                    height: auto;
                }
            }
        }
    }
}
</style>