//  export type AlertType = 'success' | 'error' | 'warning' | 'info';


import type { AlertBoxProps } from "../types";

export default function AlertBox(props: AlertBoxProps) {
    
    return (
        <div>
            
            <p>AlertBox</p>
            <p>{props.type}</p>
            <p>{props.message}</p>
            <button onClick={props.onClose}>Click Me</button>
            {props.children}
        </div>

       
    )
}





// export default function AlertBox(props: AlertBoxProps) {
//     return (
//         <div className="info-container">
//         <p>AlertBox</p>
//         <p>Success</p>
//         <p>Error</p>
//         <p>Warning</p>
//         <p>Info</p>

//         </div>
//     )
// }



