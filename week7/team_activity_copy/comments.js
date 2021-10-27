class CommentTemplate {
    constructor(type) {
        this.type = type;

        this.comments = getCommentsFromLS(this.type) || []
    }

    createComment(hikeName, comment) {
        const newComment = {
            name: hikeName,
            date: new Date(),
            content: comment
        };
        this.comment.unshift(newComment);
        
    }
}