//  export type AlertType = 'success' | 'error' | 'warning' | 'info';


import type { AlertBoxProps } from "../../types/";

 export const AlertBox: React.FC<AlertBoxProps> = ({
    type,
    message,
    onClose,
    children,
 }) => {
    return (
        <div>
<p>AlertBox</p>
<p>{type}</p>
<p>{message}</p>
<button onClick={onClose}>Click Me</button>
{children}
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



// export interface AlertBoxProps {
//   type: AlertType;
//   message: string;
//   onClose?: () => void;
//   children?: React.ReactNode;
// }