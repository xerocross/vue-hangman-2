import Observable from "@xerocross/utils.observable";

const baseUrl = `https://xero-hangman-api-2-1d1d805ff749.herokuapp.com`;

const getInitialPhraseUrl = `${baseUrl}/getStartPhrase`;
function getCheckLetterUrl (phraseNum : string, letter : string ) {
    return `${baseUrl}/guessLetter?letter=${letter}&phrasenum=${phraseNum}`;
}
function getPhraseCheckUrl (phraseNum : string, guessPhrase : string) {
    const encodedPhrase = encodeURI(guessPhrase);
    return `${baseUrl}/guessPhrase?guessphrase=${encodedPhrase}&phrasenum=${phraseNum}`;
}

export interface GuessEntirePhraseResponseShape {
    status : string,
    payload : {
        data : {
            success : boolean
        }
    }
}
const get = function (url : string) {
    return new Observable((observer) => {
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    observer.next({
                        status : "FAIL"
                    });
                }
            })
            .then((response : JSON) => {
                observer.next({
                    status : "SUCCESS",
                    payload : {
                        data : response
                    }
                });
            })
            .catch((error : unknown) => {
                console.error("an error occurred in the hangman service", error);
                observer.next({
                    status : "ERROR",
                    payload : {
                        error : error
                    }
                });
            });
    });
};

export default {
    getPhraseData () {
        throw new Error("getPhraseData is deprecated");
    },
    getInitialPhrase () {
        const url = getInitialPhraseUrl;
        return get(url);
    },
    guessLetter (phraseNum : string, letter : string) {
        const url = getCheckLetterUrl(phraseNum, letter);
        return get(url);
    },
    guessEntirePhrase (phraseNum : string, guessPhrase : string) {
        const url = getPhraseCheckUrl(phraseNum, guessPhrase);
        return get(url);
    }
};


