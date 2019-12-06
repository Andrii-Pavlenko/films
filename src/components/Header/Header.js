import React from 'react';
import {Button, Input} from "semantic-ui-react";
import {NavLink} from "react-router-dom";
import './Header.scss';

export const Header = ({ sortFilms, setForFilter, filter, resetList }) => {
  return (
    <div className="header">

      <div className="header__navigation">
        <NavLink to="/" onClick={() => resetList()}>
          <Button type="button" className="ui inverted button">Home</Button>
        </NavLink>

        <NavLink to="/add">
          <Button type="button" className="ui inverted button">
            Add
          </Button>
        </NavLink>
      </div>

      <div className="header__changers">
        <Button type="button" onClick={() => sortFilms()} className="ui inverted button">Sort</Button>
        <div className="header__changers-filters">
          <Input type="text" onChange={(e) => setForFilter(e.target.value)} className="header__changers-filters1" placeholder="Set filter value!"/>
          <select className="ui compact selection dropdown">
            <option selected="" value="all">title</option>
            <option value="articles">year</option>
            <option value="products">format</option>
            <option value="products">actors</option>
          </select>
          <div className="ui inverted button header__changers-filters2" onClick={() => filter('title')}>Filter</div>
        </div>
      </div>

    </div>
  );
};
