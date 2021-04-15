import {UserForm} from "./views/UserForm";
import {Collection} from "./models/Collection";
import {UserProps} from "./models/User";
import {User} from "./models/User";
import {UserList} from "./views/UserList";
import {UserEdit} from "./views/UserEdit";


const user = User.buildUser({name: 'Natash Oma', age: 39})
const root = document.getElementById('root')

if(!root) {
    throw new Error("Root element not found")
}
const userEdit = new UserEdit(root, user)
//201

userEdit.render()

console.log(111, userEdit)


// const users = new Collection('http://localhost:3000/users', (json: UserProps) => {
//     return User.buildUser(json)
// })
//
// users.on('change', () => {
//     const root = document.getElementById('root')
//
//     if(!root) {
//         throw new Error("Root element not found")
//     }
//     new UserList(root, users).render()
// })
//
// users.fetch()