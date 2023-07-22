import { shallowMount } from "@vue/test-utils";
import MainPhraseDisplay from "./MainPhraseDisplay.vue";
import { CharObject, Word } from "./GameInProgress";

beforeEach(() => {
    localStorage.clear();
});

test("sanity", () => {
    expect(true).toBeTruthy();
});

test("main-phrase-display mounts", function () {
    expect(() => {
        shallowMount(MainPhraseDisplay);
    }).not.toThrow();
});


test("displays a phrase", function () {

    function getWord (text, index) {
        const chars = text.split("");
        const charObjects = [];
        for (let i = 0; i < chars.length; i++) {
            charObjects.push(new CharObject(chars[i], i ));
        }
        return new Word(charObjects, index);
    }

    const displayWords = [
        getWord("ap", 0),
        getWord("pe", 1)
    ];
    const mainPhraseDisplay = shallowMount(MainPhraseDisplay, {
        propsData : {
            displayWords : displayWords
        }
    });
    const charSpans = mainPhraseDisplay.findAll(".letter-char");

    expect(charSpans.length).toBe(4);
    expect(charSpans.at(0).text()).toBe("a");
    expect(charSpans.at(1).text()).toBe("p");
    expect(charSpans.at(2).text()).toBe("p");
    expect(charSpans.at(3).text()).toBe("e");
});