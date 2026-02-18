    const API_KEY = "AIzaSyCaMRbPS-h1qOH1vANnIg7ILW8cu88cQO8";function openProfile() {
    alert("Riteek Doble\nFull Stack Developer\nJWT Auth Active");
}
async function loadShorts() {
    const container = document.getElementById('shortsGrid');
    container.innerHTML = '';

    try {
        const resp = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=trending%20shorts&type=video&videoDuration=short&key=${API_KEY}`);
        const data = await resp.json();

        data.items.forEach(video => {
            const id = video.id.videoId;

            const div = document.createElement('div');
            div.className = 'short-card shadow-lg';
            div.innerHTML = `
                <iframe width="100%" height="100%" 
                src="https://www.youtube.com/embed/${id}?controls=0"
                frameborder="0" allowfullscreen></iframe>
            `;
            container.appendChild(div);
        });

    } catch (err) {
        console.log("Shorts API Error");
    }
}


// function openSettings() {
//     alert("Settings Panel\nDark Mode Enabled\nNotifications On");
// }

// function logout() {
//     localStorage.removeItem("yt_token");
//     location.reload();
// }
// function loadShorts() {
//     fetchVideosFromAPI("youtube shorts trending india");
// }
// // --- 1. DYNAMIC CATEGORY FILTERS ---
// const categories = ["All", "JavaScript", "Live", "Music", "Gaming", "News", "Podcasts", "Recently uploaded"];

// function renderFilters() {
//     const filterContainer = document.createElement('div');
//     filterContainer.className = "d-flex gap-2 overflow-x-auto py-3 no-scrollbar";
//     filterContainer.innerHTML = categories.map(cat => 
//         `<button class="btn btn-dark rounded-pill text-nowrap px-3 py-1" onclick="fetchVideos('${cat}')">${cat}</button>`
//     ).join('');
    
//     const grid = document.getElementById('videoGrid');
//     grid.parentNode.insertBefore(filterContainer, grid);
// }

// // --- 2. ADVANCED COMMENT SYSTEM ---
// function renderComments(videoId) {
//     const commentSection = document.createElement('div');
//     commentSection.className = "mt-4 bg-dark p-3 rounded";
//     commentSection.innerHTML = `
//         <h5>Comments</h5>
//         <div class="d-flex gap-3 mb-4">
//             <div class="rounded-circle bg-info text-center" style="width:40px; height:40px; line-height:40px;">${state.user.name[0]}</div>
//             <input type="text" id="commentInput" class="form-control bg-transparent text-white border-0 border-bottom" placeholder="Add a comment...">
//             <button class="btn btn-primary btn-sm rounded-pill" onclick="postComment('${videoId}')">Comment</button>
//         </div>
//         <div id="commentsList"></div>
//     `;
    
//     // Existing comments logic
//     let comments = JSON.parse(localStorage.getItem(`comments_${videoId}`)) || [
//         {user: "System", text: "Wow, great project Riteek!"},
//         {user: "Dev Community", text: "Spring Boot backend is looking solid."}
//     ];
    
//     document.getElementById('playerSection').appendChild(commentSection);
//     displayComments(comments);
// }

// function postComment(videoId) {
//     const input = document.getElementById('commentInput');
//     if(!input.value) return;
    
//     let comments = JSON.parse(localStorage.getItem(`comments_${videoId}`)) || [];
//     comments.unshift({user: state.user.name, text: input.value});
//     localStorage.setItem(`comments_${videoId}`, JSON.stringify(comments));
    
//     input.value = "";
//     displayComments(comments);
// }

// function displayComments(list) {
//     const container = document.getElementById('commentsList');
//     container.innerHTML = list.map(c => `
//         <div class="d-flex gap-3 mb-3">
//             <div class="rounded-circle bg-secondary" style="width:35px; height:35px;"></div>
//             <div>
//                 <p class="mb-0 fw-bold small">${c.user}</p>
//                 <p class="mb-0 small">${c.text}</p>
//             </div>
//         </div>
//     `).join('');
// }

// // --- 3. CHANNEL DASHBOARD (Inside Profile Section) ---
// function updateProfileStats() {
//     const statsHtml = `
//         <div class="row mt-4">
//             <div class="col-4"><h5>128</h5><p class="text-secondary small">Videos</p></div>
//             <div class="col-4"><h5>2.4M</h5><p class="text-secondary small">Views</p></div>
//             <div class="col-4"><h5>15K</h5><p class="text-secondary small">Subscribers</p></div>
//         </div>
//     `;
//     document.getElementById('profileSection').innerHTML += statsHtml;
// }

// // --- 4. SKELETON LOADER (Visual Polish) ---
// function showSkeleton() {
//     const grid = document.getElementById('videoGrid');
//     grid.innerHTML = Array(8).fill(0).map(() => `
//         <div class="col placeholder-glow">
//             <div class="placeholder col-12 rounded mb-2" style="height:180px; background:#222;"></div>
//             <div class="placeholder col-10 mb-1" style="background:#222;"></div>
//             <div class="placeholder col-6" style="background:#222;"></div>
//         </div>
//     `).join('');
// }