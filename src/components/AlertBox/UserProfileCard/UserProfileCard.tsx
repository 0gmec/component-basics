import type { UserProfileCardProps } from "../../../types";


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
      const {
        user,
        showEmail,
        showRole,
        onEdit,
        children
    }
    return (
        <div className="user-profile">
            <h2> {user}</h2>
            {showEmail} <p>Email</p>
            {showRole} <p>Role</p>
            <button onClick={onEdit}>Edit</button>
            {children}
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