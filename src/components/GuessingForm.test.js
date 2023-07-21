/* global test, expect */
import { shallowMount } from "@vue/test-utils";
import GuessingForm from "./GuessingForm.vue";

test("guessing a letter emits event_guess_letter with letter payload", async () => {
    const c = shallowMount(GuessingForm,
        {
            propsData : {
                availableLetters : ["A", "C"]
            },
            global : { 
                directives : {
                    "AsyncWorking" : {}
                }
            }
        });
    const letterSelect = c.find(".guess-letter-select");
    const options = letterSelect.findAll("option");
    const opt = options.filter(opt => opt.element.value == "C")[0];
    await opt.setSelected();
    const guessLetterButton = c.find(".guess-letter-button");
    await guessLetterButton.trigger("click");
    expect(c.emitted().hasOwnProperty("event_guess_letter")).toBeTruthy();
    expect(c.emitted("event_guess_letter")[0][0]).toBe("C");
});