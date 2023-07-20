import MainPhraseDisplay from "./MainPhraseDisplay";
import ResetGameButton from "./ResetGameButton";
import GuessedLetters from "./guessed-letters.vue";
import GuessingForm from "./guessing-form.vue";
import HangmanDoodle from "./HangmanDoodle.vue";
import { GuessEntirePhraseShape } from "../state-logic";

class CharObject {
    constructor (charString : string, index : number) {
        this.charString = charString;
        this.index = index;
    }
    public charString;
    public index;
}

class Word {
    constructor (chars : CharObject[], index : number) {
        this.index = index;
        this.chars = chars;
    }
    public index : number;
    public chars : CharObject[];
}

function getWord (text : string, index : number) : Word {
    const chars = text.split("");
    const charObjects : CharObject[] = [];
    for (let i = 0; i < chars.length; i++) {
        charObjects.push(new CharObject(chars[i], i ));
    }
    return new Word(charObjects, index);
}

export default {
    name : "game-in-progress",
    components : {
        MainPhraseDisplay,
        ResetGameButton,
        GuessedLetters,
        GuessingForm,
        HangmanDoodle
    },
    data : () => {
        return {
            working : false,
            startGameWorking : false,
            error : false,
            guessLetterWorking : false,
            guessPhraseWorking : false
        };
    },
    computed : {
        revealedPhrase () {
            return this.$store.state.revealedPhrase;
        },
        guessedLetters () {
            return this.$store.state.guessedLettersSet;
        },
        availableLetters () {
            return this.$store.state.availableLetters;
        },
        displayWords () : Word[] {
            const words : Word[] = [];
            const phrase = this.revealedPhrase.join("");
            if (typeof phrase == "string") {
                const preWords = phrase.split(" ");
                for (let i = 0; i < preWords.length; i++) {
                    words.push(getWord(preWords[i], i));
                }
            }
            return words;
        },
        failedAttempts () {
            return this.$store.state.failedAttempts;
        },
        isLost () {
            return this.$store.state.isLost;
        }
    },
    methods : {
        reset () {
            this.$emit("event_reset");
        },
        fail () {

        },
        guessLetter (letter : string) {
            this.pushMessage(`looking for any ${letter}s`);
            this.guessLetterWorking = true;
            this.$store.dispatch("guessLetter", {
                letter
            })
                .then((isLetterGuessCorrect : boolean) => {
                    this.guessLetterWorking = false;
                    if (isLetterGuessCorrect == false) {
                        this.pushMessage(`letter ${letter} not found`);
                    } else {
                        this.pushMessage("found");
                    }
                })
                .catch(() => {
                    this.guessLetterWorking = false;
                    this.error = true;
                });
        },
        guessEntirePhrase (phrase : string) {
            this.pushMessage(`checking your phrase`);
            this.guessPhraseWorking = true;
            this.$store.dispatch("guessEntirePhrase", {
                guessPhrase : phrase
            } as GuessEntirePhraseShape)
                .then((guessWasCorrect : boolean) => {
                    this.guessPhraseWorking = false;
                    if (guessWasCorrect == false) {
                        this.pushMessage(`phrase not correct`);
                    }
                })
                .catch((e : unknown) => {
                    this.guessPhraseWorking = false;
                    this.error = true;
                    console.error(e);
                });
        },
        pushMessage (message : string) {
            this.$emit("event_push_message", message);
        }
    }
};