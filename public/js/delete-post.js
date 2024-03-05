// Delete post from dashboard
const deletePost = async (post_id) => {
    const response = await fetch(`/api/posts/${post_id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.reload('/dashboard');
    } else {
        alert('Failed to delete post');
    }
};

// Event listener for delete button
const deleteBtn = (event) => {
    if (event.target.matches('.delete-btn')) {
        const post_id = event.target.getAttribute('data-post-id');
        deletePost(post_id);
    }
};

document.addEventListener('click', deleteBtn);