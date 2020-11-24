import {API} from '../config';

export const signup = user => {
    //console.log(name,email,password)
    return fetch(`https://cynergyglobal.herokuapp.com/signup`, {
        method:'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': "application/json"
        },
        body:JSON.stringify(user)
    })
    .then(response => {
        return response.json()
    })
    .catch(err => {
        console.log(err)
    })
};


export const signin = user => {
    //console.log(name,email,password)
    return fetch(`https://cynergyglobal.herokuapp.com/signin`, {
        method:'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': "application/json"
        },
        body:JSON.stringify(user)
    })
    .then(response => {
        return response.json()
    })
    .catch(err => {
        console.log(err)
    })
}


export const forgotPassword = email => {
    //console.log(name,email,password)
    return fetch(`https://cynergyglobal.herokuapp.com/forgot-password`, {
        method:'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': "application/json"
        },
        body:JSON.stringify(email)
    })
    .then(response => {
        return response.json()
    })
    .catch(err => {
        console.log(err)
    })
}


export const resetPassword = (user) => {
    //console.log(name,email,password)
    return fetch(`https://cynergyglobal.herokuapp.com/reset-password`, {
        method:'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': "application/json"
        },
        body:  JSON.stringify(user)

    })
    .then(response => {
        return response.json()
    })
    .catch(err => {
        console.log(err)
    })
}

export const authenticate = (data,next) => {
    if(typeof window !== 'undefined') {
        localStorage.setItem('jwt', JSON.stringify(data))
        next()
    }
}


export const signout = (next) => {
    if(typeof window !== 'undefined') {
        localStorage.removeItem('jwt');
        next();
        return fetch(`https://cynergyglobal.herokuapp.com/signout` ,{
            method:"GET"
        })
        .then(response => {
            console.log('signout',response)
        })
        .catch(err => console.log(err))
    }

}


export const isAuthenticated = () => {
    if(typeof window == 'undefined')  {
        return false
    }

    if (localStorage.getItem('jwt')){
        return JSON.parse(localStorage.getItem('jwt'))
    }else{
        return false;
    }
}