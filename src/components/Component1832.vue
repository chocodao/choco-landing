<template>
  <div class="component-18-3-4">
    <img class="chocolate-bar_1f36b-17" :src="chocolateBar_1F36B" />
    <div class="group-3-4">
      <div class="overlap-group-28">
        <div class="choco-17">{{ choco }}</div>
        <div class="finance-17">{{ finance }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Component1832",
  props: ["chocolateBar_1F36B", "choco", "finance"],
};
</script>

<style lang="sass">
@import '../../variables'

.component-18-3-4
  display: flex
  height: 54px
  justify-content: space-between
  margin-right: 13.82px
  margin-top: 44px
  width: 214px

.chocolate-bar_1f36b-17
  margin-bottom: 2.5px
  margin-left: 0
  margin-top: 4.2px
  object-fit: cover
  width: 46.8px

.group-3-4
  align-items: flex-end
  display: flex
  margin-right: 0
  min-width: 146.66px

.overlap-group-28
  height: 54px
  margin-bottom: -3.5px
  position: relative
  width: 147px

.choco-17
  color: $white
  font-family: $font-family-montserrat
  font-size: 31px
  font-weight: 900
  left: 0
  letter-spacing: 0
  line-height: 31px
  position: absolute
  top: 0
  white-space: nowrap

.finance-17
  color: $white
  font-family: $font-family-montserrat
  font-size: 12px
  font-weight: 900
  left: 87px
  letter-spacing: 0
  line-height: 12px
  position: absolute
  top: 37px
  white-space: nowrap
</style>
