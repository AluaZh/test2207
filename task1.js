async function addDelay() {
    return new Promise(resolve => setTimeout(resolve, 300));
}

async function logWithDelay(text) {
    await addDelay();
    console.log(text);
}

async function logArrayInfo(array) {
    for(let i = 0; i < array.length; i ++) {
        await logWithDelay(array[i])
    }

    console.log('Done!')
}

logArrayInfo([1,2,3]);