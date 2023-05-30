class NotificationManager extends EventEmitter {
    static create(INotificationManagerCreate) : void
    static info(message?: INotificationManagerCreate['message'], title?: INotificationManagerCreate['title'], timeOut?: INotificationManagerCreate['timeout'], onClick?: INotificationManagerCreate['onClick'], priority?: INotificationManagerCreate['priority']) : void
    static success(message?: INotificationManagerCreate['message'], title?: INotificationManagerCreate['title'], timeOut?: INotificationManagerCreate['timeout'], onClick?: INotificationManagerCreate['onClick'], priority?: INotificationManagerCreate['priority']) : void
    static warning(message?: INotificationManagerCreate['message'], title?: INotificationManagerCreate['title'], timeOut?: INotificationManagerCreate['timeout'], onClick?: INotificationManagerCreate['onClick'], priority?: INotificationManagerCreate['priority']) : void
    static error(message?: INotificationManagerCreate['message'], title?: INotificationManagerCreate['title'], timeOut?: INotificationManagerCreate['timeout'], onClick?: INotificationManagerCreate['onClick'], priority?: INotificationManagerCreate['priority']) : void
    static remove(notification: Notification) : void
}

declare module 'react-notifications' {
    export { NotificationManager }
}