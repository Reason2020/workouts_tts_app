import { createContext, useState } from "react";

export const NotificationContext = createContext();

const NotificationContextProvider = ({ children }) => {
    const [ message, setMessage ] = useState("");
    const [ messageType, setMessageType ] = useState("success");
    const [ showNotification, setShowNotification ] = useState(true);

    return (
        <NotificationContext.Provider value={{ message, setMessage, messageType, setMessageType, showNotification, setShowNotification }} >
            {children}
        </NotificationContext.Provider>
    )
}

export default NotificationContextProvider;