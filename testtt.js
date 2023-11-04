document.addEventListener('DOMContentLoaded', function () {
    fetchPosts();
});

function fetchPosts() {
    fetch('https://api.jsonbin.io/v3/b/6546365b0574da7622c1e9d7/latest', {
        method: 'GET',
        headers: {
            'X-Master-Key': '$2a$10$26E4jkDRgWxcCf19vDCsgO8vUAiRf74gEYQGG4nbu93ceFuJozpbG',
            // Add other headers as necessary
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const posts = data.record; // Assuming 'data.record' contains your posts
        const postsContainer = document.getElementById('postsContainer');
        posts.forEach(post => {
            const postElement = createPostElement(post);
            postsContainer.appendChild(postElement);
        });
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
}

function createPostElement(postData) {
    // Create the main post div
    const postDiv = document.createElement('div');
    postDiv.className = 'post';

    // Create and append the post header
    const postHeaderDiv = document.createElement('div');
    postHeaderDiv.className = 'post_header';

    const postAuthor = document.createElement('p');
    postAuthor.className = 'post_author';
    postAuthor.textContent = postData.author.name;
    postHeaderDiv.appendChild(postAuthor);

    const postDate = document.createElement('p');
    postDate.className = 'post_date';
    postDate.textContent = postData.createTime;
    postHeaderDiv.appendChild(postDate);

    postDiv.appendChild(postHeaderDiv);

    // Create and append the post title, if available
    if (postData.title) {
        const postTitle = document.createElement('h2');
        postTitle.className = 'post_title';
        postTitle.textContent = postData.title;
        postDiv.appendChild(postTitle);
    }

    // Create and append the post image if exists
    if (postData.image) {
        const postImage = document.createElement('img');
        postImage.className = 'post_image';
        postImage.src = postData.image;
        postImage.alt = 'Post image'; // Replace with a more descriptive alt text if possible
        postDiv.appendChild(postImage);
    }

    // Create and append the tags
    if (postData.tags && postData.tags.length > 0) {
        const postTags = document.createElement('ul');
        postTags.className = 'post_tags';
        postData.tags.forEach(tag => {
            const tagItem = document.createElement('li');
            tagItem.textContent = tag;
            postTags.appendChild(tagItem);
        });
        postDiv.appendChild(postTags);
    }

    // Adding logo to the post header
    const logoImg = document.createElement('img');
    logoImg.className = 'post_logo';
    logoImg.src = 'res/images/icon.ico';
    logoImg.alt = 'Logo';
    postHeaderDiv.appendChild(logoImg);

    // ... your existing code ...

    // Adding like button to the post footer
    const postFooterDiv = document.createElement('div');
    postFooterDiv.className = 'post_footer';

    const likeButton = document.createElement('img');
    likeButton.className = 'like_button';
    likeButton.src = 'res/images/like.png';
    likeButton.alt = 'Like';
    postFooterDiv.appendChild(likeButton);

    likeButton.style.width = '25px';  // Example size, adjust as needed
    likeButton.style.height = '25px'; // Example size, adjust as needed

    postDiv.appendChild(postFooterDiv);

    // Add other elements like 'like' button if needed

    // Return the complete post element
    return postDiv;
}

