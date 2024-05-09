<template>
    <div class="mainBx">
        <div class="affixBx">
            <el-affix :offset="120">    
                <el-anchor :offset="100">
                    <el-anchor-link href="#c1">Description</el-anchor-link>
                    <el-anchor-link href="#c2">Classification</el-anchor-link>
                    <el-anchor-link href="#c3">Features</el-anchor-link>
                    <el-anchor-link href="#c4">Development History</el-anchor-link>
                </el-anchor>
            </el-affix>  
        </div>  

        <div id="c1" class="card" style="--i:1">
            <div class="title">Description</div>
            <div class="info">Horror films are a type of movie that aims to create terror. Their stories are often bizarre and frightening, depicting ghosts haunting, vicious animals attacking, and other terrifying scenarios. The development of cinematography has provided more favorable conditions for portraying horrifying scenes, and some disaster films that depict earthquakes and nuclear wars also fall into this category. Horror films are actually the style that is closest to the artistic characteristics of cinema, as movies need to create suspense to generate strong anticipation in the audience. Horror films often intend to evoke audiences' primitive negative emotions such as fear, horror, unease, and anxiety, providing entertainment by venting these emotions. They often feature frightening or disgusting monsters, evil animals or humans, supernatural ghosts, and other images.</div>
            <el-divider />
            
        </div>
        <div class="scene" style="width: 400px;margin-top: 10px;">
            <div class="box">
                <div class="box-front">
                    <img src="../../assets/Home/22.jpg" alt="">
                </div>
                <div class="box-mid"></div>
                <div class="box-back" style="height: 150px">
                    <div class="card-header">
                        <strong>Classification</strong>
                    </div>
                    <p>Supernatural Horror, Psychological Horror, Slasher, Survival Horror, Monster Horror</p>
                </div>
            </div>
        </div>
        <div id="c2" class="card" style="--i:2">
            <div class="title">Classification</div>
            <div class="info">Supernatural Horror, Psychological Horror, Slasher, Survival Horror, Monster Horror</div>
            <el-divider />
        </div>
        <div id="c3" class="card" style="--i:3">
            <div class="title">Features</div>
            <div class="info">- Evoking fear: The primary goal of horror films is to evoke fear in the audience. Through horror atmosphere, thrilling scenes, creepy sound effects, and visual effects, horror films create a tense and unsettling atmosphere, allowing the audience to experience fear and tension in the movie.<br>- Exploring humanity and psychology: Many horror films not only aim to scare people but also deepen the story by exploring the dark side of human nature, psychological fears, and inner struggles. This type of horror film often involves themes such as human malice, mental disorders, and psychological barriers.<br>- Reflecting social anxiety: Horror films often reflect various anxieties and fears in contemporary society, such as anxiety caused by technological development, the collapse of social order, and panic caused by environmental disasters. In this way, horror films are not just a form of entertainment but also have certain social significance.<br>- Using thrilling elements: Horror films often excel at using thrilling elements to attract audiences, such as bloody scenes, sudden scares, and tense suspense. These elements allow audiences to experience strong emotional fluctuations in the movie, increasing the excitement of watching.<br>- Diverse themes and styles: Horror films come in a wide variety of themes and styles, including but not limited to supernatural, psychological, bloody, survival, monster, and more. This diversity allows horror films to cater to different audience preferences and needs, providing filmmakers with more creative possibilities.<br>
        </div>
            <el-divider />
        </div>
        <div id="c4" class="card" style="--i:4">
            <div class="title">Development History</div>
            <div class="info">Early Horror Films (1890s-1930s): Early horror films mainly existed in the form of short films, with themes including mythology, supernatural phenomena, and scientific experiments. Among them, the 1910 film "Dr. Jekyll and Mr. Hyde" is a representative work of early horror films, depicting the story of the vampire Dr. Jekyll.<br><br>Classic Horror Film Era (1930s-1950s): During this period, classic monster films such as "Frankenstein" (1931), "Dracula" (1931), and "The Wolf Man" (1941) rose in Hollywood. These films used a large number of special effects and makeup to create monsters and terrifying scenes, becoming representative works of horror films at that time.<br><br>Diversification of Horror Films (1960s-1970s): During this period, horror films began to show a trend of diversification. Alfred Hitchcock's classic works such as "Psycho" (1960) and "The Birds" (1963) promoted the development of psychological horror films. At the same time, low-budget independent horror films also began to rise, such as "Night of the Living Dead" (1968).<br><br>Revival of Horror Films (1980s-1990s): During this period, horror films experienced a revival. Stephen King's novel adaptations such as "The Shining" (1980) and "It" (1990) were highly successful. At the same time, series films such as "Friday the 13th" and "Night of the Living Dead" were also beloved by audiences.<br><br>Modern Horror Films (2000s-Present): In the 21st century, the development of horror films has shown more diversity and innovation. This period has seen the emergence of a new generation of horror film directors and production companies, such as James Wan and Blumhouse Productions. Meanwhile, the themes and styles of horror films have become more diverse, including psychological horror, survival horror, supernatural horror, and more.<br>
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
        }
    }
}
</style>