/* eslint-disable no-undef */
import {mount} from '@vue/test-utils';
import StartGameButton from "./start-game-button.vue";

beforeAll(()=> {

});

test("start game button mounts", () => {
    expect(()=>{
        mount(StartGameButton);
    }).not.toThrow();
});

test("emits start game event", () => {
    const c = mount(StartGameButton);
    const startButton = c.find(".start-button");
    startButton.trigger("click");
    expect(c.emitted()["event_start_game"].length).toBe(1);
});