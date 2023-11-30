import classes from './Post.module.css';

function Post({author, body}) {
    return (
        <li className={classes.post}>
            <p className={classes.author}>{author}</p>
            <p className={classes.text}>{body}</p>
        </li> //목차를 만들 때 사용
    );
}

export default Post;