<template>
    <div class="menuBx">
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            >
            <el-sub-menu index="1">
                <template #title>cate1</template>
                <el-menu-item index="1-1">History</el-menu-item>
                <el-menu-item index="1-2">Development</el-menu-item>
                <el-menu-item index="1-3">Classic</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="2">
                <template #title>cate2</template>
                <el-menu-item index="2-1">Action</el-menu-item>
                <el-menu-item index="2-2">Comedy</el-menu-item>
                <el-menu-item index="2-3">Horror</el-menu-item>
                <el-menu-item index="2-3">Science</el-menu-item>
                <el-menu-item index="2-3">Romance</el-menu-item>
                <el-menu-item index="2-3">Suspose</el-menu-item>
                <el-menu-item index="2-3">Animation</el-menu-item>
                <el-menu-item index="2-3">Documentary</el-menu-item>
                <el-menu-item index="2-3">History</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="3">
                <template #title>music</template>
                <el-menu-item index="3-1">item one</el-menu-item>
                <el-menu-item index="3-2">item two</el-menu-item>
                <el-menu-item index="3-3">item three</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="4">
                <template #title>Workspace</template>
                <el-menu-item index="4-1">item one</el-menu-item>
                <el-menu-item index="4-2">item two</el-menu-item>
                <el-menu-item index="4-3">item three</el-menu-item>
            </el-sub-menu>
        </el-menu>
    </div>
    <div class="h-6" />
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue';
import WOW from "wow.js";

onMounted( () => {
new WOW().init()
})
  
  const activeIndex = ref('1')
  const activeIndex2 = ref('1')
  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  </script>
  
<style lang="scss" scoped>
.menuBx {
    width: 80%;
    margin: 0 auto;
}

</style>