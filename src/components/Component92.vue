<template>
  <div :class="[`component-9-2`, className || ``]">
    <div class="overlap-group2-1">
      <div class="governance montserrat-black-white-20px">{{ governance }}</div>
      <img
        class="line-2-11"
        src="https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/line-2-1@1x.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Component92",
  props: ["governance", "className"],
};
</script>

<style lang="sass">
.component-9-2
  align-items: flex-end
  cursor: pointer
  display: flex
  height: 48px
  margin-left: 27px
  min-width: 169px
  transition: all 0.2s ease

.component-9-2:hover
  transform: translate(0, -5px)

.overlap-group2-1
  height: 50px
  margin-bottom: -6px
  position: relative
  width: 169px

.governance
  left: 15px
  letter-spacing: 0
  line-height: 20px
  position: absolute
  top: 0
  white-space: nowrap

.line-2-11
  height: 2px
  left: 0
  object-fit: cover
  position: absolute
  top: 20px
  width: 16px

.component-9-2.component-9-3,
.component-9-2.component-9-3-1,
.component-9-2.component-9-3-2,
.component-9-2.component-9-3-5,
.component-9-2.component-9-3-6,
.component-9-2.component-9-3-7
  margin-left: 28px
  min-width: 90px

.component-9-2.component-9-3 .overlap-group2-1,
.component-9-2.component-9-3-1 .overlap-group2-1,
.component-9-2.component-9-3-2 .overlap-group2-1,
.component-9-2.component-9-3-3 .overlap-group2-1,
.component-9-2.component-9-3-4 .overlap-group2-1,
.component-9-2.component-9-3-5 .overlap-group2-1,
.component-9-2.component-9-3-6 .overlap-group2-1,
.component-9-2.component-9-3-7 .overlap-group2-1,
.component-9-2.component-9-3-8 .overlap-group2-1,
.component-9-2.component-9-3-9 .overlap-group2-1,
.component-9-2.component-9-3-10 .overlap-group2-1
  width: 90px

.component-9-2.component-9-2-3,
.component-9-2.component-9-2-8
  margin-left: 70px

.component-9-2.component-9-3-3,
.component-9-2.component-9-3-8
  margin-left: 77px
  min-width: 90px

.component-9-2.component-9-2-4,
.component-9-2.component-9-2-9
  margin-left: 5px

.component-9-2.component-9-3-4,
.component-9-2.component-9-3-9
  margin-left: 11px
  min-width: 90px

.component-9-2.component-9-2-10
  margin-bottom: 0.94px
  margin-left: 49px

.component-9-2.component-9-3-10
  margin-bottom: 0.94px
  margin-left: 50px
  min-width: 90px
</style>
