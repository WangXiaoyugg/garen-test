import React, {Fragment, ReactElement} from 'react'
import ReactDOM from 'react-dom'
import { Icon } from "../index"
import { scopedClassMaker } from '../classes'
import "./dialog.scss"

interface IProps {
    visible: boolean;
    onClose: React.MouseEventHandler;
    buttons?: Array<ReactElement>;
    maskClosable?: boolean;
    title?: string;
    hasMask?: boolean;
}

const sc = scopedClassMaker("gui-dialog")

const Dialog: React.FunctionComponent<IProps> = (props) => {
    const handleMaskClick: React.MouseEventHandler = (e) => {
        if(props.maskClosable) {
            props.onClose(e);
        }
    }
    const handleCloseIconClick: React.MouseEventHandler = (e) => {
        props.onClose(e);
    }
    
    const dialog = props.visible ? (
            <Fragment>
                { props.hasMask && (<div className={sc("mask")} onClick={handleMaskClick}></div>)}
                <div className={sc()}>
                    <header className={sc("header")}>
                        {props.title && <div className={sc("title")}>{props.title}</div>}
                        <Icon name="close" className={sc("close")} onClick={handleCloseIconClick}/>
                    </header>
                    <main className={sc("main")}>
                        {props.children}
                    </main>

                    {
                        props.buttons && 
                            <footer className={sc("footer")}>
                            {
                                props.buttons && props.buttons.map((button, index) => {
                                    return React.cloneElement(button, {key: index})
                                })
                            }
                        </footer>
                    }
                </div>  
            </Fragment>  
        )  : null
    return ReactDOM.createPortal(dialog, document.body)    
}
Dialog.defaultProps = {
    maskClosable: true,
    hasMask: true,
}

const Alert = (content: string) => {
    const component  = <Dialog visible={true} onClose={() => {
        ReactDOM.render(React.cloneElement(component,{visible: false}), div);
        // https://react.docschina.org/docs/react-dom.html#unmountcomponentatnode
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
    }}>{content}</Dialog>

    const div = document.createElement("div");
    document.body.append(div);
    ReactDOM.render(component, div);
}
const confirm = () => {}
const modal = () => {}
export {
    modal,
    confirm,
    Alert,
}

export default Dialog