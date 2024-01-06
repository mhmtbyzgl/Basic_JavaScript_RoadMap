const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");
const uFullname = document.getElementById("uFullname");
const uUsername = document.getElementById("uUsername");
const uBio = document.getElementById("uBio");
const uEmail = document.getElementById("uEmail");
const uLocation = document.getElementById("uLocation");
const uAvatar = document.getElementById("uAvatar");
const accordionExample = document.getElementById("accordionExample");
const accordionBox = document.getElementsByClassName("accordionBox");
const reposTitle = document.getElementById("reposTitle");
const historyBox = document.getElementById("historyBox");
const historyTitle = document.getElementById("historyTitle");
// const  = document.getElementById("");
// const  = document.getElementById("");

searchBtn.addEventListener("click", function () {
  clearRepos();
  checkInput();
});

function clearRepos() {
  // content2.classList.add("d-none");
  accordionExample.innerHTML = "";
}

function checkInput() {
  usernameInput = searchInput.value.toLowerCase().trim();
  if (usernameInput === null || usernameInput === "") {
    alert("Lütfen bir kullanıcı adı giriniz!!!");
  } else {
    searchInput.value = "";
    console.log(usernameInput);
    getUserDatas(usernameInput);
    getUserRepos(usernameInput);
    addToHistory(usernameInput);
  }
}

function getUserDatas(username) {
  fetch(`https://api.github.com/users/${username}`)
    .then((Response) => {
      if (Response.ok) {
        return Response.json();
      }
      throw new Error("Bağlantı başarısız.");
    })
    .then((data) => {
      userDatas(data);
    })
    .catch((error) => {
      console.error("Bir hata oluştu.", error);
    });
}

function getUserRepos(username) {
  fetch(`https://api.github.com/users/${username}/repos`)
    .then((Response) => {
      if (Response.ok) {
        return Response.json();
      }
      throw new Error("Bağlantı başarısız.");
    })
    .then((data) => {
      userRepos(data);
    })
    .catch((error) => {
      console.error("Bir hata oluştu.", error);
    });
}

function userDatas(datas) {
  // content1.classList.remove("d-none");
  content1.classList.add("show");
  console.log(datas);
  uFullname.innerHTML = datas.name;
  uUsername.innerHTML = datas.login;
  uBio.innerHTML = datas.bio;
  uEmail.innerHTML = datas.email;
  uLocation.innerHTML = datas.location;
  uAvatar.src = datas.avatar_url;
}

function userRepos(datas) {
  // content2.classList.remove("d-none");
  content2.classList.add("show");
  reposTitle.innerHTML = "Depolar";
  console.log(datas.length);
  console.log(datas);
  datas.forEach((element) => {
    const accorItem = document.createElement("div");
    const accorHeader = document.createElement("h2");
    const collapseOne = document.createElement("div");
    accorItem.classList.add("accordion-item");
    accorHeader.classList.add("accordion-header");
    collapseOne.classList.add("accordion-collapse", "collapse");
    collapseOne.setAttribute("data-bs-parent", "#accordionExample");
    collapseOne.setAttribute("id", `collapse${element.id}`);
    accorHeader.innerHTML = `<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${element.id}"
    aria-expanded="false" aria-controls="collapse${element.id}">
                    ${element.name}
                    </button>`;
    collapseOne.innerHTML = `<div class="accordion-body">
                    <span>Depo Adı: <a target="_blank" href="${element.html_url}">${element.name}</a><br/></span>
                    <span>Depo Yıldız Sayısı: ${element.stargazers_count}</span>
                    <span>Depo Fork Sayısı: ${element.forks}</span>
                    </div>`;
    accorItem.appendChild(accorHeader);
    accorItem.appendChild(collapseOne);
    accordionExample.appendChild(accorItem);
  });
}

function addToHistory(username) {
  if (localStorage.getItem("history")) {
    const historyList = JSON.parse(localStorage.getItem("history"));
    if (!historyList.includes(username)) {
      historyList.push(`${username}`);
      localStorage.setItem("history", JSON.stringify(historyList));
    }
  } else {
    const historyList = [];
    historyList.push(`${username}`);
    localStorage.setItem("history", JSON.stringify(historyList));
  }
}

function showHistory() {
  historyTitle.innerHTML = "Geçmiş Aramalar";
  // historyBox.classList.remove("d-none");
  const historyList = JSON.parse(localStorage.getItem("history"));
  const ulList = document.createElement("ul");
  ulList.innerHTML = "";
  ulList.innerHTML = `${historyList
    .reverse()
    .map((element) => `<li>${element}</li>`)
    .join("")}`;
  historyBox.appendChild(ulList);
}
// function userRepos(datas) {
//   console.log(datas.length);
//   console.log(datas);
//   datas.forEach((element) => {
//     const accordionItem = document.createElement("div");
//     accordionItem.classList.add("accordion-item");
//     accordionItem.innerHTML = `<h2 class="accordion-header">
//       <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//         ${element.name}
//       </button>
//     </h2>
//     <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
//       <div class="accordion-body">
//         <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//       </div>
//     </div>`;
//     accordionExample.appendChild(accordionItem);
//   });
// }
