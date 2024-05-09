<template>
    <div class="mainBx">
        <div class="affixBx">
            <el-affix :offset="120">    
                <el-anchor :offset="100">
                    <el-anchor-link href="#h1">Description</el-anchor-link>
                    <el-anchor-link href="#h2">Classification</el-anchor-link>
                    <el-anchor-link href="#h3">Features</el-anchor-link>
                    <el-anchor-link href="#h4">Development History</el-anchor-link>
                </el-anchor>
            </el-affix>  
        </div>  

        <div id="h1" class="card" style="--i:1">
            <div class="title">Description</div>
            <div class="info">War films, also known as "military films," are movies that focus on major military actions in history. There are two common types of war films. One type primarily focuses on character development, portraying the personalities and thoughts of individuals through depictions of war events, battle processes, and combat scenes. The other type focuses on portraying war events, illustrating significant military operations, military ideologies, military principles, and strategic tactics through character portrayals and storylines.

            </div>
            <el-divider />
            
        </div>
        <div class="scene" style="width: 400px;margin-top: 10px;">
            <div class="box">
                <div class="box-front">
                    <img src="../../assets/Home/26.jpg" alt="">
                </div>
                <div class="box-mid"></div>
                <div class="box-back" style="height: 360px">
                    <div class="card-header">
                        <strong>Classification</strong>
                    </div>
                    <p>1. Genre Classification: War films can be classified into different sub-genres such as historical war dramas, military action films, war comedies, etc.<br>2. Setting Classification: War films may be categorized based on the specific wars depicted, such as World War I, World War II, Vietnam War, etc.<br>3. Perspective Classification: War films may present different perspectives on war</p>
                </div>
            </div>
        </div>
        <div id="h2" class="card" style="--i:2">
            <div class="title">Classification</div>
            <div class="info">1. Genre Classification: War films can be classified into different sub-genres such as historical war dramas, military action films, war comedies, etc.<br>2. Setting Classification: War films may be categorized based on the specific wars depicted, such as World War I, World War II, Vietnam War, etc.<br>3. Perspective Classification: War films may present different perspectives on war, including those of soldiers, civilians, resistance fighters, etc.<br>4. Style Classification: War films may vary in style, including realistic depictions, allegorical narratives, propaganda films, etc.<br>5. Audience Classification: War films may target different audience demographics such as mainstream audiences, veterans, history enthusiasts, etc.<br><br>


            </div>
            <el-divider />
        </div>
        <div id="h3" class="card" style="--i:3">
            <div class="title">Features</div>
            <div class="info">- Depiction of Conflict: War films depict various aspects of conflict, including battles, strategies, camaraderie, loss, and sacrifice.<br>- Exploration of Human Nature: War films often explore the complexities of human nature under extreme circumstances, revealing both the heroism and the brutality of individuals.<br>- Historical Context: War films provide insight into historical events, offering audiences a deeper understanding of the causes and consequences of wars.<br>- Visual Spectacle: War films often feature stunning visual effects and epic battle sequences, immersing audiences in the intensity and chaos of war.<br>- Emotional Impact: War films evoke strong emotional responses from audiences, eliciting feelings of empathy, patriotism, sorrow, and hope.<br>- Ethical Dilemmas: Many war films raise ethical questions about the morality of war, the treatment of prisoners, the use of weapons, and the impact on civilian populations.<br>- Social Commentary: War films serve as a platform for social commentary, addressing issues such as nationalism, propaganda, PTSD, and the human cost of war.<br><br>

                
</div>
            <el-divider />
        </div>
        <div id="h4" class="card" style="--i:4">
            <div class="title">Development History</div>
            <div class="info">Early War Films (Early 20th Century): Early war films emerged during the silent era, with classics like "The Birth of a Nation" (1915) and "All Quiet on the Western Front" (1930) setting the stage for the genre.<br><br>World War II Era (1940s-1950s): World War II saw a surge in war films, both propaganda films and realistic depictions of combat, such as "Saving Private Ryan" (1998) and "Schindler's List" (1993).<br><br>Vietnam War Films (1960s-1970s): The Vietnam War era gave rise to a new wave of war films, including "Apocalypse Now" (1979) and "Platoon" (1986), which reflected the disillusionment and trauma of the conflict.<br><br>Modern War Films (1980s-Present): In recent decades, war films have continued to evolve, exploring contemporary conflicts and addressing themes such as terrorism, insurgency, and the role of technology in warfare. Examples include "Black Hawk Down" (2001), "The Hurt Locker" (2008), and "American Sniper" (2014). <br><br>

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