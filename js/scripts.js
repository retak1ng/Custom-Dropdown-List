let dropdown_items = document.querySelectorAll('.container .dropdown .lists .item');
let output = document.querySelector('.container .dropdown .output');

dropdown_items.forEach(items =>{
    items.onclick = () =>{
        output.value = items.innerHTML;
    }
});

let dropdown_input = document.querySelector('.container .dropdown .lists .input_item');

dropdown_input.oninput = () =>{
    output.value = dropdown_input.value;
}