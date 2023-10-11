import classes from './Post.module.css';

function Post(props) {
    props.author
    props.body
    return (
        <li className={classes.post}>
            <p className={classes.author}>{props.author}</p>
            <p classesName={classes.text}>{props.body}</p>
        </li> //목차를 만들 때 사용
    );
}

export default Post;

