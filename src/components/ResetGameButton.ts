import { defineComponent } from "vue";
export default defineComponent({
    name : "reset-game-button",
    methods : {
        reset () {
            this.$emit("event_reset");
        }
    }
});