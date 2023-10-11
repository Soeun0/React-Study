import Post from './Post';
import NewPost from './NewPost';
import classes from './PostList.module.css';

function PostList() {
    const [enterBody, setEnterBody] = useState('나는 영화가 좋아!');
    const [enterAuthor, setEnterAuthor] = useState('나는 영화가 좋아!');

    function bodyChangeHandler(event) {
        setEnterBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnterAuthor(event.target.value);
    }


    return (
        <>
            <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
            <ul className={classes.posts}>
                <Post author={enterAuthor} body={enterBody} />
                <Post author="1.Movie" body="내가 좋아하는 영화!" />
            </ul>
        </>
    );
}

export default PostList;