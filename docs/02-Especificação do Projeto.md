# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

1. **Ana, a Usuária Casual:**
   - **Idade:** 25 anos
   - **Profissão:** Estudante universitária
   - **Conhecimento em Tecnologia:** Básico
   - **Uso de Redes Sociais:** Regular, principalmente para se manter em contato com amigos e seguir páginas de interesse.
   - **Interesses:** Moda, viagens e fotografia
   - **Comportamento:** Ana utiliza redes sociais regularmente para se manter em contato com amigos e seguir páginas de interesse, especialmente relacionadas a moda, viagens e fotografia. Ela prefere uma experiência simples e intuitiva, valorizando conteúdos relevantes para seus interesses sem a necessidade de configurações complexas. Sua acessibilidade inclui a preferência por interfaces claras.
     
2. **Pedro, o Entusiasta de Tecnologia:**
   - **Idade:** 30 anos
   - **Profissão:** Desenvolvedor de software
   - **Conhecimento em Tecnologia:** Avançado
   - **Uso de Redes Sociais:** Ativo em várias plataformas, tanto para networking profissional quanto para interesses pessoais.
   - **Interesses:** Tecnologia, games e programação
   - **Comportamento:** Pedro  é ativo em várias redes sociais para networking profissional e interesses pessoais, como tecnologia, games e programação. Pedro busca por novidades tecnológicas e valoriza a personalização, e está disposto a experimentar novas plataformas que ofereçam recursos avançados.

3. **Mariana, a Profissional de Marketing:**
   - **Idade:** 35 anos
   - **Profissão:** Gerente de marketing digital
   - **Conhecimento em Tecnologia:** Intermediário
   - **Uso de Redes Sociais:** Estratégico, para promover marcas e produtos, bem como monitorar tendências e engajamento.
   - **Interesses:** Marketing digital, análise de dados e branding
   - **Comportamento:** Mariana utiliza as redes sociais como parte de sua estratégia de trabalho, buscando ferramentas que facilitem a segmentação de público e a análise de métricas de desempenho. Ela valoriza plataformas que ofereçam insights detalhados sobre o comportamento do usuário e o impacto das campanhas.
  
4. **Carlos, o Estudante com Deficiência Visual:**
   - **Idade:** 20 anos
   - **Profissão:** Estudante universitário
   - **Conhecimento em Tecnologia:** Intermediário
   - **Uso de Redes Sociais:** Regular, principalmente para acesso a informações acadêmicas e interação com colegas.
   - **Interesses:** Ciência, música e literatura
   - **Comportamento:** Carlos é um estudante universitário com deficiência visual que depende de tecnologias assistivas, como leitores de tela e contraste ajustável, para acessar conteúdos online. Ele valoriza plataformas que são acessíveis e oferecem suporte adequado para sua necessidade, permitindo uma experiência inclusiva e significativa.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Ana, a Usuária Casual| Poder personalizar minha feed de acordo com meus interesses          |  Ver apenas conteúdos relevantes para mim               |
|Pedro, o Entusiasta de Tecnologia       | Ter acesso a configurações avançadas de personalização da minha feed                 | Adaptar a experiência às minhas preferências específicas |
| Mariana, a Profissional de Marketing | Poder segmentar o público-alvo das minhas publicações e campanhas | Direcionar melhor meus esforços de marketing |
| Carlos, o Estudante com Deficiência Visual | Acesso a recursos de acessibilidade, como leitor de tela e contraste ajustável | Garantir uma experiência inclusiva e eficiente |

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

A análise da situação atual do projeto Quacs revela desafios significativos enfrentados pelos usuários de redes sociais, como a sobrecarga de conteúdo não relevante e as dificuldades na personalização de suas experiências. Esses problemas foram evidenciados em estudos como o de Kiciman e Counts (2012), que destacaram a importância da relevância do conteúdo para a satisfação do usuário em ambientes online. No contexto atual, os algoritmos utilizados muitas vezes falham em oferecer uma experiência personalizada devido a restrições técnicas e de dados, o que impacta diretamente na qualidade da interação dos usuários com as redes sociais.

### Descrição Geral da Proposta

