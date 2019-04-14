import React, {useState} from 'react'
import Dialog, {Alert} from '../lib/dialog/dialog'

const DialogExample  = () => {
    const [X, setX] = useState(false)
    return (
        <div>
            <div>
                <button onClick={() => setX(!X)}>open</button>
                <Dialog visible={X} 
                    title={"Hello GUI"}
                    onClose={() => setX(false)}
                    buttons={
                        [
                            <button onClick={() => setX(false)}>OK</button>,
                            <button onClick={() => alert("CancelDialog")}>Cancel</button>
                        ]
                    }
                    hasMask={false}
                    maskClosable={true}
                >
                    <div>Hello Dialog</div>
                </Dialog>
            </div>
            <div>
                <h3>Alert</h3>
                <button onClick={() => Alert("click")}>Alter Click</button>
            </div>       
        </div>
    )
}

export default DialogExample;