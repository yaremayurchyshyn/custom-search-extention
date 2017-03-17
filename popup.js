function getSearchResults(input, callback) {
    const num = 10;
    const offset = 1;
    const key = 'AIzaSyAh4JannnWmQGPteoNpDX0yCEPZrhyhcFk'; //api key
    const cx = '004703970912009905540%3Ajxpwztuth9q'; //search engine

    var searchUrl = 'https://www.googleapis.com/customsearch/v1' +
        '?num=' + num + '&' +
        'start=' + offset + '&' +
        'key=' + key + '&' +
        'cx=' + cx + '&' +
        'q=' + input;
    var x = new XMLHttpRequest();
    x.open('GET', searchUrl);
    x.responseType = 'json';
    x.onload = function () {
        var response = x.response;
        callback(response);
    };
    x.onerror = function () {
        errorCallback('Network error.');
    };
    x.send();
}

function renderButtonValue(statusText) {
    document.getElementById('search-submit').value = statusText;
}

function getSearchList(items) {
    return '<ul class="search-list">' +
        items.map(function (item) {
            return (
                '<li class="search-item">' +
                '<h2><a target="_blank" href="' + item.link + '">' + item.htmlTitle + '</a></h2>' +
                '<p class="base-link"><a target="_blank" href="http://' + item.displayLink + '">' + item.displayLink + '</a></p>' +
                '<p>' + item.snippet + '</p>' +
                '</li>'
            );
        }).join('')
        + '</ul>';
}

document.addEventListener('DOMContentLoaded', function () {
    renderButtonValue('Submit');

    var form = document.getElementById('search-form');
    var input = document.getElementById('search-input');
    input.focus();

    form.onsubmit = function () {
        renderButtonValue('Loading...');

        getSearchResults(input.value, function (resp) {

            renderButtonValue('Submit');
            var searchResult = document.getElementById('search-result');

            var searchInfo = '<div class="search-info">' +
                'The estimated number of results: ' +
                resp.searchInformation.formattedTotalResults +
                '(' + resp.searchInformation.formattedSearchTime + 'sec.)' +
                '</div>';
            searchResult.innerHTML = searchInfo + getSearchList(resp.items);

        }, function (errorMessage) {
            renderButtonValue('Submit');
            console.log(errorMessage);
        });

        return false;
    };
});