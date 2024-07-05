<template>
  <div class="carousel">
    <div class="carousel-slider" :style="{ left: `-${currentIndex * 100}%` }">
      <div class="carousel-item" v-for="(item, index) in items" :key="index">
        <img :src="item.src" :alt="item.alt">
        <div class="carousel-caption">{{ item.caption }}</div>
      </div>
    </div>
    <div class="carousel-controls">
      <button class="control-prev" @click="prevSlide">&#10094;</button>
      <button class="control-next" @click="nextSlide">&#10095;</button>
    </div>
    <div class="carousel-indicators">
      <button 
        v-for="(item, index) in items" 
        :key="index" 
        :class="{ active: currentIndex === index }" 
        @click="goToSlide(index)"
      ></button>
    </div>
  </div>

  <div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      items: [
        { src: "/public/carrussel/recurresol1.jpg", alt: "Image 1" },
        { src: "/public/carrussel/recurresol2.jpg", alt: "Image 2" },
        { src: "/public/carrussel/recurresol3.jpg", alt: "Image 3" },
        { src: "/public/carrussel/recurresol4.jpg", alt: "Image 4" },
        { src: "/public/carrussel/recurresol5.webp", alt: "Image 5" }
      ]
    };
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeDestroy() {
    this.stopAutoSlide();
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
    startAutoSlide() {
      this.interval = setInterval(() => {
        this.nextSlide();
      }, 3000);
    },
    stopAutoSlide() {
      clearInterval(this.interval);
    }
  }
};
</script>

<style scoped>
.carousel {
  width: 100%;
  max-width: 100%;
  height: 30rem;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.carousel-slider {
  display: flex;
  position: relative;
  transition: left 0.5s ease;
}

.carousel-item {
  flex: 0 0 100%;
}

.carousel-item img {
  width: 100%;
  height: auto;
}

.carousel-caption {
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: rgba(152, 19, 19, 0.5);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
}

.carousel-controls {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.control-prev,
.control-next {
  background-color: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 30px;
  color: #7f0909;
  
}

.carousel-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 5px;
  
}

.carousel-indicators button {
  background-color: #7f0909;
  border: none;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  cursor: pointer;
  opacity: 0.5;
}

.carousel-indicators button.active {
  opacity: 1;
}
</style>
