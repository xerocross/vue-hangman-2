import { defineComponent, PropType } from "vue";
export default defineComponent({
    name : "game-message",
    props : {
        message : {
            type : String as PropType<string>,
            default : ""
        }
    }
});