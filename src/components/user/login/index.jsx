import React from 'react';
import UserBackBtn from '../backBtn';
import './styles.css';
const UserLogin = () => {
  return (
    <div>
      <UserBackBtn />
      <section class="newaccount">
        <h1 class="newaccount-title">ログイン</h1>
        <div class="newaccount-box">
          <form method="post" action="">
            <div class="box-btm">
              <div class="price">
                <h3 class="price-title">ID　　　　　</h3>
                <input class="number-box" type="text" name="" />
              </div>
            </div>
            <div class="box-btm">
              <div class="price">
                <h3 class="price-title">パスワード　</h3>
                <input class="number-box" type="text" name="" />
              </div>
            </div>
            <button class="search-button" type="button">
              ログイン
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default UserLogin;
