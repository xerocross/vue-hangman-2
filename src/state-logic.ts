import Vuex from "vuex";
import HangmanService, { GuessEntirePhraseResponseShape } from "./service/hangman-service";
import { noteThat, setVerbose as setLiterateVerbose } from "@xerocross/literate";

setLiterateVerbose(true);

function cloneArray (arr: string[]) {
    const newArray: string[] = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(arr[i]);
    }
    return newArray;
}
interface GuessLetterPayload {
    letter : string
}

interface StateShape {
    phraseNum : number,
    phraseLen : number,
    revealedPhrase : (string | undefined)[],
    guessedLettersSet : string[],
    availableLetters : string[],
    failedAttempts : number,
    gameInProgress : boolean,
    isWon : boolean,
    isLost : boolean,
    httpInProgress : boolean
}

export interface GuessEntirePhraseShape {
    guessPhrase : string
}

const StartingAvailableLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export const store = new Vuex.Store({
    state : {
        phraseNum : NaN,
        phraseLen : 0,
        revealedPhrase : [],
        guessedLettersSet : [],
        availableLetters : StartingAvailableLetters,
        failedAttempts : 0,
        gameInProgress : false,
        isWon : false,
        isLost : false,
        httpInProgress : false
    } as StateShape,
    mutations : {
        startGame : (state, payload) => {
            console.log("mutate startGame", state, payload);
            state.gameInProgress = true;
            state.revealedPhrase = [];
            state.availableLetters = StartingAvailableLetters;
            for (let i = 0; i < state.phraseLen; i++) {
                state.revealedPhrase[i] = payload.data.phrase[i] ? payload.data.phrase[i] : "_";
            }
            state.isWon = false;
            state.isLost = false;
            state.failedAttempts = 0;
            state.guessedLettersSet = [];
        },
        guessedLetter : (state, payload) => {
            state.guessedLettersSet.push(payload.letter);
            const index = state.availableLetters.indexOf(payload.letter);
            const newAvailableLetters = cloneArray(state.availableLetters);
            newAvailableLetters.splice(index, 1);
            state.availableLetters = newAvailableLetters;
        },
        failedAttempt : (state) => {
            state.failedAttempts++;
            if (state.failedAttempts >= 6) {
                state.isLost = true;
            }
        },
        phraseData : (state, payload) => {
            state.phraseNum = payload.phraseNum;
            state.phraseLen = payload.phraseLen;
        },
        mergeNewReveal : (state, payload) => {
            const newReveal: (string | undefined)[] = [];
            for (let i = 0; i < state.phraseLen; i++) {
                if (payload.revealedPhrase[i]) {
                    newReveal[i] = payload.revealedPhrase[i];
                } else {
                    newReveal[i] = state.revealedPhrase[i];
                }
            }
            state.revealedPhrase = newReveal;
        },
        won : (state) => {
            state.isWon = true;
            state.gameInProgress = false;
        }
    },
    actions : {
        startGame ({ commit }): Promise<void> {
            console.warn("we are in the startGame action");
            return new Promise((resolve, fail) => {
                HangmanService.getInitialPhrase()
                    .subscribe((val) => {
                        console.warn("in startGame subscribe val", val);
                        if (val.status == "SUCCESS") {
                            const phraseLen = val.payload.data.phrase.length;
                            commit("phraseData", {
                                phraseNum : val.payload.data.phraseNum,
                                phraseLen : phraseLen
                            });
                            commit("startGame", val.payload);
                            resolve();
                        } else {
                            fail();
                        }
                    });
            });
        },
        guessLetter ({ commit, state }, payload : GuessLetterPayload) {
            noteThat(`guessLetter gets a payload object passed in which
            has a 'letter' property, in this case letter = ${payload.letter}.`);
            commit("guessedLetter", { letter : payload.letter });
            return new Promise((resolve, fail) => {
                HangmanService.guessLetter(state.phraseNum.toString(), payload.letter)
                    .subscribe((val) => {
                        console.log("guess letter", val);
                        if (val.status == "SUCCESS") {
                            if (val.payload.data.success == false) {
                                commit("failedAttempt");
                                resolve(false);
                            } else {
                                commit("mergeNewReveal", {
                                    revealedPhrase : val.payload.data.phrase
                                });
                                resolve(true);
                            }
                        } else {
                            fail();
                            alert("SORRY. An unexpected error occured.");
                        }
                    });
            });
        },
        guessEntirePhrase ({ commit, state }, payload : GuessEntirePhraseShape) {
            return new Promise((resolve, reject) => {
                HangmanService.guessEntirePhrase(state.phraseNum.toString(), payload.guessPhrase)
                    .subscribe((val) => {
                        const guessPhraseResponse = val as GuessEntirePhraseResponseShape;
                        console.warn("after guessEntirePhrae in state-logic", val);
                        if (guessPhraseResponse.status == "SUCCESS") {
                            if (guessPhraseResponse.payload.data.success == true) {
                                console.log("true: won");
                                commit("won");
                                resolve(true);
                            }
                            else if (guessPhraseResponse.payload.data.success == false) {
                                console.log("false: won");
                                commit("failedAttempt");
                                resolve(false);
                            }
                        } else {
                            reject();
                        }
                    });
            });
        }
    }
});
