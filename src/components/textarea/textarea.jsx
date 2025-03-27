import Styled from "./textarea.module.css"
function Textarea(props) {
    return (
        <div className={Styled.textareaWrapper}>
            <label >{props.label}</label>
            <textarea onChange={props.handleChange}> </textarea>
        </div>
    );
}
export default Textarea;
