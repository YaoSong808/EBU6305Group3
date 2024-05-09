<script setup lang="ts">
import { ref } from 'vue';
const items = ref([
  { id: 1, text: 'Item 1' },
  { id: 2, text: 'Item 2' },
  { id: 3, text: 'Item 3' }
  // 可以添加更多项
]);
</script>

<template>
    <div class="main">
        <div class="header">Action Movie</div>
        <div class="chief">
            <div class="infoBx" v-for="(item, index) in items" :key="index">
                <div class="cover">
                    <el-skeleton-item variant="image" style="width: 240px; height: 240px" />
                </div>
                <div class="info">
                    <div class="title">唐人街探案3</div>
                    <div class="desc">做为喜剧推理电影唐探系列第三部,前两部让人欲罢不能,第三部自然备受期待,集万千宠爱于一身。影片是大制作,之所以颇受非议,因为这亦是一部集欢笑、泪水、悬疑、推理于一身的大片</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.main {
    width: 80%;
    margin: 0 auto;
    .header {
        font-weight: 600;
        font-size: 20px;
        padding: 0 10px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.297);
    }
    .chief {
        padding: 10px;
        display: flex;
        flex-wrap: wrap;
        align-items: start;
        .infoBx {
            display: flex;
            align-items: center;
            .cover {
                width: 20%;
            }
            .info {
                display: flex;
                flex-direction: column;
                
            }
        }
    }
}
</style>