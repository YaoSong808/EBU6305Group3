<template>
    <div class="mainBx">
        <div class="affixBx">
            <el-affix :offset="120">    
                <el-anchor :offset="100">
                    <el-anchor-link href="#b1">Description</el-anchor-link>
                    <el-anchor-link href="#b2">Classification</el-anchor-link>
                    <el-anchor-link href="#b3">Features</el-anchor-link>
                    <el-anchor-link href="#b4">Development History</el-anchor-link>
                </el-anchor>
            </el-affix>  
        </div>  

        <div id="b1" class="card" style="--i:1">
            <div class="title">Description</div>
            <div class="info">Comedy films, also known as "hilarious comedies" or "romantic comedies," are movies that evoke love and hate through laughter. They often employ different types of laughter to ridicule all the ugly and backward phenomena in society, extolling the beautiful and progressive things in real life. Comedy films usually have clever structures, exaggerated techniques, light-hearted and witty plots, humorous and witty dialogue, and focus on depicting the unique characteristics of comedic characters. There are various types of comedy films, including those that celebrate and those that satirize, such as "The Fake Phoenixes," "I'm Taking a Day Off Today," "Home Alone," the Taiwanese film "The Strawman," and Stephen Chow's "King of Comedy." There are also mainland Chinese films like "Personal Tailor," "Raise the Red Lantern," "The Romance of a Young Master," and "The Big Explosion of Lies."</div>
            <el-divider />
            
        </div>
        <div class="scene" style="width: 400px;margin-top: 10px;">
            <div class="box">
                <div class="box-front">
                    <img src="../../assets/Home/21.jpg" alt="">
                </div>
                <div class="box-mid"></div>
                <div class="box-back" style="height: 120px">
                    <div class="card-header">
                        <strong>Classification</strong>
                    </div>
                    <p>Sitcom, Action Comedy, Romantic Comedy, Black Comedy, Animated Comedy</p>
                </div>
            </div>
        </div>
        <div id="b2" class="card" style="--i:2">
            <div class="title">Classification</div>
            <div class="info">Sitcom, Action Comedy, Romantic Comedy, Black Comedy, Animated Comedy</div>
            <el-divider />
        </div>
        <div id="b3" class="card" style="--i:3">
            <div class="title">Features</div>
            <div class="info">
                - Humor and jokes: The core characteristic of comedy films is to bring joy and laughter to the audience. This may be achieved through funny plots, dialogue, character actions, or situations.<br>- Relaxed atmosphere: Comedy films usually create a relaxed and pleasant atmosphere, allowing the audience to relax and enjoy the joy brought by the film.<br>- Exaggeration and absurdity: In order to increase humor and effect, the plots and characters in comedy films are often exaggerated and exaggerated, making it easier for the audience to laugh out loud.<br>- Social satire and reflection: Some comedy films use satire and reflection on social phenomena, cultural customs, and human weaknesses to make the audience think about deeper issues amidst laughter.<br>- Diversity: Comedy films come in various types, including sitcoms, satirical comedies, action comedies, romantic comedies, etc., each with its unique style and characteristics.<br>- Characterization: The characters in comedy films usually have distinct personalities and characteristics, and their behavior and dialogue are often important elements that trigger laughter.<br>
            </div>
            <el-divider />
        </div>
        <div id="b4" class="card" style="--i:4">
            <div class="title">Development History</div>
            <div class="info">
                Early Silent Film Era (1890s - 1920s): In the early days of cinema, comedy films dominated silent films. Representative works include the works of Charlie Chaplin and Buster Keaton, whose silent films won audiences' love with their splendid action performances, ridiculous plots, and satirical humor.<br><br>Golden Age (1930s - 1950s): This period was the golden age of Hollywood comedy films, with many classic comedy stars emerging, such as Marlon Brando, Grace Kelly, and Cary Grant. Sitcoms, musical comedies, and comedy dramas were all hugely successful, with representative works including "It Happened One Night" (1934), "Gone with the Wind" (1939), "Bringing Up Baby" (1938), and "Some Like It Hot" (1959).<br><br>New Wave Era (1960s - 1970s): During this period, with changes in social trends and advances in film production technology, comedy films began to show more innovation and diversity. Many directors and actors expressed their reflections and criticisms of social phenomena through satire, black humor, and absurd plots. Representative works include "Georgy Girl" (1966), "The Graduate" (1967), and "Being There" (1979).<br><br>1980s - 1990s: This period was a boom period for comedy films, with various types of comedy films emerging, covering a wider range of themes and styles. Action comedies, romantic comedies, black comedies, and other types were all hugely successful. Representative works include "The Simpsons" (1989-present), "The 400 Blows" (1959), "Home Alone" (1990), and "The King of Comedy" (1982).<br><br>Contemporary Period (2000s-Present): With the continuous development of film technology and the influence of globalization, comedy films have become more diverse and international. Various types of comedy films have markets worldwide, and the dissemination of comedy content has become more convenient through the internet and streaming platforms. Representative works include "The Great Gatsby" (2013), "La La Land" (2016), and "The Wandering Earth" (2019).<br>
            </div>
        <el-divider />
        </div>
    </div>
</template>
  
<script setup lang="ts">
  
  
</script>

<style scoped lang="scss">
.scene {
    width: 400px;
    height: 600px;
    // border: 2px solid;
    perspective: 800px;
    box-sizing: border-box;
    margin: 0 auto;
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
.card:hover {
    background-color: plum;
    color: #000;
    box-shadow: 0 0 50px plum;
    -webkit-box-reflect: below 3px linear-gradient(transparent, rgba(0,0,0,.3));
    transition-delay: 0.4s;
}
.card:hover::before, .card:hover::after {
    width: 338px;
    height: 58px;
    transition-delay: 0s;
}
.card::after, .card::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border: 2px solid plum;
    transition: all 0.3s ease-in-out 0.3s;
}
.card::before {
    top: 0;
    left: 0;
    border-right: 0;
    border-bottom: 0;
}
.card::after {
    right: 0;
    bottom: 0;
    border-top: 0;
    border-left: 0;
}
.card {
    padding: 25px;
    margin-bottom: 25px;
    transition: all 0.3s ease-in-out;
    filter: hue-rotate(calc(var(--i)*60deg));
}
.mainBx {
    position: relative;
    font-size: 16px;
    .affixBx {
        position: absolute;
        right: 0;
    }
    > :nth-child(n + 2) {
        width: 80%;
        margin: 0 auto;
        .title {
            font-weight: 600;
            font-size: 20px;
            padding-bottom: 8px;
        }
        .info {
            line-height: 1.7;
            > pre {
                     width: fit-content;

            }
        }
    }
}
</style>