import React from 'react';
import UserBackBtn from '../backBtn';
import './styles.css';
const UserMyPageChange = () => {
  return (
    <div>
      <UserBackBtn />
      <div class="box">
        <form>
          <div class="center1">
            <img class="icon" src="https://e-spoworks.com/img/noimg.png" />
            <input class="file" type="file" name="" />
          </div>
          <div class="name">
            <h3>ニックネーム</h3>
            <input class="text-box1" type="text" maxlength="10" name="" />
          </div>
          <div class="text">
            <h3>自己紹介文</h3>
            <textarea class="textarea" name="" rows="4" cols="40" maxlength="300"></textarea>
          </div>
          <button class="search-button" type="button">
            変更する
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserMyPageChange;
