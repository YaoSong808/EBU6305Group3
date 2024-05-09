<template>
    <div class="mainBx">
        <div class="affixBx">
            <el-affix :offset="120">    
                <el-anchor :offset="100">
                    <el-anchor-link href="#l1">Description</el-anchor-link>
                    <el-anchor-link href="#l2">Classification</el-anchor-link>
                    <el-anchor-link href="#l3">Features</el-anchor-link>
                    <el-anchor-link href="#l4">Development History</el-anchor-link>
                </el-anchor>
            </el-affix>  
        </div>  

        <div id="l1" class="card" style="--i:1">
            <div class="title">Description</div>
            <div class="info">Historical films, also known as historical documentaries and historical dramas, are collectively referred to as films that focus on significant events in history. Their content often involves political and military struggles. Historical films draw inspiration from historical facts, and the portrayal of historical events and figures must adhere to historical accuracy. However, there is some allowance for artistic embellishment in secondary plots and details.

            </div>
            <el-divider />
            
        </div>
        <div class="scene" style="width: 400px;margin-top: 10px;">
            <div class="box">
                <div class="box-front">
                    <img src="../../assets/Home/30.jpg" alt="">
                </div>
                <div class="box-mid"></div>
                <div class="box-back" style="height: 360px">
                    <div class="card-header">
                        <strong>Classification</strong>
                    </div>
                    <p>1. Chronological Classification: Historical films can be categorized based on the era and historical context they depict, such as ancient history films, modern history films, etc.<br>2. Subject Classification: Historical films can be either a faithful portrayal of real historical events or a fictional story based on historical events or figures.</p>
                </div>
            </div>
        </div>
        <div id="l2" class="card" style="--i:2">
            <div class="title">Classification</div>
            <div class="info">1. Chronological Classification: Historical films can be categorized based on the era and historical context they depict, such as ancient history films, modern history films, etc.<br>2. Subject Classification: Historical films can be either a faithful portrayal of real historical events or a fictional story based on historical events or figures.<br>3. Regional Classification: Historical films can be categorized based on the geographical region they depict, covering different countries, regions, or cultures.<br><br><br>

            </div>
            <el-divider />
        </div>
        <div id="l3" class="card" style="--i:3">
            <div class="title">Features</div>
            <div class="info">- Authenticity and Accuracy: Historical films typically strive for authenticity and accuracy in depicting historical events or figures, often paying attention to details and backgrounds.<br>- Recreation of Historical Settings: Historical films recreate historical settings, costumes, props, etc., to immerse viewers in the atmosphere and context of the past.<br>- Interpretation of Historical Events: Historical films may interpret and provide insights into historical events from specific perspectives, shedding light on the causes, impacts, and significance of those events.<br>- Character Portrayal: Historical films often portray historical figures, depicting their personalities, emotions, and motivations, thereby bringing the audience closer to these figures.<br>- Historical Significance and Educational Value: Historical films not only entertain but also educate, helping viewers understand historical events, develop historical consciousness, and cultural identity.<br>- Dramatic Conflict and Plot Development: Historical films typically employ dramatic conflicts and plot developments to engage viewers, making historical stories more vivid and compelling.<br><br>

</div>
            <el-divider />
        </div>
        <div id="l4" class="card" style="--i:4">
            <div class="title">Development History</div>
            <div class="info">Early Historical Films (Early 20th Century): Early historical films used epic storytelling techniques, such as "The Ten Commandments" (1923) and "Olympia" (1938), to depict historical events with grandeur.<br><br>Historical Films During Wartime (1930s-1940s): During wartime, historical films served as propaganda and morale boosters, such as "Red Desert" (1949) and "Henry V" (1944).<br><br>Rise of Historical Biopics (1950s-1960s): In the 1950s and 1960s, historical biopics became popular, portraying the lives and achievements of historical figures, like "Lenin in 1918" (1958) and "Elizabeth" (1998).<br><br>Modern Historical Films (1970s-Present): Since the 1970s, historical films have become more diverse and modern, covering a wider range of historical periods and themes, such as "Schindler's List" (1993) and "Dunkirk" (2017).<br><br>Globalization of Historical Films: With globalization, historical films have gained popularity not only among domestic audiences but also in the international market, showcasing the charm of different cultures and histories, such as "Red Sorghum" (1988) and "Constantine the Great" (1961).<br><br>

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