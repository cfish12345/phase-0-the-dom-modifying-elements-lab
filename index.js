// Write your code here!
const element = document.createElement('div');

document.body.append(element);

const ul = document.createElement('ul');
//console.log(ul);

for (let i = 0; i < 3; i++) {
    const li = document.createElement('li');
    li.textContent = (i + 1).toString();
    //console.log(li.textContent)
    ul.append(li);
    
}

element.append(ul);

const li = document.querySelector('li');
ul.childNodes[2].textContent = "JavaScript!";
li.textContent = "Hi there!";
ul.childNodes[1].textContent = "We did it!";
ul.style.fontSize = "24px";     //changes style of all elements within ul
//ul.childNodes[2].style.fontSize = "24px";  changing specific element within ul


const main = document.getElementById('main');
main.innerHTML = "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";
//console.log(li.textContent);

const mainStyle = document.getElementById('main');
mainStyle.style.height = "300px";
mainStyle.style.backgroundColor = "#27647B";

//element.textContent = "You've changed what's on the screen!";

//element.style.fontSize = "24px";
//element.style.marginLeft = "30px";
//element.style.lineHeight = 2;

element.className = "pet-listing dog";

element.classList.remove("dog");
element.classList.add("cat", "sale",);

const ulElement = document.getElementsByTagName("ul")[0];
//console.log(ulElement);
const secondChild = ul.querySelector("li:nth-child(2)");
//console.log(secondChild);
ulElement.removeChild(secondChild);

//ul.remove();

const mainRemove = document.getElementById('main');
mainRemove.remove();       

const newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
newHeader.textContent = "Christian Fish is the champion";
console.log(newHeader);


//element.append(newHeader);








