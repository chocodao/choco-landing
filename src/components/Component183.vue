<template>
  <div :class="[`component-18-3`, className || ``]">
    <img
      class="chocolate-bar_1f36b-13"
      src="https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bb95915bc46a0faf8ae088/img/chocolate-bar-1f36b-12@1x.png"
    />
    <div class="group-3">
      <div class="overlap-group-23">
        <div class="choco-13 montserrat-black-white-64px">CHOCO</div>
        <div class="finance-13 montserrat-black-white-28px">FINANCE</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Component183",
  props: ["className"],
};
</script>

<style lang="sass">
.component-18-3
  display: flex
  height: 112px
  justify-content: space-between
  margin-top: 56px
  width: 451px

.chocolate-bar_1f36b-13
  margin-bottom: 8.6px
  margin-left: 0
  margin-top: 8.6px
  object-fit: cover
  width: 94.79px

.group-3
  align-items: flex-end
  display: flex
  min-width: 312.5px

.overlap-group-23
  height: 110px
  margin-bottom: -5.0px
  position: relative
  width: 312px

.choco-13
  left: 0
  letter-spacing: 0
  line-height: 64px
  position: absolute
  top: 0
  white-space: nowrap

.finance-13
  left: 176px
  letter-spacing: 0
  line-height: 28px
  position: absolute
  top: 74px
  white-space: nowrap

.component-18-3.component-18-3-1,
.component-18-3.component-18-3-3
  margin-top: 62px
</style>
