<template>
    <div class="guessing-form">
        <form
            class="form-group"
            @submit.prevent
        >
            <div class="row">
                <div class="col-6">
                    <select
                        v-model="currentGuessLetter"
                        name = "guess-letter"
                        class="form-control guess-letter-select"
                        :disabled="working"
                    >
                        <option
                            v-for="i in availableLetters"
                            :key="i"
                            :value="i"
                        >
                            {{ i }}
                        </option>
                    </select>
                </div>
                <div class="col-6">
                    <button
                        ref="guess-letter-button"
                        v-AsyncWorking="guessLetterWorking"
                        class="btn btn-primary guess-letter-button"
                        :disabled="currentGuessLetter == '' || working"
                        @click="guess"
                    >
                        guess letter
                    </button>
                </div>
            </div>
        </form>
                
        <form
            class="form-group"
            @submit.prevent
        >
            <!-- <label for="guessPhrase">Guess Entire Phrase</label> -->
            <div class="row">
                <div class="col-6">
                    <input
                        v-model="currentGuessPhrase"
                        v-AsyncWorking="guessPhraseWorking"
                        name="guessPhrase"
                        :disabled="guessPhraseWorking"
                        type="text"
                        class="form-control guess-phrase-input"
                    >
                </div>
                <div class="col-6">
                    <button
                        class="btn btn-primary guess-phrase-button"
                        :disabled="working"
                        @click="guessEntirePhrase"
                    >
                        guess phrase
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>
<script lang = "ts" src = "./GuessingForm.ts"></script>
<style lang="scss"></style>