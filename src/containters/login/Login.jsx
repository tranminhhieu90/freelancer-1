import React from 'react';
import './styles.css';
const Login = () => {
  return (
    <div>
      <div className="back">
        <a href="">＜</a>
      </div>
      <section class="newaccount">
        <h1 class="newaccount-title">ログイン</h1>
        <div class="newaccount-box">
          <form method="post" action="">
            <div class="box-btm">
              <div class="price">
                <h3 class="price-title">ID</h3>
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

export default Login;
