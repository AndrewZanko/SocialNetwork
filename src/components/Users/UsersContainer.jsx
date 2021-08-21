import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleFollowingProgress, toggleIsFetching, unfollow } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.pageSize, this.props.currentPage).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount)});
    }

    onPageChainged(pageNumber) {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.pageSize, pageNumber).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items)});
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
                    toggleFollowingProgress = {this.props.toggleFollowingProgress}
                    followingInProgress={this.props.followingInProgress}/>
            </>            
        );
    }
};

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow : (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage));
//         },
//         setTotalUsersCount: (totalUsersCount) => {
//             dispatch(setTotalUsersCountAC(totalUsersCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         }
//     };
// };

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage,
    setTotalUsersCount, toggleIsFetching , toggleFollowingProgress})(UsersContainer);