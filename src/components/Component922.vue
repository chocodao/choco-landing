<template>
  <div :class="[`component-9-2-1`, className || ``]">
    <div class="overlap-group2-11">
      <div class="governance-11 montserrat-black-white-9px">{{ governance }}</div>
      <img
        class="line-2-23"
        src="https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bb9d05f169a613f5d59c50/img/line-2-15@1x.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Component922",
  props: ["governance", "className"],
};
</script>

<style lang="sass">
.component-9-2-1
  align-items: flex-end
  cursor: pointer
  display: flex
  margin-bottom: 0
  margin-left: 4px
  min-width: 83px
  transition: all 0.2s ease

.component-9-2-1:hover
  transform: translate(0, -5px)

.overlap-group2-11
  height: 24px
  margin-bottom: -2.3px
  position: relative
  width: 79px

.governance-11
  left: 8px
  letter-spacing: 0
  line-height: 9px
  position: absolute
  top: 0
  white-space: nowrap

.line-2-23
  height: 2px
  left: 0
  object-fit: cover
  position: absolute
  top: 9px
  width: 8px

.component-9-2-1.component-9-3-11
  margin-left: 6px
  min-width: 44px

.component-9-2-1.component-9-3-11 .overlap-group2-11
  width: 43px
</style>
