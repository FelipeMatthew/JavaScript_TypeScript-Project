# eslint, editorconfig, prettier

# Usado para fazer anotações importantes da aplicação

REACT ICONS = npm i react-icons


Nessa seção foi usado uma versão mais antiga do router dom
instalação: npm i react-router-dom@5.2.0

### React router dom

switch = serve para redirecionar para apenas um componente e nada mais

Route = Serve para você especificar o caminho que deseja
  path = mostra o caminho
  component = mostra o componente que vai reenderizar
  exact = Só vai reenderizar se for a rota exata para fazer o login

Browser Router = Rota dada pelo browser padrão

Ao invés de utilizar o A HREF = Se utiliza o Link to

### Services

pasta destinada a codigo sobre os serviços = Historico de acesso

### history
npm i history@4.10.1

history.push(/) é como se fosse um go back to

### MyRoute
Vai criar um desestruturação ao qual vai pegar 3 parametros
1- Component
2- se esta bloqueada ou não = boolean
3- Resto dessa desestruturação

REDIRECT
caso usuario nao estiver logado ele irá redirecionar ele para a tela de login

Vai bloquear os usuarios que nao estão com os login

### PropTypes
npm i propTypes

oneOfType = retorna um array que leva todas as opções que aquele componente pode receber

### React Toastify
npm i react-toastify

Vai comunicar com o cliente algum tipo de erro que possa acontecer na aplicação
Vai exibir uma msg bem fofa ^~^

TOASTCONTAINER
vai configurar para todos os toast

Use effect =
faz parte do hook ao qual so vai ser executada quando entrar na pagina que voce definiu

Primeiro parametro: func
Segundo parametro: Dependencias para funcao ser executada

e vai usar o use efect para rodar o axios, sempre que entrar na pagina o axios sera caregado

Axios - Retorna promisses


### REDUX
REDUCER - Sempre vai ouvir todas as ações que forem disparadas, ai cabe ao usuário ver qual ele quer em especifico

Estado global usado na aplicação toda

Estado inicial = {}

1- dispara uma ação
2- Manda a ação para reducer alterar
3- Cria um novo estado com valor da ação
4- seta esse novo valor

ação -> reducer -> newState

toda alteração no estado prte de uma ação disparada retornando um novo estado

tem sempre que retornar um estado ***

DISPATCH = é um disparador de ações

Ações vai descrever para o reducer o que ele tem que fazer
vai disparar um tipo
e o reducer vai alterar o estado conforme a ação que foi enviada para ele

REDUCER vai ouvir todas as ações que forem disparadas

coombinerReduce = Vai pegar todos os reduces e rodar tudo em uma só constante

### Saga
é um middleware

ação (request) -> saga -> reducer -> Success / Fail

FUNÇÃO GERADORA = function*

call = ouvir
put = dispara

call = Vai ouvir o reduce mandar a ação ja lançada
put = Vai mandar o resultado das ações
all = Vai permitir colocar mais de uma ação ao mesmo tempo
takeLatest = vai pegar apenas o ultima vez que o usuário clicou no botão

takeLatest (qual ação que ele vai ouvir, qual função que vai ser executada, dnv, dnv )

appplyMiddleware

### Hooks

useDispatch = dispara uma ação
useSelector = vai pegar o estado global
useEffect = fazer conexão na api
useState = vai configurar o estado
useSelector =

Use state sempre retorna 2 valores
O PARAMETRO É O VALOR INICIAL QUE VOCE DESEJA
1- Valor que voce esta setando no estado
2- Função para setar o valor do estado

redux-saga = funciona como middleware
redux-persist = usado para caso queira salvar os dados de login no storage usa ele

persist reducer {
  key: 'nome da aplicação
  storage:
  whiteList : modulo = reduce que vai salvar, coloca o nome numa string
}

### Loadash
Serve para setar um valor padrão para caso de erro em alguma parte no caminho para busca dos dados

SEMPRE QUE USAR METODO GET DO LOADASH SE UTILIZA COM O RESPONSE

RESPONSE + GET

GET(ERRO, 'ROTA DO BACKEND', OQ VAI SER RETORNADO)
GET(ERR, 'response.data.errors', []) // Vai retornar um array com os errors configurados la na API

GET VAI BUSCAR INFORMAÇÕES DO BACKEND

### Validator

usada para fazer diversos tipos de validações, nessa aplicação fora utilizado para validação do email

NO CADASTRO FOI UTILIZADO PARA SALVAR OS DADOS O REACT USESTATE PQ SALVARIA OS DADO APENAS NA PAGINA ATUAL
JA NO CASO DO LOGIN, ELE PRECISAR ESTAR SALVO EM TODAS AS PÁGINAS DA APLICAÇÃO E POR ISSO SERÁ UTILIZADO O REACT REDUX


PAYLOAD -> São os dados que vão ser recebido do front end

types -> actions -> reducer

persist/rehydrate -> É UM TYPE QUE serve como um armazenador de dados que foram feitos no header da aplicação, nessa aplicação utilizamos para fazer o  armazenamento do token para todas as paginas da aplicação, nisso foi feito no saga, como se fosse um middleware
CABEÇALHO

PAYLOAD É SEMPRE PASSADO POR PARAMETRO PELO BACKEND E É UTILIZADO NO FRONTEND ASSIM PASSANDO O PARAMETRO
BACKEND -> DEFINE O PARAMETRO
FRONTEND -> PASSA OS DADOS DO PARAMETROS

GERALMENTE PASSADO COMO OBJETO

FUNÇÃO GERADORA, UTILIZADA NESSA APLICAÇÃO PARA UTILIZAR O YIELD AO QUAL VAI SEGURAR AÇÃO POR AÇÃO

e.persist();

!!!
**   const { id } = props.match.params; **
Serve para pegar o id passado na url da página
MUITO DAORA!!!!

Porem para evitar que o valor seja nulo se utiliza

<code>export default function Aluno({ match }) {
  const { id } = get(match, 'params.id', 0);</code>


SERVE PARA PEGAR A FOTO QUE JA TEM ALI CADASTRADA E CRIAR UMA URL DELA ->

const foto = e.target.files[0];
    const fotoUrl = URL.createObjectURL(foto);

### Melhorias

na parte do reducer poderia ser feito uma espécie de desaclopamento entra os estados assim criando uma pasta so p login, e outra so para register

tamebem na pages login e register, poderia ser criado so um com componente e assim validar as diferenças nesse componente ao inves de criar uma página igualzinha a outra


### Dificuldades

-> Saga
-> Controle de dados com backend
-> get, put = REACT-REDUX
