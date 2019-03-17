import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon/icon';

const fn: React.MouseEventHandler = (e) => {
    console.log(e.target);
}

ReactDOM.render(
    <div>
        <Icon name="wechat"
            onClick={fn}
            onMouseEnter={() => console.log("onMouseEnter")}
            onMouseLeave={() => console.log("onMouseLeave")}
            onTouchStart={() => console.log("onTouchStart")}
        />
    </div>
, document.querySelector("#root"));