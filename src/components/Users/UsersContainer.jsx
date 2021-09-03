import React from 'react';
import { connect } from 'react-redux';
import { follow, requestUsers, setCurrentPage, toggleFollowingProgress, unfollow } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { getCurrentPage, getIsFetching, getIsFollowingInProgress, getPageSize, getTotalUsersCount, getUsers } from '../../redux/usersSelectors';
// import { withAuthRedirect } from '../hoc/withAuthRedirect';
// import { compose } from 'redux';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.pageSize, this.props.currentPage);
    }

    onPageChainged(pageNumber) {
        this.props.setCurrentPage(pageNumber);
        this.props.requestUsers(this.props.pageSize, pageNumber);
    }

    render () {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users totalUsersCount = {this.props.totalUsersCount} 
                    pageSize = {this.props.pageSize}
                    currentPage = {this.props.currentPage}
                    onPageChainged = {this.onPageChainged.bind(this)}
                    users = {this.props.users}
                    follow = {this.props.follow}
                    unfollow = {this.props.unfollow}
                    followingInProgress={this.props.followingInProgress}/>
            </>            
        );
    }
};

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getIsFollowingInProgress(state)
    };
};

export default connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers})(UsersContainer);
