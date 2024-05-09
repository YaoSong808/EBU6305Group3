<template>
    <div class="mainBx">
        <div class="affixBx">
            <el-affix :offset="120">    
                <el-anchor :offset="100">
                    <el-anchor-link href="#j1">Description</el-anchor-link>
                    <el-anchor-link href="#j2">Classification</el-anchor-link>
                    <el-anchor-link href="#j3">Features</el-anchor-link>
                    <el-anchor-link href="#j4">Development History</el-anchor-link>
                </el-anchor>
            </el-affix>  
        </div>  

        <div id="j1" class="card" style="--i:1">
            <div class="title">Description</div>
            <div class="info">A suspense film is a type of movie that creates a high level of anxiety and tension by making viewers concerned about the fate of the main characters due to the plot. In suspense films, the plot often prompts viewers to think while watching, and the revelation of the mystery at the end is often unexpected, providing a satisfying conclusion to the story. <br>It also refers to a type of movie filled with suspense, utilizing the twists and turns of characters' fates, the development of unknown plot twists, or the unclear truth of the ending to attract viewers' attention and provoke further thought and discussion. Typically, the ending is unexpected, leaving viewers thrilled. Representative works include "Bones," "Hypnosis," "Se7en," "Inception," and "Criminal Minds."<br><br><br>


            </div>
            <el-divider />
            
        </div>
        <div class="scene" style="width: 400px;margin-top: 10px;">
            <div class="box">
                <div class="box-front">
                    <img src="../../assets/Home/28.jpg" alt="">
                </div>
                <div class="box-mid"></div>
                <div class="box-back" style="height: 360px">
                    <div class="card-header">
                        <strong>Classification</strong>
                    </div>
                    <p>1. Subgenre Classification: Mystery films can be classified into various subgenres such as detective mysteries, psychological thrillers, crime procedurals, and supernatural mysteries.<br>2. Setting Classification: Mystery films may be set in different environments such as urban cities, rural landscapes, or isolated settings like islands or mansions.</p>
                </div>
            </div>
        </div>
        <div id="j2" class="card" style="--i:2">
            <div class="title">Classification</div>
            <div class="info">1. Subgenre Classification: Mystery films can be classified into various subgenres such as detective mysteries, psychological thrillers, crime procedurals, and supernatural mysteries.<br>2. Setting Classification: Mystery films may be set in different environments such as urban cities, rural landscapes, or isolated settings like islands or mansions.<br>3. Narrative Structure Classification: Mystery films may follow different narrative structures, including linear storytelling, non-linear narratives, and flashbacks.<br>4. Character Classification: Mystery films may focus on different types of characters, including amateur sleuths, professional detectives, victims, suspects, and antagonists.<br>5. Tone Classification: Mystery films may vary in tone, ranging from dark and gritty to light-hearted and comedic.<br><br>

            </div>
            <el-divider />
        </div>
        <div id="j3" class="card" style="--i:3">
            <div class="title">Features</div>
            <div class="info">- Puzzle Element: Mystery films typically feature a central enigma or puzzle that drives the plot, keeping the audience engaged as they try to solve the mystery alongside the characters.<br>- Suspense and Tension: Mystery films often build suspense and tension through clever storytelling, unexpected plot twists, and ambiguous characters, keeping viewers on the edge of their seats.<br>- Atmospheric Settings: Mystery films frequently utilize atmospheric settings, including moody lighting, eerie soundscapes, and evocative locations, to enhance the sense of mystery and intrigue.<br>- Character Depth: Mystery films often feature complex characters with hidden motivations, conflicting desires, and moral ambiguities, adding depth and nuance to the narrative.<br>- Red Herrings: Mystery films may employ red herrings—false clues or misleading information—to misdirect the audience and heighten suspense until the true resolution is revealed.<br>- Investigation Process: Mystery films typically involve an investigation process, during which the protagonist or protagonists uncover clues, interview suspects, and piece together the truth behind the mystery.<br>- Revelations and Resolutions: Mystery films culminate in revelations and resolutions that provide satisfying answers to the central mystery while also leaving room for interpretation and ambiguity.<br><br><br>

</div>
            <el-divider />
        </div>
        <div id="j4" class="card" style="--i:4">
            <div class="title">Development History</div>
            <div class="info">Early Influences (Early 20th Century): Mystery films have roots in literature, with early cinematic adaptations of classic detective stories by authors like Edgar Allan Poe, Arthur Conan Doyle, and Agatha Christie.<br><br>Golden Age of Detective Films (1930s-1940s): The 1930s and 1940s saw the rise of classic detective films featuring iconic sleuths such as Sherlock Holmes, Hercule Poirot, and Philip Marlowe, often portrayed by actors like Basil Rathbone and Humphrey Bogart.<br><br>Film Noir Era (1940s-1950s): The film noir movement of the 1940s and 1950s produced many classic mystery films characterized by their dark, shadowy visuals, morally ambiguous characters, and hardboiled detective protagonists.<br><br>Psychological Thrillers (1960s-Present): Starting in the 1960s and continuing to the present day, psychological thrillers have become a prominent subgenre of mystery films, exploring the intricacies of the human psyche and often blurring the lines between reality and illusion.<br><br>Modern Mystery Films (1980s-Present): In recent decades, mystery films have continued to evolve, incorporating elements of other genres such as horror, science fiction, and action while exploring contemporary themes and issues relevant to society.<br><br><br>

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