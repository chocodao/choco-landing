<template>
  <a href="https://app.chocofinance.com/#/mold" className="align-self-flex-start">
    <div :class="[`component-4-1 border-1px-dove-gray`, className || ``]">
      <div class="enter-app montserrat-black-white-20px">{{ enterApp }}</div>
    </div></a
  >
</template>

<script>
export default {
  name: "Component41",
  props: ["enterApp", "className"],
};
</script>

<style lang="sass">
@import '../../variables'

.component-4-1
  align-items: flex-end
  align-self: flex-start
  background-color: $coral-red
  border-radius: 33px
  cursor: pointer
  display: flex
  height: 63px
  justify-content: flex-end
  margin-left: 28px
  min-width: 178px
  padding: 16px 26px
  transition: all 0.2s ease

.component-4-1:hover
  transform: scale(1.1)

.enter-app
  letter-spacing: 0
  line-height: 20px
  min-height: 26px
  min-width: 125px
  white-space: nowrap

.component-4-1.component-4-4,
.component-4-1.component-4-4-1,
.component-4-1.component-4-4-2,
.component-4-1.component-4-4-3,
.component-4-1.component-4-4-4,
.component-4-1.component-4-4-5,
.component-4-1.component-4-4-6,
.component-4-1.component-4-4-7,
.component-4-1.component-4-4-8,
.component-4-1.component-4-4-9
  align-self: unset
  background-color: $judge-gray
  height: unset
  justify-content: unset
  margin-left: unset
  padding: 16px 37px

.component-4-1.component-4-4 .enter-app,
.component-4-1.component-4-4-1 .enter-app,
.component-4-1.component-4-4-2 .enter-app,
.component-4-1.component-4-4-3 .enter-app,
.component-4-1.component-4-4-4 .enter-app,
.component-4-1.component-4-4-5 .enter-app,
.component-4-1.component-4-4-6 .enter-app,
.component-4-1.component-4-4-7 .enter-app,
.component-4-1.component-4-4-8 .enter-app,
.component-4-1.component-4-4-9 .enter-app,
.component-4-1.component-4-4-10 .enter-app,
.component-4-1.component-4-4-11 .enter-app,
.component-4-1.component-4-4-12 .enter-app,
.component-4-1.component-4-4-13 .enter-app
  min-width: 104px

.component-4-1.component-4-5,
.component-4-1.component-4-5-1,
.component-4-1.component-4-5-2,
.component-4-1.component-4-5-3,
.component-4-1.component-4-5-4,
.component-4-1.component-4-5-5,
.component-4-1.component-4-5-6,
.component-4-1.component-4-5-7,
.component-4-1.component-4-5-8,
.component-4-1.component-4-5-9
  align-self: unset
  background-color: $tobacco-brown
  height: unset
  margin-left: unset
  padding: 16px 62px

.component-4-1.component-4-5 .enter-app,
.component-4-1.component-4-5-1 .enter-app,
.component-4-1.component-4-5-2 .enter-app,
.component-4-1.component-4-5-3 .enter-app,
.component-4-1.component-4-5-4 .enter-app,
.component-4-1.component-4-5-5 .enter-app,
.component-4-1.component-4-5-6 .enter-app,
.component-4-1.component-4-5-7 .enter-app,
.component-4-1.component-4-5-8 .enter-app,
.component-4-1.component-4-5-9 .enter-app,
.component-4-1.component-4-5-10 .enter-app,
.component-4-1.component-4-5-11 .enter-app,
.component-4-1.component-4-5-12 .enter-app,
.component-4-1.component-4-5-13 .enter-app
  min-width: 53px

.component-4-1.component-4-1-1,
.component-4-1.component-4-1-6
  align-self: unset

.component-4-1.component-4-1-3,
.component-4-1.component-4-1-8
  margin-left: 90px

.component-4-1.component-4-1-4,
.component-4-1.component-4-1-9
  align-self: unset
  margin-left: 32px

.component-4-1.component-4-1-10
  margin-left: 107px

.component-4-1.component-4-4-10,
.component-4-1.component-4-4-11
  align-self: unset
  background-color: $judge-gray
  justify-content: unset
  margin-left: unset
  padding: 16px 37px

.component-4-1.component-4-5-10
  align-self: unset
  background-color: $tobacco-brown
  margin-left: 30px
  padding: 16px 62px

.component-4-1.component-4-1-11
  margin-left: 66px

.component-4-1.component-4-5-11
  align-self: unset
  background-color: $tobacco-brown
  margin-left: 34px
  padding: 16px 62px

.component-4-1.component-4-1-12,
.component-4-1.component-4-1-13
  margin-left: 31px

.component-4-1.component-4-4-12,
.component-4-1.component-4-4-13
  align-self: unset
  background-color: $judge-gray
  justify-content: unset
  left: 0
  margin-left: unset
  padding: 16px 37px
  position: absolute
  top: 527px

.component-4-1.component-4-5-12
  align-self: unset
  background-color: $tobacco-brown
  left: 210px
  margin-left: unset
  padding: 16px 62px
  position: absolute
  top: 527px

.component-4-1.component-4-5-13
  align-self: unset
  background-color: $tobacco-brown
  left: 176px
  margin-left: unset
  padding: 16px 62px
  position: absolute
  top: 527px
</style>
