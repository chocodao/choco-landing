<template>
  <div class="container-center-horizontal">
    <div class="choco-landing-l screen">
      <div class="flex-row-11">
        <div class="overlap-group-34" :style="{ 'background-image': 'url(' + overlapGroup6 + ')' }">
          <img class="chocolate-bar_1f36b-23" :src="chocolateBar_1F36B1" />
        </div>
        <div class="overlap-group-35">
          <div class="choco-23 montserrat-black-white-32px">{{ choco1 }}</div>
          <div class="finance-24 montserrat-black-white-14px">{{ finance1 }}</div>
        </div>
        <component81 :className="component81Props.className" />
        <component91 :className="component91Props.className" />
        <component92 :governance="component921Props.governance" :className="component921Props.className" />
        <component92 :governance="component922Props.governance" :className="component922Props.className" />
        <component41 :enterApp="component411Props.enterApp" :className="component411Props.className" />
      </div>
      <div class="overlap-group-container-11">
        <div class="overlap-group15">
          <div class="overlap-group3-2">
            <div class="flex-col-24">
              <div class="choco-is-building-ba-12 montserrat-normal-white-20px" v-html="chocoIsBuildingBa"></div>
              <div class="component-container-58">
                <component41 :enterApp="component412Props.enterApp" :className="component412Props.className" />
                <component41 :enterApp="component413Props.enterApp" :className="component413Props.className" />
              </div>
              <img class="bar2-24" :src="bar21" />
            </div>
            <div class="overlap-group-container-12">
              <div class="overlap-group-36">
                <div class="how-to-participate-12 montserrat-semi-bold-white-70px">{{ howToParticipate }}</div>
                <div class="overlap-group8-12">
                  <component111
                    :meltingAllowsYouT="component111Props.meltingAllowsYouT"
                    :className="component111Props.className"
                    :component42Props="component111Props.component42Props"
                  />
                  <img class="bar1-36" :src="bar11" />
                </div>
              </div>
              <div class="overlap-group7-13">
                <component101
                  :fire="component101Props.fire"
                  :moldersPlayAnImpo="component101Props.moldersPlayAnImpo"
                  :className="component101Props.className"
                  :component42Props="component101Props.component42Props"
                />
                <img class="bar1-37" :src="bar12" />
              </div>
            </div>
          </div>
          <img class="fallingchoco-7" :src="fallingchoco" />
          <div class="thetas-nativedecen-12 montserrat-semi-bold-white-70px" v-html="thetaSNativeDecen"></div>
        </div>
        <div class="overlap-group5">
          <div class="flex-row-12">
            <div class="flex-col-25">
              <div class="overlap-group-34" :style="{ 'background-image': 'url(' + overlapGroup11 + ')' }">
                <img class="chocolate-bar_1f36b-23" :src="chocolateBar_1F36B2" />
              </div>
              <a href="https://twitter.com/chocofinance">
                <div class="x622369b6a395099f1a779d22_1-12"><img class="path-3-6" :src="path3" /></div></a
              ><a href="https://t.me/chocofinance">
                <div class="x622369b6bf2cca49909d6eb5_4-12"><img class="path-6-5" :src="path6" /></div
              ></a>
            </div>
            <div class="flex-col-26">
              <div class="overlap-group1-13">
                <div class="choco-23 montserrat-black-white-32px">{{ choco2 }}</div>
                <div class="finance-25 montserrat-black-white-14px">{{ finance2 }}</div>
              </div>
              <div class="b-container-4">
                <x622369b64625dd72cd6e31a12 />
                <a href="https://github.com/chocodao">
                  <div class="x622369b636f18be6eacf49c4_3-8"><img class="path-5-11" :src="path5" /></div
                ></a>
              </div>
              <x622369b7e403e7ddc4ce09396 />
            </div>
            <div class="flex-col-27">
              <div class="products-12 montserrat-normal-white-30px">{{ products }}</div>
              <div class="component-container-59">
                <component151 :children="component1511Props.children" />
                <component151 :children="component1512Props.children" :className="component1512Props.className" />
              </div>
              <div class="component-container-60">
                <component152 :children="component152Props.children" />
                <component151 :children="component1513Props.children" :className="component1513Props.className" />
              </div>
            </div>
            <div class="flex-col-28">
              <div class="learn-24 montserrat-normal-white-30px">{{ learn }}</div>
              <div class="component-container-61">
                <component171 :children="component171Props.children" />
                <component172 />
              </div>
              <div class="component-container-62">
                <component181 :children="component181Props.children" />
                <component18122 :children="component18122Props.children" />
              </div>
            </div>
          </div>
          <div class="flex-col-29">
            <div class="flex-row-13">
              <div class="contact-us-9 montserrat-normal-white-30px">{{ contactUs }}</div>
              <img class="bar2-25" :src="bar22" />
            </div>
            <div class="component-container-63">
              <component191 :children="component191Props.children" />
              <component1912 :children="component1912Props.children" />
            </div>
          </div>
          <img class="bar1-38" :src="bar13" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Component81 from "./Component81";
