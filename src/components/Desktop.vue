<template>
  <div class="container-center-horizontal">
    <div class="desktop screen">
      <div class="flex-row">
        <div class="overlap-group7" :style="{ 'background-image': 'url(' + overlapGroup7 + ')' }">
          <img class="chocolate-bar_1f36b" :src="chocolateBar_1F36B" />
        </div>
        <div class="overlap-group">
          <div class="choco montserrat-black-white-32px">{{ choco }}</div>
          <div class="finance montserrat-black-white-14px">{{ finance }}</div>
        </div>
        <component161
          :component91Props="component161Props.component91Props"
          :component921Props="component161Props.component921Props"
          :component922Props="component161Props.component922Props"
          :component41Props="component161Props.component41Props"
        />
      </div>
      <div class="overlap-group11">
        <div class="overlap-group14">
          <div class="flex-col">
            <div class="choco-is-building-ba montserrat-normal-white-20px" v-html="chocoIsBuildingBa"></div>
            <component173
              :component411Props="component173Props.component411Props"
              :component412Props="component173Props.component412Props"
            />
            <img class="bar2" :src="bar21" />
          </div>
          <div class="overlap-group-container">
            <div class="overlap-group12">
              <h1 class="how-to-participate montserrat-semi-bold-white-70px">{{ howToParticipate }}</h1>
              <div class="overlap-group9">
                <component111
                  :meltingAllowsYouT="component111Props.meltingAllowsYouT"
                  :component42Props="component111Props.component42Props"
                />
                <img class="bar1" :src="bar11" />
              </div>
            </div>
            <div class="overlap-group8">
              <component101
                :fire="component101Props.fire"
                :moldersPlayAnImpo="component101Props.moldersPlayAnImpo"
                :component42Props="component101Props.component42Props"
              />
              <img class="bar1-1" :src="bar12" />
            </div>
          </div>
        </div>
        <img class="fallingchoco" :src="fallingchoco" />
        <div class="thetas-nativedecen montserrat-semi-bold-white-70px" v-html="thetaSNativeDecen"></div>
      </div>
      <div class="overlap-group10">
        <div class="rectangle-2"></div>
        <img class="bar1-2" :src="bar13" /><img class="bar2-1" :src="bar22" /><component231
          :component121Props="component231Props.component121Props"
          :component131Props="component231Props.component131Props"
          :component141Props="component231Props.component141Props"
          :component157Props="component231Props.component157Props"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Component161 from "./Component161";
import Component173 from "./Component173";
import Component111 from "./Component111";
import Component101 from "./Component101";
import Component231 from "./Component231";
export default {
  name: "Desktop",
  components: {
    Component161,
    Component173,
    Component111,
    Component101,
    Component231,
  },
  props: [
    "overlapGroup7",
    "chocolateBar_1F36B",
    "choco",
    "finance",
    "chocoIsBuildingBa",
    "bar21",
    "howToParticipate",
    "bar11",
    "bar12",
    "fallingchoco",
    "thetaSNativeDecen",
    "bar13",
    "bar22",
    "component161Props",
    "component173Props",
    "component111Props",
    "component101Props",
    "component231Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.desktop
  align-items: center
  background-color: $cocoa-brown
  display: flex
  flex-direction: column
  height: 2490px
  overflow: hidden
  width: 1900px

.flex-row
  align-items: flex-end
  display: flex
  height: 69px
  margin-left: 5.43px
  margin-top: 59px
  min-width: 1737px
  position: relative

.overlap-group7
  align-items: flex-start
  background-position: 50% 50%
  background-size: cover
  display: flex
  margin-bottom: 0
  min-width: 60px

.chocolate-bar_1f36b
  height: 60px
  object-fit: cover
  width: 60px

.overlap-group
  height: 59px
  margin-bottom: -3.0px
  margin-left: 12px
  position: relative
  width: 157px

.choco
  left: 0
  letter-spacing: 0
  line-height: 32px
  position: absolute
  top: 0
  white-space: nowrap

.finance
  left: 87px
  letter-spacing: 0
  line-height: 14px
  position: absolute
  top: 39px
  white-space: nowrap

.overlap-group11
  height: 1787px
  margin-right: 0
  margin-top: 28px
  position: relative
  width: 1900px

.overlap-group14
  height: 1404px
  left: 0
  position: absolute
  top: 383px
  width: 1900px

.flex-col
  align-items: flex-start
  display: flex
  flex-direction: column
  left: 84px
  min-height: 488px
  position: absolute
  top: 0
  width: 485px

.choco-is-building-ba
  letter-spacing: 0
  line-height: 20px
  margin-left: 0.26px
  min-height: 74px
  white-space: nowrap

.bar2
  align-self: center
  height: 136px
  margin-right: 127.74px
  margin-top: 144px
  object-fit: cover
  width: 127px

.overlap-group-container
  height: 962px
  left: 0
  position: absolute
  top: 442px
  width: 1900px

.overlap-group12
  height: 921px
  left: 599px
  position: absolute
  top: 0
  width: 1301px

.how-to-participate
  left: 0
  letter-spacing: 0
  line-height: 70px
  position: absolute
  top: 17px
  white-space: nowrap

.overlap-group9
  height: 921px
  left: 389px
  position: absolute
  top: 0
  width: 912px

.bar1
  height: 264px
  left: 647px
  object-fit: cover
  position: absolute
  top: 0
  width: 265px

.overlap-group8
  height: 843px
  left: 0
  position: absolute
  top: 119px
  width: 912px

.bar1-1
  height: 194px
  left: 0
  object-fit: cover
  position: absolute
  top: 649px
  width: 181px

.fallingchoco
  height: 748px
  left: 1023px
  object-fit: cover
  position: absolute
  top: 0
  width: 697px

.thetas-nativedecen
  left: 84px
  letter-spacing: 0
  line-height: 70px
  position: absolute
  top: 70px
  white-space: nowrap

.overlap-group10
  height: 894px
  margin-top: 81px
  position: relative
  width: 1900px

.rectangle-2
  background-color: $oil
  height: 855px
  left: 0
  position: absolute
  top: 39px
  width: 1900px

.bar1-2
  height: 212px
  left: 1587px
  object-fit: cover
  position: absolute
  top: 208px
  width: 222px

.bar2-1
  height: 154px
  left: 1351px
  object-fit: cover
  position: absolute
  top: 0
  width: 161px
</style>
