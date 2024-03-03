const url = "https://api.github.com/users";
const searchInputE1 = document.getElementById("searchInput");
const searchButtonEl = document.getElementById("searchBtn");
const profileContainer = document.getElementById("profileContainer");
const loading = document.getElementById("loading");

const generateProfile=(profile) => {
    return  `
    <div class="profileBox">
    <div class="top-section">
    <div class="left">
    <div class="avtar">
      <img alt="avtar" src="${"profile.avtar_url"} />
    </div>
    <div class="self">
     <h1>${profile.name}</h1>
     <h1>@${profile.login}</h1>
    </div>
    </div>
    <a href="${profile.html_url}" target="_black">
     <button class="primary-btn">Check Profile</button>
     </a>
    </div>
`;
};
