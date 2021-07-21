import React from 'react';
import d from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                <div className={d.dialogs + ' ' + d.active}>
                    Andrew
                </div>
                <div className={d.dialogs}>
                    Oleg
                </div>
                <div className={d.dialogs}>
                    Pasha
                </div>
                <div className={d.dialogs}>
                    Denis
                </div>
                <div className={d.dialogs}>
                    Katya
                </div>
            </div>
            <div className={d.messages}>
                <div className={d.message}>
                    Hi
                </div>
                <div className={d.message}>
                    Going well!
                </div>
                <div className={d.message}>
                    Any plans for tonight?
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
