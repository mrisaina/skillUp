let tabsWrap = document.querySelector(".tab-title-wrap");
let tabItems = document.querySelectorAll(".tab-title-item");
let tabsContent = document.querySelectorAll(".tab-content");

function hideTabsContent() {
  tabsContent.forEach((tab) => {
    tab.classList.add("hide");
    tab.classList.remove("show");
    tabItems.forEach((tab) => {
      tab.classList.remove("tab-active");
    });
  });
}

function showTabsContent(i = 0) {
  tabsContent[i].classList.add("show");
  tabsContent[i].classList.remove("hide");
  tabItems[i].classList.add("tab-active");
}

hideTabsContent();
showTabsContent();

tabsWrap.addEventListener("click", (e) => {
  let target = e.target;

  if (target.classList.contains("tab-title-item")) {
    tabItems.forEach((tab, idx) => {
      if (tab === target) {
        hideTabsContent();
        showTabsContent(idx);
      }
    });
  }
});
