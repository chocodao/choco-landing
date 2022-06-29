<template>
  <div class="container-center-horizontal">
    <div class="iphone-mini screen">
      <component1612
        :component812Props="component1612Props.component812Props"
        :component912Props="component1612Props.component912Props"
        :component9221Props="component1612Props.component9221Props"
        :component9222Props="component1612Props.component9222Props"
        :component412Props="component1612Props.component412Props"
      />
      <component1832
        :chocolateBar_1F36B="component1832Props.chocolateBar_1F36B"
        :choco="component1832Props.choco"
        :finance="component1832Props.finance"
      />
      <div class="thetas-nativedecen-5 montserrat-semi-bold-white-33px" v-html="thetaSNativeDecen"></div>
      <p class="choco-is-building-ba-5 montserrat-normal-white-9px" v-html="chocoIsBuildingBa"></p>
      <div class="overlap-group8-5">
        <component1732
          :component4121Props="component1732Props.component4121Props"
          :component4122Props="component1732Props.component4122Props"
        />
        <img class="bar2-10" :src="bar21" />
      </div>
      <div class="how-to-participate-5">{{ howToParticipate }}</div>
      <div class="overlap-group6-1">
        <component1112
          :quad="component1112Props.quad"
          :melting="component1112Props.melting"
          :meltingAllowsYouT="component1112Props.meltingAllowsYouT"
          :component422Props="component1112Props.component422Props"
        />
        <component1012
          :fire="component1012Props.fire"
          :molding="component1012Props.molding"
          :moldersPlayAnImpo="component1012Props.moldersPlayAnImpo"
          :component422Props="component1012Props.component422Props"
        />
        <img class="bar1-15" :src="bar11" /><img class="bar1-16" :src="bar12" /><img class="bar1-17" :src="bar13" />
      </div>
      <div class="overlap-group7-5" :style="{ 'background-image': 'url(' + overlapGroup7 + ')' }">
        <img class="bar2-11" :src="bar22" /><component1932
          :component1212Props="component1932Props.component1212Props"
          :component1412Props="component1932Props.component1412Props"
          :component1312Props="component1932Props.component1312Props"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Component1612 from "./Component1612";
import Component1832 from "./Component1832";
import Component1732 from "./Component1732";
import Component1112 from "./Component1112";
import Component1012 from "./Component1012";
import Component1932 from "./Component1932";
export default {
  name: "IPhoneMini",
  components: {
    Component1612,
    Component1832,
    Component1732,
    Component1112,
    Component1012,
    Component1932,
  },
  props: [
    "thetaSNativeDecen",
    "chocoIsBuildingBa",
    "bar21",
    "howToParticipate",
    "bar11",
    "bar12",
    "bar13",
    "overlapGroup7",
    "bar22",
    "component1612Props",
    "component1832Props",
    "component1732Props",
    "component1112Props",
    "component1012Props",
    "component1932Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.iphone-mini
  align-items: center
  background-color: $cocoa-brown
  display: flex
  flex-direction: column
  height: 1607px
  overflow: hidden
  position: relative
  width: 375px

.thetas-nativedecen-5
  letter-spacing: 0
  line-height: 33px
  margin-right: 18.09px
  margin-top: 41px
  min-height: 122px
  min-width: 310px
  text-align: center
  white-space: nowrap

.choco-is-building-ba-5
  letter-spacing: 0
  line-height: 9px
  margin-right: 23.16px
  margin-top: 29px
  min-height: 35px
  min-width: 220px
  text-align: center
  white-space: nowrap

.overlap-group8-5
  height: 97px
  margin-right: 46.23px
  margin-top: 28px
  position: relative
  width: 234px

.bar2-10
  height: 67px
  left: 0
  object-fit: cover
  position: absolute
  top: 29px
  width: 63px

.how-to-participate-5
  color: $white
  font-family: $font-family-montserrat
  font-size: $font-size-l
  font-weight: 600
  letter-spacing: 0
  line-height: 30px
  margin-right: 4.85px
  margin-top: 3px
  min-height: 39px
  min-width: 303px
  white-space: nowrap

.overlap-group6-1
  height: 812px
  margin-left: 8.84px
  margin-top: 12px
  position: relative
  width: 356px

.bar1-15
  height: 96px
  left: 0
  object-fit: cover
  position: absolute
  top: 68px
  width: 89px

.bar1-16
  height: 104px
  left: 246px
  object-fit: cover
  position: absolute
  top: 542px
  width: 110px

.bar1-17
  height: 74px
  left: 34px
  object-fit: cover
  position: absolute
  top: 384px
  width: 78px

.overlap-group7-5
  background-position: 50% 50%
  background-size: cover
  height: 211px
  margin-top: 19px
  position: relative
  width: 375px

.bar2-11
  height: 76px
  left: 218px
  object-fit: cover
  position: absolute
  top: 119px
  width: 79px
</style>
