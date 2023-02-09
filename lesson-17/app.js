// console.log(document.documentElement);
// console.log(document.body);
// console.log(document.body.children);

// for (let i = 0; i < document.body.children.length; i += 1) {
//   console.log(document.body.children[i]);
// }

// for of - масивоподібні структури

// for (let item of document.body.children) {
//   console.log(item);
// }

// console.log(document.body.children[1]);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);

// console.log(document.body.firstElementChild.nextElementSibling);
// console.log(document.body.lastElementChild.previousElementSibling);

// console.log(document.body.children[2].firstElementChild.nextElementSibling);
// console.log(document.body.children[2].children[1]);

// let title = document.getElementById("title");
// console.log(title);

// let text = document.getElementsByClassName("text");
// console.log(text);

// let li = document.getElementsByTagName("li");
// console.log(li);

// let text = document.querySelector(".text");
// console.log(text);

// let li = document.querySelectorAll("li");
// console.log(li); // повертає псевдомасив

// console.log(title.hasAttribute("id"));
// console.log(title.hasAttribute("class"));

// console.log(title.getAttribute("id"));
// console.log(title.getAttribute("class"));

// console.log(text.getAttribute("id"));
// console.log(text.getAttribute("class"));

// title.setAttribute("name", "hello-name");
// title.removeAttribute("name");

// console.log(title.getAttribute("name"));

// let div = document.createElement("h1");
// div.textContent = "hello h1";

// div.innerHTML = "<span>Hello Jack</span>";
// div.style.color = "aqua";
// div.style.backgroundColor = "purple";

// document.body.prepend(div);
// document.body.append(div);

// document.body.firstElementChild.before("h1");
// document.body.firstElementChild.after("h1");

// title.onclick = function () {
//   alert("hello world!!!");
// };

// title.addEventListener("click", function () {
//   alert("hello start");
// });

// title.addEventListener("click", function () {
//   alert("bye start");
// });

// title.addEventListener("click", function () {
//   title.style.color = "red";
//   title.style.backgroundColor = "blue";
//   title.style.padding = "50px";
// });

// title.addEventListener("click", function (e) {
//   let target = e.target;
//   target.style.color = "white";
//   target.style.backgroundColor = "purple";
//   target.style.padding = "15px";
// });

document.querySelector("[name=change]").addEventListener("click", function () {
  let img = document.querySelector("img");
  if (img.getAttribute("src") === "./apple-img.png") {
    img.setAttribute("src", "./facebook-img.png");
  } else {
    img.setAttribute("src", "./apple-img.png");
  }
});
