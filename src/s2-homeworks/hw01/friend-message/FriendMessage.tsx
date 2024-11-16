import React from 'react'
import s from './FriendMessage.module.css'
import { MessageType } from "../HW1"; // Импортируем тип MessageType

// Создаем тип для пропсов
export type FriendMessagePropsType = {
    message: MessageType;
}

// Отображение приходящих данных
const FriendMessage = (props: FriendMessagePropsType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}
                    src={props.message.user.avatar} // Используем аватар из пропсов
                    alt="Friend avatar" // Добавляем альтернативный текст для доступности
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        {props.message.user.name} {/* Отображаем имя пользователя */}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {props.message.message.text} {/* Отображаем текст сообщения */}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                {props.message.message.time} {/* Отображаем время сообщения */}
            </div>
        </div>
    )
}

export default FriendMessage;