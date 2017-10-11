import React, { Component } from 'react';

export const cleanProps = blacklist => props => {
  const next = {};
  for (let key in props) {
    if (blacklist.includes(key)) continue;
    next[key] = props[key];
  }
  return next;
};

const tag = (blacklist = []) => {
  const clean = cleanProps(blacklist);

  return type => {
    class Base extends Component {
      render() {
        const isEl = typeof type === 'string';
        const Comp = isEl ? (this.props.is || type) : type;
        const next = isEl ? clean(this.props) : this.props;

        if (isEl) next.is = null;
        return <Comp {...next} />;
      }
    }
    return Base;
  };
};

export default tag;
