import { videos } from "./data.js";

const videoGrid = document.querySelector('.video-grid');

function renderVideos(videoList) {
    videoGrid.innerHTML = '';

    for(let i = 0; i < videoList.length; i++) {
        const video = videoList[i];

        const videoCard = document.createElement("div");
        videoCard.classList.add("video-card");

        videoCard.innerHTML =  `
         <a href= "${video.videosURL}">
         <div class="thumbnail-wrapper">
         <img src="${video.thumbnail}" 
         alt="${video.title}">
         <span class="video-duration">${video.duration}</span>
         </div>
         </a>
        
         <div class="video-meta"> 
         <a href="${video.channelsURL}" class="channel-avatar-wrapper">
         <img class="channel-avatar" src="${video.channelAvatar}" 
         alt="${video.channelName}">
         </a>

         <div class="video-info">
            <h3 class="video-title">
                <a href="${video.videosURL}">${video.title}</a>
            </h3>

            <a class="channel-name" href="${video.channelsURL}">${video.channelName}</a>

            <p class="video-stats">
                ${video.views} &middot; ${video.uploadedAt}
            </p>
         </div>
         </div>
        
        `;

        videoGrid.appendChild(videoCard);
    }
};

renderVideos(videos);


const header = document.querySelector('.header')  //state-holder
const searchContainer = document.querySelector('.search-container') //container of the input,back-button, and search-btn
const backArrow = document.querySelector('.search-back');  //arrow-back
const input = document.querySelector('.search-form input'); //input
const searchBtn = document.querySelector('.search-btn--mobile');    //search-icon--mobile

function handleAction(action) {
    if(action === 'open') {
        header.classList.add('active');
        searchContainer.classList.add('search-active');
        input.focus();
    }

    else if(action === 'close') {
        header.classList.remove('active');
        searchContainer.classList.remove('search-active');
        input.value = '';
    }
}

searchBtn.addEventListener('click', function(){
    handleAction('open');
});

backArrow.addEventListener('click', function(){
    handleAction('close');
});


const showMoreBtnWrapper = document.querySelector('.show-more-btn-wrapper');
const showMoreBtn = document.querySelector('.show-more-btn');
const labelText = document.querySelector('.text');
const arrowIcon = document.querySelector('.arrow-icon');

function handleBtnAction (action) {
    if (action === 'open') {
        showMoreBtnWrapper.classList.add('btn-active');
    }

    else if(action === 'close') {
        showMoreBtnWrapper.classList.remove('btn-active');
    }
}

function updateUI (isOpen) {
    if(isOpen) {
        labelText.textContent = 'Show less';
        arrowIcon.classList.add('rotate');
        showMoreBtn.setAttribute('aria-expanded', 'true');
    }

    else{
        labelText.textContent = 'Show more';
        arrowIcon.classList.remove('rotate');
        showMoreBtn.setAttribute('aria-expanded', 'false');
    }
}

showMoreBtn.addEventListener('click', function(){
    const isOpen = showMoreBtnWrapper.classList.contains('btn-active');

    if(isOpen) {
        handleBtnAction('close');
        updateUI(false);
    }

    else{
        handleBtnAction('open');
        updateUI(true);
    }
})


const hamburgerIcon = document.querySelector('.hamburger-icon-btn');
const sidebar = document.querySelector('.sidebar');

hamburgerIcon.addEventListener('click', function() {
    sidebar.classList.toggle('is-closed');
})

