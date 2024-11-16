import React from 'react';
import s from './FriendMessage.module.css';
import { MessageType } from '../HW1'; // Импортируем тип MessageType из HW1

// Описание типа FriendMessagePropsType
export type FriendMessagePropsType = {
    message: MessageType;
};

// Отображение приходящих данных
const FriendMessage: React.FC<FriendMessagePropsType> = (props) => {
    const { message } = props;

    return (
        <div
            id={'hw1-friend-message-' + message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + message.id}
                    src={message.user.avatar} // Используем аватар из пропсов
                    alt="friend avatar"
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + message.id}
                        className={s.friendName}
                    >
                        {message.user.name} {/* Используем имя из пропсов */}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + message.id}
                        className={s.friendMessageText}
                    >
                        {message.message.text} {/* Используем текст сообщения из пропсов */}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + message.id}
                className={s.friendTime}
            >
                {message.message.time} {/* Используем время из пропсов */}
            </div>
        </div>
    );
};

export default FriendMessage;