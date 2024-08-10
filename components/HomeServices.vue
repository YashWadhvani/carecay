<template>
    <div class="home-services" data-scroll-section>
      <div class="container-wide"  >
        <HomeServiceBox caption="What we do" title="New Car" :imgsrc="imageOne" />
        <HomeServiceBox title="Used Car" :imgsrc="imageTwo" />
        <HomeServiceBox title="Workshop" :imgsrc="imageOne" />
        <HomeServiceBox title="Detailing" :imgsrc="imageTwo" />
        <HomeServiceBox title="Finance" :imgsrc="imageOne" />
      </div>
    </div>
  </template>
  
  <script>
    import imageOne from '../assets/images/sample-3.jpg'
    import imageTwo from '../assets/images/sample-4.jpg'
  
    export default {
      data() {
        return {
          imageOne, // Directly assign image paths to data properties
          imageTwo
        }
      }
    }
  </script>
  
  <style lang="scss" scoped>
  
  </style>