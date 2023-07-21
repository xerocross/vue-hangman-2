<template>
    <div class="start-game-button">
        <button
            v-AsyncWorking="working"
            class="btn btn-primary start-button"
            :disabled = "working"
            @click="startGame"
        >
            {{ working ? "starting..." : "start a new game" }}
        </button>
    </div>
</template>
<script lang = "ts" src = "./StartGameButton.ts" ></script>
<style lang = "scss">
</style>