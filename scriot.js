function reverseWords() {
    const inputSentence = document.getElementById('inputSentence').value;
    
    const reversedSentence = inputSentence
        .split(' ')
        .map(function(word) {
            return word.split('').reverse().join('');
        })
        .join(' ');

    document.getElementById('outputSentence').innerText = reversedSentence;

}

function resetInput() {
    document.getElementById('inputSentence').value = '';
    document.getElementById('outputSentence').innerText = '';
}