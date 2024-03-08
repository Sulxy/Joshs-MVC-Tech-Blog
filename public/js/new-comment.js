const newComment = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#post-comment').value.trim();
    const post_id = parseInt(window.location.pathname.split('/').pop());

    if (content) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ comment_text: content, post_id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            console.log('Status:', response.status);
            console.log('Status Text:', response.text);
            alert('Failed to create comment');
        }
    }
};

// Event listener for new comment button
const newCommentBtn = document.querySelector('.new-comment-btn');
if (newCommentBtn) {
    newCommentBtn.addEventListener('click', newComment);
}