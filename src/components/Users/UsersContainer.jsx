import React from 'react';
import { connect } from 'react-redux';
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from '../../redux/usersReducer';
import * as axios from 'axios';
import Users from './Users';


class UsersContainer extends React.Component {

    componentDidMount() {
        // props.setUsers([ {id: 1, fullName: 'Slava', isFollowed: true, status: 'Street racer', location: {city: 'Minsk', country: 'Belarus'}, photoUrl: 'https://uznayvse.ru/images/celebs/2018/1/vyacheslav-chepurchenko_big.jpg'},
        // {id: 2, fullName: 'Marina', isFollowed: false, status: 'Professional photographer', location: {city: 'Moscow', country: 'Russia'}, photoUrl: 'https://uznayvse.ru/images/celebs/2020/2/marina-orlova_big.jpg'},
        // {id: 3, fullName: 'Gleb', isFollowed: true, status: 'Insert status here', location: {city: 'Brest', country: 'Belarus'}, photoUrl: 'https://fcminsk.by/wp-content/uploads/2001/05/gleb-gurban.png'},
        // ]);
    
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)});
    }

    onPageChainged(pageNumber) {
        debugger;
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(response => {
            this.props.setUsers(response.data.items)});
    }

    render () {
        return (
            <Users totalUsersCount = {this.props.totalUsersCount} 
                pageSize = {this.props.pageSize}
                currentPage = {this.props.currentPage}
                onPageChainged = {this.onPageChainged.bind(this)}
                users = {this.props.users}
                follow = {this.props.follow}
                unfollow = {this.props.unfollow}/>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow : (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);