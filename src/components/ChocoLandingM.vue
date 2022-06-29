<template>
  <div class="container-center-horizontal">
    <div class="choco-landing-m screen">
      <div class="navbar-1">
        <div class="overlap-group5-1" :style="{ 'background-image': 'url(' + overlapGroup5 + ')' }">
          <img class="chocolate-bar_1f36b-24" :src="chocolateBar_1F36B1" />
        </div>
        <div class="overlap-group-37">
          <div class="choco-24 montserrat-black-white-32px">{{ choco1 }}</div>
          <div class="finance-26 montserrat-black-white-14px">{{ finance1 }}</div>
        </div>
        <a href="https://app.chocofinance.com/#/melt">
          <div class="navbar-link-melt-1 montserrat-black-white-20px">{{ navbarLinkMelt }}</div> </a
        ><a href="https://app.chocofinance.com/#/mold">
          <div class="navbar-link-place-1 montserrat-black-white-20px">{{ navbarLinkPlace }}</div>
        </a>
        <div class="navbar-link-governance-1 montserrat-black-white-20px">{{ navbarLinkGovernance }}</div>
        <a href="https://docs.chocofinance.com/">
          <div class="navbar-link-learn-1 montserrat-black-white-20px">{{ navbarLinkLearn }}</div> </a
        ><component41 :enterApp="component411Props.enterApp" :className="component411Props.className" />
      </div>
      <div class="overlap-group-container-13">
        <div class="overlap-group16">
          <component41 :enterApp="component412Props.enterApp" :className="component412Props.className" />
          <component41 :enterApp="component413Props.enterApp" :className="component413Props.className" />
          <div class="overlap-group6-3">
            <img class="fallingchoco-8" :src="fallingchoco" />
            <div class="thetas-nativedecen-13 montserrat-semi-bold-white-70px" v-html="thetaSNativeDecen"></div>
          </div>
          <div class="choco-is-building-ba-13 montserrat-normal-white-20px" v-html="chocoIsBuildingBa"></div>
          <img class="bar2-26" :src="bar21" />
        </div>
        <div class="overlap-group15-1">
          <div class="how-to-participate-13 montserrat-semi-bold-white-70px">{{ howToParticipate }}</div>
          <div class="overlap-group3-3">
            <component111
              :meltingAllowsYouT="component111Props.meltingAllowsYouT"
              :className="component111Props.className"
              :component42Props="component111Props.component42Props"
            />
            <img class="bar1-39" :src="bar11" />
          </div>
        </div>
        <div class="overlap-group4-2">
          <component101
            :fire="component101Props.fire"
            :moldersPlayAnImpo="component101Props.moldersPlayAnImpo"
            :className="component101Props.className"
            :component42Props="component101Props.component42Props"
          />
          <img class="bar1-40" :src="bar12" />
        </div>
      </div>
      <div class="flex-row-14">
        <div class="flex-row-15">
          <div class="flex-col-30">
            <div class="overlap-group9-8" :style="{ 'background-image': 'url(' + overlapGroup9 + ')' }">
              <img class="chocolate-bar_1f36b-24" :src="chocolateBar_1F36B2" />
            </div>
            <a href="https://twitter.com/chocofinance">
              <div class="x622369b6a395099f1a779d22_1-13"><img class="icon-twitter-6" :src="iconTwitter" /></div></a
            ><a href="https://t.me/chocofinance">
              <div class="x622369b6bf2cca49909d6eb5_4-13"><img class="icon-paper_plane-7" :src="iconPaper_Plane" /></div
            ></a>
          </div>
          <div class="flex-col-31">
            <div class="overlap-group1-14">
              <div class="choco-24 montserrat-black-white-32px">{{ choco2 }}</div>
              <div class="finance-27 montserrat-black-white-14px">{{ finance2 }}</div>
            </div>
            <div class="b-container-8">
              <x622369b64625dd72cd6e31a12 />
              <a href="https://github.com/chocodao">
                <div class="x622369b636f18be6eacf49c4_3-9"><img class="path-5-12" :src="path5" /></div
              ></a>
            </div>
            <x622369b7e403e7ddc4ce09396 />
          </div>
          <div class="flex-col-32">
            <div class="products-13 montserrat-normal-white-30px">{{ products }}</div>
            <div class="component-container-64">
              <component151 :children="component1511Props.children" />
              <component151 :children="component1512Props.children" :className="component1512Props.className" />
            </div>
            <div class="component-container-65">
              <component152 :children="component152Props.children" />
              <component151 :children="component1513Props.children" :className="component1513Props.className" />
            </div>
          </div>
          <div class="flex-col-33">
            <div class="learn-25 montserrat-normal-white-30px">{{ learn }}</div>
            <div class="component-container-66">
              <component171 :children="component171Props.children" />
              <component172 />
            </div>
            <div class="component-container-67">
              <component181 :children="component181Props.children" />
              <component18122 :children="component18122Props.children" />
            </div>
          </div>
        </div>
        <div class="flex-col-34">
          <div class="overlap-group11-6">
            <div class="contact-us-10 montserrat-normal-white-30px">{{ contactUs }}</div>
            <img class="bar2-27" :src="bar22" />
          </div>
          <div class="flex-row-16">
            <div class="component-container-68">
              <component191 :children="component191Props.children" />
              <component1912 :children="component1912Props.children" />
            </div>
            <img class="bar1-41" :src="bar13" />
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
  name: "ChocoLandingM",
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
    "overlapGroup5",
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
    "bar21",
    "howToParticipate",
    "bar11",
    "bar12",
    "overlapGroup9",
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

