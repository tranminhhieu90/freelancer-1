import React from 'react';
import UserBackBtn from '../backBtn';
import './styles.css';
const UserContact = () => {
  return (
    <div>
      <UserBackBtn />
      <h3>お問い合わせフォーム</h3>
      <div class="box">
        <form>
          <div class="name">
            <h3>メールアドレス</h3>
            <input class="text-box1" type="text" maxlength="10" name="" />
          </div>
          <div class="text">
            <h3>お問い合わせ内容</h3>
            <textarea class="textarea" name="" rows="4" cols="30" maxlength="300"></textarea>
          </div>
          <button class="search-button" type="button">
            送信
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserContact;
