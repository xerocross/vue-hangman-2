<template>
    <div class = "game-in-progress">
        <main-phrase-display :display-words = "displayWords" />
        <div
            v-if = "isLost"
            class = "game-over"
        >
            Game Over
        </div>
        <div class="row">
            <div 
                v-if = "!isLost" 
                class = "col-md-6"
            >
                <guessing-form 
                    :available-letters = "availableLetters"
                    :guess-letter-working = "guessLetterWorking"
                    :guess-phrase-working = "guessPhraseWorking"
                    @event_guess_letter = "guessLetter"
                    @event_guess_phrase = "guessEntirePhrase"
                />
                <guessed-letters 
                    :guessed-letters = "guessedLetters"
                    :failed-attempts = "failedAttempts"
                />
            </div>
            <div 
                :class="!isLost ? 'col-md-6' : 'lost'"
            >
                <hangman-doodle 
                    class = "hangman-doodle-outer small"
                    :completion = "failedAttempts + 1"
                    image-directory = "/images"
                />
            </div>
        </div>
        <reset-game-button 
            @event_reset = "reset" 
        />
    </div>
</template>
<script lang = "ts" src = "./GameInProgress.ts"></script>
<style lang = "scss">
    .game-over {
        text-align: center;
        font-weight: bold;
        font-size: 130%;
    }
    .lost {
        width: 100%;
        text-align: center;
    }

</style>