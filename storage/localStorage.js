const tokenKey = "token";
const userKey = "user";

export function saveToken(token){
    storageSave(tokenKey, token);
}

export function getToken(){
    return getStorage(tokenKey);
}

export function saveUser(user){
    storageSave(userKey, user);
}

export function getUsername(){
    const user = getStorage(userKey);

    if(user){
        return user.username;
    
    }
    return null;
}


function storageSave(key, value){
    localStorage.setItem(key, JSON.stringify(value));
};

function getStorage(key){
    const value = localstorage.getItem(key);

    if(!value){
        return [];
    }

    return JSON.parse(value);
}