import { JSX } from "react"

// export const RandomFox = () => {
//     return <img />
// }

type Props = {image: string, placeholder?: string};

export const RandomFox = ({image}: Props): JSX.Element => {
    //const image:string = `https://randomfox.ca/images/1.jpg`;
    return <img src={ image } width="150em" height="auto" className="rounded-full" />
}
