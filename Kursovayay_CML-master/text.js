const requestURL = "entertaiment.xml"; 

function Open(){
const xhr = new XMLHttpRequest(); 
 
xhr.open('GET',requestURL , false); 
xhr.send(); 
 
let xmlData = xhr; 
xmlData = (new DOMParser()).parseFromString(xhr.responseText, "text/xml"); 

let hashA = window.location.hash.substring(1);
let text = xmlData.getElementById(hashA); 

document.getElementById('text1').textContent=text.getElementsByTagName('discription1')[0].textContent;
document.getElementById('text2').textContent=text.getElementsByTagName('discription2')[0].textContent;
document.getElementById('text3').textContent=text.getElementsByTagName('discription3')[0].textContent;
document.getElementById('text4').textContent=text.getElementsByTagName('discription4')[0].textContent;


console.log(xmlData);
}
window.addEventListener('hashchange', Open);

Open();