import { defineComponent } from "vue";
import GameInProgress from "./components/GameInProgress.vue";
import GameMessage from "./components/GameMessage.vue";
import StartGameButton from "./components/StartGameButton.vue";
export default defineComponent({
    name : "vue-hangman",
    components : {
        GameInProgress,
        GameMessage,
        StartGameButton
    },
    props : {
    },
    data () {
        return {
            isPhraseGuessCorrect : false,
            startGameWorking : false,
            error : false,
            isNewMessage : false,
            message : ""
        };
    },
    computed : {
        isGameInProgress () {
            return this.$store.state.gameInProgress;
        },
        isWon () {
            return this.$store.state.isWon;
        }
    },
    methods : {
        startGame () {
            this.startGameWorking = true;
            this.$store.dispatch("startGame")
                .then(() => {
                    this.startGameWorking = false;
                })
                .catch((e : unknown) => {
                    console.error("An error occurred in starting the game", e);
                    this.error = true;
                });
        },
        pushNewMessage (val : string) {
            this.message = val;
            this.isNewMessage = true;
            setTimeout(() => {
                this.isNewMessage = false;
            }, 1000);
        },
        reset () {
            this.startGame();
        }
    }
});