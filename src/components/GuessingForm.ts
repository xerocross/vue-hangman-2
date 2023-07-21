import { defineComponent, PropType } from "vue";
export default defineComponent({
    name : "guessing-form",
    props : {
        availableLetters : {
            type : Array as PropType<string[]>,
            default : () => []
        },
        guessLetterWorking : {
            type : Boolean as PropType<boolean>,
            default : false
        },
        guessPhraseWorking : {
            type : Boolean as PropType<boolean>,
            default : false
        }
    },
    data : () => {
        return {
            currentGuessPhrase : "",
            currentGuessLetter : ""
        };
    },
    computed : {
        working () {
            return this.guessPhraseWorking || this.guessLetterWorking;
        }   
    },
    watch : {
        availableLetters : {
            handler (val) {
                this.currentGuessLetter = val[0];
            },
            deep : true
        }
    },
    methods : {
        guess () {
            this.$emit("event_guess_letter", this.currentGuessLetter);
            
        },
        guessEntirePhrase () {
            this.$emit("event_guess_phrase", this.currentGuessPhrase);
            this.currentGuessPhrase = "";
        }
    }
});