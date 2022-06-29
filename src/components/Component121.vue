<template>
  <div :class="[`component-12-1`, className || ``]">
    <div class="flex-col-1">
      <div class="overlap-group1">
        <img
          class="chocolate-bar_1f36b-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/chocolate-bar-1f36b-1@1x.png"
        />
      </div>
      <a href="https://twitter.com/chocofinance">
        <div class="x622369b6a395099f1a779d22_1">
          <img
            class="icon-twitter"
            src="https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/path-3@1x.png"
          /></div></a
      ><a href="https://t.me/chocofinance">
        <div class="x622369b6bf2cca49909d6eb5_4">
          <img
            class="icon-paper_plane"
            src="https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/path-6@1x.png"
          /></div
      ></a>
    </div>
    <div class="flex-col-2">
      <div class="overlap-group-11">
        <div class="choco-1 montserrat-black-white-32px">CHOCO</div>
        <div class="finance-1 montserrat-black-white-14px">FINANCE</div>
      </div>
      <div class="b-container">
        <x622369b64625dd72cd6e31a12 />
        <a href="https://github.com/chocodao">
          <div class="x622369b636f18be6eacf49c4_3">
            <img
              class="path-5"
              src="https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/path-5@1x.png"
            /></div
        ></a>
      </div>
      <x622369b7e403e7ddc4ce09396 :className="x622369b7e403e7ddc4ce09396Props.className" />
    </div>
  </div>
</template>

<script>
import X622369b64625dd72cd6e31a12 from "./X622369b64625dd72cd6e31a12";
import X622369b7e403e7ddc4ce09396 from "./X622369b7e403e7ddc4ce09396";
export default {
  name: "Component121",
  components: {
    X622369b64625dd72cd6e31a12,
    X622369b7e403e7ddc4ce09396,
  },
  props: ["className", "x622369b7e403e7ddc4ce09396Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.component-12-1
  align-items: flex-end
  display: flex
  height: 249px
  min-width: 250px

.flex-col-1
  align-items: flex-start
  display: flex
  flex-direction: column
  min-height: 249px
  width: 60px

.overlap-group1
  align-items: flex-start
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/chocolate-bar-1f36b-1@1x.png)
  background-position: 50% 50%
  background-size: cover
  display: flex
  min-width: 60px

.chocolate-bar_1f36b-1
  height: 60px
  object-fit: cover
  width: 60px

.x622369b6a395099f1a779d22_1
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

.x622369b6a395099f1a779d22_1:hover,
.x622369b6bf2cca49909d6eb5_4:hover,
.x622369b636f18be6eacf49c4_3:hover
  transform: scale(1.1)

.icon-twitter
  height: 16px
  object-fit: cover
  width: 20px

.x622369b6bf2cca49909d6eb5_4
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

.icon-paper_plane
  height: 19px
  object-fit: cover
  width: 24px

.flex-col-2
  align-items: flex-start
  display: flex
  flex-direction: column
  margin-left: 12px
  min-height: 246px
  position: relative
  width: 178px

.overlap-group-11
  height: 60px
  position: relative
  width: 157px

.choco-1
  left: 0
  letter-spacing: 0
  line-height: 32px
  position: absolute
  top: 0
  white-space: nowrap

.finance-1
  left: 87px
  letter-spacing: 0
  line-height: 14px
  position: absolute
  top: 40px
  white-space: nowrap

.b-container
  align-items: flex-start
  align-self: flex-end
  display: flex
  margin-top: 60px
  min-width: 150px
  position: relative

.x622369b636f18be6eacf49c4_3
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

.path-5
  height: 23px
  object-fit: cover
  width: 24px

.component-12-1.component-12-1-3,
.component-12-1.component-12-1-4,
.component-12-1.component-12-1-8,
.component-12-1.component-12-1-9
  min-width: 215px

.component-12-1.component-12-1-3 .flex-col-2,
.component-12-1.component-12-1-4 .flex-col-2,
.component-12-1.component-12-1-8 .flex-col-2,
.component-12-1.component-12-1-9 .flex-col-2
  margin-left: unset
  width: 157px

.component-12-1.component-12-1-3 .b-container,
.component-12-1.component-12-1-4 .b-container,
.component-12-1.component-12-1-8 .b-container,
.component-12-1.component-12-1-9 .b-container
  align-self: center
  margin-right: 2.0px
  min-width: 125px

.component-12-1.component-12-1-3 .x622369b636f18be6eacf49c4_3,
.component-12-1.component-12-1-4 .x622369b636f18be6eacf49c4_3,
.component-12-1.component-12-1-8 .x622369b636f18be6eacf49c4_3,
.component-12-1.component-12-1-9 .x622369b636f18be6eacf49c4_3
  margin-left: 25px
</style>
