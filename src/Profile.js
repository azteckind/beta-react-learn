import { getImageUrl } from "./utils";

function Avatar({person, size}) {
    return(
        <img 
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    )
}
export function Profile() {
    return (
    //   <img 
    //     src="https://www.nasa.gov/sites/default/files/thumbnails/image/26646856911_ca242812ee_o_1.jpg"
    //     alt="Katherine Johnson"
    //     width={100}
    //     height={100}
    //   />
        <>
            <Avatar
                size={100}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }} 
            />
            <Avatar
                size={80}
                person={{
                    name: 'Aklilu Lemma',
                    imageId: 'OKS67lh'
                }} 
            />
            <Avatar
                size={50}
                person={{
                    name: 'Lin Lanying',
                    imageId: '1bX5QH6'
                }} 
            />
        </>
    );
}
//When using an image, it's best to go directly to the source of the image rather than the Google search result