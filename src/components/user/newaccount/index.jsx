import React from 'react';
import UserBackBtn from '../backBtn';
import './styles.css';
const UserNewAccount = () => {
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
            <div class="box-btm">
              <div class="price">
                <h3 class="price-title">ニックネーム</h3>
                <input class="number-box" type="text" name="" />
              </div>
            </div>
            <div class="box-btm">
              <div class="price">
                <h3 class="price-title">Email　　　</h3>
                <input class="number-box" type="text" name="" />
              </div>
            </div>
            <div class="box-btm">
              <div class="price">
                <h3 class="price-title">LINE ID　　</h3>
                <input class="number-box" type="text" name="" />
              </div>
            </div>
            <h3 class="h3">
              <p>※取引時に使用しますので必ず有効なLINEID</p>
              <p>をご記入ください。やりとりができない場合</p>
              <p>キャンセルになる事があります。</p>
            </h3>
            <button class="search-button" type="button">
              登録
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default UserNewAccount;
