<template>
  <div :class="[`component-14-1`, className || ``]">
    <div class="learn-11 montserrat-normal-white-30px">Learn</div>
    <div class="component-container-20">
      <component171 :children="component171Props.children" />
      <component172 />
    </div>
    <div class="component-container-21">
      <component181 :children="component181Props.children" />
      <component18122 :children="component18122Props.children" />
    </div>
  </div>
</template>

<script>
import Component171 from "./Component171";
import Component172 from "./Component172";
import Component181 from "./Component181";
import Component18122 from "./Component18122";
export default {
  name: "Component141",
  components: {
    Component171,
    Component172,
    Component181,
    Component18122,
  },
  props: ["className", "component171Props", "component181Props", "component18122Props"],
};
</script>

<style lang="sass">
.component-14-1
  align-items: flex-start
  display: flex
  flex-direction: column
  margin-left: 142px
  min-height: 155px
  width: 191px

.learn-11
  letter-spacing: 0
  line-height: 30px
  margin-left: 1.99px
  margin-top: 4px
  min-height: 39px
  white-space: nowrap

.component-container-20
  height: 24px
  margin-left: 1.6px
  margin-top: 28px
  position: relative
  width: 191px

.component-container-21
  height: 24px
  margin-top: 37px
  position: relative
  width: 92px

.component-14-1.component-14-1-1,
.component-14-1.component-14-1-6
  margin-left: 84px
  margin-top: 11px

.component-14-1.component-14-1-2,
.component-14-1.component-14-1-7
  margin-left: 37px
  margin-top: 11px

.component-14-1.component-14-1-3,
.component-14-1.component-14-1-8
  margin-left: 21px

.component-14-1.component-14-1-4,
.component-14-1.component-14-1-9
  margin-left: 48px
</style>
