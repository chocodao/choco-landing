<template>
  <a href="https://app.chocofinance.com/#/mold">
    <div class="component-9-1-2">
      <img class="line-2-22" :src="line2" />
      <div class="place-25 montserrat-black-white-9px">{{ place }}</div>
    </div></a
  >
</template>

<script>
export default {
  name: "Component912",
  props: ["line2", "place"],
};
</script>

<style lang="sass">
.component-9-1-2
  align-items: flex-end
  cursor: pointer
  display: flex
  height: 24px
  justify-content: space-between
  margin-bottom: 0
  margin-left: 7px
  transition: all 0.2s ease
  width: 40px

.component-9-1-2:hover
  transform: translate(0, -5px)

.line-2-22
  height: 2px
  margin-bottom: -1.0px
  margin-left: 0
  object-fit: cover
  width: 7.9px

.place-25
  letter-spacing: 0
  line-height: 9px
  margin-bottom: -2.3px
  margin-right: 0.7px
  margin-top: 2px
  white-space: nowrap
  width: 31px
</style>
