<template>
    <div class="guessed-letters">
        <p>Guessed Letters: <span class="guessed-letters-inner-span">{{ guessedLetters.join(" ") }}</span></p>
        <p>Failed Attempts: <span class="failed-attempts-num">{{ failedAttempts }}</span></p>
    </div>
</template>
<script lang = "ts" src = "./guessed-letters.ts"></script>
<style lang="scss">
    .guessed-letters {
        font-size: 18pt;
    }
</style>