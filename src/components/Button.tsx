
interface ButtonProps {
    children: React.ReactNode;
    classname?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button ( props: ButtonProps ) {
    return(
        <button onClick={ props.onClick } className={ props.classname }>
            { props.children }
        </button>
    )
}
