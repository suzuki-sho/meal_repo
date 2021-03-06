// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'




const Hello = (props) => {
  return (
  <div className='info-wrapper'>
    <div className='info'>
      <div className='copy-container'>
        <h1>お問い合わせ</h1>
        {props.title}
      </div>
    </div>
  </div>
  );
};

Hello.defaultProps = {
  title: 'https://twitter.com/syo_suzuki_'
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})