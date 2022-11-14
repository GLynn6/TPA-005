# Web Service & RESTful API for ToDoList Application


## Login

endpoint ``/auth/login`` method POST 

req body 

```js
    {
        "name": "febrianto",
        "email": "febrianto@gmail.com",
        "password": "123"
  
    }
```
respond
```js
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNocmlzdGlAZ21haWwuY29tIiwicGFzc3dvcmQiOiI3ODkiLCJpYXQiOjE2Njg0NDI0ODV9.1jhliG4IZXmYlJ3nWlRn78mOG-YMNjkiVDVYJ_xglQw"
}
```

## Register

endpoint ``/auth/register`` method POST 

req body
```js
{
  "name": "aca",
  "email": "aca@gmail.com",
  "password": "321"
  
}
```

respond
```js
{
  "id": 5,
  "name": "aca",
  "email": "aca@gmail.com",
  "password": "321",
  "updatedAt": "2022-11-14T16:17:11.613Z",
  "createdAt": "2022-11-14T16:17:11.613Z"
}
```

## ToDoList


endpoint ``/list`` method GET untuk mengambil seluruh data

respond
```js
{
  "message": "succes get data",
  "data": [
    {
      "id": 1,
      "task": "Membantu orang tua",
      "desc": "Membersihkan rumah",
      "complete": false,
      "userId": 1,
      "createdAt": "2022-11-14T00:52:59.000Z",
      "updatedAt": "2022-11-14T00:52:59.000Z",
      "UserId": 1
    },
    {
      "id": 2,
      "task": "Mengerjakan tugas kuliah",
      "desc": "Tugas TPA 5",
      "complete": true,
      "userId": 2,
      "createdAt": "2022-11-14T16:24:34.000Z",
      "updatedAt": "2022-11-14T16:24:34.000Z",
      "UserId": 2
    }
  ]
}
```

endpoint ``/list/id`` method GET untuk melihat detail dari sebuah todo by id

respond
```js
{
  "message": "succes get data",
  "data": {
    "id": 1,
    "task": "Membantu orang tua",
    "desc": "Membersihkan rumah",
    "complete": false,
    "userId": 1,
    "createdAt": "2022-11-14T16:36:32.000Z",
    "updatedAt": "2022-11-14T16:36:32.000Z",
    "UserId": 1,
    "User": {
      "id": 1,
      "name": "febrianto",
      "email": "febrianto@gmail.com",
      "password": "123",
      "createdAt": "2022-11-14T00:48:46.000Z",
      "updatedAt": "2022-11-14T00:48:46.000Z"
    }
  }
}
```

endpoint ``/list`` method POST untuk menginputkan atau menambahkan sebuah todo baru

req body
```js
{
      "task": "Ke kampus",
      "desc": "Ke kampus untuk mengadakan rapat",
      "complete": true,
      "userId": 2
  
}
```

respond
```js
{
    {
  "id": 3,
  "task": "Ke kampus",
  "desc": "Ke kampus untuk mengadakan rapat",
  "complete": true,
  "userId": 2,
  "createdAt": "2022-11-14T16:28:38.936Z",
  "updatedAt": "2022-11-14T16:28:38.936Z"
}
}
```

endpoint ``/list/id`` method DELETE untuk menghapus sebuah todo by id

respond
```js
{
  "message": "Deleted succesfully"
}
```

endpoint ``/list/id`` method PUT untuk mengubah sebuah data todo by id

req body
```js
{
      "task": "Mengerjakan tugas kuliah",
      "desc": "Tugas TPA 5",
      "complete": false,
      "userId": 2
  
}
```
respond
```js
{
  "message": "Update successfuly"
}
```

endpoint ``/list`` method DELETE untuk seluruh inputan todolist

respond
```js
{
  "message": "all rows have been deleted successfully"
}
```


## Manipulasi user

endpoint ``/user`` method GET untuk mengambil seluruh data user

respond
```js
{
  "message": "succes get data",
  "data": [
    {
      "id": 1,
      "name": "febrianto",
      "email": "febrianto@gmail.com",
      "password": "123",
      "createdAt": "2022-11-14T00:48:46.000Z",
      "updatedAt": "2022-11-14T00:48:46.000Z"
    },
    {
      "id": 3,
      "name": "glynn",
      "email": "glynn@gmail.com",
      "password": "123",
      "createdAt": "2022-11-14T09:45:57.000Z",
      "updatedAt": "2022-11-14T09:45:57.000Z"
    },
    {
      "id": 4,
      "name": "christi",
      "email": "christi@gmail.com",
      "password": "789",
      "createdAt": "2022-11-14T10:25:12.000Z",
      "updatedAt": "2022-11-14T10:25:12.000Z"
    },
    {
      "id": 5,
      "name": "aca",
      "email": "aca@gmail.com",
      "password": "321",
      "createdAt": "2022-11-14T16:17:11.000Z",
      "updatedAt": "2022-11-14T16:17:11.000Z"
    }
  ]
}
```


respond
endpoint ``/user`` method PUT untuk mengubah sebuah data user by id
```js
{
  "message": "Update successfuly"
}
```

endpoint ``/list/id`` method DELETE untuk menghapus sebuah data user by id

respond
```js
{
  "message": "Deleted succesfully"
}
```


