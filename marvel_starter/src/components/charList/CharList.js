import "./charList.scss";
import React , { Component } from "react";
import PropTypes from 'prop-types';

import MarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";

class CharList extends Component {

  state = {
    charList: [],
    loading: true,
    error: false,
    newItemLoading: false,
    offset: 210,
  };

  marvelService = new MarvelService();

  componentDidMount() {
    this.marvelService
      .getAllCharacters()
      .then(this.onCharListLoaded)
      .catch(this.OnError);
  }

  onRequest = (offset) => {
    this.onCharListLoading();
    this.marvelService
        .getAllCharacters(offset)
        .then(this.onCharListLoaded)
        .catch(this.OnError);
  }

  onCharListLoading = () => {
    this.setState({
      newItemLoading: true,
    })
  }

  onCharListLoaded = (newCharList) => {
    this.setState(({offset , charList}) => ({
        charList: [...charList, ...newCharList],
        loading: false,
        newItemLoading: false,
        offset: offset + 9,
    }));
  };

  OnError = () => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  

  renderItems(arr) {
    const items = arr.map((item) => {
        let imgStyle = {'objectFit' : 'cover'};
        if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
            imgStyle = {'objectFit' : 'unset'}
        }
        return (
            <li className="char__item"
            key={item.id}
            onClick={() => this.props.onCharSelected(item.id)}>
                <img src={item.thumbnail} alt={item.name} style={imgStyle} />
                <div className="char__name">{item.name}</div>
            </li>
        )
    })
    return (
        <ul className="char__grid">
            {items}
        </ul>
    )
  }

  render() {

    const {charList, loading ,error , offset , newItemLoading} = this.state;
    const items = this.renderItems(charList);

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error) ? items : null;

    return (
      <div className="char__list">
        {errorMessage}
        {spinner}
        {content}
        <button className="button button__main button__long"
                disabled={newItemLoading}
                onClick={() => this.onRequest(offset)}>
          <div className="inner">load more</div>
        </button>
      </div>
    );
  }
}

CharList.propTypes = {
  onCharSelected: PropTypes.func.isRequired
}

export default CharList;
