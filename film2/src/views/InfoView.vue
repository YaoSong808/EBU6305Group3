<script setup lang="ts">
import { ref, onMounted } from 'vue';
import WOW from "wow.js";

onMounted( () => {
  new WOW().init()
})

const items = ref([
  { title: `Suspense Films`, info: `Suspense films typically use tense music and uncertain melodies to enhance the audience's tension and curiosity, guiding them to continuously speculate about the plot's development.` },
  { title: `Romance Films`, info: `Romance films often feature romantic and tender music, creating a sweet atmosphere through beautiful melodies and moving harmonies, allowing the audience to immerse themselves more deeply in the world of love.` },
  { title: `Action Films`, info: `Action films usually employ intense and fast-paced music to complement action scenes and fight sequences, enhancing the audience's sense of tension and excitement.` }
  // 可以添加更多项
]);

const items2 = ref([
  { title: `Enhancing Emotions`, info: `Film scores can enhance the audience's emotional experience through rhythm, melody, and harmony. For instance, in tense scenes, fast-paced and suspenseful music can intensify the audience's feelings of suspense, while soft and poignant melodies can evoke empathy in touching moments.` },
  { title: `Creating Atmosphere`, info: `Music helps to create the atmosphere and mood of film scenes. By choosing appropriate musical styles and instruments, filmmakers can immerse the audience more deeply into the depicted world. For example, in a historical film, the use of classical instruments and ancient music styles can help create an atmosphere of ancient times.` },
  { title: `Shaping Character Images`, info: `Film music can also be used to shape character images. Different characters may have specific music themes or styles associated with them. Through this approach, the audience can gain a clearer understanding of the characters' personality traits and inner worlds.` }
  // 可以添加更多项
]);

const items3 = ref([
  { title: `Star Wars`, info: `The music composed by John Williams for the Star Wars series has become iconic, bringing unparalleled epicness and grandeur to the films through its epic musical atmosphere and theme.` },
  { title: `The Godfather`, info: `The score composed by Nino Rota for this classic mafia film has become its symbol, with its deep and beautiful melodies adding much depth to the film's emotions and dramatic tension.` },
  { title: `Gone with the Wind`, info: `Max Steiner's score for this classic romantic epic added much drama and emotional resonance to the film, becoming a classic in the history of cinema.` }
  // 可以添加更多项
]);

</script>

