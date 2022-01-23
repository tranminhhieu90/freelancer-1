import React from 'react';
import UserBackBtn from '../backBtn';
import './styles.css';
const UserRecruiting = () => {
  return (
    <div>
      <UserBackBtn />
      <div class="recruiting">
        <h1 class="recruiting-title">生徒を見つける</h1>
        <h3 class="recruiting-subtitle">募集要項を記入して生徒を募ろう!</h3>
        <div class="recruiting-box">
          <form method="post" action="">
            <div class="box-top">
              <img class="recruiting-img" src="https://e-spoworks.com/img/camera2.jpg" />
              <h3 class="exhibit-title">出品タイトル</h3>
              <input class="text-box" type="text" name="" />
            </div>
            <div class="box-btm">
              <div class="gametitle">
                <h3 class="gametitle-text">ゲームタイトル</h3>
                <select class="game-pick" name="gametitle" size="1">
                  <option value="LeagueofLegends">League of Legends</option>
                  <option value="Dota2">Dota 2</option>
                  <option value="PUBG">PUBG</option>
                  <option value="Fortnite">Fortnite</option>
                  <option value="VALORANT">VALORANT</option>
                  <option value="ApexLegends">Apex Legends</option>
                  <option value="CallofDuty">Call of Duty</option>
                  <option value="Vainglory">Vainglory</option>
                  <option value="RainbowSixSiege">Rainbow Six Siege</option>
                  <option value="STREETFIGHTERV">STREET FIGHTER V</option>
                  <option value="eFootball">eFootball</option>
                  <option value="free">該当なし</option>
                </select>
              </div>
              <div class="ept">
                <h3 class="ept-title">説明文　　　　</h3>

                <textarea
                  class="ept-text-box"
                  id="t_message"
                  name="message"
                  placeholder="説明文を記入してください"
                ></textarea>
              </div>
              <div class="price">
                <h3 class="price-title">価格　　　　　</h3>
                <input class="number-box" type="number" name="" />
              </div>
              <div class="priceresult">
                <h3 class="priceresult-title">販売利益(価格 - 手数料25%)</h3>
                <h3 class="priceresult-number">¥</h3>
              </div>
            </div>
            <button
              class="search-button"
              type="button"
              onclick="location.href='https://e-spoworks.com/html/completed.php'"
            >
              出品
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserRecruiting;
