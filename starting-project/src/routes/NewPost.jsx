import { useState } from 'react';

import classes from './NewPost.module.css';
import Modal from '../components/Modal';

function NewPost({onCancel, onAddPost}) {

  const [enterBody, setEnterBody] = useState('나는 영화가 좋아!');
  const [enterAuthor, setEnterAuthor] = useState('나는 영화가 좋아!');

  function bodyChangeHandler(event) {
      setEnterBody(event.target.value);
  }

  function authorChangeHandler(event) {
      setEnterAuthor(event.target.value);
  }

  function submitHandler(event){
    event.preventDefault();
    const postData = {
      body: enterBody,
      author: enterAuthor
    };
    onAddPost(postData);
    onCancel();
  }

  return (
    <Modal>
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">게임 설명</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler}/>
      </p>
      <p>
        <label htmlFor="name">게임 이름</label>
        <input type="text" id="name" required onChange={authorChangeHandler}/>
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
    </Modal>
  );
}

export default NewPost;