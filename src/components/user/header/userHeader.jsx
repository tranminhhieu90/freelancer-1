import React from 'react';
import { Link } from 'react-router-dom';
import './userHeader.css';

const UserHeader = () => {
  return (
    <>
      <div>
        <div class="hamburger-menu">
          <input class="checkbox" type="checkbox" id="menu-btn-check" />
          <label for="menu-btn-check" class="menu-btn">
            <span></span>
          </label>
          <div class="menu-content">
            <ul>
              <li>
                <Link to="mypage">マイページ</Link>
              </li>
              <li>
                <Link to="login">ログイン</Link>
              </li>
              <li>
                <Link to="newaccount">新規会員登録</Link>
              </li>
              <li>
                <Link to="riyo">利用規約</Link>
              </li>
              <li>
                <Link to="tokutei">特定商取引法に基づく表記</Link>
              </li>
              <li>
                <a href="https://e-spoworks.com/html/hogo.php">個人情報保護方針</a>
              </li>
              <li>
                <Link to="contact">お問い合わせ</Link>
              </li>
              <li>
                <Link to="list">出品一覧</Link>
              </li>
              <li>
                <a href="https://e-spoworks.com/html/transaction-list2.php">取引一覧</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img class="top-logo" src="https://e-spoworks.com/img/espologo.png" />
          <div class="top-login">
            <Link className="top-login-login" to="/login">
              Login
            </Link>
            <Link className="top-login-signup" to="/newaccount">
              SignUp
            </Link>
          </div>
        </div>
      </div>
      <nav class="nav">
        <ul class="nav-list">
          <li>
            <Link to="/">TOP</Link>
          </li>
          <li>
            <Link to="/search">SEARCH</Link>
          </li>
          <li>
            <Link to="/recruiting">RECRUITING</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default UserHeader;
