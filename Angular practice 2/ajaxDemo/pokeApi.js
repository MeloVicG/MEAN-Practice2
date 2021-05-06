function haveFun(){
    // $.ajax()
    console.log("fun");
}

// grabs from html ID
//when button is clicked it activates
// $('#funButton').click(haveFun)


function getFunc(){
    $.ajax({
        url: 'https://pokeapi.co/api/v2/pokemon/bulbasaur',
    })
    .done((data) => {
        console.log(data);
    })
}

$('#funButton').click()
//same ^, this is bad way 
document.getElementById('funButton').addEventListener('click',()=>{
    $.ajax({
        url: 'https://pokeapi.co/api/v2/pokemon/bulbasaur',
    })
    .done((data) => {
        console.log(data);
    })
})