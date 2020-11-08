import React from "react";
import ReactDOM from "react-dom";

import hello_react from './hello_react';

reactDOM.render(<hello_react />, document.querySelector('#root'))


class Meal extends React.Component {
  render() {
    const infoList = [
      {
        name: 'HTML & CSS',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg',
        introduction: 'WEBページはHTML、CSSという言語によってその見た目が作られています。 実際にWEBページを作りながら学んでみましょう！',
      },
      {
        name: 'Sass',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/sass.svg',
        introduction: 'SassはCSSをより便利に効率的にするための言語です。',
      },
    ];

    return (
      <div className='info-wrapper'>
        <div className='info'>
          <div className='copy-container'>
            <h1>製作者</h1>
             
            <h2>お問い合わせ</h2>
          </div>
        </div>
      </div>
    );
  }


}
