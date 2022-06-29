<template>
  <a href="https://app.chocofinance.com/#/melt">
    <div class="component-8-1-2">
      <div class="overlap-group-27">
        <div class="melt-25 montserrat-black-white-9px">{{ melt }}</div>
        <img class="line-1-11" :src="line1" />
      </div></div
  ></a>
</template>

<script>
export default {
  name: "Component812",
  props: ["melt", "line1"],
};
</script>

<style lang="sass">
.component-8-1-2
  align-items: flex-end
  cursor: pointer
  display: flex
  margin-bottom: 0
  min-width: 40px
  transition: all 0.2s ease

.component-8-1-2:hover
  transform: translate(0, -5px)

.overlap-group-27
  height: 24px
  margin-bottom: -2.3px
  position: relative
  width: 39px

.melt-25
  left: 9px
  letter-spacing: 0
  line-height: 9px
  position: absolute
  top: 0
  white-space: nowrap

.line-1-11
  height: 1px
  left: 0
  object-fit: cover
  position: absolute
  top: 10px
  width: 9px
</style>
