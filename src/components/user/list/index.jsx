import React from 'react';
import UserBackBtn from '../backBtn';
import './styles.css';
const UserList = () => {
  return (
    <div>
      <UserBackBtn />
      <h3 class="result-title">出品一覧</h3>
      <div class="search-result">
        <div class="search-result-box">
          <a href="">
            <img class="search-result-img" src="https://e-spoworks.com/img/noimg.png" />
          </a>
          <h3 class="search-result-title" src="">
            タイトル
          </h3>
          <div class="user">
            <img class="user-img" src="https://e-spoworks.com/img/user.png" />
            <h3 class="user-text">ユーザー名</h3>
          </div>
          <h3 class="pr-text">prprprpr</h3>
          <button class="dl-button" type="button" onclick="">
            削除
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserList;
