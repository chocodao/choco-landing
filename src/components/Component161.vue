<template>
  <div :class="[`component-16-1`, className || ``]">
    <component81 />
    <component91 :className="component91Props.className" />
    <component92 :governance="component921Props.governance" :className="component921Props.className" />
    <component92 :governance="component922Props.governance" :className="component922Props.className" />
    <component41 :enterApp="component41Props.enterApp" :className="component41Props.className" />
  </div>
</template>

<script>
import Component81 from "./Component81";
import Component91 from "./Component91";
import Component92 from "./Component92";
import Component41 from "./Component41";
export default {
  name: "Component161",
  components: {
    Component81,
    Component91,
    Component92,
    Component41,
  },
  props: ["className", "component91Props", "component921Props", "component922Props", "component41Props"],
};
</script>

<style lang="sass">
.component-16-1
  align-items: flex-end
  display: flex
  height: 69px
  margin-left: 795px
  min-width: 714px
  position: relative

.component-16-1.component-16-1-1,
.component-16-1.component-16-1-6
  height: 63px
  margin-left: 495px

.component-16-1.component-16-1-2,
.component-16-1.component-16-1-7
  margin-left: 195px

.component-16-1.component-16-1-3,
.component-16-1.component-16-1-8
  margin-left: unset
  margin-top: 44px
  min-width: 903px

.component-16-1.component-16-1-4,
.component-16-1.component-16-1-9
  height: 63px
  margin-left: unset
  margin-top: 44px
  min-width: 666px
</style>
