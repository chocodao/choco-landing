<template>
  <div class="container-center-horizontal">
    <div class="choco-landing-5 screen">
      <component161
        :className="component161Props.className"
        :component91Props="component161Props.component91Props"
        :component921Props="component161Props.component921Props"
        :component922Props="component161Props.component922Props"
        :component41Props="component161Props.component41Props"
      />
      <component183 />
      <div class="thetas-nativedecen-9 montserrat-semi-bold-white-70px" v-html="thetaSNativeDecen"></div>
      <div class="choco-is-building-ba-9 montserrat-normal-white-20px" v-html="chocoIsBuildingBa"></div>
      <div class="flex-row-9">
        <img class="bar2-18" :src="bar21" /><component173
          :className="component173Props.className"
          :component411Props="component173Props.component411Props"
          :component412Props="component173Props.component412Props"
        />
      </div>
      <div class="how-to-participate-9 montserrat-semi-bold-white-63px">{{ howToParticipate }}</div>
      <div class="overlap-group7-10">
        <component111
          :meltingAllowsYouT="component111Props.meltingAllowsYouT"
          :className="component111Props.className"
          :component42Props="component111Props.component42Props"
        />
        <component101
          :fire="component101Props.fire"
          :moldersPlayAnImpo="component101Props.moldersPlayAnImpo"
          :className="component101Props.className"
          :component42Props="component101Props.component42Props"
        />
        <img class="bar1-27" :src="bar11" /><img class="bar1-28" :src="bar12" /><img class="bar1-29" :src="bar13" />
      </div>
      <div class="overlap-group8-9" :style="{ 'background-image': 'url(' + overlapGroup8 + ')' }">
        <img class="bar2-19" :src="bar22" /><component201
          :component121Props="component201Props.component121Props"
          :component141Props="component201Props.component141Props"
          :component131Props="component201Props.component131Props"
          :component157Props="component201Props.component157Props"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Component161 from "./Component161";
import Component183 from "./Component183";
import Component173 from "./Component173";
import Component111 from "./Component111";
import Component101 from "./Component101";
import Component201 from "./Component201";
export default {
  name: "ChocoLanding5",
  components: {
    Component161,
    Component183,
    Component173,
    Component111,
    Component101,
    Component201,
  },
  props: [
    "thetaSNativeDecen",
    "chocoIsBuildingBa",
    "bar21",
    "howToParticipate",
    "bar11",
    "bar12",
    "bar13",
    "overlapGroup8",
    "bar22",
    "component161Props",
    "component173Props",
    "component111Props",
    "component101Props",
    "component201Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.choco-landing-5
  align-items: center
  background-color: $cocoa-brown
  display: flex
  flex-direction: column
  height: 3211px
  overflow: hidden
  position: relative
  width: 999px

.thetas-nativedecen-9
  letter-spacing: 0
  line-height: 70px
  margin-left: 2.0px
  margin-top: 82px
  min-height: 260px
  min-width: 656px
  text-align: center
  white-space: nowrap

.choco-is-building-ba-9
  letter-spacing: 0
  line-height: 20px
  margin-left: 2.0px
  margin-top: 42px
  min-height: 74px
  min-width: 484px
  text-align: center
  white-space: nowrap

.flex-row-9
  align-items: flex-start
  align-self: flex-start
  display: flex
  height: 195px
  margin-left: 96.37px
  margin-top: 54px
  min-width: 598px
  position: relative

.bar2-18
  align-self: flex-end
  height: 136px
  object-fit: cover
  width: 127px

.how-to-participate-9
  align-self: flex-start
  letter-spacing: 0
  line-height: 63px
  margin-left: 68px
  margin-top: 7px
  min-height: 79px
  white-space: nowrap

.overlap-group7-10
  align-self: flex-end
  height: 1645px
  margin-right: 0
  margin-top: 25px
  position: relative
  width: 971px

.bar1-27
  height: 194px
  left: 0
  object-fit: cover
  position: absolute
  top: 137px
  width: 181px

.bar1-28
  height: 212px
  left: 749px
  object-fit: cover
  position: absolute
  top: 1097px
  width: 222px

.bar1-29
  height: 150px
  left: 31px
  object-fit: cover
  position: absolute
  top: 785px
  width: 158px

.overlap-group8-9
  background-position: 50% 50%
  background-size: cover
  height: 427px
  margin-right: 0
  margin-top: 39px
  position: relative
  width: 999px

.bar2-19
  height: 154px
  left: 630px
  object-fit: cover
  position: absolute
  top: 240px
  width: 161px
</style>
