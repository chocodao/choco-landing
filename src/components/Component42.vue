<template>
  <a href="https://app.chocofinance.com/#/melt">
    <div :class="[`component-4-2 border-4px-white`, className || ``]">
      <div class="melt-11 montserrat-black-white-20px">{{ melt }}</div>
    </div></a
  >
</template>

<script>
export default {
  name: "Component42",
  props: ["melt", "className"],
};
</script>

<style lang="sass">
.component-4-2
  align-items: flex-start
  border-radius: 33px
  cursor: pointer
  display: flex
  height: 63px
  margin-top: 64px
  min-width: 178px
  padding: 18px 57px
  transition: all 0.2s ease

.component-4-2:hover
  transform: scale(1.1)

.melt-11
  letter-spacing: 0
  line-height: 20px
  min-height: 26px
  white-space: nowrap

.component-4-2.component-4-3,
.component-4-2.component-4-3-5,
.component-4-2.component-4-3-10,
.component-4-2.component-4-3-11
  padding: 18px 53px

.component-4-2.component-4-3-1,
.component-4-2.component-4-3-6
  margin-left: 9px
  padding: 18px 53px

.component-4-2.component-4-2-2,
.component-4-2.component-4-2-7
  margin-left: 58.16px
  margin-top: 20px

.component-4-2.component-4-3-2,
.component-4-2.component-4-3-7
  align-self: flex-start
  margin-left: 81.06px
  margin-top: 21px
  padding: 18px 53px

.component-4-2.component-4-2-3,
.component-4-2.component-4-2-8
  margin-top: 36px

.component-4-2.component-4-3-3,
.component-4-2.component-4-3-8
  margin-top: 36px
  padding: 18px 53px

.component-4-2.component-4-2-4,
.component-4-2.component-4-2-9
  margin-left: 7.91px
  margin-top: 36px

.component-4-2.component-4-3-4,
.component-4-2.component-4-3-9
  margin-left: 0
  margin-top: 36px
  padding: 18px 53px

.component-4-2.component-4-2-12
  margin-left: 14.0px

.component-4-2.component-4-3-12
  margin-left: 55px
  padding: 18px 53px

.component-4-2.component-4-2-13
  margin-left: 22.34px
  margin-top: 50px

.component-4-2.component-4-3-13
  margin-left: 0.34px
  margin-top: 50px
  padding: 18px 53px
</style>
