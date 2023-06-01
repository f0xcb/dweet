document.addEventListener('DOMContentLoaded', function () {
    let twitterDefaultIntentUrl = 'https://twitter.com/intent/tweet?text=';

    let inputElement = document.getElementById('dweet-input');
    let buttonElement = document.getElementById('dweet-button');
    let hashtag = encodeURIComponent(window.location.hash.substring(1));

    inputElement.addEventListener('input', function () {
        buttonElement.href = formatUrlContent(inputElement.value);
        console.log(hashtag);
    });

    let getCurrentTimeString = function () {
        let currentTime = new Date();
        let hours = currentTime.getHours();
        let minutes = currentTime.getMinutes();

        return ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2);
    }

    let formatUrlContent = function (content) {
        let text = getCurrentTimeString() + ' - ' + content;

        if (hashtag.length > 0) {
            text = text + ' #' + hashtag;
        }

        return twitterDefaultIntentUrl + encodeURIComponent(text);
    }
});
