<template>
    <div class="mainBx">
        <div class="affixBx">
            <el-affix :offset="120">    
                <el-anchor :offset="100">
                    <el-anchor-link href="#g1">Description</el-anchor-link>
                    <el-anchor-link href="#g2">Classification</el-anchor-link>
                    <el-anchor-link href="#g3">Features</el-anchor-link>
                    <el-anchor-link href="#g4">Development History</el-anchor-link>
                </el-anchor>
            </el-affix>  
        </div>  

        <div id="g1" class="card" style="--i:1">
            <div class="title">Description</div>
            <div class="info">Animated films are movies made using animation techniques, creating dynamic visual effects by continuously playing a series of still images. These still images, called frames, are played in a certain sequence, typically at a rate of 24 frames or 30 frames per second, thus creating a continuous animated effect.

            </div>
            <el-divider />
            
        </div>
        <div class="scene" style="width: 400px;margin-top: 10px;">
            <div class="box">
                <div class="box-front">
                    <img src="../../assets/Home/25.jpg" alt="">
                </div>
                <div class="box-mid"></div>
                <div class="box-back" style="height: 320px">
                    <div class="card-header">
                        <strong>Classification</strong>
                    </div>
                    <p>- Production Technique: Hand-drawn animation, computer-generated animation (CGI), stop-motion animation.<br>- Audience Classification: Children's animation, adult animation.<br>- Genre Classification: Action-adventure, comedy, science fiction, emotional warmth.</p>
                </div>
            </div>
        </div>
        <div id="g2" class="card" style="--i:2">
            <div class="title">Classification</div>
            <div class="info">- Production Technique: Hand-drawn animation, computer-generated animation (CGI), stop-motion animation.<br>- Audience Classification: Children's animation, adult animation.<br>- Genre Classification: Action-adventure, comedy, science fiction, emotional warmth.<br>- Style Classification: Live-action animation, flat animation.<br>- Production Region Classification: Japanese animation, Western animation.<br>

            </div>
            <el-divider />
        </div>
        <div id="g3" class="card" style="--i:3">
            <div class="title">Features</div>
            <div class="info">- Fictionality: Animated films usually have fictional worlds and characters as their basis, allowing creators to construct various fantastic plots and scenes through imagination and creativity.<br>- Diversity of Forms: Animated films can be made using various forms and techniques, including hand-drawn animation, computer-generated animation (CGI), stop-motion animation, etc., thus exhibiting great diversity in style and presentation methods.<br>- Wide Applicability: Animated films are not only entertainment choices for children but also suitable for adults. They can cover a wide range of themes and genres, from light-hearted comedies to deeply moving emotional stories, to science fiction adventures, and more.<br>- Infinite Creativity: Using animation technology, creators can build any possible scenario and character in their imagination, unrestricted by reality. Therefore, animated films often demonstrate high levels of creativity and imagination.<br>- Expression of Emotions: Although created through drawings or computer-generated images, animated films can convey rich emotions and thoughts. Audiences can resonate with the characters and stories depicted in animated films.<br>- Educational Value: Many animated films are not just entertainment pieces but also contain educational elements. They can educate audiences in various ways, conveying knowledge, values, and moral concepts.<br>- Visual Enjoyment: Animated films often feature exquisite visuals, rich colors, and smooth animation effects, providing audiences with visual enjoyment and awe.<br><br>
                
</div>
            <el-divider />
        </div>
        <div id="g4" class="card" style="--i:4">
            <div class="title">Development History</div>
            <div class="info">Early Experimental Stage (Late 19th Century): In the early days, animated films were mainly created by hand-drawing continuous variations of static images to create dynamic effects. For example, French painter Émile Reynaud created "Pauvre Pierrot" in 1888, considered one of the first animated films.<br><br>Silent Film Era (Early 20th Century): With the development of film technology, animated films gradually entered the silent film era. In 1906, American J. Stuart Blackton created "Humorous Phases of Funny Faces," considered the first animated film. During this period, significant contributions were made by artists like Émile Cohl and Winsor McCay.<br><br>Disney Era (1920s-1930s): Walt Disney became a significant driving force in the development of animated films. In 1928, Disney produced the first sound animated film "Steamboat Willie," ushering in the golden age of Disney animation. Subsequently, the Disney studio created a series of classic works such as "Snow White and the Seven Dwarfs."<br><br>Post-War Renaissance (1940s-1950s): After World War II, the animation industry continued to develop. During this period, Japanese animation also began to emerge, with works like "The Tale of the White Serpent" (1958).<br><br>Rise of American Animated Films (1960s-1970s): During this period, American animated films began to rise. In the early 1960s, works like Tom and Jerry and "Yogi Bear" achieved success on television. Meanwhile, Disney also released a series of classic works such as "101 Dalmatians."<br><br>Application of CGI Technology (1990s-Present): With the development of computer technology, computer-generated imagery (CGI) technology has been widely used in animation production. Pixar Animation Studios became the most representative animation production company of this period, producing a series of successful works such as "Toy Story." In addition, companies like DreamWorks Animation and Blue Sky Studios also produced many excellent animated films.<br><br>Globalization and Diversity (21st Century): Contemporary animated films exhibit diverse development trends, not only limited to traditional 2D animation and CGI animation but also including stop-motion animation, mixed-media animation, and other forms. Meanwhile, animated films have also had a significant impact globally, such as Japan's anime industry and France's artistic animation.<br><br>

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