<template>
  <v-responsive
    class="embed-container"
    v-editable="blok"
    :style="blok.style"
    :aspect-ratio="aspectRatio"
  >
    <iframe
      v-if="blok.lazy_load_video === true"
      :src="videoURL"
      :srcdoc="`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%;}a{align-items:center;justify-content:center;display:flex;text-decoration:none;background:rgba(0,0,0,0.1)}.img,a{position:absolute;top:0;right:0;bottom:0;left:0;}.img{background: url('https://img.youtube.com/vi/${blok.youtube_id}/hqdefault.jpg') no-repeat center center/102%;}span{background:rgba(0,0,0,0.66);height:60px;width:60px;border-radius:30px;color:white;font-size:25px;display:flex;align-items:center;justify-content:center;box-shadow:0 0 15px rgba(0,0,0,0.5)}</style><div class='img'/><a href='${videoURL}'><span>▶&#xFE0E;</span></a>`"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <iframe
      v-else
      :src="videoURL"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </v-responsive>
</template>

<script>
export default {
  props: ["blok"],
  computed: {
    aspectRatio() {
      let ratio = this.blok.video_aspect_ratio;
      if (ratio.includes("/")) {
        let ratioValues = ratio.split("/");
        return ratioValues[0] / ratioValues[1];
      } else {
        return this.blok.video_aspect_ratio;
      }
    },
    videoURL() {
      let baseURL = "https://www.youtube.com/embed/";
      let videoID = this.blok.youtube_id;
      let autoplay = `?autoplay=${
        this.blok.auto_play || this.blok.lazy_load_video ? "1" : "0"
      }`;
      let mute = `&mute=${this.blok.mute ? "1" : "0"}`;
      return baseURL + videoID + autoplay + mute;
    }
  }
};
</script>

<style>
.embed-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
