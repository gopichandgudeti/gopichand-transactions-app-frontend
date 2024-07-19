import {Component} from 'react'
import {IoColorPaletteOutline} from 'react-icons/io5'

import Header from '../Header'

import './index.css'

class Home extends Component {
  state = {
    noteInput: '',
    notesList: [],
    showBgColorOptions: false,
    backgroundColor: '',
  }

  onChangeNote = event => {
    this.setState({noteInput: event.target.value})
  }

  addNoteToNotesList = () => {
    const {noteInput} = this.state

    this.setState(prevNotes => ({
      notesList: [...prevNotes.notesList, noteInput],
      noteInput: '',
    }))
  }

  onChangeBgColor = () => {
    this.setState(prev => ({showBgColorOptions: !prev.showBgColorOptions}))
  }

  applyBgColor = event => {
    if (event.target.value === 'red') {
      this.setState({backgroundColor: 'red'})
    } else if (event.target.value === 'blue') {
      this.setState({backgroundColor: 'blue'})
    } else if (event.target.value === 'green') {
      this.setState({backgroundColor: 'green'})
    } else if (event.target.value === 'yellow') {
      this.setState({backgroundColor: 'yellow'})
    } else {
      this.setState({backgroundColor: ''})
    }
  }

  render() {
    const {noteInput, notesList, backgroundColor, showBgColorOptions} =
      this.state

    return (
      <>
        <Header />
        <div className='home-bg-container'>
          <div>
            <p>Side bar</p>
          </div>
          <div className='home-container'>
            <div className='note-input-add-btn-container'>
              <div className='note-input-bg-container'>
                <input
                  type='text'
                  className='note-input'
                  placeholder='Write a note..'
                  value={noteInput}
                  onChange={this.onChangeNote}
                />
              </div>
              <button
                type='button'
                className='add-note-btn'
                onClick={this.addNoteToNotesList}
              >
                Add note
              </button>
            </div>

            <ul className='notes-list-bg-container'>
              {notesList.map(eachNote => (
                <li className={`${backgroundColor} list-item`}>
                  <p>{eachNote}</p>
                  <div className='options-container'>
                    <button
                      type='button'
                      onClick={this.onChangeBgColor}
                      className='color-icon-btn'
                    >
                      <IoColorPaletteOutline className='icon' />
                      {showBgColorOptions && (
                        <div className='colors-cont'>
                          <button
                            type='button'
                            onClick={this.applyBgColor}
                            className='color-btn'
                            value=''
                          ></button>
                          <button
                            type='button'
                            onClick={this.applyBgColor}
                            className='red color-btn'
                            value='red'
                          ></button>
                          <button
                            type='button'
                            onClick={this.applyBgColor}
                            className='blue color-btn'
                            value='blue'
                          ></button>
                          <button
                            type='button'
                            onClick={this.applyBgColor}
                            className='green color-btn'
                            value='green'
                          ></button>
                          <button
                            type='button'
                            onClick={this.applyBgColor}
                            className='yellow color-btn'
                            value='yellow'
                          ></button>
                        </div>
                      )}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default Home
