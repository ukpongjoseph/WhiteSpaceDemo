type HeroProps = {
    message : string
}

export default function Hero({message}: HeroProps) {
    return (
        <>
            <p>This is the Hero section</p>
            <p>{message}</p>
        </>
    )
}