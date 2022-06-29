<template>
  <div class="component-17-3-1">
    <component412 :enterApp="component4121Props.enterApp" :className="component4121Props.className" />
    <component412 :enterApp="component4122Props.enterApp" :className="component4122Props.className" />
  </div>
</template>

<script>
import Component412 from "./Component412";
export default {
  name: "Component1732",
  components: {
    Component412,
  },
  props: ["component4121Props", "component4122Props"],
};
</script>

<style lang="sass">
.component-17-3-1
  display: flex
  height: 31px
  justify-content: space-between
  left: 41px
  position: absolute
  top: 0
  width: 193px
</style>
