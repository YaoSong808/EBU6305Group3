<script setup lang="ts">
import { ref, onMounted } from 'vue';
import WOW from "wow.js";

onMounted( () => {
  new WOW().init()
})

const items = ref([
  { id: '1', text: 'Item 1', src: '../assets/Home/1.png' },
  { id: '2', text: 'Item 1', src: '../assets/Home/2.png' },
  { id: '3', text: 'Item 1', src: '../assets/Home/3.png' },
  // 可以添加更多项
]);
</script>

<template>
  <main>
    <div class="wow fadeInDown container">
      <div class="card">
        
        <div class="imgBx"><img src="../assets/Home/1.png" alt="" class="img"></div>
        <div class="content">
          <h2>Tom Hanks is Forrest Gump</h2>
          <p>Today, if the audience were to vote for the most impressive classic movie, "Forrest Gump" would undoubtedly be among the top ten. As for the reason, the protagonist Forrest Gump's persistence and transparency in dealing with life has also infected all the audience.</p>
        </div>
      </div>

      <div class="card">
        <div class="imgBx"><img src="../assets/Home/2.png" alt="" class="img"></div>
        <div class="content">
          <h2>Flipped</h2>
          <p>Under the expectations of parents and society, the two teenagers experienced emotional ups and downs and the process of maturity. By observing and understanding each other, they gradually understand the true meaning of love and friendship, and grow into more mature individuals.</p>
        </div>
      </div>

      <div class="card">
        <div class="imgBx"><img src="../assets/Home/3.png" alt="" class="img"></div>
        <div class="content">
          <h2>Les Choristes</h2>
          <p>A group of rebellious teenagers find the meaning of life through music under the leadership of a music teacher. Music not only became a tool for them to express their feelings, but also became a source of comfort and strength deep inside them. The film warms people's hearts and shows the magical power of music and the beauty of human nature.  </p>
        </div>
      </div>
    </div>

    <div class="wow fadeInDown container">
      <div class="card">
        <div class="imgBx"><img src="../assets/Home/4.png" alt="" class="img"></div>
        <div class="content">
          <h2>The Godfather</h2>
          <p>This classic gangster movie is a deep dive into the world of American gangsters. By revealing the power struggle and betrayal between families, the film shows the cruelty of gangster culture and the complexity of human nature. It is also an epic about family, friendship and betrayal.</p>
        </div>
      </div>

      <div class="card">
        <div class="imgBx"><img src="../assets/Home/5.png" alt="" class="img"></div>
        <div class="content">
          <h2>Im Westen nichts Neues</h2>
          <p>This modern anti-war epic tells the story of a group of young soldiers struggling to survive and suffering on the battlefield. They are forced to face death, despair and madness, but they retain their faith in life and their hope for humanity. The film reveals the impact of war on human and the value of life.</p>
        </div>
      </div>

      <div class="card">
        <div class="imgBx"><img src="../assets/Home/6.png" alt="" class="img"></div>
        <div class="content">
          <h2>The Shawshank Redemption</h2>
          <p>The film tells the story of friendship and struggle between two prisoners in prison. They maintained their pursuit of freedom and hope, and finally overcame all difficulties with perseverance. The film has become a classic for its profound portrayal of characters and moving story.</p>
        </div>
      </div>
    </div>

    <div class="wow fadeInDown container">
      <div class="card">
        <div class="imgBx"><img src="../assets/Home/7.png" alt="" class="img"></div>
        <div class="content">
          <h2>In the Heat of the Sun</h2>
          <p>This 1994 Chinese film tells the story of friendship, love and confusion as a group of teenagers in Beijing grow up during the Cultural Revolution of the 1970s, showing the youth and individual emotions of that special era, capturing a unique experience of growing up in the intense sunlight.</p>
        </div>
      </div>

      <div class="card">
        <div class="imgBx"><img src="../assets/Home/8.png" alt="" class="img"></div>
        <div class="content">
          <h2>Good Will Hunting</h2>
          <p>Will Huntingis a gifted mathematician, but he is haunted by the trauma of his past. Under the guidance of a psychology professor, he begins to explore his inner world and grows with the support of friends. The film is a profound exploration of genius and the search for the heart, and what it means to truly grow.</p>
        </div>
      </div>

      <div class="card">
        <div class="imgBx"><img src="../assets/Home/9.png" alt="" class="img"></div>
        <div class="content">
          <h2>Farewell My Concubine</h2>
          <p>Showing human nature and emotional complexity. Depicting the joys and sorrows of two Peking Opera singers for half a century, from which we can see the multidimensional display of the changes of Chinese traditional society, culture and human nature.</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.container {
  position: relative;
  width: 1100px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px;
  margin: 0 auto;
  .card {
    position: relative;
    max-width: 300px;
    height: 350px;
    background-color: #fff;
    transition: 0.3s ease-in-out;
    margin: 30px 10px;
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 202px rgba(0, 0, 0, 0.5);
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
    height: 600px;
    .content {
      visibility: visible;
      opacity: 1;
      margin-top: -40px;
      transition-delay: 0.3s;
    }
  }
}


div.container1 {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 80px 240px;
  // width: 80%;
  // margin: 10px auto;
  border-top: 1px solid rgba(255, 255, 255, 0.27);

  div.container2 {
    position: relative;
    height: 305px;
    .info {
      width: 150px;
      // height: 150px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 12; /* 显示的行数，可以根据需要修改 */
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 16px;
      line-height: 1.5;
      letter-spacing: 1px;
      // display: none;
      position: absolute;
      // bottom: 0;
      left: 0;
      top: 0;
      width: 100%;
      height:100%;
      box-sizing: border-box;
      background-color: rgba(0, 0, 0, 0.7); /* 半透明黑色背景 */
      color: white;
      padding: 20px;
      box-sizing: border-box;
      opacity: 0; /* 初始状态下隐藏 */
      transition: opacity 0.3s ease; /* 添加过渡效果 */
    }
  }

  .container2:hover .info {
    opacity: 1;
  }
}
</style>
