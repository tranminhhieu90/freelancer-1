import React from 'react';
import './styles.css';
const UserBackBtn = () => {
  return (
    <div class="back">
      <a class="back-btn" href="javascript:history.back()">
        ＜
      </a>
    </div>
  );
};

export default UserBackBtn;
