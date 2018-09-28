const mainContainer = document.querySelector('#musicContainer');

const current = document.querySelector('#currentMusic');
const currentPic = document.querySelector('#currentPic');
const currentTitle = document.querySelector('#currentName');
const currentFile = document.querySelector('#currentPlaying')

var musicArray = [];

const dataHTML = data.map((values) => {
    return `
        <img src='${values.image}' />
        <h2> ${values.song} </h2>
        <h3> ${values.artist} </h3>
        <h3 id='genre'>${values.genre}</h3>
        <p> ${values.file} </p>
    `
});

for(var i=0; i < dataHTML.length; i++) {
    let musicElement = document.createElement('div');
    musicElement.innerHTML = dataHTML[i];
    musicElement.classList.add('musicJar');
    
    musicElement.addEventListener("click",() => {
        currentPic.src = musicElement.getElementsByTagName('img')[0].src;
        currentTitle.innerHTML = musicElement.getElementsByTagName('h2')[0].innerHTML;
        currentFile.innerHTML = musicElement.getElementsByTagName('p')[0].innerHTML; //comment this out
        currentFile.play(); //this too
    });

    musicArray.push(musicElement);
    mainContainer.appendChild(musicElement);
}

var Categorized = (category) => {
    if(category.toLowerCase() == 'all') {
        musicArray.forEach(cur => cur.style.display = 'inline-block');
    } else {
        musicArray.filter(cur => {
            if(category.toLowerCase() === cur.childNodes[7].innerHTML.toLowerCase()) {
                return cur.style.display = 'inline-block'
            } else {
                return cur.style.display = 'none'
            }
        });
    }
}
