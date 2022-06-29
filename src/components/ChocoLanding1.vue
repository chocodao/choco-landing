<template>
  <div class="container-center-horizontal">
    <div class="choco-landing-1 screen">
      <div class="flex-row-6">
        <div class="overlap-group7-7" :style="{ 'background-image': 'url(' + overlapGroup7 + ')' }">
          <img class="chocolate-bar_1f36b-20" :src="chocolateBar_1F36B" />
        </div>
        <div class="overlap-group-31">
          <div class="choco-20 montserrat-black-white-32px">{{ choco }}</div>
          <div class="finance-20 montserrat-black-white-14px">{{ finance }}</div>
        </div>
        <component161
          :className="component161Props.className"
          :component91Props="component161Props.component91Props"
          :component921Props="component161Props.component921Props"
          :component922Props="component161Props.component922Props"
          :component41Props="component161Props.component41Props"
        />
      </div>
      <div class="flex-row-7">
        <div class="flex-col-21">
          <div class="thetas-nativedecen-7 montserrat-semi-bold-white-70px" v-html="thetaSNativeDecen"></div>
          <div class="choco-is-building-ba-7 montserrat-normal-white-20px" v-html="chocoIsBuildingBa"></div>
          <component173
            :component411Props="component173Props.component411Props"
            :component412Props="component173Props.component412Props"
          />
        </div>
        <img class="fallingchoco-4" :src="fallingchoco" />
      </div>
      <div class="overlap-group-container-6">
        <div class="overlap-group11-4">
          <div class="overlap-group-container-7">
            <div class="overlap-group7-8">
              <div class="how-to-participate-7 montserrat-semi-bold-white-70px">{{ howToParticipate }}</div>
              <div class="overlap-group9-5">
                <component111
                  :meltingAllowsYouT="component111Props.meltingAllowsYouT"
                  :className="component111Props.className"
                  :component42Props="component111Props.component42Props"
                />
                <img class="bar1-21" :src="bar11" />
              </div>
            </div>
            <div class="overlap-group10-4">
              <component101
                :fire="component101Props.fire"
                :moldersPlayAnImpo="component101Props.moldersPlayAnImpo"
                :className="component101Props.className"
                :component42Props="component101Props.component42Props"
              />
              <img class="bar1-22" :src="bar12" />
            </div>
          </div>
          <img class="bar2-14" :src="bar21" />
        </div>
        <div class="overlap-group8-7">
          <div class="rectangle-2-4"></div>
          <img class="bar1-23" :src="bar13" /><img class="bar2-15" :src="bar22" /><component221
            :component121Props="component221Props.component121Props"
            :component131Props="component221Props.component131Props"
            :component141Props="component221Props.component141Props"
            :component157Props="component221Props.component157Props"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Component161 from "./Component161";
import Component173 from "./Component173";
import Component111 from "./Component111";
import Component101 from "./Component101";
import Component221 from "./Component221";
export default {
  name: "ChocoLanding1",
  components: {
    Component161,
    Component173,
    Component111,
    Component101,
    Component221,
  },
  props: [
    "overlapGroup7",
    "chocolateBar_1F36B",
    "choco",
    "finance",
    "thetaSNativeDecen",
    "chocoIsBuildingBa",
    "fallingchoco",
    "howToParticipate",
    "bar11",
    "bar12",
    "bar21",
    "bar13",
    "bar22",
    "component161Props",
    "component173Props",
    "component111Props",
    "component101Props",
    "component221Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.choco-landing-1
  align-items: center
  background-color: $cocoa-brown
  display: flex
  flex-direction: column
  height: 2490px
  overflow: hidden
  width: 1600px

.flex-row-6
  align-items: flex-end
  display: flex
  height: 63px
  margin-left: 5.43px
  margin-top: 65px
  min-width: 1437px
  position: relative

.overlap-group7-7
  align-items: flex-start
  background-position: 50% 50%
  background-size: cover
  display: flex
  margin-bottom: 0
  min-width: 60px

.chocolate-bar_1f36b-20
  height: 60px
  object-fit: cover
  width: 60px

.overlap-group-31
  height: 59px
  margin-bottom: -3.0px
  margin-left: 12px
  position: relative
  width: 157px

.choco-20
  left: 0
  letter-spacing: 0
  line-height: 32px
  position: absolute
  top: 0
  white-space: nowrap

.finance-20
  left: 87px
  letter-spacing: 0
  line-height: 14px
  position: absolute
  top: 39px
  white-space: nowrap

.flex-row-7
  align-items: center
  display: flex
  margin-right: 99.37px
  margin-top: 49px
  min-width: 1333px

.flex-col-21
  align-items: flex-start
  display: flex
  flex-direction: column
  margin-bottom: 63.19px
  min-height: 520px
  position: relative
  width: 656px

.thetas-nativedecen-7
  letter-spacing: 0
  line-height: 70px
  margin-left: 0.26px
  min-height: 260px
  white-space: nowrap

.choco-is-building-ba-7
  letter-spacing: 0
  line-height: 20px
  margin-left: 0.26px
  margin-top: 53px
  min-height: 74px
  white-space: nowrap

.fallingchoco-4
  height: 682px
  margin-left: 43px
  object-fit: cover
  width: 634px

.overlap-group-container-6
  align-items: center
  display: flex
  flex-direction: column
  margin-left: 9.0px
  margin-top: 32px
  min-height: 2028px
  width: 1609px

.overlap-group11-4
  height: 1053px
  margin-right: 9.0px
  position: relative
  width: 1600px

.overlap-group-container-7
  height: 962px
  left: 0
  position: absolute
  top: 90px
  width: 1600px

.overlap-group7-8
  height: 921px
  left: 449px
  position: absolute
  top: 0
  width: 1151px

.how-to-participate-7
  left: 0
  letter-spacing: 0
  line-height: 70px
  position: absolute
  top: 17px
  white-space: nowrap

.overlap-group9-5
  height: 921px
  left: 386px
  position: absolute
  top: 0
  width: 765px

.bar1-21
  height: 264px
  left: 500px
  object-fit: cover
  position: absolute
  top: 0
  width: 265px

.overlap-group10-4
  height: 843px
  left: 0
  position: absolute
  top: 119px
  width: 766px

.bar1-22
  height: 194px
  left: 0
  object-fit: cover
  position: absolute
  top: 649px
  width: 181px

.bar2-14
  height: 136px
  left: 199px
  object-fit: cover
  position: absolute
  top: 0
  width: 127px

.overlap-group8-7
  height: 894px
  margin-left: 9.0px
  margin-top: 81px
  position: relative
  width: 1600px

.rectangle-2-4
  background-color: $oil
  height: 855px
  left: 0
  position: absolute
  top: 39px
  width: 1600px

.bar1-23
  height: 212px
  left: 1278px
  object-fit: cover
  position: absolute
  top: 208px
  width: 222px

.bar2-15
  height: 154px
  left: 1109px
  object-fit: cover
  position: absolute
  top: 0
  width: 161px
</style>
