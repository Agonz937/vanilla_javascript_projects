document.getElementById('button').addEventListener('click',loadText);

function loadText(){
    // Create XHR Object
    var xhr = new XMLHttpRequest();

    // OPEN - type, url/file, async
    xhr.open('GET','sample.txt',true)

    console.log('READY STATE: ', xhr.readyState)

    xhr.onreadystatechange = function () {
        if (this. readyState === 4 && this.status === 200) {
            console.log(this.responseText)
        }
    }

    // Sends Request
    xhr.send()
}