A proposta do projeto Quacs busca superar os desafios identificados, visando não apenas aumentar a relevância do conteúdo, mas também proporcionar uma experiência mais envolvente e adaptada aos interesses dos usuários. Essa proposta está alinhada com as estratégias e objetivos do negócio, buscando melhorar a satisfação e engajamento dos usuários, conforme discutido por Chen e Cheng (2017) em seu estudo sobre personalização de conteúdo em redes sociais. As oportunidades de melhoria incluem a implementação de algoritmos de recomendação personalizada, como discutido por Oliveira e Passos (2020), e a consideração de abordagens alternativas, como permitir que os usuários personalizem manualmente suas preferências de conteúdo. Essas estratégias têm potencial para elevar a qualidade da experiência dos usuários, conforme destacado por Han et al. (2021) em sua análise de indicadores de desempenho em projetos similares.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Segue abaixo os Indicadores de Desempenho e quadro descritivo.
1.	Número de Usuários Ativos;
2.	Taxa de Retenção de Usuários;
3.	Tempo Médio Gasto no Aplicativo;
4.	Taxa de Conversão;
5.	Satisfação do Usuário.

### Quadro descritivo:

| Indicador | Objetivo | Descrição | Cálculo | Fonte de Dados | Perspectiva |
|-----------|----------|-----------|---------|----------------|-------------|
| Número de Usuários Ativos | Medir o número de usuários que estão ativamente usando o aplicativo em um determinado período. | Avaliar e medir número de usuário ativos, podendo ser dividido em usuário ativo diário, semanal e mensal. | Fórmulas para calcular os usuários ativos diários (UAD), semanais (UAS) e mensais (UAM): Por exemplo, se você tem 1000 usuários registrados e 250 deles acessaram e realizaram alguma atividade no aplicativo em um dia específico, então o UAD para aquele dia seria 250. | Dados do próprio sistema do aplicativo. | Quantificar atividade no aplicativo, verificar frequência de usabilidade. |
| Taxa de Retenção de Usuários | Medir a porcentagem de usuários que retornam ao aplicativo após a primeira visita. | A Taxa de Retenção de Usuários auxilia na verificação e indicação de fidelidade dos usuários. Uma alta taxa de retenção indica que os usuários estão encontrando valor no aplicativo. | Taxa de Retenção = (TR) ; Total de Usuários no Final do Período = (TUF); Total de Usuários no Início do Período = (TUI); Novos Usuários durante o Período = (NU). TR = (TUF – NU / TUI) x 100 | Usuários cadastrados no aplicativo Quacs. | Identificar retorno de usuários e avaliar aceitação do aplicativo. |
| Tempo Médio Gasto no Aplicativo | Identificar tendências, avaliar a eficácia de alterações ou atualizações do aplicativo e tomar decisões informadas sobre como melhorar a experiência do usuário. | É um indicador importante que ajuda a entender o nível de engajamento dos usuários com o aplicativo. Se os usuários estão passando mais tempo no aplicativo, isso geralmente indica que eles estão encontrando valor no conteúdo ou funcionalidades oferecidas. |  Tempo total gasto no aplicativo por todos os usuários durante um determinado período e dividindo pelo número total de sessões de usuários durante esse mesmo período. (TMG = TTG/NTS). | Dados coletados no próprio aplicativo. | Avaliar se usuários estão encontrando o conteúdo ou as funcionalidades do aplicativo úteis ou interessantes, se o aplicativo está conseguindo manter o interesse dos usuários por um período prolongado e se existem características específicas do aplicativo que estão incentivando os usuários a passar mais tempo nele. |
| Taxa de Conversão | Medir a porcentagem de usuários que realizam uma ação desejada, como se juntar a uma comunidade ou interagir com um post. | É um indicador de desempenho chave (KPI) que mede a eficácia com que uma ação desejada é realizada. É a porcentagem de usuários que completam uma ação específica em relação ao número total de usuários. | Taxa de Conversão = N.de Conversão / N.Total de Usuários * 100 - (TC = NC/NTU × 100) | Dados coletados no próprio aplicativo. |  Entender se aplicativo está incentivando os usuários a realizar ações desejadas e se os usuários estão enfrentando obstáculos ou que a ação desejada não está clara ou atraente o suficiente. |
| Satisfação do Usuário | Avaliar se o usuário está satisfeitos com o aplicativo e suas funcionalidades. | É um indicador importante que mede o grau de satisfação dos usuários com um produto, serviço ou experiência. | Soma do resultado de cada pergunta respondida na pesquisa de satisfação dividido pelo número de perguntas. Por exemplo, se você tiver uma pesquisa com 5 perguntas e um usuário avaliar sua experiência com 4, 5, 3, 4 e 5 (em uma escala de 1 a 5), a satisfação do usuário seria a média dessas respostas, ou seja, (4+5+3+4+5)/5 = 4.2.  | Pesquisas de satisfação do usuário. | Avaliar o grau de satisfação do usuários e identifacar possíveis melhoras no aplicativo e suas funcionalidades. |


Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos


### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O aplicativo deve permitir que os usuários criem e gerencie perfis personalizados | ALTA | 
|RF-002| O aplicativo deve permitir que os usuários descubram e se juntem a comunidades de interesse   | MÉDIA |
|RF-003| O aplicativo deve permitir que usuários publiquem, visualizem e interajam com o conteúdo dentro de suas comunidades selecionadas | ALTA |
|RF-004| O aplicativo deve fornecer recomendações de conteúdo e comunidades com base na preferência e comportamento do usuário | ALTA |
|RF-005| O aplicativo deve permitir que os usuários personalizem suas configurações de conteúdo e notificações | ALTA |
|RF-006| O aplicativo deve permitir que os usuários filtrem e personalize o conteúdo que veem com base em seus interesses pessoais | ALTA |
|RF-007| O aplicativo deve fornecer ferramentas para facilitar a interação e o engajamento dentro das comunidades, como opções para comentar, curtir, compartilhar e salvar postagens | ALTA |
|RF-008| O aplicativo deve oferecer recursos de pesquisa robustos para ajudar os usuários a descobrir novas comunidades e conteúdo | ALTA |
|RF-009| O aplicativo deve permitir que os usuários configurem notificações para atualizações de suas comunidades e conteúdo de interesse | ALTA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O aplicativo deve ser fácil de usar e navegar, com uma interface de usuário intuitiva | MÉDIA | 
|RNF-002| O aplicativo deve ser responsivo e eficiente, com tempos de carregamento mínimos |  BAIXA | 
|RNF-003| O aplicativo deve ser seguro, proteger as informações pessoais do usuário |  BAIXA | 
|RNF-004| O aplicativo deve ser acessível e oferecer uma experiência de usuário consistente em diferentes tipos de dispositivos e tamanhos de tela |  BAIXA | 
|RNF-005| O aplicativo deve ser projetado de forma a ser intuitivo para o público-alvo, com uma curva de aprendizado mínima |  BAIXA | 
|RNF-006| O aplicativo deve ser capaz de escalar e lidar com muitos usuários e comunidades sem degradação do desempenho |  BAIXA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O aplicativo deve estar em conformidade com todas as leis e regulamentos de privacidade e proteção de dados aplicáveis |
|02| O aplicativo deve ser desenvolvido dentro do prazo e do orçamento estabelecidos        |
|03| O aplicativo deve ser capaz de suportar um grande número de usuários simultâneos sem degradação do desempenho        |
|04| O aplicativo deve ser desenvolvido levando em consideração as preferências e comportamentos do público-alvo, conforme descrito na segmentação B2C |
|05| O aplicativo deve ser projetado e desenvolvido de acordo com as melhores práticas de design e desenvolvimento de aplicativos móveis        |
|06| O aplicativo deve ser lançado inicialmente em áreas urbanas e grandes centros, conforme especificado na localização do público-alvo        |

## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Exemplo de matriz de rastreabilidade](img/02-matriz-rastreabilidade.png)

> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 


![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-2024-1-e3-proj-mov-t8-pmv-ads-2024-1-e3-proj-quacs/assets/128256600/d6568c4f-1795-490e-beae-f3aad25001de)


![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/02-orcamento.png)
