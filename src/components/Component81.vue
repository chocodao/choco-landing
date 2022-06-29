<template>
  <a href="https://app.chocofinance.com/#/melt">
    <div :class="[`component-8-1`, className || ``]">
      <div class="overlap-group-1">
        <div class="melt montserrat-black-white-20px">MELT</div>
        <img
          class="line-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/line-1@1x.png"
        />
      </div></div
  ></a>
</template>

<script>
export default {
  name: "Component81",
  props: ["className"],
};
</script>

<style lang="sass">
.component-8-1
  align-items: flex-end
  cursor: pointer
  display: flex
  height: 48px
  min-width: 84px
  transition: all 0.2s ease

.component-8-1:hover
  transform: translate(0, -5px)

.overlap-group-1
  height: 50px
  margin-bottom: -6px
  position: relative
  width: 84px

.melt
  left: 18px
  letter-spacing: 0
  line-height: 20px
  position: absolute
  top: 0
  white-space: nowrap

.line-1
  height: 1px
  left: 0
  object-fit: cover
  position: absolute
  top: 20px
  width: 19px

.component-8-1.component-8-1-10
  margin-bottom: 3.2px
  margin-left: 711px
</style>
