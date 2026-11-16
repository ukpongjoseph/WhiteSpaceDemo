type NavProps = {
    message : string
}

export default function Nav({message}: NavProps) {
    return (
        <>
            <p>{message}</p>
        </>
    )
}