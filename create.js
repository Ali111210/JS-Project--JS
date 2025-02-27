let blogs = [];

document.querySelector('.form').addEventListener('submit', function(e){
    e.preventDefault();

    const name = document.getElementById('name').value;
    const category = document.getElementById('category').value;
    const img = document.getElementById('link').value;
    const description = document.getElementById('description').value;
    let date = new Date();

    let month = date.getMonth();

    switch(month){
        case 0:
            month = 'JAN'
            break;
        case 1:
            month = 'FEB'
            break;
        case 2:
            month = 'MAR'
            break;
        case 3:
            month = 'APR'
            break;
        case 4:
            month = 'MAY'
            break;
        case 5:
            month = 'JUN'
            break;
        case 6:
            month = 'JUL'
            break;
        case 7:
            month = 'AUG'
            break;
        case 8:
            month = 'SEP'
            break;
        case 9:
            month = 'OCT'
            break;
        case 10:
            month = 'NOV'
            break;
        case 11:
            month = 'DEC'
            break;
    }

    let dateFormat = `${date.getDate()} ${month} ${date.getFullYear()}`

    let blogsLocal = JSON.parse(localStorage.getItem('blogs')) 

    if(blogsLocal){
        blogsLocal.push({name, category, imgLink: img, description,date:dateFormat})
        localStorage.setItem('blogs', JSON.stringify(blogsLocal))
        alert("Janadan blog qosyldy")
        window.location.href = "blog.html";
    }else{
        blogs.push({name, category, imgLink: img, description})
        localStorage.setItem('blogs', JSON.stringify(blogs))
        alert("Janadan blog qosyldy")
        window.location.href = "blog.html";
    }
})




// Делегирование события для кнопки удаления
document.querySelector('.post').addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('delete-btn')) {
        const postBox = event.target.closest('.post-box'); // Находим ближайший .post-box
        postBox.remove(); // Удаляем блок с постом

        // Удаляем пост из localStorage
        let blogs = JSON.parse(localStorage.getItem('blogs')) || [];
        let index = Array.from(postBox.parentElement.children).indexOf(postBox);
        if (index > -1) {
            blogs.splice(index, 1);
            localStorage.setItem('blogs', JSON.stringify(blogs));
        }
    }
});






