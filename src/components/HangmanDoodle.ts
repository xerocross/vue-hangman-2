import { defineComponent, PropType } from "vue";

export default defineComponent({
    name : "hangman-doodle",
    props : {
        imageDirectory : {
            type : String as PropType<string>,
            required : true
        },
        completion : {
            type : Number as PropType<number>,
            required : true
        }
    },
    computed : {
        imageSrc () : string {
            return `${this.imageDirectory}/hangman-doodle${this.completion}.png`;
        }
    }
});