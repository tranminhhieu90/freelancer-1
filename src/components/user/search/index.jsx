import React from 'react';
import UserBackBtn from '../backBtn';
import './styles.css';
const UserSearch = () => {
  return (
    <div>
      <UserBackBtn />
      <section class="search">
        <h1 class="search-title">先生を探す</h1>
        <h3 class="search-subtitle">項目を絞って自分に合った先生を探そう!</h3>
        <div class="search-box">
          <h3 class="gametitle">ゲームタイトル</h3>
          <form method="post" action="">
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

            <h3 class="freeword">フリーワード</h3>
            <input class="text-box" type="text" name="" />
            <h3 class="money">価格帯</h3>
            {/* <div style="margin-right: 15px; margin-top: 20px;"> */}
            <div>
              {/* <a class="min" style="color: white;"> */}
              <a class="min">下限</a>
              <input class="number-box" type="number" name="" />
            </div>
            {/* <a style="color: white;">〜</a> */}
            <a>〜</a>
            {/* <div style="margin-right: 15px;"> */}
            <div>
              {/* <a class="max" style="color: white;"> */}
              <a class="max">上限</a>
              <input class="number-box" type="number" name="" />
            </div>
            <button
              class="search-button"
              type="button"
              // onclick="location.href='https://e-spoworks.com/html/search-result.php'"
            >
              検索
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default UserSearch;
