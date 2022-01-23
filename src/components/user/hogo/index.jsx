import React from 'react';
import UserBackBtn from '../backBtn';
import './styles.css';
const Hogo = () => {
  return (
    <div>
      <UserBackBtn />
      <div class="box">
        <div class="wbox">
          <div style={{ fontSize: 'small', textAlign: 'left' }}>
            <p>特定商取引法</p>
            <p> 社名：ActressNine（アクトレスナイン）</p>
            <p> 住所：東京都港区南青山2丁目2番15号</p>
            <p> 代表者：蟹江賢吾</p>
            <p> E-mail：infoアットマークe-spoworks.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hogo;
