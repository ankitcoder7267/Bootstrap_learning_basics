var emailInput = document.getElementById('email');
emailInput.onblur = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/validate-email', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        if (xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            alert(response.message);
        }
    };
    xhr.send('email=' + encodeURIComponent(emailInput.value));
};










var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=London', true);
xhr.onload = function() {
    if (xhr.status === 200) {
        var weatherData = JSON.parse(xhr.responseText);
        console.log('Current temperature:', weatherData.current.temp_c);
    }
};
xhr.send();