# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Abaixo temops a definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

## Diagrama de Classes
O nosso diagrama de classes é uma representação visual do sistema que estamos desenvolvendo, nele mapeamos todas as classes principais do sistema, suas relações e interações. Cada classe é representada por uma caixa, onde listamos seus atributos e métodos. As linhas que conectam as caixas mostram como essas classes se relacionam entre si. Por exemplo, uma linha entre duas classes indica uma associação, e podemos até indicar a direção dessa associação com setas. Além disso, incluímos herança para mostrar as relações de especialização entre as classes. No geral, esse diagrama nos ajuda a visualizar a estrutura do nosso sistema e a entender como cada parte se encaixa, facilitando o desenvolvimento e a comunicação dentro do grupo.

![image](/presentation/Arquitetura_da_solucao/Quacs_class_diagram.png)

## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.

## Modelo ER

![image](/presentation/Arquitetura_da_solucao/diagrama_ER_Quacs.png)

## Modelo Físico

Foi feito um arquivo sql contendo os scripts de criação das tabelas do banco de dados, com nomenclatura de "banco" esta presente dentro da pasta src\bd.

[Scripts banco de dados](https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-2024-1-e3-proj-mov-t8-pmv-ads-2024-1-e3-proj-quacs/tree/main/src/bd)

## Tecnologias Utilizadas

Nós estamos utilizando uma combinação de tecnologias poderosas para o nosso projeto. No lado do servidor, optamos pelo framework .NET para desenvolver a nossa API. Ele oferece uma vasta gama de ferramentas e recursos que nos ajudam a construir uma API robusta e escalável.

Para o frontend, escolhemos o React. Ele nos permite criar interfaces de usuário interativas e dinâmicas, tornando a experiência do usuário muito mais agradável. Além disso, o React nos permite reutilizar componentes, o que facilita muito o desenvolvimento e a manutenção do código.

Em relação ao banco de dados, estamos utilizando SQL, o que nos dá a confiabilidade e a escalabilidade necessárias para lidar com os dados do nosso aplicativo. Estamos armazenando nossos dados em um banco de dados relacional, como SQL Server, MySQL ou PostgreSQL.

E, finalmente, estamos hospedando o nosso projeto na Azure. A plataforma oferece uma ampla gama de serviços em nuvem que nos permitem implantar, gerenciar e escalar nosso aplicativo de forma eficiente e segura.

Com essa combinação de tecnologias, estamos construindo uma base sólida para o nosso projeto, que nos permite desenvolver um aplicativo web moderno e robusto.

![image](img/02-mob-arch.png)

## Hospedagem

Nós escolhemos hospedar nosso projeto na Azure, aproveitando sua escalabilidade e segurança. Utilizando o Visual Studio 2022, o lançamento foi suave e simples. Configuramos o Azure App Service diretamente do Visual Studio, o que facilitou muito o processo. Com apenas alguns cliques, nosso aplicativo foi implantado na nuvem, permitindo-nos focar no desenvolvimento, enquanto a Azure cuida da infraestrutura.

## Qualidade de Software

Em nosso contexto de desenvolvimento de software, percebemos a importância de garantir a qualidade do produto final para satisfazer as expectativas dos nossos stakeholders. Para isso, adotamos uma abordagem baseada nas diretrizes da norma internacional ISO/IEC 25010, que define oito características e 30 subcaracterísticas de qualidade para produtos de software.

Considerando nossa equipe e o projeto em questão, identificamos algumas subcaracterísticas que serão fundamentais para nortear nosso desenvolvimento:

**Funcionalidade**: Esta subcaracterística é crucial para garantir que nosso software atenda às necessidades dos usuários. Estaremos atentos à corretude das funções implementadas, garantindo que todas as especificações e requisitos funcionais sejam adequadamente atendidos.Métricas: Taxa de defeitos funcionais, conformidade com os requisitos especificados, cobertura de testes de funcionalidade.

**Confiabilidade**: Nosso software precisa ser confiável para garantir uma experiência consistente aos usuários. Estaremos focados em garantir a estabilidade, tolerância a falhas e recuperação de erros de forma eficaz.Métricas: Tempo médio entre falhas (MTBF), taxa de falhas reportadas pelos usuários, tempo de recuperação de falhas.

**Usabilidade**: Buscamos proporcionar uma interface amigável e intuitiva aos nossos usuários, facilitando a interação com o sistema e maximizando a eficiência no uso.Métricas: Tempo médio de aprendizado do usuário, taxa de conclusão de tarefas, satisfação do usuário.

Essas subcaracterísticas foram escolhidas pela equipe devido à sua relevância direta para o nosso projeto e às suas contribuições para a qualidade global do software. As métricas associadas nos permitirão avaliar continuamente o progresso do desenvolvimento e identificar áreas de melhoria, garantindo assim a entrega de um produto de alta qualidade aos nossos stakeholders.
