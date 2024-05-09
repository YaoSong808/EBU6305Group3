<template>
    <div class="mainBx">
        <div class="affixBx">
            <el-affix :offset="120">    
                <el-anchor :offset="100">
                    <el-anchor-link href="#k1">Description</el-anchor-link>
                    <el-anchor-link href="#k2">Classification</el-anchor-link>
                    <el-anchor-link href="#k3">Features</el-anchor-link>
                    <el-anchor-link href="#k4">Development History</el-anchor-link>
                </el-anchor>
            </el-affix>  
        </div>  

        <div id="k1" class="card" style="--i:1">
            <div class="title">Description</div>
            <div class="info">Fantasy films are characterized by the inclusion of magic, supernatural events, or fantasy creatures such as dragons, half-beasts, and fantasy worlds like Middle-earth in "The Lord of the Rings." Fantasy films can be categorized alongside science fiction films and horror films in the classification of movies. Representative works include "The Lord of the Rings," "The Hobbit," and "Harry Potter."

            </div>
            <el-divider />
            
        </div>
        <div class="scene" style="width: 400px;margin-top: 10px;">
            <div class="box">
                <div class="box-front">
                    <img src="../../assets/Home/29.jpg" alt="">
                </div>
                <div class="box-mid"></div>
                <div class="box-back" style="height: 360px">
                    <div class="card-header">
                        <strong>Classification</strong>
                    </div>
                    <p>1. Genre Classification: Fantasy films can be divided into various types, including magical, mythical, magical, and legendary.<br>2. Worldview Classification: Fantasy films may take place in different worldviews, such as medieval European style, future science fiction style, ancient mythological style, etc.<br>3. Object Classification: Fantasy films may revolve around different objects.</p>
                </div>
            </div>
        </div>
        <div id="k2" class="card" style="--i:2">
            <div class="title">Classification</div>
            <div class="info">1. Genre Classification: Fantasy films can be divided into various types, including magical, mythical, magical, and legendary.<br>2. Worldview Classification: Fantasy films may take place in different worldviews, such as medieval European style, future science fiction style, ancient mythological style, etc.<br>3. Object Classification: Fantasy films may revolve around different objects, such as wizards, elves, dragons, and monsters.<br>4. Audience Classification: Fantasy films may target different audience groups, including children, teenagers, adults, etc.<br><br><br>

            </div>
            <el-divider />
        </div>
        <div id="k3" class="card" style="--i:3">
            <div class="title">Features</div>
            <div class="info">- Fictional World: Fantasy films usually have a fictional world as their background, full of magic, mystery, and supernatural elements, immersing the audience in imaginative realms.<br>- Epic Story: Fantasy films often have a grand epic quality, telling legendary hero stories, magnificent war scenes, or adventurous journeys across time and space.<br>- Magic Elements: Fantasy films often involve magic, wizards, spells, and other elements, using these supernatural powers to drive the plot and add mystique and charm.<br>- Otherworldly Creatures: Fantasy films frequently feature various otherworldly creatures such as elves, dwarves, orcs, etc., enriching the world and adding color to the story.<br>- Morality and Destiny: Fantasy films often explore themes of morality, destiny, and courage, showcasing the complexity of human nature and the greatness of values through characters' choices and growth.<br>- Special Effects and Visuals: Fantasy films typically boast exquisite special effects and visual effects, providing audiences with stunning visual experiences through the rendering of scenes, creature designs, and magic presentation.<br><br><br>

</div>
            <el-divider />
        </div>
        <div id="k4" class="card" style="--i:4">
            <div class="title">Development History</div>
            <div class="info">Literary Origins (19th Century): The origins of fantasy films can be traced back to literary works of the 19th century, such as J.R.R. Tolkien's "The Lord of the Rings" and C.S. Lewis's "The Chronicles of Narnia."<br><br>Silent Film Era (Early 20th Century): In the early 20th century, fantasy elements began to appear in silent films, such as Georges Méliès' "A Trip to the Moon" (1902).<br><br>Disney Fantasy: Disney achieved great success in the animation field, creating a series of classic fantasy animated films such as "Snow White and the Seven Dwarfs" (1937) and "Cinderella" (1950).<br><br>Hollywood Fantasy: Hollywood began to produce many popular fantasy films, such as "The Lord of the Rings" trilogy (2001-2003) and the "Harry Potter" series (2001-2011).<br><br>Globalization Trend: With international cooperation and technological development, fantasy films have gained widespread attention and recognition globally, not only from Hollywood blockbusters but also from excellent works from other countries, such as the Japanese anime film "Spirited Away" (2001) and the Chinese fantasy film "Monkey King: Hero Is Back" (2015), etc.<br><br><br>

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