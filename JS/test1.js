/*
 * @Author: your name
 * @Date: 2021-10-19 16:57:49
 * @LastEditTime: 2021-10-20 15:36:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vuec:\Users\EINYUN\Pictures\Screenshots\JS\test1.js
 */
window.onload = function () {

let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/1.png') {
      myImage.setAttribute('src','img/3.png');
    } else {
      myImage.setAttribute('src','img/1.png');
    }
}
function setHeading(Lisa) {
  let myHeading = document.querySelector('h1');
  myHeading.textContent = 'Hello!' + Lisa + '!';
}   
function setUserName() {
  let myName = prompt('请输入你的名字');
  localStorage.setItem('name', myName);
  setHeading(myName);
}    
let storedName = localStorage.getItem('name');
if(!storedName) {
   setUserName();
} else {
   setHeading(storedName);
}    
let myButton = document.querySelector('button'); 
myButton.onclick = setUserName;
}
