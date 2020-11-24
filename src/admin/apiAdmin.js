import { API } from '../config';

export const createEmployee = (userId, token, insight) => {
    return fetch(`https://cynergyglobal.herokuapp.com/team/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: insight
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};


export const addMailing = (insight) => {
    return fetch(`https://cynergyglobal.herokuapp.com/mailing/create`, {
        method: 'POST',
        headers: {
            Accept: 'application/json'
        },
        body: insight
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};






export const createInsight = (userId, token, insight) => {
    return fetch(`https://cynergyglobal.herokuapp.com/news/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: insight
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};


export const getCategory = categoryId => {
    return fetch(`${API}category/${categoryId}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getCategories = () => {
    return fetch(`${API}categories`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};













export const getTeam = () => {
    return fetch(`https://cynergyglobal.herokuapp.com/team?limit=undefined`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const deleteTeam = (productId, userId, token) => {
    return fetch(`https://cynergyglobal.herokuapp.com/team/${productId}/${userId}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getTeamMember = productId => {
    return fetch(`https://cynergyglobal.herokuapp.com/team/${productId}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const updateTeam = (productId, userId, token, product) => {
    return fetch(`https://cynergyglobal.herokuapp.com/team/${productId}/${userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: product
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};





export const getInsights = () => {
    return fetch(`https://cynergyglobal.herokuapp.com/news?limit=undefined`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const deleteInsight = (productId, userId, token) => {
    return fetch(`https://cynergyglobal.herokuapp.com/news/${productId}/${userId}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getInsight = productId => {
    return fetch(`https://cynergyglobal.herokuapp.com/news/${productId}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const updateInsight = (productId, userId, token, product) => {
    return fetch(`https://cynergyglobal.herokuapp.com/news/${productId}/${userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: product
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};



