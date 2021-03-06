// Get input element 
let filterInput =  document.getElementById('filterInput')

// Add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    // Get Value of input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();

    // Get names ul
    let ul = document.getElementById('names')
    // Get li from ul
    let li = ul.querySelectorAll('li.collection-item');

    // Loop through colection-item lis
    for (let index = 0; index < li.length; index++) {
        let a = li[index].getElementsByTagName('a')[0];
        // if matched
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            li[index].style.display = '';
        } else {
            li[index].style.display = 'none'
        }
    }

}