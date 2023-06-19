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