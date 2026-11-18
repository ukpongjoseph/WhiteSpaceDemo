import type { SvgIconComponent } from "@mui/icons-material"

export type linkList = {
    startIcon? : SvgIconComponent,
    text : string,
    endIcon? : SvgIconComponent
}

export type cardCommon = {
    title : string,
    subtitle : string,
    actionLabel? : string,
    icon ? : string,
}

export type planType = {
    plan : string,
    price : number,
    planDescription : string,
    planFeatures : linkList[],
    actionLabel : string,
}

export type footerType = {
    index : string,
    links : linkList[],
}

export type testimonial = {
    intro : string,
    image : string,
    name : string,
    title : string
}