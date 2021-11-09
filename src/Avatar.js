//This format is when you want to pass a string attribute to JSX
// export default function Avatar() {
//     return(
//         <img 
//             className="avatar"
//             src="https://i.imgur.com/7vQD0fPs.jpg"
//             alt="Gregorio Y. Zara"
//         />
//     )
// }

//This format is when you want to dynamically specify the src or alt text
// export default function Avatar() {
//     const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
//     const description = "Gregorio Y. Zara";
//     return(
//         <img 
//             className="avatar"
//             src={avatar}
//             alt={description}
//         />
//     );
// }

//This format is when you want to pass props
//Not sure why, but getting error message that imageId as undefined
import { getImageUrl } from './utils.js';

export default function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}