import React, {Component} from 'react';
import S from './styles.module.css';
import GridSettings from "./gridSettings";
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {toggleUiVisibility} from '../../../actions/editor';
import {connect} from "react-redux";


class StateBarComp extends Component {
  render() {
    return (
      <div className={classNames(S.stateBar, S.dFlex, {[`${S.hidden}`]: this.props.uiIsHidden})}>
        <div className={S.fGrow}>
          <div>
            <GridSettings/>
          </div>
        </div>
        <button
          onClick={this.props.toggleUiVisibility}
          className={classNames(S.visibilityToggle, {[`${S.hidden}`]: this.props.uiIsHidden})}
          title={'Toggle ui visibility'}
        >
          <FontAwesomeIcon icon={'eye-slash'} />
          <FontAwesomeIcon icon={'eye'} />
        </button>
      </div>
    )
  }
}


const mapProps = state => {
  return {
    ...state.EditorReducer.index
  }
};

const mapActions = dispatch => {
  return {
    toggleUiVisibility: () => {dispatch(toggleUiVisibility())}
  }
};


const StateBar = connect(mapProps,mapActions)(StateBarComp);


export default StateBar