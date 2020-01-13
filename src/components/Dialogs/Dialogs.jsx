import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import AvatarItem from './AvatarItem/AvatarItem'

const Dialogs = (props) => {


    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);
    let avatarElements = props.state.avatars.map(a => <AvatarItem id={a.id} img={a.img} self={a.self}/>);

    let newMessageElement = React.createRef()
    let newMessage = () => {
        let messageText = newMessageElement.current.value;
        alert(messageText)
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.avatarItems}>
                {avatarElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <textarea ref={newMessageElement}></textarea>
            <button onClick={newMessage}>Send</button>
        </div>
    )
};

export default Dialogs;