import Component91 from "./Component91";
import Component92 from "./Component92";
import Component41 from "./Component41";
import Component111 from "./Component111";
import Component101 from "./Component101";
import X622369b64625dd72cd6e31a12 from "./X622369b64625dd72cd6e31a12";
import X622369b7e403e7ddc4ce09396 from "./X622369b7e403e7ddc4ce09396";
import Component151 from "./Component151";
import Component152 from "./Component152";
import Component171 from "./Component171";
import Component172 from "./Component172";
import Component181 from "./Component181";
import Component18122 from "./Component18122";
import Component191 from "./Component191";
import Component1912 from "./Component1912";
export default {
  name: "ChocoLandingL",
  components: {
    Component81,
    Component91,
    Component92,
    Component41,
    Component111,
    Component101,
    X622369b64625dd72cd6e31a12,
    X622369b7e403e7ddc4ce09396,
    Component151,
    Component152,
    Component171,
    Component172,
    Component181,
    Component18122,
    Component191,
    Component1912,
  },
  props: [
    "overlapGroup6",
    "chocolateBar_1F36B1",
    "choco1",
    "finance1",
    "chocoIsBuildingBa",
    "bar21",
    "howToParticipate",
    "bar11",
    "bar12",
    "fallingchoco",
    "thetaSNativeDecen",
    "overlapGroup11",
    "chocolateBar_1F36B2",
    "path3",
    "path6",
    "choco2",
    "finance2",
    "path5",
    "products",
    "learn",
    "contactUs",
    "bar22",
    "bar13",
    "component81Props",
    "component91Props",
    "component921Props",
    "component922Props",
    "component411Props",
    "component412Props",
    "component413Props",
    "component111Props",
    "component101Props",
    "component1511Props",
    "component1512Props",
    "component152Props",
    "component1513Props",
    "component171Props",
    "component181Props",
    "component18122Props",
    "component191Props",
    "component1912Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.choco-landing-l
  align-items: flex-start
  background-color: $cocoa-brown
  display: flex
  flex-direction: column
  height: 2490px
  overflow: hidden
  width: 1920px

.flex-row-11
  align-items: flex-end
  align-self: center
  display: flex
  height: 69px
  margin-left: 5.43px
  margin-top: 59px
  min-width: 1757px
  position: relative

.overlap-group-34
  align-items: flex-start
  background-position: 50% 50%
  background-size: cover
  display: flex
  min-width: 60px

.chocolate-bar_1f36b-23
  height: 60px
  object-fit: cover
  width: 60px

.overlap-group-35
  height: 59px
  margin-bottom: -3.0px
  margin-left: 12px
  position: relative
  width: 157px

.choco-23
  left: 0
  letter-spacing: 0
  line-height: 32px
  position: absolute
  top: 0
  white-space: nowrap

.finance-24
  left: 87px
  letter-spacing: 0
  line-height: 14px
  position: absolute
  top: 39px
  white-space: nowrap

.overlap-group-container-11
  align-items: flex-start
  display: flex
  flex-direction: column
  margin-top: 28px
  min-height: 2688px
  width: 1947px

.overlap-group15
  height: 1787px
  position: relative
  width: 1947px

.overlap-group3-2
  height: 1404px
  left: 0
  position: absolute
  top: 383px
  width: 1947px

.flex-col-24
  align-items: flex-start
  display: flex
  flex-direction: column
  left: 84px
  min-height: 488px
  position: absolute
  top: 0
  width: 485px

.choco-is-building-ba-12
  letter-spacing: 0
  line-height: 20px
  margin-left: 0.26px
  min-height: 74px
  white-space: nowrap

.component-container-58
  align-items: flex-start
  display: flex
  height: 63px
  margin-top: 70px
  min-width: 390px
  position: relative

.bar2-24
  align-self: center
  height: 136px
  margin-right: 127.74px
  margin-top: 144px
  object-fit: cover
  width: 127px

.overlap-group-container-12
  height: 954px
  left: 0
  position: absolute
  top: 451px
  width: 1947px

.overlap-group-36
  height: 913px
  left: 609px
  position: absolute
  top: 0
  width: 1338px

.how-to-participate-12
  left: 0
  letter-spacing: 0
  line-height: 70px
  position: absolute
  top: 8px
  white-space: nowrap

.overlap-group8-12
  height: 913px
  left: 390px
  position: absolute
  top: 0
  width: 948px

.bar1-36
  height: 264px
  left: 683px
  object-fit: cover
  position: absolute
  top: 0
  width: 265px

.overlap-group7-13
  height: 843px
  left: 0
  position: absolute
  top: 111px
  width: 921px

.bar1-37
  height: 194px
  left: 0
  object-fit: cover
  position: absolute
  top: 649px
  width: 181px

.fallingchoco-7
  height: 756px
  left: 901px
  object-fit: cover
  position: absolute
  top: 0
  width: 704px

.thetas-nativedecen-12
  left: 84px
  letter-spacing: 0
  line-height: 70px
  position: absolute
  top: 70px
  white-space: nowrap

.overlap-group5
  align-items: flex-start
  background-color: $oil
  border-radius: 264px
  display: flex
  height: 855px
  margin-top: 46px
  min-width: 1920px
  padding: 35.6px 84px

.flex-row-12
  align-items: flex-start
  display: flex
  height: 249px
  margin-top: 123.93px
  min-width: 979px

.flex-col-25
  align-items: flex-start
  display: flex
  flex-direction: column
  min-height: 249px
  width: 60px

.x622369b6a395099f1a779d22_1-12
  align-items: flex-end
  background-color: $green-white
  border-radius: 25px
  cursor: pointer
  display: flex
  height: 50px
  margin-top: 63px
  min-width: 50px
  padding: 16px 15px
  transition: all 0.2s ease

.x622369b6a395099f1a779d22_1-12:hover,
.x622369b6bf2cca49909d6eb5_4-12:hover,
.x622369b636f18be6eacf49c4_3-8:hover
  transform: scale(1.1)

.path-3-6
  height: 16px
  object-fit: cover
  width: 20px

.x622369b6bf2cca49909d6eb5_4-12
  align-items: flex-end
  background-color: $green-white
  border-radius: 25px
  cursor: pointer
  display: flex
  height: 50px
  margin-top: 26px
  min-width: 50px
  padding: 15.0px 12.0px
  transition: all 0.2s ease

.path-6-5
  height: 19px
  object-fit: cover
  width: 24px

.flex-col-26
  align-items: flex-start
  align-self: flex-end
  display: flex
  flex-direction: column
  margin-left: 12px
  min-height: 246px
  position: relative
  width: 178px

.overlap-group1-13
  height: 60px
  position: relative
  width: 157px

.finance-25
  left: 87px
  letter-spacing: 0
  line-height: 14px
  position: absolute
  top: 40px
  white-space: nowrap

.b-container-4
  align-items: flex-start
  align-self: flex-end
  display: flex
  margin-top: 60px
  min-width: 150px
  position: relative

.x622369b636f18be6eacf49c4_3-8
  align-items: flex-start
  background-color: $green-white
  border-radius: 25px
  cursor: pointer
  display: flex
  height: 50px
  margin-left: 50px
  min-width: 50px
  padding: 13.0px 13px
  transition: all 0.2s ease

.path-5-11
  height: 23px
  object-fit: cover
  width: 24px

.flex-col-27
  align-items: flex-start
  display: flex
  flex-direction: column
  margin-left: 246px
  margin-top: 14.5px
  min-height: 174px
  width: 138px

.products-12
  letter-spacing: 0
  line-height: 30px
  margin-left: 0.45px
  min-height: 39px
  white-space: nowrap

.component-container-59
  height: 48px
  margin-left: 0.09px
  margin-top: 28px
  position: relative
  width: 104px

.component-container-60
  height: 48px
  margin-top: 12px
  position: relative
  width: 95px

.flex-col-28
  align-items: flex-start
  display: flex
  flex-direction: column
  margin-left: 152px
  margin-top: 14.5px
  min-height: 152px
  width: 193px

.learn-24
  letter-spacing: 0
  line-height: 30px
  margin-left: 1.99px
  min-height: 39px
  white-space: nowrap

.component-container-61
  height: 24px
  margin-left: 1.6px
  margin-top: 28px
  position: relative
  width: 191px

.component-container-62
  height: 24px
  margin-top: 37px
  position: relative
  width: 92px

.flex-col-29
  align-items: flex-start
  display: flex
  flex-direction: column
  margin-left: 104px
  min-height: 229px
  width: 361px

.flex-row-13
  align-items: flex-start
  display: flex
  height: 177px
  min-width: 361px

.contact-us-9
  align-self: flex-end
  letter-spacing: 0
  line-height: 30px
  min-height: 39px
  min-width: 164px
  white-space: nowrap

.bar2-25
  height: 154px
  margin-left: 36px
  object-fit: cover
  width: 161px

.component-container-63
  height: 24px
  margin-left: 0.71px
  margin-top: 28px
  position: relative
  width: 239px

.bar1-38
  align-self: center
  height: 212px
  margin-bottom: 156.43px
  margin-left: 79px
  object-fit: cover
  width: 222px
</style>
