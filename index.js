

function imageMaker() {
    let mainDiv = document.getElementById("main-div")
    fetch('./index.json')
        .then(response => response.json())
        .then(data => {
            for (link in data){
                //aElem = document.createElement('a')
                //aElem.setAttribute('href', link)
                let imgElem = document.createElement('img')
                imgElem.setAttribute('src', data[link])
                mainDiv.appendChild(imgElem)
            }
        })
}