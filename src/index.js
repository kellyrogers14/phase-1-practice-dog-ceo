console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function (){
    fetch ("https://dog.ceo/api/breeds/image/random/4")
    .then (res => res.json())
    .then (dogs => {
        dogs.message.forEach(dog => {
            const img = document.createElement ('img');
            img.src = dog;
            img.style.width = '300px';
            img.style.height = '250px';
            document.getElementById('dog-image-container').appendChild(img)
        })
    })
    const breedURL = "https://dog.ceo/api/breeds/list/all"
    fetch(breedURL)
    .then (res => res.json())
    .then (createBreedList)
})

function createBreedList(breed) {
    let breeds = breed.message;
    for (const item in breeds) {
        let li = document.createElement('li');
        li.textContent = item;
        li.addEventListener('click', changeColor)
        document.getElementById("dog-breeds").appendChild(li)
    }
}

function changeColor(e){
    event.target.style.color = 'green';
}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('breed-dropdown').addEventListener('change', dropDownSelection);
});

function dropDownSelection() {
    const dropdown = document.getElementById('breed-dropdown');
    const selectedLetter = this.value; 
    const breedList = document.getElementById('dog-breeds');

    const listItems = breedList.getElementsByTagName('li');

    for (let i = 0; i < listItems.length; i++) {
        const listItemText = listItems[i].textContent.trim();

        if (listItemText.toLowerCase().startsWith(selectedLetter.toLowerCase())) {
            listItems[i].style.color = 'red';
        } else {
            listItems[i].style.color = ''; 
    }
}
}


