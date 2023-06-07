import { MongoClient } from 'mongodb'

// URL de conexão com o MongoDB
const url = 'mongodb://0.0.0.0:27017/';

// Nome do banco de dados
const dbName = 'infoGames';

// Nome da collection
const collectionName = "games";

// Função de conexão com o MongoDB
async function connectToMongoDB() {
  try {
    // Cria uma instância do cliente MongoDB
    const client = new MongoClient(url);

    // Conecta ao servidor MongoDB
    await client.connect();
    
    console.log('Conectado ao MongoDB com sucesso!');

    // Retorno a instância de conexão do banco de dados
    return client;

  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
  }
}

// searchGames();
// Função de pesquisa
async function searchGames(){
  try{
    const conn = await connectToMongoDB();

    // Selecionando o banco de dados
    const db = await conn.db(dbName);

    // Rating >= 4.7
    const gameRating = await db.collection(collectionName).find({ Rating: {$gt: 4.7 }}).toArray();

    // Title específico
    const _obj = {
      "Title": "Halo 3"
    }
    const gameTitle = await db.collection(collectionName).find(_obj).toArray();

    console.log(gameRating);
    console.log(gameTitle);

  } catch (error) {
    console.log(error);
  }
}

// insertGame();
// Função de inserção
async function insertGame(){
  try {
    const conn = await connectToMongoDB();

    // Selecionando o banco de dados
    const db = await conn.db(dbName);

    // Inserindo um jogo preenchendo as colunas "Title" e "Team"
    const game = { Title: "Counter-Strike Global Offensive", Team: "Valve" };
    const result = await db.collection(collectionName).insertOne(game);

    console.log(result);

  } catch(error){
    console.log(error);
  }
}

// insertManyGames();
// Função de inserção em massa
async function insertManyGames(){
  try {
    const conn = await connectToMongoDB();

    //Selecionando o banco de dados
    const db = await conn.db(dbName);

    const docs = [
      {Title: "FIFA 23", "Release Date": "10/01/2023", Team: "EA Sports", Rating: "4.0"},
      {Title: "FIFA 22", "Release Date": "10/01/2023", Team: "EA Sports"},
      {Title: "Valorant", "Release Date": "10/06/2020", Team: "Riot Games", Rating: "4.0", Genres: "FPS"},
      {Title: "Dota 2", "Release Date": "10/01/2013", Team: "Valve", Rating: "3.9"},
      {Title: "Forza Horizon", "Release Date": "10/01/2013", Team: "Playground Games", Rating: "4.9"},
      {Title: "League of Legends", "Release Date": "10/01/2013", Team: "Riot Games", Rating: "3.9", Teams: "[T1, C9, G2]"},
    ]

    const result = await db.collection(collectionName).insertMany(docs);
    console.log(result);

  } catch(error){
    console.log(error);
  }
}

// updateGame();
// Função de alteração
async function updateGame(){
  try {
    const conn = await connectToMongoDB();

    // Selecionando o banco de dados
    const db = await conn.db(dbName);
    // Selecionando a collection
    const coll = db.collection("games");


    const filter = { Title: "Halo 3"};
    const updateDocument = {$set: { Title: "HALO INFINITE"}};

    const result = await coll.updateOne(filter, updateDocument);

    console.log(result);

  } catch(error){
    console.log(error);
  }
}

// udpateGameMany();
// Função de alteração em massa
async function udpateGameMany(){
  try {
    const conn = await connectToMongoDB();

    // Selecionando o banco de dados
    const db = await conn.db(dbName);
    // Selecionando a collection
    const coll = db.collection(collectionName);

    const filter = {Title: "Valorant"};
    const updateDocument = {$set: {Rating: "4.3"}};

    const result = await coll.updateMany(filter, updateDocument);

    console.log(result);
  } catch(error){
    console.log(error);
  }
}

// deleteGame();
// Função de remoção
async function deleteGame(){
  try{  
    const conn = await connectToMongoDB();

    //Selecionando o banco de dados
    const db = await conn.db(dbName);
    // Selecionando a collection
    const coll = db.collection(collectionName);

    const filterRemove = {Rating: 3, Title: "Among Us"};
    const result = await coll.deleteOne(filterRemove);

    console.log(result);
  } catch(error){
    console.log(error);
  }
}

// deleteManyGame();
// Função de remoção em massa
async function deleteManyGame(){
  try {
    const conn = await connectToMongoDB();

    // Selecionando o banco de dados
    const db = await conn.db(dbName);
    // Selecionando a collection
    const coll = db.collection(collectionName);

    const filterRemove = {Team: "Valve"};
    const result = await coll.deleteMany(filterRemove);

    console.log(result);
  } catch(error){
    console.log(error);
  }
}

// searchAggregation();
// Função de pesquisa com Agregação
async function searchAggregation(){
  try{
    const conn = await connectToMongoDB();

    // Selecionando o banco de dados
    const db = await conn.db(dbName);

    // Selecionando a collection
    const coll = await db.collection(collectionName);

    const result = await coll.aggregate([
      {
        $group: {
          _id: "$Rating",
          Title: { $first: "$Title"},
          Team: {$first: "$Team"}
        }
      }
    ]).toArray();

    console.log(result);

  } catch(error){
    console.log(error);
  }
}










