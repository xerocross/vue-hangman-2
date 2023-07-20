/* global test, expect */
import { mount } from "@vue/test-utils";
import StartGameButton from "./start-game-button.vue";

test("start game button mounts", () => {
    expect(() => {
        mount(StartGameButton, {
            global : { 
                directives : {
                    "AsyncWorking" : {}
                }
            }
        });
    }).not.toThrow();
});

test("emits start game event", async () => {
    const c = mount(StartGameButton, {
        global : { 
            directives : {
                "AsyncWorking" : {}
            }
        }
    });
    const startButton = c.find(".start-button");
    await startButton.trigger("click");
    expect(c.emitted().hasOwnProperty("event_start_game")).toBeTruthy();
});