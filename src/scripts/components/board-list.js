import React from 'react';
import ReactDOM from 'react-dom';
import map from 'lodash.map';
import BoardItem from 'components/board-item';
import classNames from 'classnames';

class BoardList extends React.Component {
  render() {
    const classes = classNames({
      'board__lang-box': true,
      'board__lang-box--big': this.props.data.rate > 0.35,
      'board__lang-box--biggest': this.props.data.rate > 0.65,
    });
    const boardItems = map(this.props.data.starred, (item) => {
      return <BoardItem key={item.name} url={item.html_url} name={item.name}/>
    });
    return (
      <li className={classes}>
        <h2 className="board__lang-title">{this.props.data.lang}</h2>
        <ul className="board__repo-list">{boardItems}</ul>
      </li>
    );
  }
}

export default BoardList;
