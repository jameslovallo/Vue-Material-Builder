<template>
  <div class="embed-container" v-editable="blok" :style="blok.style">
    <iframe
      :src="`https://www.youtube.com/embed/${blok.youtube_id}`"
      :srcdoc="`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%;}a{align-items:center;justify-content:center;display:flex;text-decoration:none;background:rgba(0,0,0,0.1)}.img,a{position:absolute;top:0;right:0;bottom:0;left:0;}.img{background: url('https://img.youtube.com/vi/${blok.youtube_id}/hqdefault.jpg') no-repeat center center/102%;}span{background:rgba(0,0,0,0.66);height:60px;width:60px;border-radius:30px;color:white;font-size:25px;display:flex;align-items:center;justify-content:center;box-shadow:0 0 15px rgba(0,0,0,0.5)}</style><div class='img'/><a href=https://www.youtube.com/embed/${blok.youtube_id}?autoplay=1><span>▶&#xFE0E;</span></a>`"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      title="The Dark Knight Rises: What Went Wrong? – Wisecrack Edition"
    ></iframe>
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

<style>
.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
}
.embed-container iframe,
.embed-container object,
.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
