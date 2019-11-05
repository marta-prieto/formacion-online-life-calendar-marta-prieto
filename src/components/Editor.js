import React from 'react';
import '../stylesheets/Editor.scss';
import { Link } from 'react-router-dom';

class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editor: {
        date: "",
        emotic: "",
        message: "",
        moodFace: []
      }
    };
    this.chooseDate = this.chooseDate.bind(this);
    this.getEmotic = this.getEmotic.bind(this);
    this.writeMessage = this.writeMessage.bind(this);
    this.getClick = this.getClick.bind(this);
  }


  chooseDate(event) {
    const date = event.target.value;
    this.setState(prevState => {
      return {
        editor: {
          ...prevState.editor,
          ...this.state.date,
          date
        }
      };
    });
  }

  getEmotic(event) {
    const emotic = event.target.value;
    const checked = event.target.checked;
    if (checked === true) {
      return this.setState(prevState => {
        return {
          editor: {
            ...prevState.editor,
            ...this.state.emotic,
            emotic
          }
        };
      });
    } else {
      return checked === false;
    }
  }

  writeMessage(event) {
    const message = event.target.value;

    this.setState(prevState => {
      return {
        editor: {
          ...prevState.editor,
          ...this.state.message,
          message
        }
      };
    });
  }

  getBack(event) {
    event.preventDefault();
    this.saveData = true;
  }

  getClick(event) {
    event.preventDefault();
    this.saveData = true;
  }

  render() {
    const { editor, date, emotic, message } = this.state;
    if (this.saveData === true) {
      return (
        <div>
          <p>{editor.moodFace}</p>
          <Link to="/" className="back">
            <button className="back__button" onClick={this.getBack}>Volver</button>
          </Link>
        </div>
      );
    }
    return (
      <form className="form" id="idForm">
        <label htmlFor="date">Fecha</label>
        <input
          id="date"
          type="date"
          className="form__date"
          onChange={this.chooseDate}
          value={date}
          placeholder="date"
        />
        <fieldset className="mood__emotic-form">Estado
        <div className="happy__container"></div>
          <label className="happy__emotic-form" htmlFor="happy"> {":)"} </label>
          <input
            id="happy"
            className="Emotic_happy"
            onChange={this.getEmotic}
            value=":)"
            type="checkbox"
            checked={emotic}
          />
          <label htmlFor="sad"> {":("} </label>
          <input
            id="sad"
            className="Emotic_sad"
            onChange={this.getEmotic}
            type="checkbox"
            value=":("
            checked={emotic}
          />
        </fieldset>

        <label htmlFor="message">
          Mensaje
            <input
            id="message"
            type="text"
            className={this.state.editor.emotic === ":)" ? "" : "hidden"}
            onChange={this.writeMessage}
            value={message}
            placeholder="Hoy es un buen día porque..."
          />
        </label>
        <button className="save__button" onClick={this.getClick}>
          Guardar
        </button>
        <Link to="/" className="cancel">
          <button className="cancel__button">Cancelar</button>
        </Link>

      </form>
    );
  }
}

export default Editor;
