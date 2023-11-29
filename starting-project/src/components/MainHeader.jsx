//import { MdMessage } from 'react-icons/md';
import { IoLogoGameControllerB } from "react-icons/io";
import { BiGame } from "react-icons/bi";

import classes from './MainHeader.module.css';

function MainHeader({ onCreatePost }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <IoLogoGameControllerB size={50}/>
        게임 게시판
      </h1>
      <p>
        <button className={classes.button} onClick={onCreatePost}>
          <BiGame size={30} />
          게임 소개하기
        </button>
      </p>
    </header>
  );
}

export default MainHeader;