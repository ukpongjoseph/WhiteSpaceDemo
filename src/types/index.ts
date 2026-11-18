export type linkList = {
    startIcon? : string,
    linkText : string,
    endIcon? : string
}

export type cardCommon = {
    title : string,
    subtitle : string,
    actionLabel? : string,
    icon ? : string,
}

export type planType = {
    plan : string,
    price : string,
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