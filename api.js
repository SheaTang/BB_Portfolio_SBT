const { extendSchemaImpl } = require("graphql/utilities/extendSchema");

// context is globally shared 
const ctx ={
    "accounts": [
        {
            "name": "Emma"
            "email": "emma@mit.edu",
            "balance": 0,
            "password": "secret"

        }
    ]
}
function create(){
    const name      = document.getElementById('name');
    const email     = document.getElementById('email');
    const password  = document.getElementById('password');
    const status    = document.getElementById('createStatus');
    ctx.accounts.push({
        name:       name.value,
        email:      email.value,   
        password:   password.value,
        balance:    0,
    });
    // update status & clear form 
    name.value = '';
    email.value = '';
    password.value = '';
    status.innerHTML = 'Success';
}