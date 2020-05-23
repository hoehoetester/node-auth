# node-auth

## Set up

1. Clone this repo
2. Run `npm install`
3. Add `dotenv` file in root directory
   ```
   DB_CONNECT = YOUR_MONGODB_CONNECTION_HERE
   TOKEN_SECRET = ADD_SECRET_KEY_HERE__THIS_CAN_BE_RANDOM_TEXT
   ```
4. Run `npm run start`

---

## URLs

- ### POST
  - http://localhost:1234/api/user/register
    ```json
    {
        "name": "hoehoe",
        "email": "hoe@email.com",
        "password": "1122"
    }
    ```
  - http://localhost:1234/api/user/login/
    ```json
    {
      "email": "hoe@email.com",
      "password": "yourpasswordhere"
    }
    // this gets token
    ```
- ### GET
  - http://localhost:1234/api/posts
    ![GET - posts page request](https://user-images.githubusercontent.com/13145406/82728684-345cf400-9d46-11ea-973a-44893c5fe033.png)

---

## References

Tutorial

- https://www.youtube.com/watch?v=2jqok-WgelI
