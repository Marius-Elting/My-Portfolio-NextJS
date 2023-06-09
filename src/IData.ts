export interface ISingleProject {
    title: string
    headline: string
    description: string
    image: string
    link: string
    stack: string
}

export interface IProjects {
    headline: string
    showmore: string
    ProjectData: Array<ISingleProject>
}

export interface IHeaderData {
    home: string,
    projects: string,
    aboutMe: string,
    contact: string
}

export interface IPrivacy {
    Headline: string
    Text: string
}


export interface IContact {
    Headline: string
    YName: string
    YEmail: string
    YSubject: string
    YMessage: string
    Acceptpolicy: string
    Infopolicy: string
    policyLink: string
    button: string
    nameError: string
    emailError: string
}

export interface IOther {
    contactButton: string
    downloadCV: string
}

export interface IInfo {
    Headline: string
    Body: string
}


export interface IAboutMe {
    AllHeadline: string
    Info: IInfo[]
}

export interface IdataSingle {

    Header: IHeaderData
    Home: {
        Headline: string
        Headlinesub1: string
        Headlinesub2: string
    },
    Projects: IProjects
    AboutMe: IAboutMe,
    ContactMe: IContact,
    Privacy: IPrivacy,
    Other: IOther
}

export interface IdataAll {
    English: IdataSingle
    German: IdataSingle
}


