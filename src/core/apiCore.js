import {API} from '../config';
import queryString from 'query-string'



export const getServices = () => {
    return fetch (`https://cynergyglobal.herokuapp.com/services`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};


export const read = (member) => {
    return fetch (`https://cynergyglobal.herokuapp.com/team/${member}`, {
        method: "GET"
    })
    .then(response => {
      
        return response.json();
    })

    .catch(err => console.log(err))
};


export const getFilteredProducts = (skip,limit,filters = {}) => {
    const data = {
        limit, skip,filters
    }
  
    return fetch(`https://cynergyglobal.herokuapp.com/news/by/search`, {
        method:'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': "application/json"
           
        },
        body:JSON.stringify(data)
    })
    .then(response => {
        return response.json()
    })
    .catch(err => {
        console.log(err)
    })
};

export const getTeamFilteredProducts = (skip,limit,filters = {}) => {
    const data = {
        limit, skip,filters
    }
  
    return fetch(`https://cynergyglobal.herokuapp.com/team/by/search`, {
        method:'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': "application/json"
           
        },
        body:JSON.stringify(data)
    })
    .then(response => {
        return response.json()
    })
    .catch(err => {
        console.log(err)
    })
};


export const readNews = (member) => {
    return fetch (`https://cynergyglobal.herokuapp.com/news/${member}`, {
        method: "GET"
    })
    .then(response => {
      
        return response.json();
    })

    .catch(err => console.log(err))
};

export const getdown = productId => {
    return fetch(`https://cynergyglobal.herokuapp.com/team/file/${productId}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};