//  Filter JS
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr('data-filter');
        if (value == "all") {
            $(".post-box").show("1000");
        } else {
            $(".post-box")
            .not("." + value)
            .hide("1000");
            $(".post-box")
            .filter("." + value)
            .show("1000");
        }
    });

    $(".filter-item").click(function () {
        $(this).addClass("acieve-filter").siblings().removeClass(acieve-filter);
    });
});
// Header backround change
let header = document.querySelector('header')

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
})


// Dark Mode
const themeToggleIcon = document.getElementById("theme-toggle");

const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggleIcon.classList.remove("bx-moon");
    themeToggleIcon.classList.add("bx-sun");
}

themeToggleIcon.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    
    if (document.body.classList.contains("dark-mode")) {
        themeToggleIcon.classList.remove("bx-moon");
        themeToggleIcon.classList.add("bx-sun");
        localStorage.setItem("theme", "dark");
    } else {
        themeToggleIcon.classList.remove("bx-sun");
        themeToggleIcon.classList.add("bx-moon");
        localStorage.setItem("theme", "light");
    }
});

window.addEventListener('load', () => {
    let blogs = JSON.parse(localStorage.getItem('blogs'))
    let postContainer = document.querySelector('.post')
    if(blogs){
        console.log(blogs);
        
        blogs.forEach(blog => {
            let cartBlog = document.createElement('div')
            cartBlog.classList.add('post-box')
            cartBlog.innerHTML = `
                <img src="${blog.imgLink}" alt="" class="post-img">
                <h2 class="category">${blog.category}</h2>
                <a href="editor.html" class="post-title">
                    ${blog.name}
                </a>
                <span class="post-date">${blog.date}</span>
                <p class="post-decription">${blog.description}</p>
                <!-- Profile -->
                <div class="profile">
                    <img src="https://avatars.mds.yandex.net/i?id=353277d97c78dbda4c61c4e5726b07dc807439ff6bd847ca-11471706-images-thumbs&n=13" alt="" class="profile-img">
                    <span class="profile-name">Me</span>
                </div>
                <button class="like-btn">
                    <i class="fa fa-heart"></i> 
                </button>
                <button class="delete-btn">Delete Post</button>
            `
            postContainer.appendChild(cartBlog)
        });
    }
})


document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', function() {
        const postBox = this.closest('.post-box','.blogs'); // Find the closest post-box
        postBox.remove(); // Remove the post box
    });
});


document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('active'); 
        alert('Вам нравился этот blog')
    });
});

