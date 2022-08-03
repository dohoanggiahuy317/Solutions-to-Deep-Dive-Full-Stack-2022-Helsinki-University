import axios from "axios";
const baseUrl = "/api/persons"

const getAll = () => {
    const request = axios.get(baseUrl);
    console.log("retrieved")
    return request.then(response => response.data)
}

const create = (newObj) => {
    const request = axios.post(baseUrl, newObj);
    console.log("added")
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    console.log("updated")
    return request.then(response => response.data)
}

const remove = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    console.log("deleted")
    return request.then(response => response.data)
}

export default {
    getAll: getAll,
    create: create,
    update: update,
    remove: remove
}