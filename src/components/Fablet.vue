<template>
  <div class="container-center-horizontal">
    <div class="fablet screen">
      <component161
        :className="component161Props.className"
        :component91Props="component161Props.component91Props"
        :component921Props="component161Props.component921Props"
        :component922Props="component161Props.component922Props"
        :component41Props="component161Props.component41Props"
      />
      <component183 :className="component183Props.className" />
      <div class="thetas-nativedecen-4 montserrat-semi-bold-white-70px" v-html="thetaSNativeDecen"></div>
      <div class="choco-is-building-ba-4 montserrat-normal-white-20px" v-html="chocoIsBuildingBa"></div>
      <div class="overlap-group7-4">
        <component173
          :className="component173Props.className"
          :component411Props="component173Props.component411Props"
          :component412Props="component173Props.component412Props"
        />
        <img class="bar2-8" :src="bar21" />
      </div>
      <div class="how-to-participate-4 montserrat-semi-bold-white-63px">{{ howToParticipate }}</div>
      <div class="overlap-group8-4">
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
        <img class="bar1-12" :src="bar11" /><img class="bar1-13" :src="bar12" /><img class="bar1-14" :src="bar13" />
      </div>
      <div class="overlap-group6" :style="{ 'background-image': 'url(' + overlapGroup6 + ')' }">
        <img class="bar2-9" :src="bar22" /><component193
          :component121Props="component193Props.component121Props"
          :component141Props="component193Props.component141Props"
          :component131Props="component193Props.component131Props"
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
import Component193 from "./Component193";
export default {
  name: "Fablet",
  components: {
    Component161,
    Component183,
    Component173,
    Component111,
    Component101,
    Component193,
  },
  props: [
    "thetaSNativeDecen",
    "chocoIsBuildingBa",
    "bar21",
    "howToParticipate",
    "bar11",
    "bar12",
    "bar13",
    "overlapGroup6",
    "bar22",
    "component161Props",
    "component183Props",
    "component173Props",
    "component111Props",
    "component101Props",
    "component193Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.fablet
  align-items: center
  background-color: $cocoa-brown
  display: flex
  flex-direction: column
  height: 3211px
  overflow: hidden
  position: relative
  width: 749px

.thetas-nativedecen-4
  letter-spacing: 0
  line-height: 70px
  margin-left: 2.0px
  margin-top: 82px
  min-height: 260px
  min-width: 656px
  text-align: center
  white-space: nowrap

.choco-is-building-ba-4
  letter-spacing: 0
  line-height: 20px
  margin-left: 2.0px
  margin-top: 42px
  min-height: 74px
  min-width: 484px
  text-align: center
  white-space: nowrap

.overlap-group7-4
  height: 195px
  margin-right: 83.16px
  margin-top: 54px
  position: relative
  width: 473px

.bar2-8
  height: 136px
  left: 0
  object-fit: cover
  position: absolute
  top: 59px
  width: 127px

.how-to-participate-4
  letter-spacing: 0
  line-height: 63px
  margin-left: 21.0px
  margin-top: 7px
  min-height: 79px
  min-width: 634px
  white-space: nowrap

.overlap-group8-4
  align-self: flex-end
  height: 1645px
  margin-right: 0
  margin-top: 25px
  position: relative
  width: 721px

.bar1-12
  height: 194px
  left: 0
  object-fit: cover
  position: absolute
  top: 137px
  width: 181px

.bar1-13
  height: 212px
  left: 499px
  object-fit: cover
  position: absolute
  top: 1097px
  width: 222px

.bar1-14
  height: 150px
  left: 68px
  object-fit: cover
  position: absolute
  top: 777px
  width: 158px

.overlap-group6
  background-position: 50% 50%
  background-size: cover
  height: 427px
  margin-right: 0
  margin-top: 39px
  position: relative
  width: 749px

.bar2-9
  height: 154px
  left: 442px
  object-fit: cover
  position: absolute
  top: 240px
  width: 161px
</style>
