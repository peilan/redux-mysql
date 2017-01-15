import React, { PropTypes, Component } from 'react'

export default class User extends Component {
  onYearBtnClick() {
    this.props.getUsers()
  }

  render() {
    const { source, fetching } = this.props
    return <div>
      {
        fetching ?
        <p>Загрузка...</p>
        :
        <p>Привет, user! Нас уже {source.length}</p>
      }

      <button 
        className='btn' 
        onClick={::this.onYearBtnClick}>Загрузить
      </button>
    </div>
  }
}

User.propTypes = {
  source: PropTypes.array.isRequired
}