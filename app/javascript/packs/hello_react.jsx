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
        <h1>製作者</h1>
        {props.title}
        <h2>お問い合わせ</h2>
      </div>
    </div>
  </div>
  );
};

Hello.defaultProps = {
  title: 'David'
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

