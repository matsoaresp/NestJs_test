# Comando para testar no Node 

fetch('http://localhost:3000/users/create', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ id: 1, name: 'John Doe', email: 'john.doe@example.com' })
}).then(r => r.json()).then(console.log)

# Comando para rodar o codigo 
npm run start