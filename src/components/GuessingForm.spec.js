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
    const letterSelect = c.findAll(".guess-letter-select")[0];
    await letterSelect.setValue("C");
    const guessLetterButton = c.find(".guess-letter-button");
    await guessLetterButton.trigger("click");
    expect(c.emitted().hasOwnProperty("event_guess_letter")).toBeTruthy();
    expect(c.emitted("event_guess_letter")[0][0]).toBe("C");
});