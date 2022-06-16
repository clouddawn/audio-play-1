<template>
  <main>
    <audio v-for="item in audio" :key="item.name" :ref="item.name" controls :src="item.source" ></audio>
    <img id="playIcon" class="chenjingImg" src="@/assets/images/chenjing.jpg" alt="">
  </main>
</template>

<script src="./Home.js"></script>

<style lang="scss" scoped>
  @import "./Home.scss";
</style>