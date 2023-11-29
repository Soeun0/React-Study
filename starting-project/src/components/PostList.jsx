import { useEffect, useState } from 'react';

import PacmanLoader from "react-spinners/PacmanLoader";
import Post from './Post';
import classes from './PostList.module.css';

function PostList() {
    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            setIsFetching(true);
            const response = await fetch('http://localhost:8080/posts')
            const resData = await response.json();
            setPosts(resData.posts);
            setIsFetching(false);
        }
        fetchPosts();
    }, []);

    function addPostHandler(postData) {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setPosts((existingPosts) => [postData, ...existingPosts]);
        //setPosts() 안에는 함수가 들어가야 한다.
        //[postData, ...existingPosts]만 쓰면 함수가 아니기 때문에
    }

    return (
        <>
            <ul className={classes.posts}>
                {/*다른 배열의 항목을 출력하려면 동적 표현식을 사용해야 한다. 
                JSX 요소 배열을 사용하여 JSX 코드를 출력할 수 있다. 
                map() 내장 메서드를 사용하여 posts 배열에서 호출
                map()은 모든 자바스크립트 배열에서 사용 가능 */}
                {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
            </ul>
            {!isFetching && posts.length === 0 && (
                <div style={{ textAlign: 'center', color: 'while' }}>
                    <h2>입력된 것이 없습니다.</h2>
                    <p>당신이 좋아하는 게임을 소개해주세요!</p>
                </div>

            )}
            {/* {isFetching && <div style={{textAlign: 'center', color: 'while' }}>
                <p>ROADING...</p>
                </div>} */}

            {isFetching && <div style={{ textAlign: 'center', color: 'while' }}>
                <PacmanLoader
                    color={"#ffffff"}
                    loading={isFetching}
                    cssOverride={ { display: "block",
                    margin: "0 auto",
                    }}
                    size={30}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>}

        </>
    );
}

export default PostList;
