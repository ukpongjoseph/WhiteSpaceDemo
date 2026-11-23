// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


type NavProps = {
    message : string
}

export default function Nav({message}: NavProps) {

    return (
        <>
            {<div>{message}</div>}
        </>
    )
}