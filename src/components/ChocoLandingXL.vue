<template>
  <div class="container-center-horizontal">
    <div class="choco-landing-xl screen">
      <div class="flex-col-22">
        <div class="navbar">
          <div class="overlap-group8-11" :style="{ 'background-image': 'url(' + overlapGroup8 + ')' }">
            <img class="chocolate-bar_1f36b-22" :src="chocolateBar_1F36B1" />
          </div>
          <div class="overlap-group-33">
            <div class="choco-22 montserrat-black-white-32px" v-html="choco1"></div>
            <div class="finance-22 montserrat-black-white-14px">{{ finance1 }}</div>
          </div>
          <a href="https://app.chocofinance.com/#/melt">
            <div class="navbar-link-melt montserrat-black-white-20px">{{ navbarLinkMelt }}</div> </a
          ><a href="https://app.chocofinance.com/#/mold">
            <div class="navbar-link-place montserrat-black-white-20px">{{ navbarLinkPlace }}</div>
          </a>
          <div class="navbar-link-governance montserrat-black-white-20px">{{ navbarLinkGovernance }}</div>
          <a href="https://docs.chocofinance.com/">
            <div class="navbar-link-learn montserrat-black-white-20px">{{ navbarLinkLearn }}</div> </a
          ><component41 :enterApp="component411Props.enterApp" :className="component411Props.className" />
        </div>
        <div class="overlap-group12-4">
          <div class="overlap-group3">
            <div class="flex-col-23">
              <div class="thetas-nativedecen-11 montserrat-semi-bold-white-70px">{{ thetaSNativeDecen }}</div>
              <div class="choco-is-building-ba-11 montserrat-normal-white-20px" v-html="chocoIsBuildingBa"></div>
              <div class="component-container-52">
                <component41 :enterApp="component412Props.enterApp" :className="component412Props.className" />
                <component41 :enterApp="component413Props.enterApp" :className="component413Props.className" />
              </div>
              <img class="bar2-22" :src="bar21" />
            </div>
            <div class="overlap-group-container-10">
              <div class="overlap-group1-11">
                <div class="how-to-participate-11 montserrat-semi-bold-white-70px">{{ howToParticipate }}</div>
                <div class="overlap-group7-12">
                  <component111
                    :meltingAllowsYouT="component111Props.meltingAllowsYouT"
                    :className="component111Props.className"
                    :component42Props="component111Props.component42Props"
                  />
                  <img class="bar1-33" :src="bar11" />
                </div>
              </div>
              <div class="overlap-group9-7">
                <component101
                  :fire="component101Props.fire"
                  :moldersPlayAnImpo="component101Props.moldersPlayAnImpo"
                  :className="component101Props.className"
                  :component42Props="component101Props.component42Props"
                />
                <img class="bar1-34" :src="bar12" />
              </div>
            </div>
          </div>
          <img class="fallingchoco-6" :src="fallingchoco" />
        </div>
      </div>
      <div class="flex-row-10 montserrat-normal-white-30px">
        <div class="overlap-group3-1" :style="{ 'background-image': 'url(' + overlapGroup3 + ')' }">
          <img class="chocolate-bar_1f36b-22" :src="chocolateBar_1F36B2" />
        </div>
        <div class="overlap-group1-12">
          <div class="choco-22 montserrat-black-white-32px">{{ choco2 }}</div>
          <div class="finance-23 montserrat-black-white-14px">{{ finance2 }}</div>
        </div>
        <div class="products-11">{{ products }}</div>
        <div class="learn-23">{{ learn }}</div>
        <div class="contact-us-8">{{ contactUs }}</div>
        <img class="bar2-23" :src="bar22" />
      </div>
      <div class="overlap-group13-2">
        <div class="overlap-group4-1">
          <div class="rectangle-2-6"></div>
          <a href="https://t.me/chocofinance">
            <div class="x622369b6bf2cca49909d6eb5_4-11">
              <img class="icon-paper_plane-6" :src="iconPaper_Plane" /></div></a
          ><x622369b7e403e7ddc4ce09396 :className="x622369b7e403e7ddc4ce09396Props.className" />
          <img class="bar1-35" :src="bar13" />
        </div>
        <a href="https://twitter.com/chocofinance">
          <div class="x622369b6a395099f1a779d22_1-11"><img class="icon-twitter-5" :src="iconTwitter" /></div></a
        ><x622369b64625dd72cd6e31a12 :className="x622369b64625dd72cd6e31a12Props.className" />
        <a href="https://github.com/chocodao">
          <div class="x622369b636f18be6eacf49c4_3-4"><img class="path-5-10" :src="path5" /></div
        ></a>
        <div class="component-container-53">
          <component151 :children="component1511Props.children" />
          <component151 :children="component1512Props.children" :className="component1512Props.className" />
        </div>
        <div class="component-container-54">
          <component152 :children="component152Props.children" />
          <component151 :children="component1513Props.children" :className="component1513Props.className" />
        </div>
        <div class="component-container-55">
          <component171 :children="component171Props.children" />
          <component172 />
        </div>
        <div class="component-container-56">
          <component181 :children="component181Props.children" />
          <component18122 :children="component18122Props.children" />
        </div>
        <div class="component-container-57">
          <component191 :children="component191Props.children" />
          <component1912 :children="component1912Props.children" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Component41 from "./Component41";