.choco-landing-m
  align-items: flex-start
  background-color: $cocoa-brown
  display: flex
  flex-direction: column
  height: 2490px
  overflow: hidden
  width: 1497px

.navbar-1
  align-items: flex-end
  align-self: center
  display: flex
  height: 75px
  margin-left: 24.51px
  margin-top: 59px
  min-width: 1354px
  position: relative

.overlap-group5-1
  align-items: flex-start
  align-self: center
  background-position: 50% 50%
  background-size: cover
  display: flex
  margin-top: 2.94px
  min-width: 60px

.chocolate-bar_1f36b-24
  height: 60px
  object-fit: cover
  width: 60px

.overlap-group-37
  height: 59px
  margin-bottom: 3.0px
  margin-left: 12px
  position: relative
  width: 157px

.choco-24
  left: 0
  letter-spacing: 0
  line-height: 32px
  position: absolute
  top: 0
  white-space: nowrap

.finance-26
  left: 87px
  letter-spacing: 0
  line-height: 14px
  position: absolute
  top: 39px
  white-space: nowrap

.navbar-link-melt-1
  cursor: pointer
  letter-spacing: 0
  line-height: 20px
  margin-left: 461px
  min-height: 50px
  min-width: 65px
  transition: all 0.2s ease
  white-space: nowrap

.navbar-link-melt-1:hover,
.navbar-link-place-1:hover,
.navbar-link-governance-1:hover,
.navbar-link-learn-1:hover
  transform: translate(0, -5px)

.navbar-link-place-1
  cursor: pointer
  letter-spacing: 0
  line-height: 20px
  margin-left: 31px
  min-height: 50px
  min-width: 67px
  transition: all 0.2s ease
  white-space: nowrap

.navbar-link-governance-1
  cursor: pointer
  letter-spacing: 0
  line-height: 20px
  margin-left: 31px
  min-height: 50px
  min-width: 154px
  transition: all 0.2s ease
  white-space: nowrap

.navbar-link-learn-1
  cursor: pointer
  letter-spacing: 0
  line-height: 20px
  margin-left: 31px
  min-height: 50px
  min-width: 75px
  transition: all 0.2s ease
  white-space: nowrap

.overlap-group-container-13
  height: 1787px
  margin-top: 22px
  position: relative
  width: 1550px

.overlap-group16
  height: 870px
  left: 63px
  position: absolute
  top: 0
  width: 1232px

.overlap-group6-3
  height: 756px
  left: 21px
  position: absolute
  top: 0
  width: 1212px

.fallingchoco-8
  height: 756px
  left: 508px
  object-fit: cover
  position: absolute
  top: 0
  width: 704px

.thetas-nativedecen-13
  left: 0
  letter-spacing: 0
  line-height: 70px
  position: absolute
  top: 70px
  white-space: nowrap

.choco-is-building-ba-13
  left: 21px
  letter-spacing: 0
  line-height: 20px
  position: absolute
  top: 383px
  white-space: nowrap

.bar2-26
  height: 136px
  left: 136px
  object-fit: cover
  position: absolute
  top: 734px
  width: 127px

