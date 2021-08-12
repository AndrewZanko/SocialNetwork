import React from 'react';

const Users = (props) => {
    return (
        <div>
            {
                props.users.map( (u, index) => {
                    return (<div key = {index}>
                        <div>
                            <div>
                                <img src={u.photoUrl} alt='profile'></img>
                            </div>
                            <div>
                                <button>Follow</button>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </div>
                            <div>
                                <div>{u.location.city}</div>
                                <div>{u.location.country}</div>
                            </div>
                        </div>
                    </div>);
                })
            }
        </div>
    );
};

export default Users;
