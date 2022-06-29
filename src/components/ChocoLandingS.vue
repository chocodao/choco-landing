<template>
  <div class="container-center-horizontal">
    <div class="choco-landing-s screen">
      <div class="navbar-2">
        <div class="overlap-group2-12" :style="{ 'background-image': 'url(' + overlapGroup2 + ')' }">
          <img class="chocolate-bar_1f36b-25" :src="chocolateBar_1F36B1" />
        </div>
        <div class="overlap-group-38">
          <div class="choco-25 montserrat-black-white-32px">{{ choco1 }}</div>
          <div class="finance-28 montserrat-black-white-14px">{{ finance1 }}</div>
        </div>
        <a href="https://app.chocofinance.com/#/melt">
          <div class="navbar-link-melt-2 montserrat-black-white-20px">{{ navbarLinkMelt }}</div> </a
        ><a href="https://app.chocofinance.com/#/mold">
          <div class="navbar-link-place-2 montserrat-black-white-20px">{{ navbarLinkPlace }}</div>
        </a>
        <div class="navbar-link-governance-2 montserrat-black-white-20px">{{ navbarLinkGovernance }}</div>
        <a href="https://docs.chocofinance.com/">
          <div class="navbar-link-learn-2 montserrat-black-white-20px">{{ navbarLinkLearn }}</div> </a
        ><component41 :enterApp="component411Props.enterApp" :className="component411Props.className" />
      </div>
      <div class="overlap-group-container-14">
        <div class="overlap-group-container-15">
          <div class="overlap-group6-4">
            <component41 :enterApp="component412Props.enterApp" :className="component412Props.className" />
            <component41 :enterApp="component413Props.enterApp" :className="component413Props.className" />
            <img class="fallingchoco-9" :src="fallingchoco" />
            <div class="thetas-nativedecen-14 montserrat-semi-bold-white-70px" v-html="thetaSNativeDecen"></div>
            <div class="choco-is-building-ba-14 montserrat-normal-white-20px" v-html="chocoIsBuildingBa"></div>
          </div>
          <div class="overlap-group7-14">
            <div class="how-to-participate-14 montserrat-semi-bold-white-70px">{{ howToParticipate }}</div>
            <img class="bar2-28" :src="bar21" />
          </div>
          <div class="overlap-group5-2">
            <component111
              :meltingAllowsYouT="component111Props.meltingAllowsYouT"
              :className="component111Props.className"
              :component42Props="component111Props.component42Props"
            />
            <img class="bar1-42" :src="bar11" />
          </div>
        </div>
        <div class="overlap-group4-3">
          <component101
            :fire="component101Props.fire"
            :moldersPlayAnImpo="component101Props.moldersPlayAnImpo"
            :className="component101Props.className"
            :component42Props="component101Props.component42Props"
          />
          <img class="bar1-43" :src="bar12" />
        </div>
      </div>
      <div class="flex-row-17">
        <div class="flex-row-18">
          <div class="flex-col-35">
            <div class="overlap-group10-6" :style="{ 'background-image': 'url(' + overlapGroup10 + ')' }">
              <img class="chocolate-bar_1f36b-25" :src="chocolateBar_1F36B2" />
            </div>
            <a href="https://twitter.com/chocofinance">
              <div class="x622369b6a395099f1a779d22_1-14"><img class="icon-twitter-7" :src="iconTwitter" /></div></a
            ><a href="https://t.me/chocofinance">
              <div class="x622369b6bf2cca49909d6eb5_4-14"><img class="icon-paper_plane-8" :src="iconPaper_Plane" /></div
            ></a>
          </div>
          <div class="flex-col-36">
            <div class="overlap-group1-15">
              <div class="choco-25 montserrat-black-white-32px">{{ choco2 }}</div>
              <div class="finance-29 montserrat-black-white-14px">{{ finance2 }}</div>
            </div>
            <div class="b-container-9">
              <x622369b64625dd72cd6e31a12 />
              <a href="https://github.com/chocodao">
                <div class="x622369b636f18be6eacf49c4_3-10"><img class="path-5-13" :src="path5" /></div
              ></a>
            </div>
            <x622369b7e403e7ddc4ce09396 />
          </div>
          <div class="flex-col-37">
            <div class="products-14 montserrat-normal-white-30px">{{ products }}</div>
            <div class="component-container-69">
              <component151 :children="component1511Props.children" />
              <component151 :children="component1512Props.children" :className="component1512Props.className" />
            </div>
            <div class="component-container-70">
              <component152 :children="component152Props.children" />
              <component151 :children="component1513Props.children" :className="component1513Props.className" />
            </div>
          </div>
        </div>
        <div class="flex-col-38">
          <div class="learn-26 montserrat-normal-white-30px">{{ learn }}</div>
          <div class="component-container-71">
            <component171 :children="component171Props.children" />
            <component172 />
          </div>
          <div class="component-container-72">
            <component181 :children="component181Props.children" />
            <component18122 :children="component18122Props.children" />
          </div>
        </div>
        <div class="overlap-group-container-16">
          <div class="overlap-group13-3">
            <div class="contact-us-11 montserrat-normal-white-30px">{{ contactUs }}</div>
            <img class="bar2-29" :src="bar22" />
          </div>
          <div class="overlap-group8-13">
            <component191 :children="component191Props.children" />
            <component1912 :children="component1912Props.children" />
            <img class="bar1-44" :src="bar13" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  name: "ChocoLandingS",
  components: {
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
    "overlapGroup2",
    "chocolateBar_1F36B1",
    "choco1",
    "finance1",
    "navbarLinkMelt",
    "navbarLinkPlace",
    "navbarLinkGovernance",
    "navbarLinkLearn",
    "fallingchoco",
    "thetaSNativeDecen",
    "chocoIsBuildingBa",
    "howToParticipate",
    "bar21",
    "bar11",
    "bar12",
    "overlapGroup10",
    "chocolateBar_1F36B2",
    "iconTwitter",
    "iconPaper_Plane",
    "choco2",
    "finance2",
    "path5",
    "products",
    "learn",
    "contactUs",
    "bar22",
    "bar13",
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

.choco-landing-s
  align-items: flex-start
  background-color: $cocoa-brown
  display: flex
  flex-direction: column
  height: 2490px
  overflow: hidden
  width: 1282px

.navbar-2
  align-items: flex-end
  align-self: center
  display: flex
  height: 75px
  margin-left: 34.21px
  margin-top: 59px
  min-width: 1148px
  position: relative

.overlap-group2-12
  align-items: flex-start
  align-self: center
  background-position: 50% 50%
  background-size: cover
  display: flex
  margin-top: 2.94px
  min-width: 60px

.chocolate-bar_1f36b-25
  height: 60px
  object-fit: cover
  width: 60px

.overlap-group-38
  height: 59px
  margin-bottom: 3.0px
  margin-left: 12px
  position: relative
  width: 157px

.choco-25
  left: 0
  letter-spacing: 0
  line-height: 32px
  position: absolute
  top: 0
  white-space: nowrap

.finance-28
  left: 87px
  letter-spacing: 0
  line-height: 14px
  position: absolute
  top: 39px
  white-space: nowrap

.navbar-link-melt-2
  cursor: pointer
  letter-spacing: 0
  line-height: 20px
  margin-left: 257px
  min-height: 50px
  min-width: 65px
  transition: all 0.2s ease
  white-space: nowrap

.navbar-link-melt-2:hover,
.navbar-link-place-2:hover,
.navbar-link-governance-2:hover,
.navbar-link-learn-2:hover
  transform: translate(0, -5px)

.navbar-link-place-2
  cursor: pointer
  letter-spacing: 0
  line-height: 20px
  margin-left: 31px
  min-height: 50px
  min-width: 67px
  transition: all 0.2s ease
  white-space: nowrap

.navbar-link-governance-2
  cursor: pointer
  letter-spacing: 0
  line-height: 20px
  margin-left: 31px
  min-height: 50px
  min-width: 154px
  transition: all 0.2s ease
  white-space: nowrap

.navbar-link-learn-2
  cursor: pointer
  letter-spacing: 0
  line-height: 20px
  margin-left: 31px
  min-height: 50px
  min-width: 75px
  transition: all 0.2s ease
  white-space: nowrap

.overlap-group-container-14
  height: 1787px
  margin-top: 22px
  position: relative
  width: 1327px

.overlap-group-container-15
  height: 1741px
  left: 53px
  position: absolute
  top: 0
  width: 1274px

.overlap-group6-4
  height: 756px
  left: 0
  position: absolute
  top: 0
  width: 1028px

.fallingchoco-9
  height: 756px
  left: 324px
  object-fit: cover
  position: absolute
  top: 0
  width: 704px

.thetas-nativedecen-14
  left: 31px
  letter-spacing: 0
  line-height: 70px
  position: absolute
  top: 70px
  white-space: nowrap

.choco-is-building-ba-14
  left: 31px
  letter-spacing: 0
  line-height: 20px
  position: absolute
  top: 383px
  white-space: nowrap

.overlap-group7-14
  height: 195px
  left: 146px
  position: absolute
  top: 734px
  width: 795px

.how-to-participate-14
  left: 91px
  letter-spacing: 0
  line-height: 70px
  position: absolute
  top: 107px
  white-space: nowrap

.bar2-28
  height: 136px
  left: 0
  object-fit: cover
  position: absolute
  top: 0
  width: 127px

.overlap-group5-2
  height: 908px
  left: 603px
  position: absolute
  top: 833px
  width: 671px

.bar1-42
  height: 264px
  left: 406px
  object-fit: cover
  position: absolute
  top: 0
  width: 265px

.overlap-group4-3
  height: 848px
  left: 0
  position: absolute
  top: 939px
  width: 629px

.bar1-43
  height: 194px
  left: 0
  object-fit: cover
  position: absolute
  top: 654px
  width: 181px

.flex-row-17
  align-items: flex-start
  background-color: $oil
  border-radius: 264px
  display: flex
  height: 855px
  margin-top: 48px
  min-width: 1282px
  padding: 33.1px 84px

.flex-row-18
  align-items: flex-start
  display: flex
  height: 249px
  margin-top: 123.93px
  min-width: 427px

.flex-col-35
  align-items: flex-start
  display: flex
  flex-direction: column
  min-height: 249px
  width: 60px

.overlap-group10-6
  align-items: flex-start
  background-position: 50% 50%
  background-size: cover
  display: flex
  min-width: 60px

.x622369b6a395099f1a779d22_1-14
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

.x622369b6a395099f1a779d22_1-14:hover,
.x622369b6bf2cca49909d6eb5_4-14:hover,
.x622369b636f18be6eacf49c4_3-10:hover
  transform: scale(1.1)

.icon-twitter-7
  height: 16px
  object-fit: cover
  width: 20px

.x622369b6bf2cca49909d6eb5_4-14
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

.icon-paper_plane-8
  height: 19px
  object-fit: cover
  width: 24px

.flex-col-36
  align-items: flex-start
  align-self: flex-end
  display: flex
  flex-direction: column
  margin-left: 12px
  min-height: 246px
  position: relative
  width: 178px

.overlap-group1-15
  height: 60px
  position: relative
  width: 157px

.finance-29
  left: 87px
  letter-spacing: 0
  line-height: 14px
  position: absolute
  top: 40px
  white-space: nowrap

.b-container-9
  align-items: flex-start
  align-self: flex-end
  display: flex
  margin-top: 60px
  min-width: 150px
  position: relative

.x622369b636f18be6eacf49c4_3-10
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

.path-5-13
  height: 23px
  object-fit: cover
  width: 24px

.flex-col-37
  align-items: flex-start
  display: flex
  flex-direction: column
  margin-left: 39px
  margin-top: 14.5px
  min-height: 174px
  width: 138px

.products-14
  letter-spacing: 0
  line-height: 30px
  min-height: 39px
  white-space: nowrap

.component-container-69
  height: 48px
  margin-left: 3.65px
  margin-top: 28px
  position: relative
  width: 104px

.component-container-70
  height: 48px
  margin-left: 4.59px
  margin-top: 12px
  position: relative
  width: 95px

.flex-col-38
  align-items: flex-start
  display: flex
  flex-direction: column
  margin-left: 58px
  margin-top: 138.43px
  min-height: 152px
  width: 191px

.learn-26
  letter-spacing: 0
  line-height: 30px
  margin-left: 0
  min-height: 39px
  white-space: nowrap

.component-container-71
  height: 24px
  margin-left: 0
  margin-top: 28px
  position: relative
  width: 191px

.component-container-72
  height: 24px
  margin-top: 37px
  position: relative
  width: 92px

.overlap-group-container-16
  align-items: flex-start
  display: flex
  flex-direction: column
  margin-left: 47px
  min-height: 433px
  width: 381px

.overlap-group13-3
  height: 177px
  margin-left: 0.26px
  position: relative
  width: 225px

.contact-us-11
  left: 0
  letter-spacing: 0
  line-height: 30px
  position: absolute
  top: 138px
  white-space: nowrap

.bar2-29
  height: 154px
  left: 64px
  object-fit: cover
  position: absolute
  top: 0
  width: 161px

.overlap-group8-13
  height: 229px
  margin-top: 28px
  position: relative
  width: 381px

.bar1-44
  height: 212px
  left: 158px
  object-fit: cover
  position: absolute
  top: 17px
  width: 222px
</style>
