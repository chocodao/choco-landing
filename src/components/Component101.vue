<template>
  <div :class="[`component-10-1 border-1px-dove-gray`, className || ``]">
    <img class="fire" :src="fire" />
    <div class="molding montserrat-semi-bold-white-70px">Molding</div>
    <div class="molders-play-an-impo montserrat-normal-white-20px" v-html="moldersPlayAnImpo"></div>
    <component42 :melt="component42Props.melt" :className="component42Props.className" />
  </div>
</template>

<script>
import Component42 from "./Component42";
export default {
  name: "Component101",
  components: {
    Component42,
  },
  props: ["fire", "moldersPlayAnImpo", "className", "component42Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.component-10-1
  align-items: flex-start
  background-color: $kabul
  border-radius: 61px
  display: flex
  flex-direction: column
  left: 84px
  min-height: 802px
  padding: 95px 99px
  position: absolute
  top: 0
  width: 828px

.fire
  align-self: flex-end
  height: 75px
  margin-right: 32.51px
  margin-top: 12px
  object-fit: cover
  width: 65px

.molding
  letter-spacing: 0
  line-height: 70px
  margin-top: 112px
  min-height: 88px
  white-space: nowrap

.molders-play-an-impo
  letter-spacing: 0
  line-height: 20px
  margin-top: 76px
  min-height: 122px
  white-space: nowrap

.component-10-1.component-10-1-1,
.component-10-1.component-10-1-6
  padding: 95px 90px
  width: 682px

.component-10-1.component-10-1-1 .fire,
.component-10-1.component-10-1-6 .fire
  margin-right: 16.48px

.component-10-1.component-10-1-1 .molding,
.component-10-1.component-10-1-6 .molding
  margin-left: 9px

.component-10-1.component-10-1-1 .molders-play-an-impo,
.component-10-1.component-10-1-6 .molders-play-an-impo,
.component-10-1.component-10-1-12 .molders-play-an-impo
  align-self: flex-end
  min-width: 493px

.component-10-1.component-10-1-2,
.component-10-1.component-10-1-7
  align-items: center
  padding: 107.5px 0
  width: 554px

.component-10-1.component-10-1-2 .fire,
.component-10-1.component-10-1-7 .fire
  margin-right: 84.61px
  margin-top: unset

.component-10-1.component-10-1-2 .molding,
.component-10-1.component-10-1-7 .molding
  margin-right: 93.0px
  margin-top: 114px
  min-width: 299px

.component-10-1.component-10-1-2 .molders-play-an-impo,
.component-10-1.component-10-1-7 .molders-play-an-impo
  margin-top: 41px
  min-height: 170px
  min-width: 392px

.component-10-1.component-10-1-3,
.component-10-1.component-10-1-8
  left: 110px
  padding: 95px 69.8px
  width: 709px

.component-10-1.component-10-1-3 .fire,
.component-10-1.component-10-1-8 .fire
  margin-right: 42.02px

.component-10-1.component-10-1-3 .molders-play-an-impo,
.component-10-1.component-10-1-8 .molders-play-an-impo
  margin-top: 56px
  min-height: 170px

.component-10-1.component-10-1-4,
.component-10-1.component-10-1-9
  left: 75px
  padding: 95px 69.8px
  width: 532px

.component-10-1.component-10-1-4 .fire,
.component-10-1.component-10-1-9 .fire
  margin-right: 11.48px

.component-10-1.component-10-1-4 .molding,
.component-10-1.component-10-1-9 .molding
  margin-left: 0

.component-10-1.component-10-1-4 .molders-play-an-impo,
.component-10-1.component-10-1-9 .molders-play-an-impo
  align-self: flex-end
  margin-top: 56px
  min-height: 170px
  min-width: 392px

.component-10-1.component-10-1-10
  width: 1124px

.component-10-1.component-10-1-10 .fire
  margin-right: 83.04px

.component-10-1.component-10-1-11
  width: 837px

.component-10-1.component-10-1-11 .fire
  margin-right: 34.0px

.component-10-1.component-10-1-12
  padding: 95px 44px
  width: 636px

.component-10-1.component-10-1-12 .fire
  margin-right: 54.62px

.component-10-1.component-10-1-12 .molding
  margin-left: 55px

.component-10-1.component-10-1-13
  padding: 107px 56.7px
  width: 545px

.component-10-1.component-10-1-13 .fire
  margin-right: 26.33px
  margin-top: unset

.component-10-1.component-10-1-13 .molding
  margin-left: 0.34px
  margin-top: 100px

.component-10-1.component-10-1-13 .molders-play-an-impo
  align-self: flex-end
  margin-top: 66px
  min-height: 146px
  min-width: 431px
</style>
