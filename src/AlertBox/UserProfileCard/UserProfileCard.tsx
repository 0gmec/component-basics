import type { UserProfileCardProps } from "../../types";


// export interface User {
//   id: string;
//   name: string;
//   email: string;
//   role: string;
//   avatarUrl?: string;
// }
 
// export interface UserProfileCardProps {
//   user: User;
//   showEmail?: boolean;
//   showRole?: boolean;
//   onEdit?: (userId: string) => void;
//   children?: React.ReactNode;
// }

export default function UserProfileCard(props: UserProfileCardProps) {
    return (
        <div className="user-profile">
            <p>Name: {props.user.name}</p>
           <p>Email: {props.showEmail} </p>
          <p>Role: {props.showRole} </p>
            <button onClick={props.onEdit}>Edit</button>
            {props.children}
        </div>
    )
}













// export default function UserProfileCard(props: UserProfileCardProps) {
  
//     return ( <p>User Profile Card</p>
//     <p>{user}</p>
//     <p>{showEmail}</p>
//     <p>{showRole}</p>
//     <p>{onEdit}</p>
//     <p></p>
//     )
// }