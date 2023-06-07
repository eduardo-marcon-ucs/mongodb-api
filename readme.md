
# Descrição das Funções do Código

O exemplo escolhido é um código JavaScript que utiliza a API do MongoDB para realizar operações no banco. Operações de inserção, consulta e remoção de dados.
Aqui está uma descrição de cada função presente no código fornecido.

## connectToMongoDB()

Essa função é responsável por estabelecer a conexão com o banco de dados MongoDB. Ela cria uma instância do cliente MongoDB e se conecta ao servidor MongoDB usando a URL fornecida. Caso a conexão seja estabelecida com sucesso, a função retorna a instância de conexão do banco de dados.

## searchGames()

Essa função realiza duas pesquisas no banco de dados MongoDB. A primeira pesquisa retorna todos os jogos com uma avaliação (Rating) maior do que 4.7. A segunda pesquisa retorna um jogo específico com o título "Halo 3". Os resultados das pesquisas são exibidos no console.

## insertGame()

Essa função insere um jogo no banco de dados MongoDB. Ela cria um objeto `game` com as propriedades "Title" e "Team" e insere esse objeto na collection do banco de dados. O resultado da operação de inserção é exibido no console.

## insertManyGames()

Essa função insere vários jogos de uma vez no banco de dados MongoDB. Ela cria um array de objetos `docs`, onde cada objeto representa um jogo com várias propriedades, como "Title", "Release Date", "Team", "Rating" e "Genres". Os jogos são inseridos na collection do banco de dados. O resultado da operação de inserção é exibido no console.

## updateGame()

Essa função atualiza um jogo existente no banco de dados MongoDB. Ela seleciona o jogo com o título "Halo 3" e atualiza o título para "HALO INFINITE". O resultado da operação de atualização é exibido no console.

## udpateGameMany()

Essa função atualiza vários jogos de uma vez no banco de dados MongoDB. Ela seleciona todos os jogos com o título "Valorant" e atualiza a propriedade "Rating" para "4.3". O resultado da operação de atualização é exibido no console.

## deleteGame()

Essa função remove um jogo do banco de dados MongoDB. Ela seleciona o jogo com o título "Among Us" e a avaliação 3 e remove-o da collection do banco de dados. O resultado da operação de remoção é exibido no console.

## deleteManyGame()

Essa função remove vários jogos de uma vez do banco de dados MongoDB. Ela seleciona todos os jogos com a propriedade "Team" igual a "Valve" e remove-os da collection do banco de dados. O resultado da operação de remoção é exibido no console.

## searchAggregation()

Essa função realiza uma pesquisa com agregação no banco de dados MongoDB. Ela agrupa os jogos por avaliação (Rating) e retorna o primeiro título e equipe para cada avaliação encontrada. O resultado da pesquisa é exibido no console.

## data.json

Arquivo que foi usado para dar entrada nos dados do Banco. Foi usado o dataset https://www.kaggle.com/datasets/arnabchaki/popular-video-games-1980-2023 e convertido de CSV para JSON.

## Comandos utilizados	

	Os comandos utilizados para inserção dos dados são:
		*insertOne() 
		*insertMany()
	
	Os comandos utilizados para consulta dos dados são:
		*find()
		*aggregate()
		
	Os comandos utilizados para remoção dos dados são:
		* deleteOne()
		* deleteMany()		
##
* A pasta "apresentação" contém alguns prints dos resultados das funções.

