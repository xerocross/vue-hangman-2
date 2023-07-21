import { defineComponent, PropType } from "vue";
export default defineComponent({
    name : "start-game-button",
    props : {
        working : {
            type : Boolean as PropType<boolean>,
            default : false
        }
    },
    methods : {
        startGame () {
            this.$emit("event_start_game");
        }
    }
});