.overlap-group15-1
  height: 913px
  left: 398px
  position: absolute
  top: 833px
  width: 1153px

.how-to-participate-13
  left: 0
  letter-spacing: 0
  line-height: 70px
  position: absolute
  top: 8px
  white-space: nowrap

.overlap-group3-3
  height: 913px
  left: 380px
  position: absolute
  top: 0
  width: 773px

.bar1-39
  height: 264px
  left: 508px
  object-fit: cover
  position: absolute
  top: 0
  width: 265px

.overlap-group4-2
  height: 843px
  left: 0
  position: absolute
  top: 944px
  width: 720px

.bar1-40
  height: 194px
  left: 0
  object-fit: cover
  position: absolute
  top: 649px
  width: 181px

.flex-row-14
  align-items: flex-start
  background-color: $oil
  border-radius: 264px
  display: flex
  height: 855px
  margin-top: 25px
  min-width: 1497px
  padding: 56.1px 84px

.flex-row-15
  align-items: flex-start
  align-self: center
  display: flex
  height: 249px
  margin-bottom: 246.0px
  min-width: 778px

.flex-col-30
  align-items: flex-start
  display: flex
  flex-direction: column
  min-height: 249px
  width: 60px

.overlap-group9-8
  align-items: flex-start
  background-position: 50% 50%
  background-size: cover
  display: flex
  min-width: 60px

.x622369b6a395099f1a779d22_1-13
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

.x622369b6a395099f1a779d22_1-13:hover,
.x622369b6bf2cca49909d6eb5_4-13:hover,
.x622369b636f18be6eacf49c4_3-9:hover
  transform: scale(1.1)

.icon-twitter-6
  height: 16px
  object-fit: cover
  width: 20px

.x622369b6bf2cca49909d6eb5_4-13
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

.icon-paper_plane-7
  height: 19px
  object-fit: cover
  width: 24px

.flex-col-31
  align-items: flex-start
  align-self: flex-end
  display: flex
  flex-direction: column
  margin-left: 12px
  min-height: 246px
  position: relative
  width: 178px

.overlap-group1-14
  height: 60px
  position: relative
  width: 157px

.finance-27
  left: 87px
  letter-spacing: 0
  line-height: 14px
  position: absolute
  top: 40px
  white-space: nowrap

.b-container-8
  align-items: flex-start
  align-self: flex-end
  display: flex
  margin-top: 60px
  min-width: 150px
  position: relative

.x622369b636f18be6eacf49c4_3-9
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

.path-5-12
  height: 23px
  object-fit: cover
  width: 24px

.flex-col-32
  align-items: flex-start
  display: flex
  flex-direction: column
  margin-left: 109px
  margin-top: 14.5px
  min-height: 175px
  width: 138px

.products-13,
.learn-25
  letter-spacing: 0
  line-height: 30px
  min-height: 39px
  white-space: nowrap

.component-container-64
  height: 48px
  margin-left: 0
  margin-top: 28px
  position: relative
  width: 104px

.component-container-65
  height: 48px
  margin-left: 0
  margin-top: 13px
  position: relative
  width: 95px

.flex-col-33
  align-items: flex-start
  display: flex
  flex-direction: column
  margin-left: 90px
  margin-top: 14.5px
  min-height: 148px
  width: 191px

.component-container-66
  height: 24px
  margin-left: 0
  margin-top: 28px
  position: relative
  width: 191px

.component-container-67
  height: 24px
  margin-left: 0
  margin-top: 33px
  position: relative
  width: 92px

.flex-col-34
  align-items: flex-start
  display: flex
  flex-direction: column
  margin-left: 50px
  min-height: 419px
  width: 495px

.overlap-group11-6
  height: 177px
  margin-left: 0.08px
  position: relative
  width: 287px

.contact-us-10
  left: 0
  letter-spacing: 0
  line-height: 30px
  position: absolute
  top: 138px
  white-space: nowrap

.bar2-27
  height: 154px
  left: 126px
  object-fit: cover
  position: absolute
  top: 0
  width: 161px

.flex-row-16
  align-items: flex-start
  display: flex
  height: 215px
  margin-top: 28px
  min-width: 495px

.component-container-68
  height: 24px
  position: relative
  width: 239px

.bar1-41
  align-self: flex-end
  height: 212px
  margin-left: 33px
  object-fit: cover
  width: 222px
</style>
