import React, { Component } from 'react';
import { View, Text } from 'react-native';
import NewCommentService from '../../Actions/Comments/NewCommentActions';
import PropTypes from 'prop-types';

class NewComment extends Component {
  render() {
    return (
        <View style={{flex: 1}}>
            <NewCommentService postId={this.props.postId}/>
        </View>
    );
  }
}

NewComment.propTypes = {
postId: PropTypes.number.isRequired,
}

export default NewComment;