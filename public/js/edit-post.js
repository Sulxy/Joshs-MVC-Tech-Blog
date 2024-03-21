// Get post ID from endpoint
const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
];

// Update post
const updatePost = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();

    if (title && content) {
        const response = await fetch(`/api/post/${post_id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to update post');
        }
    }
};

// Delete post
const deletePostFromEdit = async (event) => {
    event.preventDefault();

    const response = await fetch(`/api/post/${post_id}`, {
        method: 'DELETE',
        });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to delete post');
    }
}

// Event Listeners

// Update post
const updateBtn = document.querySelector('#update-post');
if (updateBtn) {
    updateBtn.addEventListener('click', updatePost);
}

const deleteBtn = document.querySelector('#delete-post');
// Delete post
if (deleteBtn) {
    deleteBtn.addEventListener('submit', deletePostFromEdit);
}