const btns = document.querySelectorAll(".homeButton");
const main = document.querySelector(".main");

bgImages = [
  "url(https://images.unsplash.com/photo-1487260211189-670c54da558d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80)",
  "url(https://images.unsplash.com/photo-1547306720-44f7c7c03836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80)",
  "url(https://images.unsplash.com/photo-1512514076443-1eef59c260b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80)",
  "url(https://images.unsplash.com/photo-1560260004-5c0f4c8b12e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80)",
  "url(https://images.unsplash.com/photo-1498511133332-ad66b117f533?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=646&q=80)",
  "url(https://images.unsplash.com/photo-1521052313888-1181c2f5f406?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)",
  "url(https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80)",
  "url(https://images.unsplash.com/photo-1490368168320-00b82f60dd71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80)",
  "url(https://images.unsplash.com/photo-1584396488930-04818823f0a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80)",
  "url(https://images.unsplash.com/photo-1530733895788-f39cc96b6ae8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
];

const handler = (index) => {
  const { style } = main;
  style.backgroundImage = bgImages[index];
};

btns.forEach((btn, index) => {
  btn.addEventListener("mouseover", (e) => {
    handler(index);
  });
});
