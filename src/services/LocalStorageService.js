const storeToken = (value) =>{
    if (value){
        const {access, refresh} = value
        localStorage.setItem('access_token', access)
        localStorage.setItem('refresh_token', refresh)
    }
}

const getToken = () =>{
    let access_token = localStorage.getItem('access_token')
    let refresh_token = localStorage.getItem('refresh_token')
    return {access_token, refresh_token}
}

const removeToken = () =>{
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
}

const setCurrentLang = (value) =>{
    if (value === null){
        const lang = "mr"
        localStorage.setItem('current_language', lang)
    }
    if (value){
        const lang = value
        localStorage.setItem('current_language', lang)
    }
    else{
        const lang = "mr"
        localStorage.setItem('current_language', lang)
    }
}

const getCurrentLang = () =>{
    let language = localStorage.getItem("current_language")
    return {language}
}

const getCurrentTheme = () =>{
    let current_theme = localStorage.getItem("current_theme")
    return {current_theme}
}

const setCurrentTheme = (value) =>{
    if (value){
        const theme = value
        localStorage.setItem('current_theme', theme)
    }
    else{
        const theme = "dark-theme"
        localStorage.setItem('current_theme', theme)
    }
}


export { storeToken, getToken, removeToken, setCurrentLang, getCurrentLang, setCurrentTheme, getCurrentTheme } 
