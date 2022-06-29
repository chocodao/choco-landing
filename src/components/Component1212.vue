<template>
  <div class="component-12-1-2">
    <div class="flex-col-10">
      <div class="overlap-group1-10" :style="{ 'background-image': 'url(' + overlapGroup1 + ')' }">
        <img class="chocolate-bar_1f36b-18" :src="chocolateBar_1F36B" />
      </div>
      <a href="https://twitter.com/chocofinance">
        <div class="x622369b6a395099f1a779d22_1-10"><img class="path-3-5" :src="path3" /></div></a
      ><a href="https://t.me/chocofinance">
        <div class="x622369b6bf2cca49909d6eb5_4-10"><img class="icon-paper_plane-5" :src="iconPaper_Plane" /></div
      ></a>
    </div>
    <div class="flex-col-18">
      <div class="overlap-group-29">
        <div class="choco-18">{{ choco }}</div>
        <div class="finance-18">{{ finance }}</div>
      </div>
      <div class="b-container-3">
        <div class="x622369b64625dd72cd6e31a1_2-2"><img class="path-4-14" :src="path4" /></div>
        <a href="https://github.com/chocodao">
          <div class="x622369b636f18be6eacf49c4_3-3"><img class="path" :src="path5" /></div
        ></a>
      </div>
      <div class="x622369b7e403e7ddc4ce0939_6-1"><img class="path" :src="path7" /></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Component1212",
  props: [
    "overlapGroup1",
    "chocolateBar_1F36B",
    "path3",
    "iconPaper_Plane",
    "choco",
    "finance",
    "path4",
    "path5",
    "path7",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.component-12-1-2
  align-items: flex-start
  align-self: flex-end
  display: flex
  height: 123px
  margin-bottom: 0
  min-width: 107px

.flex-col-10
  align-items: flex-start
  display: flex
  flex-direction: column
  min-height: 123px
  width: 30px

.overlap-group1-10
  align-items: flex-start
  background-position: 50% 50%
  background-size: cover
  display: flex
  min-width: 30px

.chocolate-bar_1f36b-18
  height: 30px
  object-fit: cover
  width: 30px

.x622369b6a395099f1a779d22_1-10
  align-items: flex-end
  background-color: $green-white
  border-radius: 12px/13px
  cursor: pointer
  display: flex
  height: 26px
  justify-content: flex-end
  margin-top: 30px
  min-width: 24px
  padding: 8.5px 6.7px
  transition: all 0.2s ease

.x622369b6a395099f1a779d22_1-10:hover,
.x622369b6bf2cca49909d6eb5_4-10:hover,
.x622369b64625dd72cd6e31a1_2-2:hover,
.x622369b636f18be6eacf49c4_3-3:hover,
.x622369b7e403e7ddc4ce0939_6-1:hover
  transform: scale(1.1)

.path-3-5
  height: 8px
  object-fit: cover
  width: 10px

.x622369b6bf2cca49909d6eb5_4-10
  align-items: flex-start
  background-color: $green-white
  border-radius: 12px
  cursor: pointer
  display: flex
  height: 24px
  margin-top: 13px
  min-width: 24px
  padding: 7.2px 5.9px
  transition: all 0.2s ease

.icon-paper_plane-5
  height: 9px
  object-fit: cover
  width: 12px

.flex-col-18
  align-items: flex-start
  align-self: flex-end
  display: flex
  flex-direction: column
  margin-bottom: 0
  min-height: 121px
  width: 79px

.overlap-group-29
  height: 30px
  position: relative
  width: 79px

.choco-18
  color: $white
  font-family: $font-family-montserrat
  font-size: 15px
  font-weight: 900
  left: 0
  letter-spacing: 0
  line-height: 15px
  position: absolute
  top: 0
  white-space: nowrap

.finance-18
  color: $white
  font-family: $font-family-montserrat
  font-size: 7px
  font-weight: 900
  left: 43px
  letter-spacing: 0
  line-height: 7px
  position: absolute
  top: 19px
  white-space: nowrap

.b-container-3
  align-items: flex-start
  align-self: center
  display: flex
  margin-right: 3.0px
  margin-top: 28px
  min-width: 62px

.x622369b64625dd72cd6e31a1_2-2
  align-items: flex-end
  background-color: $green-white
  border-radius: 12px/13px
  cursor: pointer
  display: flex
  height: 26px
  justify-content: flex-end
  min-width: 24px
  padding: 8.0px 7.5px
  transition: all 0.2s ease

.path-4-14
  height: 10px
  object-fit: cover
  width: 9px

.x622369b636f18be6eacf49c4_3-3
  align-items: flex-start
  background-color: $green-white
  border-radius: 12.5px/13px
  cursor: pointer
  display: flex
  height: 26px
  margin-left: 13px
  min-width: 25px
  padding: 7.2px 6.5px
  transition: all 0.2s ease

.path
  height: 12px
  object-fit: cover
  width: 12px

.x622369b7e403e7ddc4ce0939_6-1
  align-items: flex-start
  background-color: $green-white
  border-radius: 12px
  cursor: pointer
  display: flex
  height: 24px
  justify-content: flex-end
  margin-left: 7.0px
  margin-top: 13px
  min-width: 24px
  padding: 5.7px 5.7px
  transition: all 0.2s ease
</style>
