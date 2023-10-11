import classes from './NewPost.module.css';

function NewPost(props) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">줄거리 및 설명</label>
        <textarea id="body" required rows={3} onChange={props.onBodyChange}/>
      </p>
      <p>
        <label htmlFor="name">좋아하는 영화</label>
        <input type="text" id="name" required onChange={props.onAuthorChange}/>
      </p>
    </form>
  );
}

export default NewPost;