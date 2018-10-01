<template>
  <article class="post-excerpt">
    <h2 class="title">
      <a href="#">About Us</a>
    </h2>
    <div class="swiper-container">
      <carousel-3d>
        <slide :index="0">
          <a href="https://www.google.ru/">
            <img src="https://placehold.it/360x270">
          </a>
        </slide>
        <slide :index="1">
          <a href="https://www.google.ru/">
            <img src="https://placehold.it/360x270">
          </a>
        </slide>
        <slide :index="2">
          <a href="https://www.google.ru/">
            <img src="https://placehold.it/360x270">
          </a>
        </slide>
      </carousel-3d>
    </div>
    <div class="excerpt">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus reprehenderit ex inventore animi eaque voluptate autem at modi. Repudiandae eum aspernatur totam assumenda sint rerum, asperiores nemo voluptates debitis fugit?
    </div>
  </article>
</template>
<script>

import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
  components: {
    'carousel-3d': Carousel3d,
    'slide':Slide
  },
  name: "AboutUs",
  data() {
    return {
     
    }
  }
};
</script>

<style lang="scss">
   
</style>
