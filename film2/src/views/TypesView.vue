<template>
    <div class="main">
        <el-tabs
            v-model="activeName"
            type="card"
            class="demo-tabs"
            @tab-click="handleClick"
            >
            <el-tab-pane label="Action" name="n1">
                <!-- <div class="infoBx">
                    <div class="imgBx" v-for="(item, index) in items" :key="index"><img :src="url" /></div>
                    <div class="more"><router-link to="/more">more<el-icon><DArrowRight /></el-icon></router-link></div>
                </div>

                <el-table :data="tableData" height="250" style="width: 100%">
                    <el-table-column prop="date" label="上映日期" width="180" />
                    <el-table-column prop="name" label="导演" width="180" />
                    <el-table-column prop="address" label="地址" />
                </el-table> -->
                <Action />
            </el-tab-pane>
            <el-tab-pane label="Comedy" name="n2"><Comedy class="wow fadeInDown"></Comedy></el-tab-pane>
            <el-tab-pane label="Horror" name="n3"><Horror class="wow fadeInDown" /></el-tab-pane>
            <el-tab-pane label="Science" name="n4"><Science class="wow fadeInDown" /></el-tab-pane>
            <el-tab-pane label="Documentary" name="n5"><Documentary class="wow fadeInDown" /></el-tab-pane>
            <el-tab-pane label="Animation" name="n6"><Animation class="wow fadeInDown" /></el-tab-pane>
            <el-tab-pane label="War" name="n7"><War class="wow fadeInDown" /></el-tab-pane>
            <el-tab-pane label="Romance" name="n8"><Romance class="wow fadeInDown" /></el-tab-pane>
            <el-tab-pane label="Suspense" name="n9"><Suspense1 class="wow fadeInDown" /></el-tab-pane>
            <el-tab-pane label="Fantasy" name="n10"><Fantasy class="wow fadeInDown" /></el-tab-pane>
            <el-tab-pane label="History" name="n11"><History class="wow fadeInDown" /></el-tab-pane>
            <!-- <el-tab-pane label="Others" name="n12"><Others /></el-tab-pane> -->
        </el-tabs>

       
    </div>
</template>
  <script lang="ts" setup>
  import { RouterLink } from 'vue-router';
  import type { TabsPaneContext } from 'element-plus'
  import Comedy from './TypesChildren/Comedy.vue';
  import Horror from './TypesChildren/Horror.vue';
  import Action from './TypesChildren/Action.vue';
  import Science from './TypesChildren/Science.vue';
  import Documentary from './TypesChildren/Documentary.vue';
  import Animation from './TypesChildren/Animation.vue';
  import War from './TypesChildren/War.vue';
  import Romance from './TypesChildren/Romance.vue';
  import Suspense1 from './TypesChildren/Suspense.vue';
  import Fantasy from './TypesChildren/Fantasy.vue';
  import History from './TypesChildren/History.vue';
  import Others from './TypesChildren/Others.vue';
  import { ref, onMounted } from 'vue';
import WOW from "wow.js";

onMounted( () => {
new WOW().init()
})
  const activeName = ref('n1')
  
  const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
  }

  const items = ref([
    {cover: '../assets/banner.jpg'},
    {cover: '../assets/banner.jpg'},
    {cover: '../assets/banner.jpg'},
    {cover: '../assets/banner.jpg'},
  ])
  const url = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F0f62f1c4-43ff-4bfe-8d63-7be8c4a19ef9%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1715429933&t=fda7ee8b7629c05377a4df35f4cf8f0e'
  const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-08',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-06',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-07',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
]
  </script>
<style lang="scss" scoped>
  .demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
  }
  .main {
    width: 80%;
    margin: 0 auto;
    .infoBx {
        display: flex;
        flex-wrap: nowrap;
        padding: 5px 10px;
        margin-top: 20px;
        .imgBx {
            width: 20%;
            padding: 5px;
        }
        .more {
            display: flex;
            align-items: center;
            padding: 0 10px;
        }
    }
  }
</style>
  