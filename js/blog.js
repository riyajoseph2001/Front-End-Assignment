// Define a class for blog posts
class BlogPost {
    constructor(name, email, title, content) {
        this.name = name;
        this.email = email;
        this.title = title;
        this.content = content;
        this.timestamp = new Date();
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const blogForm = document.getElementById('blogForm');
    const blogPosts = document.getElementById('blogPosts');

    // store the posts
    const posts = [];


    // Initialize Summernote
    $('.summernote').summernote();



    //add a new blog post
    function addPost(post) {
        posts.push(post);
        displayPosts();
    }


    //adding eventlistener for the form submission
    blogForm.addEventListener('submit', (event) => {

        event.preventDefault();

        const name = document.getElementById('txtName').value;
        const email = document.getElementById('email').value;
        const title = document.getElementById('txtTitle').value;
        const content = $('.summernote').summernote('code');

        const newPost = new BlogPost(name, email, title, content);
        addPost(newPost);
        blogForm.reset();
        $('.summernote').summernote('code', '');
    });

    // display all blogs
    function displayPosts() {
        blogPosts.innerHTML = '';
        const reversedpost = posts.slice().reverse();

        for (const post of reversedpost) {
            const postElement = document.createElement('div');
            postElement.classList.add('border', 'p-3', 'mb-3');

            postElement.innerHTML = `
                <h4>${post.title}</h4>
                <div>${post.content}</div>
                <p><strong>Author:</strong> ${post.name}</p>
                <p><strong>Email:</strong> ${post.email}</p>
                <p><strong>Date:</strong> ${post.timestamp.toLocaleString()}</p>
            `;
            blogPosts.appendChild(postElement);
        }
    }



});