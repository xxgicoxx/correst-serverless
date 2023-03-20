# Correst Serverless
Serverless Web Service for track Correios objects.

<p align="center">
  <img src="assets/imgs/correios.png">
</p>

# Features
* Track Correios objects

# Prerequisites
* [Node.js](https://nodejs.org/en/)

# Running
### 1. Vercel Deploy
````
# Account
Create an Vercel account on https://vercel.com/.

# Install Vercel CLI
npm install -g vercel

# Vercel CLI login
vercel login

# Deploy
vercel
````

# Example
````
curl --location --request GET 'https://correst-serverless-{USER}.vercel.app/api/track?code=PX547037143BR'
````

# Response example
```json
{
  "code": "QJ852965722BR",
  "events": [
    {
      "event": "Objeto entregue ao destinatário",
      "date": "10/01/2022",
      "hour": "08:53",
      "location": "Unidade de Distribuição - Pato Branco / PR"
    },
    {
      "event": "Objeto em trânsito - por favor aguarde",
      "date": "06/01/2022",
      "hour": "09:43",
      "origin": "Agência dos Correios - Sao Bernardo Do Campo / SP",
      "destination": "Unidade de Tratamento - Cajamar / SP"
    },
    {
      "event": "Objeto postado",
      "date": "05/01/2022",
      "hour": "15:47",
      "location": "Agência dos Correios - Sao Bernardo Do Campo / SP"
    }
  ]
}
```

# Built With
* [Node.js](https://nodejs.org/en/)

# Authors
* [xxgicoxx](https://github.com/xxgicoxx)