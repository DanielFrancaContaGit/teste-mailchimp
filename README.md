# teste-mailchimp

<p align=center>
  <img width="500" src="https://www.vrsys.com.br/images/vrsys/blog-new/como-utilizar-o-mailchimp-para-e-mail-marketing-guia-basico-imagem-mailchimp.jpg" alt="docker-logo">
</p>


 Esse projeto é um teste para poder entender como a api do mailchimp funciona, eu useu como base o guia:
 - [How to Integrate MailChimp with your NodeJS app](https://www.codementor.io/@mattgoldspink/integrate-mailchimp-with-nodejs-app-du10854xp) 
 
 Este guia explica bem a estrutura do projeto mas é preciso trocar a forma como o Fistname e o Secondname é passado:
 
 ```
 'merge_fields': {
      'FNAME': req.body.firstName,
      'LNAME': req.body.lastName
   }
 ```
 
 para:
 
 ```
 'merge_fields': {
      'FNAME': req.body.firstname,
      'LNAME': req.body.lastname
   }
 ```
 Para rodar o projeto use os seguintes comentos:
 
```
npm i 
```

 Depois:

```
npm i -g nodemon 
```

 Para rodar o projeto:

```
nodemon index.js
```
 
 Para encontrar o id da sua alista, na sua conta do mailchimp é preciso ir em  `Audience` e depois em `Mamage Audience` e em seguida em `Settings` e no final da pagina você ira encontrat o id .
