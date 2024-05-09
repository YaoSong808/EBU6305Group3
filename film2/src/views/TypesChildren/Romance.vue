<template>
    <div class="mainBx">
        <div class="affixBx">
            <el-affix :offset="120">    
                <el-anchor :offset="100">
                    <el-anchor-link href="#i1">Description</el-anchor-link>
                    <el-anchor-link href="#i2">Classification</el-anchor-link>
                    <el-anchor-link href="#i3">Features</el-anchor-link>
                    <el-anchor-link href="#i4">Development History</el-anchor-link>
                </el-anchor>
            </el-affix>  
        </div>  

        <div id="i1" class="card" style="--i:1">
            <div class="title">Description</div>
            <div class="info">Romantic films refer to movies whose central plot revolves mainly around the development of romantic relationships between the main characters. Common themes in these films include characters making decisions based on newly discovered charms of each other. They often raise questions such as "What is the meaning of my life?" and "Why am I with my partner?"

            </div>
            <el-divider />
            
        </div>
        <div class="scene" style="width: 400px;margin-top: 10px;">
            <div class="box">
                <div class="box-front">
                    <img src="../../assets/Home/27.jpg" alt="">
                </div>
                <div class="box-mid"></div>
                <div class="box-back" style="height: 360px">
                    <div class="card-header">
                        <strong>Classification</strong>
                    </div>
                    <p>- Emotional Rendering: Romantic films are characterized by their emotional depth and ability to evoke feelings of love, passion, and longing through storytelling.<br>- Idealized Representation: Romantic films often present an idealized version of love, creating romantic atmospheres and fantasies that captivate audiences.</p>
                </div>
            </div>
        </div>
        <div id="i2" class="card" style="--i:2">
            <div class="title">Classification</div>
            <div class="info">- Emotional Rendering: Romantic films are characterized by their emotional depth and ability to evoke feelings of love, passion, and longing through storytelling.<br>- Idealized Representation: Romantic films often present an idealized version of love, creating romantic atmospheres and fantasies that captivate audiences.<br>- Character Development: Romantic films focus on character development, creating compelling protagonists with whom audiences can empathize and connect emotionally.<br>- Plot Development: Romantic films feature intricate plots and twists that keep audiences engaged and invested in the outcome of the love story.<br>- Aesthetic Presentation: Romantic films pay attention to aesthetics, featuring beautiful cinematography, evocative music, and stunning visuals to enhance the romantic ambiance.<br>- Real-life Concerns: Some romantic films also address real-life issues such as family, friendship, career, etc., offering audiences both escapism and relatability.<br><br>


            </div>
            <el-divider />
        </div>
        <div id="i3" class="card" style="--i:3">
            <div class="title">Features</div>
            <div class="info">- Fictionality: Animated films usually have fictional worlds and characters as their basis, allowing creators to construct various fantastic plots and scenes through imagination and creativity.<br>- Diversity of Forms: Animated films can be made using various forms and techniques, including hand-drawn animation, computer-generated animation (CGI), stop-motion animation, etc., thus exhibiting great diversity in style and presentation methods.<br>- Wide Applicability: Animated films are not only entertainment choices for children but also suitable for adults. They can cover a wide range of themes and genres, from light-hearted comedies to deeply moving emotional stories, to science fiction adventures, and more.<br>- Infinite Creativity: Using animation technology, creators can build any possible scenario and character in their imagination, unrestricted by reality. Therefore, animated films often demonstrate high levels of creativity and imagination.<br>- Expression of Emotions: Although created through drawings or computer-generated images, animated films can convey rich emotions and thoughts. Audiences can resonate with the characters and stories depicted in animated films.<br>- Educational Value: Many animated films are not just entertainment pieces but also contain educational elements. They can educate audiences in various ways, conveying knowledge, values, and moral concepts.<br>- Visual Enjoyment: Animated films often feature exquisite visuals, rich colors, and smooth animation effects, providing audiences with visual enjoyment and awe.<br><br>
                
</div>
            <el-divider />
        </div>
        <div id="i4" class="card" style="--i:4">
            <div class="title">Development History</div>
            <div class="info">Early Romance Films (Early 20th Century): Early romance films focused on simple love stories, such as "Romeo and Juliet" (1900).<br><br>Hollywood Golden Age (1930s-1950s): Classic romantic films emerged during Hollywood's golden age, including "Gone with the Wind" (1939), "Casablanca" (1942), and "Roman Holiday" (1953).<br><br>New Romanticism (1960s-1970s): The 1960s and 1970s saw the emergence of new romanticism in films like "Bonnie and Clyde" (1967) and "The Way We Were" (1973), exploring diverse and realistic portrayals of love.<br><br>1980s to Present (1980s-Present): Since the 1980s, romantic films have diversified in style and theme, ranging from traditional romance to romantic comedies, indie romances, etc. Examples include "Titanic" (1997), "Notting Hill" (1999), and "Eternal Sunshine of the Spotless Mind" (2004). Alongside traditional romances, there has been an emergence of alternative romantic narratives like "Brokeback Mountain" (2005) and "The Shape of Water" (2017), reflecting changing social attitudes towards love and relationships.<br> <br><br>

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