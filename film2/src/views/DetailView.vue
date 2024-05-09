<script setup lang="ts">
import { useRoute} from 'vue-router';
import { ref, onMounted } from 'vue';
import WOW from "wow.js";

onMounted( () => {
  new WOW().init()
})
// const param = ref($route.query.id)
 // 声明 当前路由对象
//  const currentRoute = ref(useRoute().query.id)
 const id = useRoute().query.id

// 打印一下路由实例对象 和 当前路由对象
// console.log('C 组件 中 当前路由对象 ：',currentRoute)
// const param = $route.query.id
let title = 'default'
let content = 'default'
switch(id) {
    case '1': 
        title = 'The history of movie'
        content = `1.Silent Era (Late 19th Century - Early 20th Century): The origins of cinema can be traced back to the late 19th century, with the invention of motion picture cameras and the development of silent films.  During this era, filmmakers experimented with storytelling techniques and visual effects, laying the foundation for the future of cinema.<br><br>2.Golden Age of Hollywood (1920s - 1960s): The silent era gave way to the Golden Age of Hollywood, characterized by the rise of major film studios like Paramount, MGM, and Warner Bros. This period saw the emergence of iconic genres such as film noir, musicals, and westerns, as well as legendary filmmakers like Charlie Chaplin, Alfred Hitchcock, and Orson Welles.<br><br>3.Introduction of Sound (Late 1920s): The late 1920s marked a significant technological advancement with the introduction of synchronized sound in films, leading to the decline of silent films and the rise of "talkies."  This innovation revolutionized the film industry and expanded the possibilities for storytelling.<br><br>4.World War II and Propaganda Films (1939 - 1945): World War II had a profound impact on the film industry, as Hollywood played a crucial role in producing propaganda films to support the war effort.  Filmmakers used the medium to rally public support, boost morale, and shape perceptions of the conflict.<br><br>5.Post-War Era and Studio System Decline (1950s - 1960s): The post-war era saw significant social and cultural changes, reflected in the films of the time.  The rise of television posed a challenge to the traditional studio system, leading to the decline of the major studios' dominance and the emergence of independent filmmaking.<br><br>6.New Hollywood and Auteur Filmmaking (Late 1960s - 1970s): The late 1960s and 1970s witnessed the rise of the New Hollywood movement, characterized by a wave of innovative and boundary-pushing films.  Directors like Martin Scorsese, Francis Ford Coppola, and Steven Spielberg ushered in an era of auteur filmmaking, focusing on personal vision and artistic expression.<br><br>7.Blockbusters and Franchise Films (1980s - Present): The 1980s saw the emergence of blockbuster filmmaking, with the release of iconic franchises like "Star Wars," "Indiana Jones," and "Back to the Future."  This trend continued into the present day, with Hollywood increasingly relying on sequels, remakes, and adaptations to drive box office success.<br><br>8.Digital Revolution and CGI (1990s - Present): The advent of digital technology in the 1990s revolutionized filmmaking, allowing for the creation of increasingly sophisticated visual effects and computer-generated imagery (CGI).  This has led to the creation of visually stunning films and opened up new possibilities for storytelling.<br><br>9.Globalization and International Cinema (21st Century): In the 21st century, globalization has transformed the film industry, with Hollywood films reaching audiences worldwide and international cinema gaining prominence on the global stage.  This has led to greater diversity in storytelling and a more interconnected global film market.<br><br>

`
        break
    case '2':
        title = 'The technology development of movie'
        content = `1.Silent Film Era (Late 19th Century - Early 20th Century): The origins of cinema can be traced back to the late 19th century with the invention of motion picture cameras. During this era, silent films dominated the industry, utilizing basic filming techniques and no synchronized sound.<br><br>2.Introduction of Sound (Late 1920s): The late 1920s marked a significant milestone with the introduction of synchronized sound in films. This innovation revolutionized the film industry, enabling filmmakers to incorporate dialogue, music, and sound effects into their productions.<br><br>3.Technicolor and Color Films (1930s): The 1930s saw the emergence of Technicolor, a groundbreaking color film process that brought vibrant hues to the screen. This technology allowed filmmakers to explore new visual aesthetics and enhance storytelling through color symbolism.<br><br>4.Special Effects and Practical Effects (1940s - 1950s): The mid-20th century witnessed advancements in special effects techniques, including practical effects such as miniatures, matte paintings, and animatronics. These techniques were used to create realistic environments, creatures, and action sequences.<br><br>5.Cinemascope and Widescreen Formats (1950s - 1960s): The 1950s and 1960s saw the introduction of widescreen formats like Cinemascope, which expanded the aspect ratio of films, providing audiences with a more immersive viewing experience. This technology allowed for grander visual compositions and panoramic shots.<br><br>6.Computer-Generated Imagery (CGI) (1970s - Present): The development of computer-generated imagery (CGI) in the 1970s paved the way for revolutionary visual effects in films. CGI enabled filmmakers to create lifelike creatures, fantastical worlds, and epic action sequences, transforming the possibilities of storytelling.<br><br>7.Digital Cinematography and Editing (1990s - Present): The advent of digital cinematography and editing in the 1990s brought about a seismic shift in filmmaking. Digital cameras and nonlinear editing systems allowed for greater flexibility, efficiency, and cost-effectiveness in the production process.<br><br>8.Motion Capture Technology (2000s - Present): Motion capture technology, which records the movements of actors and translates them into digital characters, became increasingly prevalent in the 21st century. This technology has been used to create realistic animated characters and enhance performance capture in live-action films.<br><br>9.Virtual Reality (VR) and Augmented Reality (AR) (2010s - Present): The rise of virtual reality (VR) and augmented reality (AR) has opened up new possibilities for immersive storytelling and interactive experiences. Filmmakers are exploring these technologies to create innovative narrative formats and enhance audience engagement.<br><br>
`
        break
    case '3':
        title = 'The culture influence of the movie'
        content = `1.Globalization of Culture: The film industry has played a significant role in the globalization of culture by introducing audiences around the world to different customs, traditions, and lifestyles depicted in movies.<br><br>2.Cultural Exchange: Films serve as a medium for cultural exchange, allowing audiences to gain insights into the values, beliefs, and perspectives of different societies and communities depicted on screen.<br><br>3.Influence on Fashion and Trends: Movies often influence fashion trends, with costumes and styles worn by characters in films inspiring real-world fashion choices and trends. Iconic film characters have become fashion icons, and their attire has shaped popular culture.<br><br>4.Impact on Language and Slang: Films can introduce new words, phrases, and slang into everyday language, influencing how people communicate and express themselves. Memorable lines from movies often become part of popular lexicon.<br><br>5.Promotion of Tourism: Filming locations featured in movies often experience a boost in tourism as fans seek to visit the places depicted on screen. Famous landmarks and destinations showcased in films become tourist attractions, driving economic growth in local communities.<br><br>6.Reflection of Societal Values and Norms: Movies reflect and sometimes challenge societal values, norms, and attitudes, sparking conversations and debates about social issues such as race, gender, and class.<br><br>7.Cultural Icons and Symbols: Characters, stories, and symbols from films can become cultural icons, representing broader cultural themes and ideals. These icons may transcend national boundaries and become universally recognized symbols of popular culture.<br><br>8.Inspiration for Art and Creativity: Films inspire creativity in various art forms, including literature, music, visual arts, and theater. Filmmakers draw inspiration from other artistic disciplines, and in turn, their work influences and inspires artists in other fields.<br><br>9.Cultural Diplomacy: Films serve as a tool for cultural diplomacy, fostering understanding and goodwill between nations through the exchange of cinematic works and collaborations between filmmakers from different countries.<br><br>10.Preservation of Cultural Heritage: Films document and preserve cultural heritage by capturing historical events, traditions, and customs on celluloid. They provide future generations with insights into past cultures and societies, contributing to the preservation of cultural identity.<br><br>
`
        break
    default: alert('error')

}
</script>

<template>
    <div class="mainBx wow fadeInDown">
        <!-- <div><el-skeleton  animated/>
        <br />
        <el-skeleton style="--el-skeleton-circle-size: 100px" animated>
        <template #template>
            <el-skeleton-item variant="circle"  animated/>
        </template>
        </el-skeleton></div> -->
        
        <div class="title card" style="--i:1;text-transform: uppercase;">{{ title }}</div>
        <div class="content card" style="--i:2" v-html="content"></div>
    </div>    
</template>
  

<style scoped lang="scss">
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
    width: 60%;
    margin: 0 auto;
    .title {
        font-weight: 600;
        font-size: 24px;
        text-align: center;
        padding-bottom: 50px;
    }
    .content {
        line-height: 1.8;
    }
}
</style>