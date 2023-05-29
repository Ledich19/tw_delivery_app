# delivery app

## deploy [delivery app](https://delivery-app-ip7s.onrender.com)

## client
  for launch and work google map you need create file __.env__ with environment variable
  ``VITE_API_KEY = <google api key>``

To run the client, use the command `npm run dev` in the client folder. 
```
  npm run dev
```
  To build the client and place the generated files in the server folder use:
```
  npm run build:s
```

## server
  for launch you need create file __.env__ with environment variable
  ``MONGODB_URI = <your mongo db url>``
To start the server in development mode, use the following command:
```
npm run dev
```
To start the server in production mode, use the following command:
```npm start```

## for launch all project

1. Open the folder containing your project.
2. Navigate to the `server` folder using the command `cd server` in your command prompt or terminal. This assumes that your project has a `server` folder that contains the server-side code.
3. Make sure you have Node.js and npm installed on your computer. You can check their presence by running the commands `node -v` and `npm -v`, respectively. If they are not installed, you can download them from the official Node.js website (https://nodejs.org) and proceed with the installation.
4. Run the command `npm install` or `npm i` to install all the project dependencies. This command will install all the necessary packages specified in the `package.json` file.
5. After the installation is complete, execute the command `npm start` to launch the project in production mode. If you want to run the project in development mode, use the command `npm run dev`. Refer to your project's documentation to determine which available scripts to run.
Example commands in the command prompt or terminal:
  Replace `path_to_project_folder` with the actual path to the folder where your project is located.
```
cd path_to_project_folder/server
npm install
npm start
```

## API
<details>  
<summary>shops GET all shops</summary>

- URL: /shops
- Method: GET
- Headers: 'Content-Type': 'application/json'
- URL Params: 
- Query Params: None
- Data Params : None
- Success Response:
  + Code: 200 OK
  + Content:
  ``` 
  [
    {
      "id": "String",
      "name": "String",
      "products": ["String(product id)" ],
    }
  ]
  ```
</details>

<details>  
<summary>shops GET shop by id</summary>

- URL: /shops/:id
- Method: GET
- Headers: 'Content-Type': 'application/json'
- URL Params: 
  + Required: id=[integer]
- Query Params: None
- Data Params : None
- Success Response:
  + Code: 200 OK
  + Content:
  ``` 
    {
      "id": "String",
      "name": "String",
      "products": ["String(product id)"],
    }
  ```
- Error Response:
  + Code: 404 NOT FOUND
  + Content:
  ```
  {}
  ```
</details>

<details> 
<summary>shops POST create new shop</summary>

- URL: /shops
- Method: POST
- Headers: 'Content-Type': 'application/json'
- URL Params: None
- Query Params: None
- Data Params : 
``` 
  {
    "name": "String",
    "products": [],
  }
```
- Success Response:
  + Code: 201 OK
  + Content:
  ``` 
    {
      "id": "String",
      "name": "String",
      "products": ["String(product id)"],
    }
  ```

- Error Response:
  + Code: 400 
  + Content:
  ```
  {
    "error": "content missing",
  }
  ```
</details>

<details> 
<summary>shops DELETE shop</summary>

- URL: /shops/:id
- Method: DELETE
- Headers: 'Content-Type': 'application/json'
- URL Params: None
  + Required: id=[integer]
- Query Params: None
- Data Params : none
- Success Response:
  + Code: 204 OK
  + Content:
  ``` 
    {}
  ```

- Error Response:
  + Code: 404 NOT FOUND 
  + Content:
  ```
  {}
  ```
</details>

<details>  
<summary>orders GET all orders</summary>

- URL: /cart
- Method: GET
- Headers: 'Content-Type': 'application/json'
- URL Params: 
- Query Params: None
- Data Params : None
- Success Response:
  + Code: 200 OK
  + Content:
  ``` 
  [
    {
      "name": "String",
      "email": "String",
      "phone": "String",
      "address": "String",
      "order": [
        {
          "info": {
            "id": "String",
            "name": "String",
            "photo": "String",
            "price": "String",
          },
          "amount": 10,
        }
      ]
    }
  ]
  ```
- Error Response: None
- Notes: None
</details>

<details> 
<summary>orders POST create new order</summary>

- URL: /cart
- Method: POST
- Headers: 'Content-Type': 'application/json'
- URL Params: None
- Query Params: None
- Data Params :
``` 
[
    {
      "name": "String",
      "email": "String",
      "phone": "String",
      "address": "String",
      "order": [
        {
          "info": {
            "id": "String",
            "name": "String",
            "photo": "String",
            "price": "String",
          },
          "amount": 10,
        }
      ]
    }
  ]
```
- Success Response:
  + Code: 201 CREATED
  + Content:
  ``` 
  [
    {
      "name": "String",
      "email": "String",
      "phone": "String",
      "address": "String",
      "order": [
        {
          "info": {
            "id": "String",
            "name": "String",
            "photo": "String",
            "price": "String",
          },
          "amount": 10,
        }
      ]
    }
  ]
  ```

- Error Response: None
- Notes: None
</details>

<details> 
<summary>orders DELETE order</summary>

- URL: /cart/:id
- Method: DELETE
- Headers: 'Content-Type': 'application/json'
- URL Params: None
  + Required: id=[integer]
- Query Params: None
- Data Params : none
- Success Response:
  + Code: 204 OK
  + Content:
  ``` 
    {}
  ```
- Error Response:
  + Code: 404 NOT FOUND 
  + Content:
  ```
  {}
  ```
</details>

