import { useLoaderData } from 'react-router-dom';

//import PacmanLoader from "react-spinners/PacmanLoader";
import Post from './Post';
import classes from './PostList.module.css';

function PostList() {
    const posts = useLoaderData();

    return (
        <>
        {posts.length > 0 && (
            <ul className={classes.posts}>
                {/*다른 배열의 항목을 출력하려면 동적 표현식을 사용해야 한다. 
                JSX 요소 배열을 사용하여 JSX 코드를 출력할 수 있다. 
                map() 내장 메서드를 사용하여 posts 배열에서 호출
                map()은 모든 자바스크립트 배열에서 사용 가능 */}
                {posts.map((post) => (
                <Post key={post.body} author={post.author} body={post.body} />
                ))}
                </ul>
            )}

            {posts.length === 0 && (
                <div style={{ textAlign: 'center', color: 'while' }}>
                    <h2>입력된 것이 없습니다.</h2>
                    <p>당신이 좋아하는 게임을 소개해주세요!</p>
                </div>

            )}

        </>
    );
}

export default PostList;
