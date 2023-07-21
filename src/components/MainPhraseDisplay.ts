import { defineComponent, PropType } from "vue";
import { Word } from "./GameInProgress";
export default defineComponent({
    name : "main-phrase-display",
    props : {
        displayWords : {
            type : Array as PropType<Word[]>,
            default : () => []
        }
    }
});