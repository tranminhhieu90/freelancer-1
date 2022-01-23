import React, { useState } from 'react';
import UserBackBtn from '../backBtn';
import UserMyPageChange from '../mypageChange';
import './styles.css';
const UserMyPage = () => {
  const [showMyPageChange, setShowMyPageChange] = useState(false);
  return (
    <div>
      {showMyPageChange ? (
        <UserMyPageChange />
      ) : (
        <>
          <UserBackBtn />
          <div className="box">
            <button
              className="button"
              type="button"
              onClick={() => {
                setShowMyPageChange(true);
              }}
            >
              編集
            </button>
            <div className="box-1">
              <img className="myimg" src="https://e-spoworks.com/img/noimg.png" alt="" />
              <div className="user">
                <h3>ユーザー名</h3>
                <span>ID:</span>
              </div>
            </div>
            <div className="box-2">
              <div className="box-2-1">
                <h3>売上金 ¥</h3>
              </div>
              <div className="box-2-2">
                <h3>次回振込額 ¥</h3>
              </div>
            </div>
            <div className="box-3">
              <div className="box-3-1">
                <span>評価 : 良かった 件 | 残念だった 件</span>
              </div>
              <div className="box-3-2">
                <span>登録日 : xxxx/xx/xx</span>
              </div>
              <div className="box-3-3">
                <span>取引実績 : 件 (出品X件 / 購入X件)</span>
              </div>
              <div className="box-3-4">
                <span>自己紹介 : テキスト</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserMyPage;
