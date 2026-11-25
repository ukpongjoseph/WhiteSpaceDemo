import { keyframes } from "@emotion/react"

export const buttonEffectOnHover : React.CSSProperties = {
    'transform' : `scale(1.05)`,
    backgroundColor : 'lightblue',
    'transition' : `background-color 0.2s ease, transform 0.2s ease`
} 

export const cardPlanEffectOnHover = {
    'transform' : `scaleY(1.1)`,
    'transition' : `transform 0.25s ease-out`
}


export const animationKeyframe = keyframes`
    from {opacity : 0; transform : translateY(12px);}
    to {opacity : 1; transform : translateY(0);}
`

export const buttonColors = {
    "normal" : '#4F9CF9',
    "login" : '#FFE492'
}

export const cardColor = {
    'background' : '#043873',
    'innerCard' : '#C4DEFD',
    'clientCard' : '#4F9CF9'
}