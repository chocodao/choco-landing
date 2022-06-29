<template>
  <a href="https://app.chocofinance.com/#/mold">
    <div :class="[`component-9-1`, className || ``]">
      <img
        class="line-2"
        src="https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/line-2-1@1x.png"
      />
      <div class="place montserrat-black-white-20px">MOLD</div>
    </div></a
  >
</template>

<script>
export default {
  name: "Component91",
  props: ["className"],
};
</script>

<style lang="sass">
.component-9-1
  align-items: flex-end
  cursor: pointer
  display: flex
  height: 48px
  justify-content: space-between
  margin-left: 27px
  transition: all 0.2s ease
  width: 83px

.component-9-1:hover
  transform: translate(0, -5px)

.line-2
  height: 2px
  margin-bottom: -1.0px
  object-fit: cover
  width: 16px

.place
  letter-spacing: 0
  line-height: 20px
  margin-bottom: -6px
  margin-right: -2.8px
  margin-top: 4px
  white-space: nowrap
  width: 67px

.component-9-1.component-9-1-3,
.component-9-1.component-9-1-8
  margin-left: 61px

.component-9-1.component-9-1-4,
.component-9-1.component-9-1-9
  margin-left: 13px

.component-9-1.component-9-1-10
  margin-bottom: 0.94px
  margin-left: 49px
</style>
