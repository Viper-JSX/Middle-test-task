import { useSelector } from "react-redux";

function Message () {
    const message = useSelector((state) => state.message);
    const title = message?.title || ""; //Message is initially null
    const text = message?.text || "";

    return(
        <div className={ `message ${message ? "visible" : "hidden"}` }>
            <b className="message__title">{ title }</b>
            <p className="message__text">{ text }</p>
        </div>
    );
}

export default Message;