var toggle = 0;

var arr = [
  {
    name: "Ajay",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: "Strangers",
  },
  {
    name: "Vijay",
    img: "https://images.unsplash.com/photo-1467632499275-7a693a761056?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: "Strangers",
  },
  {
    name: "Sexy",
    img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: "Strangers",
  },
];

function print() {
  var clutter = "";

  arr.forEach(function (val, index) {
    clutter += `
      <div id="card">
        <div id="box">
        <div id="img"> <img src=${val.img}/></div></div>
        <h1>${val.name}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla fugiat, sequi eum.</p>
          <h3 id = "${val.status}">${val.status}</h3>
        <button id="${index}">Send Request</button>
      </div>`;
  });

  document.querySelector("#main").innerHTML = clutter;
}

print();

document.querySelector("#main").addEventListener("click", function (details) {
  if (toggle == 0) {
    arr[details.target.id].status = "Friends";
    toggle = 1;
    print();
  } else {
    arr[details.target.id].status = "Strangers";
    toggle = 0;
    print();
  }
});