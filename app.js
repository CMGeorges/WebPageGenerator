
// Variables
let inputs = document.querySelectorAll("input");//allow me to get all the inputs
let page = document.getElementById("mypage");
let parent;
// functions

function create_element() {
    let element = document.createElement(inputs[0].value);

    for (let i = 1; i < inputs.length; i++) {
        
        let attribute = inputs[i].getAttribute("placeholder");
    
        let value = inputs[i].value;
        
        if (value) {
            
            element[attribute] = value;
        }
        page.appendChild(element);
    }
    
    parent = element.parentNode;
    
    console.log(element);
}

function remove_element() {
    let our_element = parent.lastChild;

    our_element.remove();
}

function reset() {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}
