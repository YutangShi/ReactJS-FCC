import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

/***
 bindActionCreators - https://chentsulin.github.io/redux/docs/api/bindActionCreators.html
*/

import Recipelist from '../components/Recipe-list';

import AddForm from '../components/Add-Form';
import Header from '../components/Header';

import * as RecipeActions from '../actions/index';

import {Grid} from 'react-bootstrap';

class App extends Component {
  render() {
    // console.log(this.props)
    //採用到 RecipeActions中的功能
    const {actions, recipes} = this.props;

    //Grid外框建置, Recipelist 跑資料迴圈 AddForm屬於新建的表單
    return (
      <Grid>
        <Header />
        <Recipelist
          recipes={recipes}
          deleterecipe={actions.deleteRecipe}
          editrecipe={actions.editRecipe}
        />
        <AddForm
          addrecipe={actions.addRecipe}
        />
      </Grid>

    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  recipes: React.PropTypes.array
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(RecipeActions, dispatch)
})

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

