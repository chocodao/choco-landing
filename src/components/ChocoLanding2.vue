<template>
  <div class="container-center-horizontal">
    <div class="choco-landing-2 screen">
      <div class="flex-row-8">
        <div class="overlap-group12-3" :style="{ 'background-image': 'url(' + overlapGroup12 + ')' }">
          <img class="chocolate-bar_1f36b-21" :src="chocolateBar_1F36B" />
        </div>
        <div class="overlap-group-32">
          <div class="choco-21 montserrat-black-white-32px">{{ choco }}</div>
          <div class="finance-21 montserrat-black-white-14px">{{ finance }}</div>
        </div>
        <component161
          :className="component161Props.className"
          :component91Props="component161Props.component91Props"
          :component921Props="component161Props.component921Props"
          :component922Props="component161Props.component922Props"
          :component41Props="component161Props.component41Props"
        />
      </div>
      <div class="overlap-group13-1">
        <component173
          :className="component173Props.className"
          :component411Props="component173Props.component411Props"
          :component412Props="component173Props.component412Props"
        />
        <div class="overlap-group8-8">
          <img class="fallingchoco-5" :src="fallingchoco" />
          <div class="thetas-nativedecen-8 montserrat-semi-bold-white-70px" v-html="thetaSNativeDecen"></div>
        </div>
        <div class="choco-is-building-ba-8 montserrat-normal-white-20px" v-html="chocoIsBuildingBa"></div>
      </div>
      <div class="overlap-group-container-8">
        <div class="overlap-group-container-9">
          <div class="overlap-group10-5">
            <div class="how-to-participate-8 montserrat-semi-bold-white-70px">{{ howToParticipate }}</div>
            <img class="bar2-16" :src="bar21" />
          </div>
          <div class="overlap-group9-6">
            <component111
              :meltingAllowsYouT="component111Props.meltingAllowsYouT"
              :className="component111Props.className"
              :component42Props="component111Props.component42Props"
            />
            <img class="bar1-24" :src="bar11" />
          </div>
        </div>
        <div class="overlap-group11-5">
          <component101
            :fire="component101Props.fire"
            :moldersPlayAnImpo="component101Props.moldersPlayAnImpo"
            :className="component101Props.className"
            :component42Props="component101Props.component42Props"
          />
          <img class="bar1-25" :src="bar12" />
        </div>
      </div>
      <div class="overlap-group7-9">
        <div class="rectangle-2-5"></div>
        <img class="bar1-26" :src="bar13" /><img class="bar2-17" :src="bar22" /><component211
          :component121Props="component211Props.component121Props"
          :component131Props="component211Props.component131Props"
          :component141Props="component211Props.component141Props"
          :component157Props="component211Props.component157Props"
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
import Component211 from "./Component211";
export default {
  name: "ChocoLanding2",
  components: {
    Component161,
    Component173,
    Component111,
    Component101,
    Component211,
  },
  props: [
    "overlapGroup12",
    "chocolateBar_1F36B",
    "choco",
    "finance",
    "fallingchoco",
    "thetaSNativeDecen",
    "chocoIsBuildingBa",
    "howToParticipate",
    "bar21",
    "bar11",
    "bar12",
    "bar13",
    "bar22",
    "component161Props",
    "component173Props",
    "component111Props",
    "component101Props",
    "component211Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.choco-landing-2
  align-items: center
  background-color: $cocoa-brown
  display: flex
  flex-direction: column
  height: 2490px
  overflow: hidden
  width: 1300px

.flex-row-8
  align-items: flex-end
  display: flex
  height: 69px
  margin-left: 5.43px
  margin-top: 59px
  min-width: 1137px
  position: relative

.overlap-group12-3
  align-items: flex-start
  background-position: 50% 50%
  background-size: cover
  display: flex
  margin-bottom: 0
  min-width: 60px

.chocolate-bar_1f36b-21
  height: 60px
  object-fit: cover
  width: 60px

.overlap-group-32
  height: 59px
  margin-bottom: -3.0px
  margin-left: 12px
  position: relative
  width: 157px

.choco-21
  left: 0
  letter-spacing: 0
  line-height: 32px
  position: absolute
  top: 0
  white-space: nowrap

.finance-21
  left: 87px
  letter-spacing: 0
  line-height: 14px
  position: absolute
  top: 39px
  white-space: nowrap

.overlap-group13-1
  height: 563px
  margin-left: 7.07px
  margin-top: 55px
  position: relative
  width: 1140px

.overlap-group8-8
  height: 554px
  left: 0
  position: absolute
  top: 0
  width: 1139px

.fallingchoco-5
  height: 554px
  left: 624px
  object-fit: cover
  position: absolute
  top: 0
  width: 515px

.thetas-nativedecen-8
  left: 0
  letter-spacing: 0
  line-height: 70px
  position: absolute
  top: 43px
  white-space: nowrap

.choco-is-building-ba-8
  left: 0
  letter-spacing: 0
  line-height: 20px
  position: absolute
  top: 356px
  white-space: nowrap

.overlap-group-container-8
  height: 1053px
  margin-left: 0
  margin-top: 144px
  position: relative
  width: 1300px

.overlap-group-container-9
  height: 1011px
  left: 199px
  position: absolute
  top: 0
  width: 1101px

.overlap-group10-5
  height: 195px
  left: 0
  position: absolute
  top: 0
  width: 804px

.how-to-participate-8
  left: 100px
  letter-spacing: 0
  line-height: 70px
  position: absolute
  top: 107px
  white-space: nowrap

.bar2-16
  height: 136px
  left: 0
  object-fit: cover
  position: absolute
  top: 0
  width: 127px

.overlap-group9-6
  height: 921px
  left: 464px
  position: absolute
  top: 90px
  width: 637px

.bar1-24
  height: 264px
  left: 372px
  object-fit: cover
  position: absolute
  top: 0
  width: 265px

.overlap-group11-5
  height: 843px
  left: 0
  position: absolute
  top: 209px
  width: 638px

.bar1-25
  height: 194px
  left: 0
  object-fit: cover
  position: absolute
  top: 649px
  width: 181px

.overlap-group7-9
  height: 886px
  margin-top: 89px
  position: relative
  width: 1300px

.rectangle-2-5
  background-color: $oil
  height: 855px
  left: 0
  position: absolute
  top: 31px
  width: 1300px

.bar1-26
  height: 212px
  left: 1035px
  object-fit: cover
  position: absolute
  top: 192px
  width: 222px

.bar2-17
  height: 154px
  left: 954px
  object-fit: cover
  position: absolute
  top: 0
  width: 161px
</style>
