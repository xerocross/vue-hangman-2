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
<script>
export default {
    props : {
        working : {
            type : Boolean,
            default : false
        }
    },
    methods : {
        startGame () {
            this.$emit("event_start_game");
        }
    }
};
</script>
<style lang = "scss">
</style>