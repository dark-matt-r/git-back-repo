
const wordUrl = "https://words.dev-apis.com/word-of-the-day";

async function retrieveWord() {
    const promise = await fetch(wordUrl);
    const processedResponse = await promise.json();
    return processedResponse;
}