import Component111 from "./Component111";
import Component101 from "./Component101";
import X622369b7e403e7ddc4ce09396 from "./X622369b7e403e7ddc4ce09396";
import X622369b64625dd72cd6e31a12 from "./X622369b64625dd72cd6e31a12";
import Component151 from "./Component151";
import Component152 from "./Component152";
import Component171 from "./Component171";
import Component172 from "./Component172";
import Component181 from "./Component181";
import Component18122 from "./Component18122";
import Component191 from "./Component191";
import Component1912 from "./Component1912";
export default {
  name: "ChocoLandingXL",
  components: {
    Component41,
    Component111,
    Component101,
    X622369b7e403e7ddc4ce09396,
    X622369b64625dd72cd6e31a12,
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
    "overlapGroup8",
    "chocolateBar_1F36B1",
    "choco1",
    "finance1",
    "navbarLinkMelt",
    "navbarLinkPlace",
    "navbarLinkGovernance",
    "navbarLinkLearn",
    "thetaSNativeDecen",
    "chocoIsBuildingBa",
    "bar21",
    "howToParticipate",
    "bar11",
    "bar12",
    "fallingchoco",
    "overlapGroup3",
    "chocolateBar_1F36B2",
    "choco2",
    "finance2",
    "products",
    "learn",
    "contactUs",
    "bar22",
    "iconPaper_Plane",
    "bar13",
    "iconTwitter",
    "path5",
    "component411Props",
    "component412Props",
    "component413Props",
    "component111Props",
    "component101Props",
    "x622369b7e403e7ddc4ce09396Props",
    "x622369b64625dd72cd6e31a12Props",
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

.choco-landing-xl
  align-items: flex-start
  background-color: $cocoa-brown
  display: flex
  flex-direction: column
  height: 2490px
  overflow: hidden
  width: 2543px

.flex-col-22
  align-items: center
  display: flex
  flex-direction: column
  margin-top: 59px
  min-height: 1884px
  width: 2543px

.navbar
  align-items: flex-end
  display: flex
  height: 75px
  margin-right: 22.67px
  min-width: 2352px
  position: relative

.overlap-group8-11
  align-items: flex-start
  align-self: center
  background-position: 50% 50%
  background-size: cover
  display: flex
  margin-top: 2.94px
  min-width: 60px

.chocolate-bar_1f36b-22
  height: 60px
  object-fit: cover
  width: 60px

.overlap-group-33
  height: 59px
  margin-bottom: 3.0px
  margin-left: 12px
  position: relative
  width: 157px

.choco-22
  left: 0
  letter-spacing: 0
  line-height: 32px
  position: absolute
  top: 0
  white-space: nowrap

.finance-22
  left: 87px
  letter-spacing: 0
  line-height: 14px
  position: absolute
  top: 39px
  white-space: nowrap

.navbar-link-melt
  cursor: pointer
  letter-spacing: 0
  line-height: 20px
  margin-left: 1158px
  min-height: 50px
  min-width: 65px
  transition: all 0.2s ease
  white-space: nowrap

.navbar-link-melt:hover,
.navbar-link-place:hover,
.navbar-link-governance:hover,
.navbar-link-learn:hover
  transform: translate(0, -5px)

.navbar-link-place
  cursor: pointer
  letter-spacing: 0
  line-height: 20px
  margin-left: 107px
  min-height: 50px
  min-width: 67px
  transition: all 0.2s ease
  white-space: nowrap

.navbar-link-governance
  cursor: pointer
  letter-spacing: 0
  line-height: 20px
  margin-left: 107px
  min-height: 50px
  min-width: 154px
  transition: all 0.2s ease
  white-space: nowrap

.navbar-link-learn
  cursor: pointer
  letter-spacing: 0
  line-height: 20px
  margin-left: 107px
  min-height: 50px
  min-width: 75px
  transition: all 0.2s ease
  white-space: nowrap

.overlap-group12-4
  height: 1787px
  margin-top: 22px
  position: relative
  width: 2543px

.overlap-group3
  height: 1717px
  left: 0
  position: absolute
  top: 70px
  width: 2543px

.flex-col-23
  align-items: flex-start
  display: flex
  flex-direction: column
  left: 84px
  min-height: 800px
  position: absolute
  top: 0
  width: 656px

.thetas-nativedecen-11
  letter-spacing: 0
  line-height: 70px
  min-height: 260px
  white-space: nowrap

.choco-is-building-ba-11
  letter-spacing: 0
  line-height: 20px
  margin-top: 53px
  min-height: 74px
  white-space: nowrap

.component-container-52
  align-items: flex-start
  display: flex
  height: 63px
  margin-left: 29.69px
  margin-top: 70px
  min-width: 386px
  position: relative

.bar2-22
  height: 136px
  margin-left: 115px
  margin-top: 144px
  object-fit: cover
  width: 127px

.overlap-group-container-10
  height: 954px
  left: 0
  position: absolute
  top: 763px
  width: 2543px

.overlap-group1-11
  height: 913px
  left: 920px
  position: absolute
  top: 0
  width: 1623px

.how-to-participate-11
  left: 0
  letter-spacing: 0
  line-height: 70px
  position: absolute
  top: 8px
  white-space: nowrap

.overlap-group7-12
  height: 913px
  left: 432px
  position: absolute
  top: 0
  width: 1190px

.bar1-33
  height: 264px
  left: 925px
  object-fit: cover
  position: absolute
  top: 0
  width: 265px

.overlap-group9-7
  height: 843px
  left: 0
  position: absolute
  top: 111px
  width: 1208px

.bar1-34
  height: 194px
  left: 0
  object-fit: cover
  position: absolute
  top: 649px
  width: 181px

.fallingchoco-6
  height: 756px
  left: 1638px
  object-fit: cover
  position: absolute
  top: 0
  width: 704px

.flex-row-10
  align-items: flex-end
  display: flex
  height: 184px
  margin-left: 84px
  margin-top: 81px
  min-width: 1928px

.overlap-group3-1
  align-items: flex-start
  background-position: 50% 50%
  background-size: cover
  display: flex
  min-width: 60px

.overlap-group1-12
  height: 60px
  margin-bottom: -3.0px
  margin-left: 12px
  position: relative
  width: 157px

.finance-23
  left: 87px
  letter-spacing: 0
  line-height: 14px
  position: absolute
  top: 40px
  white-space: nowrap

.products-11
  letter-spacing: 0
  line-height: 30px
  margin-bottom: 6.5px
  margin-left: 470px
  min-height: 39px
  min-width: 138px
  white-space: nowrap

.learn-23
  letter-spacing: 0
  line-height: 30px
  margin-bottom: 6.5px
  margin-left: 247px
  min-height: 39px
  min-width: 87px
  white-space: nowrap

.contact-us-8
  letter-spacing: 0
  line-height: 30px
  margin-bottom: 6.5px
  margin-left: 372px
  min-height: 39px
  min-width: 164px
  white-space: nowrap

.bar2-23
  align-self: flex-start
  height: 154px
  margin-left: 60px
  object-fit: cover
  width: 161px

.overlap-group13-2
  height: 979px
  margin-left: -169px
  margin-top: 16px
  position: relative
  width: 2622px

.overlap-group4-1
  height: 971px
  left: 0
  position: absolute
  top: 8px
  width: 2622px

.rectangle-2-6
  background-color: $oil
  border-radius: 264px
  height: 855px
  left: 0
  position: absolute
  top: 116px
  width: 2543px

.x622369b6bf2cca49909d6eb5_4-11
  align-items: flex-end
  background-color: $green-white
  border-radius: 25px
  cursor: pointer
  display: flex
  height: 50px
  left: 253px
  min-width: 50px
  padding: 15.0px 12.0px
  position: absolute
  top: 115px
  transition: all 0.2s ease

.x622369b6bf2cca49909d6eb5_4-11:hover,
.x622369b6a395099f1a779d22_1-11:hover,
.x622369b636f18be6eacf49c4_3-4:hover
  transform: scale(1.1)

.icon-paper_plane-6
  height: 19px
  object-fit: cover
  width: 24px

.bar1-35
  height: 212px
  left: 2399px
  object-fit: cover
  position: absolute
  top: 0
  width: 222px

.x622369b6a395099f1a779d22_1-11
  align-items: flex-end
  background-color: $green-white
  border-radius: 25px
  cursor: pointer
  display: flex
  height: 50px
  left: 253px
  min-width: 50px
  padding: 16px 15px
  position: absolute
  top: 47px
  transition: all 0.2s ease

.icon-twitter-5
  height: 16px
  object-fit: cover
  width: 20px

.x622369b636f18be6eacf49c4_3-4
  align-items: flex-start
  background-color: $green-white
  border-radius: 25px
  cursor: pointer
  display: flex
  height: 50px
  left: 453px
  min-width: 50px
  padding: 13.0px 13px
  position: absolute
  top: 47px
  transition: all 0.2s ease

.path-5-10
  height: 23px
  object-fit: cover
  width: 24px

.component-container-53
  height: 48px
  left: 952px
  position: absolute
  top: 5px
  width: 104px

.component-container-54
  height: 48px
  left: 952px
  position: absolute
  top: 66px
  width: 95px

.component-container-55
  height: 24px
  left: 1337px
  position: absolute
  top: 0
  width: 191px

.component-container-56
  height: 24px
  left: 1337px
  position: absolute
  top: 66px
  width: 92px

.component-container-57
  height: 24px
  left: 1796px
  position: absolute
  top: 5px
  width: 239px
</style>
