<template>
  <div :class="[`component-11-1 border-1px-dove-gray`, className || ``]">
    <img
      class="quad"
      src="https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/quad@1x.png"
    />
    <div class="melting montserrat-semi-bold-white-70px">Melting</div>
    <div class="melting-allows-you-t montserrat-normal-white-20px" v-html="meltingAllowsYouT"></div>
    <component42 :melt="component42Props.melt" :className="component42Props.className" />
  </div>
</template>

<script>
import Component42 from "./Component42";
export default {
  name: "Component111",
  components: {
    Component42,
  },
  props: ["meltingAllowsYouT", "className", "component42Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.component-11-1
  align-items: flex-start
  background-color: $roman-coffee
  border-radius: 61px
  display: flex
  flex-direction: column
  left: 0
  min-height: 802px
  padding: 95px 61px
  position: absolute
  top: 119px
  width: 828px

.quad
  align-self: flex-end
  height: 75px
  margin-right: 47.0px
  margin-top: 12px
  object-fit: cover
  width: 75px

.melting
  letter-spacing: 0
  line-height: 70px
  margin-top: 112px
  min-height: 88px
  white-space: nowrap

.melting-allows-you-t
  letter-spacing: 0
  line-height: 20px
  margin-top: 76px
  min-height: 122px
  white-space: nowrap

.component-11-1.component-11-1-1,
.component-11-1.component-11-1-6
  width: 681px

.component-11-1.component-11-1-2,
.component-11-1.component-11-1-7
  padding: 107.5px 0
  width: 553px

.component-11-1.component-11-1-2 .quad,
.component-11-1.component-11-1-7 .quad
  margin-right: 108.0px
  margin-top: unset

.component-11-1.component-11-1-2 .melting,
.component-11-1.component-11-1-7 .melting
  margin-left: 58.16px
  margin-top: 114px

.component-11-1.component-11-1-2 .melting-allows-you-t,
.component-11-1.component-11-1-7 .melting-allows-you-t
  align-self: center
  margin-top: 30px
  min-height: 170px
  min-width: 437px

.component-11-1.component-11-1-3,
.component-11-1.component-11-1-8
  left: 110px
  padding: 95px 52.7px
  top: 843px
  width: 713px

.component-11-1.component-11-1-3 .quad,
.component-11-1.component-11-1-8 .quad
  margin-right: 55.3px

.component-11-1.component-11-1-3 .melting-allows-you-t,
.component-11-1.component-11-1-8 .melting-allows-you-t
  margin-top: 56px
  min-height: 170px

.component-11-1.component-11-1-4,
.component-11-1.component-11-1-9
  left: 75px
  padding: 95px 44.8px
  top: 843px
  width: 534px

.component-11-1.component-11-1-4 .quad,
.component-11-1.component-11-1-9 .quad
  margin-right: 63.2px

.component-11-1.component-11-1-4 .melting,
.component-11-1.component-11-1-9 .melting
  margin-left: 7.91px

.component-11-1.component-11-1-4 .melting-allows-you-t,
.component-11-1.component-11-1-9 .melting-allows-you-t
  align-self: flex-end
  margin-top: 56px
  min-height: 170px
  min-width: 437px

.component-11-1.component-11-1-10
  top: 111px
  width: 1106px

.component-11-1.component-11-1-11
  top: 111px
  width: 837px

.component-11-1.component-11-1-12
  padding: 95px 47.0px
  top: 111px
  width: 636px

.component-11-1.component-11-1-12 .quad
  margin-right: 61.0px

.component-11-1.component-11-1-12 .melting
  margin-left: 14.0px

.component-11-1.component-11-1-12 .melting-allows-you-t
  align-self: flex-end
  min-width: 528px

.component-11-1.component-11-1-13
  padding: 95px 38.7px
  top: 106px
  width: 545px

.component-11-1.component-11-1-13 .quad
  margin-right: 69.34px

.component-11-1.component-11-1-13 .melting
  margin-left: 22.34px

.component-11-1.component-11-1-13 .melting-allows-you-t
  align-self: flex-end
  margin-top: 66px
  min-height: 146px
  min-width: 445px
</style>
