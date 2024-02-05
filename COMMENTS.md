
# Decisão da Arquitetura Utilizada

### API 
Busquei me desafiar utilizando pela primeira vez typescript, com o intuito de trazer um padrão mais elevado para essa estrutura de API, desenhei a mesma para ser separada em módulos, facilitando o isolamento de suas atribuições,  facilitando a manutenção e a escalabilidade do projeto. Trazendo um modulo de autenticação com token JWT e um modulo de autorização, controlando as rotas por transações e nível de acesso do usuário. Acredito que foi uma boa escolha de padrão e consigo enxergar esse modelo sendo escalado e melhorado para projetos reais.

### APP
De volta ao vue depois de um longo tempo afastado, também separei a estrutura em módulos, para tentar isolar ao máximo as responsabilidades de  cada componente, vejo um potencial muito grande de melhora na estrutura escolhida, porem são desafios maiores que levarão um tempo para serem concretizados. Também consigo ver essa estrutura com poucos ajustes pronta para também ser escalada em projetos reais.
  

# Lista de Bibliotecas de Terceiros Utilizadas

  

### API

1.  **bcryptjs**: Usado para controlar a criptografia das senhas

2.  **cors**: Usado para liberar e controlar o acesso externo a API

3.  **express**: Usado para fornecer as rotas de acesso

4.  **jsonwebtoken**: Usado para gerar token de acesso

5.  **typeorm**:

6.  **yup**: Usado para validar inputs

7.  **ts**: Usado para deixar o código mais robusto com a tipagem

  

### APP

1.  **axios**: Usado para fazer as requisições para a API

2.  **vue**: Usado para a construção da interface

3.  **vuetify**: Usado como framework automatizar e padronizar os componentes vue

4.  **vuex**: Usado como storage do app

5.  **yup**: Usado para validar inputs

  
  
  

# O Que Você Melhoraria Se Tivesse Mais Tempo

  

### API

1. Rotina robusta de testes
2. Fiz um controle de acesso a rotas por nivel de acesso e transação, porem por motivos de tempo e por ser uma abordagem complexa, gostaria de desenvolver isso de uma forma mais robusta
3. Isolar ainda mais as responsabilidades
4. Estruturar melhor as migrations
5. Automatizar a importação de alguns arquivos como migrations
6. Elaborar melhor as estruturas de classes que utilizei no projeto
7. Gerar uma doc da api automatizada pelo swagger
8. Aperfeiçoar o handler de erros da api

### APP

1. Rotina robusta de testes
2. Isolar mais os componentes
3. Aperfeiçoar o handler de erros que da api
4. Aperfeiçoar o layoute base do app
5. Criar uma classe de controle para o axios, automatizando e eliminando duplicidade de código
6. Implementar um controle de acesso as transações robusto
7. Adicionar PWA
8. Adicionar typescript
9. Aperfeiçoar a validação de informação nos formulários
10. Desenvolver mais os componentes com css próprio  

  

# Requisitos Obrigatórios Que Não Foram Entregues

### API

Todos os requisitos obrigatórios da app foram entregues

### APP

Todos os requisitos obrigatórios da api foram entregues

  

# Dificuldades enfrentadas
mais de 200 commits depois minha primeira grande dificukldade foi o tempo, não que prazo tenha sido curto, mas o meu tempo foi, pois também atuo na área da educação como professor e líder de uma equipe de dev com ênfase em sistemas de gerenciamento educacional, A semana do teste caiu justamente no inicio das aulas tanto na faculdade onde leciono quanto dos nossos clientes, tive que me desdobrar para conseguir entregar todos os compromissos e conseguir fazer o teste, mas finalmente consegui! Neste momento fazem mais de 38 horas seguidas que estou acordado resolvendo hora demandas da faculdade, hora teste, hora demanda do trabalho como dev, mas aprendi muito com esse teste e vou continuar a desenvolver minhas habilidades com vue e node, independente do resultado foi extremamente gratificante participar deste processo!

Meu segundo grande desafio foi desenvolver e pensar do zero toda a estrutura de um app vue, mesmo sendo desenvolvedor web por mais de 5 anos, sempre foquei minhas energias em viver integralmente a regra de negocio de onde trabalho e deixei as tecnologias de lado por um tempo, foi muito desafiador conseguir finalizar os testes, por mais que sejam simples eu me propus a fazer algo onde pudesse aplicar com todo o meu potencial, mas o choque de realidade veio junto com a escassez de tempo, por vezes pensei em simplificar ao máximo, mas consegui entregar algo funcional e que me deixou orgulhoso!

Me desafiei a ter o primeiro contato com typescript, utilizando na api para tentar trazer um bom padrão de projeto. Também me desafiei de forma extrema em voltar a desenvolver com vuejs depois de alguns anos focando em outras tecnologias, por isso digo e repito, foi sofrido mas foi muito divertido!
  

# Observações

Exatamente a 3 anos, junto com a equipe gestora de onde trabalho, resolvemos fazer um curso intensivo de vue com noje para todos os funcionários da empresa, ficamos mais de 1 ano indo todos os sábados estudar vue e node, com um sonho distante de migrar todas as nossas aplicações para essas duas tecnologias, assim foi o meu primeiro contato com o mundo do vue e de api's com node. Apesar de não conseguirmos migrar todas as aplicações, conseguir desenvolver um modulo inteiro de simulados online para as crianças da prefeitura de nossa cidade durante a pandemia, então esse desafio me trouxe de volta a um período de muito estudo e comprometimento com essas tecnologias, por isso só tenho a agradecer a todos vocês!