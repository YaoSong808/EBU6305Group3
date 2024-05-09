<template>
    <div class="mainBx">
        <div class="affixBx">
            <el-affix :offset="120">    
                <el-anchor :offset="100">
                    <el-anchor-link href="#a1">Description</el-anchor-link>
                    <el-anchor-link href="#a2">Classification</el-anchor-link>
                    <el-anchor-link href="#a3">Features</el-anchor-link>
                    <el-anchor-link href="#a4">Development History</el-anchor-link>
                </el-anchor>
            </el-affix>  
        </div>  

        <div id="a1" class="card" style="--i:1">
            <div class="title">Description</div>
            <div class="info">Action films, also known as action-adventure films, are a genre of movies centered around intense excitement, thrilling action, and visual and auditory tension. They feature high-impact, continuous kinetic energy, a series of thrilling actions and events, often involving pursuits (on foot and by transportation), rescues, battles, catastrophic disasters (floods, explosions, fires, and natural disasters), fights, escapes, sustained movements, breathtaking pacing, and adventurous characters.</div>
        </div>
        <el-divider />
        <div class="scene" style="width: 400px;margin-top: 10px;">
            <div class="box">
                <div class="box-front">
                    <img src="../../assets/Home/20.jpg" alt="">
                </div>
                <div class="box-mid"></div>
                <div class="box-back" style="height: 200px">
                    <div class="card-header">
                        <strong>Classification</strong>
                    </div>
                    <p>Martial arts films, crime films, gangster films, war films, spy films, wuxia films, superhero series.</p>
                </div>
            </div>
        </div>
        <div id="a2" class="card" style="--i:2">
            <div class="title">Classification</div>
            <div class="info">Martial arts films, crime films, gangster films, war films, spy films, wuxia films, superhero series.</div>
        </div>
        <el-divider />
        <div id="a3" class="card" style="--i:3">
            <div class="title">Features</div>
            <div class="info">- Highly dynamic and tense: Action films primarily feature action scenes, usually containing a plethora of visually striking dynamic scenes such as chases, battles, gunfights, explosions, etc., creating an atmosphere of intense excitement.<br>- Spectacular stunts and action sequences: Action film production often relies on meticulously designed stunts and action sequences, including perilous stunt performances, thrilling car chases, realistic combat actions, etc., to capture the audience's attention and enhance the visual effects of the film.<br>- Simple and straightforward plots: The plots of most action films are relatively simple and direct, with clear storylines typically revolving around traditional themes such as protagonists chasing enemies, rescuing hostages, combating crime, allowing audiences to focus better on the presentation of action scenes.<br>- Heroism and sense of justice: The protagonists in action films are usually powerful, brave, and imbued with a strong sense of justice. They spare no effort to protect social order, often representing the positive side of society, thus often winning the audience's favor.<br>- Internationalization and cross-cultural elements: Many action films span national borders, with protagonists operating in different countries or regions, adding variety and visual impact to the story.<br>- Importance of music and sound effects: The music and sound effects in action films are often crucial for creating atmosphere and enhancing the impact of scenes. Appropriate music and sound effects can immerse the audience more deeply into action scenes, enhancing the film's viewing experience.<br>
</div>
        </div>
        <el-divider />
        <div id="a4" class="card" style="--i:4">
            <div class="title">Development History</div>
            <div class="info">Early Stage (Early 20th Century): Elements of action films first appeared in serial films during the silent film era, such as the classic 1903 work "The Great Train Robbery," which included elements like chases and fights. With the improvement of film technology and production standards, action films began to take shape independently.<br><br>Golden Age (1920s-1950s): This period was the golden age of action films, coinciding with the rise of the American film industry centered in Hollywood. Many classic action films were born during this period, such as Douglas Fairbanks Sr.'s adventure action films and "Robin Hood" (1922). The action films of this period tended to emphasize adventure, heroism, and romance, highlighting the bravery and sense of justice of the protagonists.<br><br>Modern Period (1960s-1980s): During the Cold War period, action films gradually became more modern and politicized. Representative works include the James Bond series and "Dirty Harry" (1971). Action films of this period emphasized personal heroism and depicted confrontations with societal issues such as crime and terrorism.<br><br>Postmodern Period (1990s-Present): With the advancement of technology and the development of film production techniques, action film scenes became more stunning and realistic. The themes of action films also became more diverse, covering elements such as science fiction, fantasy, and superheroes. Additionally, internationalization became a major feature of action films, with many Hollywood action films being shot on location globally, attracting the attention of audiences worldwide.<br><br>Cross-genre Fusion Period: Contemporary action films are no longer confined to traditional action scenes but are beginning to integrate elements from other genres such as comedy, science fiction, horror, etc. This cross-genre fusion makes action films more varied, attracting a broader audience base.<br>
</div>
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