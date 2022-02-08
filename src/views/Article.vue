 <template>
  <h1>Stream of the Day</h1>
  <div id="twitch-embed"></div>
  <div id="twitch_embed_script_link"></div>
</template>

<script>
export default {
  data: () => ({}),
  methods: {
    insertTwitchEmbedScript: function () {
      let twitchEmbedDiv = document.querySelector("#twitch_embed_script_link");
      let twitch_script = document.createElement("script");
      twitch_script.setAttribute("src", "https://embed.twitch.tv/embed/v1.js");
      twitchEmbedDiv.appendChild(twitch_script);
    },
    runTwitchEmbed: function () {
      // eslint-disable-next-line no-undef
      var embed = new Twitch.Embed("twitch-embed", {
        width: 800,
        height: 450,
        channel: this.$route.params.username,
        layout: "video",
      });

      // eslint-disable-next-line no-undef
      embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
        var player = embed.getPlayer();
        player.setVolume(0.5);
      });
    },
  },
  mounted() {
    this.insertTwitchEmbedScript();
    setTimeout(() => this.runTwitchEmbed(), 500);
  },
};
</script>