<template>
    <div class="mainBx">
        <div class="affixBx">
            <el-affix :offset="120">    
                <el-anchor :offset="100">
                    <el-anchor-link href="#f1">Description</el-anchor-link>
                    <el-anchor-link href="#f2">Classification</el-anchor-link>
                    <el-anchor-link href="#f3">Features</el-anchor-link>
                    <el-anchor-link href="#f4">Development History</el-anchor-link>
                </el-anchor>
            </el-affix>  
        </div>  

        <div id="f1" class="card" style="--i:1">
            <div class="title">Description</div>
            <div class="info">Documentaries are film or television art forms that use real-life as their creative material, focusing on real people and events, and undergo artistic processing and presentation to showcase the essence of reality and provoke thought among viewers. The core of documentaries is truth. The birth of cinema began with the creation of documentaries. Experimental films such as "The Arrival of a Train" and "Workers Leaving the Lumière Factory," produced by French filmmaker Louis Lumière in 1895, belong to the documentary genre. The shooting of documentary films in China began at the end of the 19th century and the beginning of the 20th century, with the first one being "Battle of Dingjun Mountain" in 1905. Some of the earliest footage, including social customs at the end of the Qing Dynasty and historical figures like Li Hongzhang, was shot by foreign photographers. Documentaries can be divided into documentary films and television documentaries.

            </div>
            <el-divider />
            
        </div>
        <div class="scene" style="width: 400px;margin-top: 10px;">
            <div class="box">
                <div class="box-front">
                    <img src="../../assets/Home/24.jpg" alt="">
                </div>
                <div class="box-mid"></div>
                <div class="box-back" style="height: 350px">
                    <div class="card-header">
                        <strong>Classification</strong>
                    </div>
                    <p>- Authenticity and Objectivity: Documentaries aim to present real facts and events, striving to objectively represent the subjects or topics discussed.Producers typically use authentic materials and data to reflect phenomena and issues in real life.<br>- Narrative Techniques: While documentaries often lack the plot, characters.</p>
                </div>
            </div>
        </div>
        <div id="f2" class="card" style="--i:2">
            <div class="title">Classification</div>
            <div class="info">- Authenticity and Objectivity: Documentaries aim to present real facts and events, striving to objectively represent the subjects or topics discussed. Producers typically use authentic materials and data to reflect phenomena and issues in real life.<br>- Narrative Techniques: While documentaries often lack the plot, characters, and narrative development found in narrative films, they still organize materials through narration, commentary, music, and other means to make it easier for audiences to understand and accept the conveyed information.<br>- Exploring Social Issues: Many documentaries explore social, political, cultural, or environmental issues, prompting audience reflection and discussion by delving into the nature and impact of these issues.<br>- Real People and Stories: Documentaries typically focus on real people and events, showcasing the lives, experiences, and stories of individuals from different backgrounds and lifestyles, along with the challenges they face.<br>- Social Significance and Educational Value: Documentaries serve not only as a form of entertainment but also as a tool for disseminating knowledge and stimulating thought. Many documentaries have profound social significance and educational value, helping audiences better understand the world, broaden their horizons, and gain knowledge.<br>- Diversity and Innovation: Documentaries come in various forms and styles, including traditional documentaries, interview documentaries, and documentary films. Producers often experiment with innovative filming techniques and narrative styles to attract audience attention.<br>

            </div>
            <el-divider />
        </div>
        <div id="f3" class="card" style="--i:3">
            <div class="title">Features</div>
            <div class="info">- Authenticity and Objectivity: Documentaries aim to present real facts and events, striving to objectively represent the subjects or topics discussed. Producers typically use authentic materials and data to reflect phenomena and issues in real life.<br>- Narrative Techniques: While documentaries often lack the plot, characters, and narrative development found in narrative films, they still organize materials through narration, commentary, music, and other means to make it easier for audiences to understand and accept the conveyed information.<br>- Exploring Social Issues: Many documentaries explore social, political, cultural, or environmental issues, prompting audience reflection and discussion by delving into the nature and impact of these issues.<br>- Real People and Stories: Documentaries typically focus on real people and events, showcasing the lives, experiences, and stories of individuals from different backgrounds and lifestyles, along with the challenges they face.<br>- Social Significance and Educational Value: Documentaries serve not only as a form of entertainment but also as a tool for disseminating knowledge and stimulating thought. Many documentaries have profound social significance and educational value, helping audiences better understand the world, broaden their horizons, and gain knowledge.<br>- Diversity and Innovation: Documentaries come in various forms and styles, including traditional documentaries, interview documentaries, and documentary films. Producers often experiment with innovative filming techniques and narrative styles to attract audience attention.<br>
</div>
            <el-divider />
        </div>
        <div id="f4" class="card" style="--i:4">
            <div class="title">Development History</div>
            <div class="info">Early Documentaries (1890s-1920s): The earliest forms of documentaries can be traced back to the early days of cinema, including motion studies produced by film pioneers like Eadweard Muybridge and documentary shorts made by Thomas Edison and others. These segments typically recorded everyday life, urban scenery, industrial processes, and more.<br><br>Cinema Verité Movement (1920s-1940s): This period witnessed the development of documentaries, including the Soviet "Cinema Verité Movement" and the production of newsreels in the United States. Soviet filmmakers like Dziga Vertov aimed to capture real-life segments, with his masterpiece "Man with a Movie Camera" (1929) showcasing urban life and industrial processes. Meanwhile, newsreel production in the United States also rapidly developed to report news events and social issues.<br><br>Post-War Reconstruction Period (1940s-1960s): After World War II, documentaries became important tools for disseminating information, used to report on war and post-war reconstruction efforts. The notable documentary "Nazi Concentration Camps" (1945) depicted the liberation of concentration camps, raising awareness of wartime atrocities. This period also witnessed the artistic exploration of documentaries, such as French director Jean Rouch's "anthropological film" experiments.<br><br>Documentary Movement (1960s-1970s): This period saw the peak of the documentary movement, reflecting social movements, political protests, and cultural changes. The notable "Martin Luther King" (1970) documented the life and work of civil rights leader Martin Luther King Jr. Meanwhile, the development of new technologies made documentary production easier, allowing more people to participate in documentary filmmaking.<br><br>Postmodernism and Experimental Documentaries (1980s-Present): The influence of postmodernism made documentaries more diverse and experimental in form and content. Some documentary directors adopted nonlinear narratives, multiple perspectives, and artistic filming techniques to explore the boundaries of subjectivity, reality, and narrative. Meanwhile, the development of digital technology brought new opportunities and challenges to documentary production and dissemination, ushering in a new era of documentary creation.<br>

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