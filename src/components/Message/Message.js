import { useSelector } from "react-redux";

function Message () {
    const message = useSelector((state) => state.message);
    const title = message?.title || ""; //Message is null initially
    const text = message?.text || "";

    return(
        <div className={ `message ${message ? "visible" : "hidden"}` }>
            <b className="message__title">{ text }</b>
            <p className="message__text">{ title }</p>
        </div>
    );
}

export default Message;