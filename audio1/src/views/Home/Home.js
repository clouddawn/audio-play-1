export default {
  data() {
    return {
      currentPlayIndex: 0, // 当前在播放第几首歌曲
      audio: [
        {
          source: require("@/assets/audios/孤勇者.mp3"),
          name: "a1",
        },
        {
          source: require("@/assets/audios/达拉崩吧.mp3"),
          name: "a2"
        }
      ]
    };
  },
  mounted() {
    let name = this.audio[this.currentPlayIndex].name;
    let song = this.$refs[name][0];
    let d_playIcon = document.getElementById("playIcon");
    let that = this;

    function play() {
      if (song.paused) {
        d_playIcon.className = "chenjingImg2";
      } else {
        d_playIcon.className = "chenjingImg";
      }
      if (song.ended) {
        if(that.currentPlayIndex === that.audio.length-1){
          that.currentPlayIndex = 0;
        }else {
          that.currentPlayIndex++;
        }
        name = that.audio[that.currentPlayIndex].name;
        song = that.$refs[name][0];
        that.$refs[name][0].play();
      }
    }

    setInterval(play, 200);

    d_playIcon.addEventListener("click", function () {
      if (song.paused) {
        song.play();
      } else {
        song.pause();
      }
      play();
    });
  },
  methods: {}
};