/// Created by Jesus Rodriguez
/// May 2020
/// 
//// Blueprint Monday 27th 

export let htm = (element,attribute,textNode) =>  `<${element}  ${attribute}>` + `${textNode}` + `</${element}>`;

export let generateDIV = function(parent, newHTMLselector = "div") {    
    const father = document.getElementById(parent);  // parent element
    const div = document.createElement(newHTMLselector); // create element
    father.appendChild(div);   
    return div // [father, div]   
};

export let divElement = function() {
    //when the element  node is created, it is not yet part of the DOM tree. 
    let createElement  = document.createElement(this.html); 
    createElement.setAttribute(this.attr, this.valu);
    if (this.attr === "class") {
        let clas = document.querySelector(`.${this.brch}`);
        clas.append(createElement);
    }else if (this.attr === "id"){
        let id = document.getElementById(`${this.brch}`);
        id.appendChild(createElement);      
    }return   createElement
};

export function newElement (parent, element, attribute, value) {
    //when the element  node is created, it is not yet part of the DOM tree. 
    let createElement  = document.createElement(element); 
    createElement.setAttribute(attribute, value);
    if (attribute === "class") {
        let clas = document.querySelector(`.${parent}`);
        clas.append(createElement);
    }else if (attribute === "id"){
        let id = document.getElementById(`${parent}`);
        console.log(attribute);
        id.appendChild(createElement);      
    }return   createElement
      
}
