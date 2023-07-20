export default {
    name : "reset-game-button",
    methods : {
        reset () {
            this.$emit("event_reset");
        }
    }
};