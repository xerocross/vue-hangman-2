import { defineComponent, PropType } from "vue";
export default defineComponent({
    props : {
        guessedLetters : {
            type : Array as PropType<string[]>,
            default : () => []
        },
        failedAttempts : {
            type : Number as PropType<number>, 
            default : 0
        }
    }
});