<template>
    <div class="mainBx">
        <div class="left wow fadeInDown">
            <!-- <div class="infoBx"><el-skeleton :rows="5" animated /></div>
            <div class="infoBx"><el-skeleton :rows="5" animated /></div>
            <div class="infoBx"><el-skeleton :rows="5" animated /></div> -->
            <div class="title">The Role and Significance of Music in Film</div>
            <div class="info">Music in film plays a crucial role in the filmmaking process. It is not merely background noise but a medium for guiding emotions and conveying feelings. Through carefully selected music, filmmakers can achieve several goals:</div>
            
            <div class="scene">
                <div class="box">
                    <div class="box-front">
                        <img src="../assets/Home/10.jpg" alt="">
                    </div>
                    <div class="box-mid"></div>
                    <div class="box-back">
                        <div class="card-header">
                            <strong>1.Enhancing Emotions</strong>
                        </div>
                        <p>Film scores can enhance the audience's emotional experience through rhythm, melody, and harmony. For instance, in tense scenes, fast-paced and suspenseful music can intensify the audience's feelings of suspense, while soft and poignant melodies can evoke empathy in touching moments.</p>
                   </div>
                </div>
            </div>

            <div class="scene">
                <div class="box">
                    <div class="box-front">
                        <img src="../assets/Home/11.jpg" alt="">
                    </div>
                    <div class="box-mid"></div>
                    <div class="box-back" style="height: 320px;">
                        <div class="card-header">
                            <strong>2.Creating Atmosphere</strong>
                        </div>
                        <p>Music helps to create the atmosphere and mood of film scenes. By choosing appropriate musical styles and instruments, filmmakers can immerse the audience more deeply into the depicted world. For example, in a historical film, the use of classical instruments and ancient music styles can help create an atmosphere of ancient times.</p>
                   </div>
                </div>
            </div>

            <div class="scene">
                <div class="box">
                    <div class="box-front">
                        <img src="../assets/Home/12.jpg" alt="">
                    </div>
                    <div class="box-mid"></div>
                    <div class="box-back" style="height: 260px;">
                        <div class="card-header">
                            <strong>3.Shaping Character Images</strong>
                        </div>
                        <p>Film music can also be used to shape character images. Different characters may have specific music themes or styles associated with them. Through this approach, the audience can gain a clearer understanding of the characters' personality traits and inner worlds.</p>
                   </div>
                </div>
            </div>
            <el-divider></el-divider>

            <div class="title">Different Types of Film Music</div>
            <div class="info">In different types of films, the application and effects of music vary:</div>

            <!-- <el-card style="margin-bottom: 40px" v-for="(item, index) in items2" :key="index">
                <template #header>
                <div class="card-header">
                    <strong>{{item.title}}</strong>
                </div>
                </template>
                <p>{{ item.info }}</p>
            </el-card> -->
            <div class="scene">
                <div class="box">
                    <div class="box-front">
                        <img src="../assets/Home/13.jpg" alt="">
                    </div>
                    <div class="box-mid"></div>
                    <div class="box-back" style="height: 200px;">
                        <div class="card-header">
                            <strong>1.Suspense Films</strong>
                        </div>
                        <p>Suspense films typically use tense music and uncertain melodies to enhance the audience's tension and curiosity, guiding them to continuously speculate about the plot's development.</p>
                   </div>
                </div>
            </div>
            <div class="scene">
                <div class="box">
                    <div class="box-front">
                        <img src="../assets/Home/14.jpg" alt="">
                    </div>
                    <div class="box-mid"></div>
                    <div class="box-back" style="height: 230px;">
                        <div class="card-header">
                            <strong>2.Romance Films</strong>
                        </div>
                        <p>Romance films often feature romantic and tender music, creating a sweet atmosphere through beautiful melodies and moving harmonies, allowing the audience to immerse themselves more deeply in the world of love.</p>
                   </div>
                </div>
            </div>
            <div class="scene">
                <div class="box">
                    <div class="box-front">
                        <img src="../assets/Home/15.jpg" alt="">
                    </div>
                    <div class="box-mid"></div>
                    <div class="box-back" style="height: 210px;">
                        <div class="card-header">
                            <strong>3.Action Films</strong>
                        </div>
                        <p>Action films usually employ intense and fast-paced music to complement action scenes and fight sequences, enhancing the audience's sense of tension and excitement.</p>
                   </div>
                </div>
            </div>
            <div class="info">Different types of film music have their unique characteristics and application methods, which better complement the film's theme and atmosphere, enhancing its artistic effect and appeal.</div>
            <el-divider></el-divider>

            <div class="title">Classic Film Scores</div>
            <div class="info">Some classic film scores have had a profound impact on both film culture and the music industry. Examples include:</div>
            <el-card style="margin-bottom: 40px" v-for="(item, index) in items3" :key="index">
                <template #header>
                <div class="card-header">
                    <strong>{{item.title}}</strong>
                </div>
                </template>
                <p>{{ item.info }}</p>
            </el-card>
        </div>
        <div class="right wow fadeInDown">
            <div class="navi"><a>Nav</a></div>
            <div class="bx">
                <div class="title">Latest Movies</div>
                <div class="imgsBx">
                    <div class="imgBx"><img src="../assets/Home/8.png"></div>
                    <div class="imgBx"><img src="../assets/Home/9.png"></div>
                    <div class="imgBx"><img src="../assets/Home/7.png"></div>
                    <div class="imgBx"><img src="../assets/Home/1.png"></div>
                    <div class="imgBx"><img src="../assets/Home/2.png"></div>
                </div>
            </div>
            <el-divider />
            <div class="bx">
                <div class="title">Hot Movies</div>
                <div class="imgsBx">
                    <div class="imgBx"><img src="../assets/Home/11.jpg"></div>
                    <div class="imgBx"><img src="../assets/Home/12.jpg"></div>
                    <div class="imgBx"><img src="../assets/Home/18.jpg"></div>
                    <div class="imgBx"><img src="../assets/Home/10.jpg"></div>
                    <div class="imgBx"><img src="../assets/Home/13.jpg"></div>
                </div>
            </div>
            <el-divider />
            <div class="bx">
                <div class="title">High Rates</div>
                <div class="imgsBx">
                    <div class="imgBx"><img src="../assets/Home/14.jpg"></div>
                    <div class="imgBx"><img src="../assets/Home/15.jpg"></div>
                    <div class="imgBx"><img src="../assets/Home/16.jpg"></div>
                    <div class="imgBx"><img src="../assets/Home/17.jpg"></div>
                    <div class="imgBx"><img src="../assets/Home/18.jpg"></div>
                </div>
            </div>
            <el-divider />
            <div class="bx">
                <div class="title">Top Search</div>
                <div class="imgsBx">
                    <div class="imgBx"><img src="../assets/Home/1.png"></div>
                    <div class="imgBx"><img src="../assets/Home/2.png"></div>
                    <div class="imgBx"><img src="../assets/Home/3.png"></div>
                    <div class="imgBx"><img src="../assets/Home/4.png"></div>
                    <div class="imgBx"><img src="../assets/Home/5.png"></div>
                </div>
            </div>
            <el-divider />
            <div class="bx">
                <div class="title">Horror</div>
                <div class="imgsBx">
                    <div class="imgBx"><img src="../assets/Home/6.png"></div>
                    <div class="imgBx"><img src="../assets/Home/7.png"></div>
                    <div class="imgBx"><img src="../assets/Home/8.png"></div>
                    <div class="imgBx"><img src="../assets/Home/9.png"></div>
                    <div class="imgBx"><img src="../assets/Home/1.png"></div>
                </div>
            </div>
            <el-divider />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.scene {
    width: 400px;
    height: 600px;
    // border: 2px solid;
    perspective: 800px;
    box-sizing: border-box;
    margin: auto;
    .box {
        width: 400px;
        height: 600px;
        // background-color: yellow;
        transition: all ease 1s;
        position: relative;
        transform-style: preserve-3d;
        .box-front {
            width: 400px;
            height: 530px;
            background-color: pink;
            position: absolute;
            left: 0px;
            top: 0px;
            z-index: 2;
            overflow: hidden;
            img {
                height: auto;
            }
        }
        .box-mid {
            width: 400px;
            height: 530px;
            background-color: rgba(0, 0, 0, .5);
            position: absolute;
            left: 0px;
            top: 0px;
            transform: translateZ(-1px);
        }
        .box-back {
            width: 280px;
            height: 300px;
            background-image: linear-gradient(to bottom right, pink, #fff, skyblue);
            background-color: skyblue;
            position: absolute;
            left: 50%;
            top: 35%;
            margin-left: -140px;
            margin-top: -100px;
            transform: translateZ(-100px) rotateY(-180deg);
            box-sizing: border-box;
            color: #2f2621;
            padding: 5px 25px;
            .card-header {
                text-align: center;
                padding-bottom: 5px;
                border-bottom: 1px solid #2f2621;
                width: fit-content;
                margin: 0 auto;
                margin-bottom: 10px;
            }
        }
    }
}
.scene:hover .box {
    transform: rotateY(-180deg);
}
.mainBx {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 80%;
    margin: 0 auto;
    .left {
        width: 65%;
        padding: 40px 10px;

        .infoBx {
            margin-bottom: 20px;
        }
        .title {
            font-size: 22px;
            font-weight: 600;
            padding-bottom: 20px;
        }
        .info {
            line-height: 1.5;
            padding-bottom: 20px;
        }
    }
    .right {
        width: 25%;
        .navi {
            padding: 5px 10px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.305);
            margin-bottom: 20px;
        }
        .bx {
            .title {
            padding: 5px 10px;
            padding-bottom: 5px;
            }
            .imgsBx {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                .imgBx {
                    width: 29%;
                    padding: 5px;
                }
            }
        }
    }
}
</style>