<template>
    <div class="game-message">
        <div
            v-MessageToggle="message"
            class=" message"
        >
            {{ message }}
        </div>
    </div>
</template>
<script lang = "ts" src = "./GameMessage.ts"></script>
<style lang = "scss">
    .game-message {
        .message {
            color : white;
            font-size: 16pt;
            text-align: center;
            position: fixed;
            bottom:5px;
            right:5px;
            border-radius: 5px;
            border-style: solid;
            border-color: black;
            border-width: 1px;
            padding: 5px;
            visibility : hidden;
            background-color: black;
        }
        .message::before {
            content: " "
        }
    }
</style>