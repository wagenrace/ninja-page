<template>
  <ArticlePage>
    <h2>Pictures</h2>

    <div class="gallery">
      <div class=" image" v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Gallery Image" @click="showImage(index)" />
      </div>
      <div v-if="showModal" class="modal" @click="closeModal">
        <span class="close" @click="closeModal">&times;</span>
        <img :src="images[activeImageIndex]" alt="Gallery Image" class="modal-image" />
      </div>
    </div>
  </ArticlePage>
</template>

<script>
import ArticlePage from "./ArticlePage.vue";
import { reactive, ref } from 'vue';

export default {
  name: 'Gallery',
  setup() {
    const images = reactive([
      '00000-2995506361.png',
      '00001-654122586.png',
      '00002-654122587.png',
      '00003-654122588.png',
      '00004-654122589.png',
      '00005-654122590.png',
      '00006-654122591.png',
      '00007-654122586.png',
      '00008-654122587.png',
      '00009-654122588.png',
      '00010-654122589.png',
      'Hint 10.png',
      '00011-654122590.png',
      '00012-654122591.png',
      '00013-4236958737.png',
      '00014-4236958738.png',
      '00015-4236958739.png',
      '00016-4236958740.png',
      '00017-4236958741.png',
      '00018-4236958742.png',
      // Add more image URLs here
    ]);
    const showModal = ref(false);
    const activeImageIndex = ref(0);

    const showImage = (index) => {
      activeImageIndex.value = index;
      showModal.value = true;
    };

    const closeModal = () => {
      if (showModal.value) {
        showModal.value = false;
      }
    };

    return {
      images,
      showModal,
      activeImageIndex,
      showImage,
      closeModal,
      ArticlePage
    };
  },
};
</script>

<style>
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.image {
  margin: 10px;
  cursor: pointer;
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
}

.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

.modal-image {
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
}
</style>
