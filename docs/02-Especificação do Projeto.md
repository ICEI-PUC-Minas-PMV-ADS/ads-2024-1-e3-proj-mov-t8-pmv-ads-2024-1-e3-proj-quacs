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

### Processos de interação na plataforma Quacs

Abaixo temos as demonstrações dos processos presentes na plataforma, com a atuação definida de cada atoar e como é o retorno a cada um: 

![Processos](/presentation/BPMN/BPMN%20Quacs.svg)


## Indicadores de Desempenho

![Projeção de Lucros](https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-2024-1-e3-proj-mov-t8-pmv-ads-2024-1-e3-proj-quacs/assets/128256600/a0dfb72e-e499-41a2-a68e-b5f52e96eee2)

[Projeção de Lucros](https://app.powerbi.com/groups/me/reports/eec5cdad-19ed-49c8-a2ca-691c3cfa8c81/ReportSection?experience=power-bi)

### Quadro descritivo:

| INDICADOR | OBJETIVO | DESCRIÇÃO | CÁLCULO | FONTE DE DAODS| PERSPECTIVA |
|-----------|----------|-----------|---------|----------------|-------------|
| Número de Usuários Ativos | Medir o número de usuários que estão ativamente usando o aplicativo em um determinado período. | Avaliar e medir número de usuário ativos, podendo ser dividido em usuário ativo diário, semanal e mensal. | Fórmulas para calcular os usuários ativos diários (UAD), semanais (UAS) e mensais (UAM): Por exemplo, se você tem 1000 usuários registrados e 250 deles acessaram e realizaram alguma atividade no aplicativo em um dia específico, então o UAD para aquele dia seria 250. | Dados do próprio sistema do aplicativo. | Quantificar atividade no aplicativo, verificar frequência de usabilidade. |
| Taxa de Retenção de Usuários | Medir a porcentagem de usuários que retornam ao aplicativo após a primeira visita. | A Taxa de Retenção de Usuários auxilia na verificação e indicação de fidelidade dos usuários. Uma alta taxa de retenção indica que os usuários estão encontrando valor no aplicativo. | Taxa de Retenção = (TR) ; Total de Usuários no Final do Período = (TUF); Total de Usuários no Início do Período = (TUI); Novos Usuários durante o Período = (NU). TR = (TUF – NU / TUI) x 100 | Usuários cadastrados no aplicativo Quacs. | Identificar retorno de usuários e avaliar aceitação do aplicativo. |
| Tempo Médio Gasto no Aplicativo | Identificar tendências, avaliar a eficácia de alterações ou atualizações do aplicativo e tomar decisões informadas sobre como melhorar a experiência do usuário. | É um indicador importante que ajuda a entender o nível de engajamento dos usuários com o aplicativo. Se os usuários estão passando mais tempo no aplicativo, isso geralmente indica que eles estão encontrando valor no conteúdo ou funcionalidades oferecidas. |  Tempo total gasto no aplicativo por todos os usuários durante um determinado período e dividindo pelo número total de sessões de usuários durante esse mesmo período. (TMG = TTG/NTS). | Dados coletados no próprio aplicativo. | Avaliar se usuários estão encontrando o conteúdo ou as funcionalidades do aplicativo úteis ou interessantes, se o aplicativo está conseguindo manter o interesse dos usuários por um período prolongado e se existem características específicas do aplicativo que estão incentivando os usuários a passar mais tempo nele. |
| Taxa de Conversão | Medir a porcentagem de usuários que realizam uma ação desejada, como se juntar a uma comunidade ou interagir com um post. | É um indicador de desempenho chave (KPI) que mede a eficácia com que uma ação desejada é realizada. É a porcentagem de usuários que completam uma ação específica em relação ao número total de usuários. | Taxa de Conversão = N.de Conversão / N.Total de Usuários * 100 - (TC = NC/NTU × 100) | Dados coletados no próprio aplicativo. |  Entender se aplicativo está incentivando os usuários a realizar ações desejadas e se os usuários estão enfrentando obstáculos ou que a ação desejada não está clara ou atraente o suficiente. |
| Satisfação do Usuário | Avaliar se o usuário está satisfeitos com o aplicativo e suas funcionalidades. | É um indicador importante que mede o grau de satisfação dos usuários com um produto, serviço ou experiência. | Soma do resultado de cada pergunta respondida na pesquisa de satisfação dividido pelo número de perguntas. Por exemplo, se você tiver uma pesquisa com 5 perguntas e um usuário avaliar sua experiência com 4, 5, 3, 4 e 5 (em uma escala de 1 a 5), a satisfação do usuário seria a média dessas respostas, ou seja, (4+5+3+4+5)/5 = 4.2.  | Pesquisas de satisfação do usuário. | Avaliar o grau de satisfação do usuários e identifacar possíveis melhoras no aplicativo e suas funcionalidades. |


Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

A técnica de priorização de requisitos é crucial para o sucesso de um projeto de software, pois ajuda a identificar e focar nos requisitos mais importantes e prioritários para atender às necessidades dos usuários e do negócio. Existem várias técnicas de priorização de requisitos disponíveis, como MoSCoW, Analytic Hierarchy Process (AHP), Kano Model, entre outras. Neste caso, optamos por utilizar a técnica MoSCoW devido à sua simplicidade e eficácia comprovada.

### Técnica de Priorização: MoSCoW

A técnica MoSCoW é uma abordagem amplamente utilizada que classifica os requisitos em quatro categorias principais:

- **Must Have (M):** Requisitos essenciais que devem ser entregues na primeira versão do produto, pois são críticos para o funcionamento básico do sistema.
- **Should Have (S):** Requisitos importantes, porém não críticos para a primeira entrega. São considerados prioritários, mas podem ser adiados se necessário.
- **Could Have (C):** Requisitos desejáveis que não são vitais para a primeira entrega, mas podem agregar valor ao produto se implementados.
- **Won't Have (W):** Requisitos que não serão incluídos na primeira versão do produto, sendo considerados para futuras melhorias ou versões.

### Justificativa da Utilização do MoSCoW

A escolha da técnica MoSCoW para a priorização de requisitos no projeto Quacs foi baseada em sua simplicidade, clareza e capacidade de lidar com diferentes níveis de prioridade de forma direta. Além disso, a técnica MoSCoW é amplamente reconhecida na indústria de software e possui um bom suporte de ferramentas e recursos para sua implementação.

Comparando com outras técnicas, como o AHP que é mais complexo e requer uma análise mais aprofundada de critérios e pesos, o MoSCoW se destaca pela sua facilidade de entendimento e aplicação prática. No contexto do projeto Quacs, onde é crucial identificar rapidamente os requisitos essenciais para o lançamento inicial do aplicativo, o MoSCoW se mostrou a escolha mais adequada.

### Referências e Estudos

1. Cockburn, Alistair. "Using the MoSCoW Method". Agile Software Development, 2004.
2. Leffingwell, Dean. "Scaled Agile Framework: MoSCoW Prioritization". Scaled Agile, 2020.
3. Sommerville, Ian. "Software Engineering". Pearson, 2016.

Esses estudos e referências destacam a eficácia e a aplicabilidade do MoSCoW em projetos de software, reforçando sua utilização como uma técnica confiável de priorização de requisitos.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O aplicativo deve permitir que os usuários criem contas e façam login para acessar o sistema. | ALTA | 
|RF-002| Os usuários devem poder criar, editar e excluir seus perfis, incluindo informações como nome, foto e interesses.   | Alta |
|RF-003| Os usuários devem poder descobrir e se juntar a comunidades de interesse dentro do aplicativo. | ALTA |
|RF-004| Os usuários devem poder publicar, visualizar e interagir com o conteúdo dentro das comunidades às quais estão conectados. | ALTA |
|RF-005| Os usuários devem poder personalizar suas configurações de conteúdo, notificações e preferências de forma granular. | ALTA |
|RF-006| O aplicativo deve oferecer ferramentas para facilitar a interação social, como comentários, curtidas, compartilhamentos e salvamento de postagens. | ALTA |
|RF-007| Os usuários devem poder realizar pesquisas para descobrir novas comunidades e conteúdos dentro do aplicativo. | MÉDIA |
|RF-008| Os usuários devem poder configurar notificações para receber atualizações de suas comunidades e conteúdo de interesse. | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Garante que o aplicativo seja fácil de usar e navegar para os usuários. | ALTA | 
|RNF-002| Assegura que o aplicativo seja responsivo e rápido, proporcionando uma experiência fluida.|  ALTA | 
|RNF-003| Protege as informações dos usuários e cumpre com as normas de privacidade e segurança. |  ALTA | 
|RNF-004| Garante que o aplicativo seja acessível a todos os usuários, independentemente de suas necessidades especiais. |  ALTA | 
|RNF-005| Torna o aplicativo intuitivo para novos usuários, facilitando o uso sem uma curva de aprendizado complexa. | MÉDIA  | 
|RNF-006| Garante que o aplicativo possa lidar com um grande número de usuários sem comprometer o desempenho. |  ALTA | 

### Requisitos Funcionais

1. **RF-001: Autenticação de Usuário**
   - **M (Must Have):** Essencial para garantir que apenas usuários autorizados tenham acesso ao sistema.

2. **RF-002: Gerenciamento de Perfil**
   - **M (Must Have):** Permite aos usuários personalizar e controlar suas informações e configurações no aplicativo.

3. **RF-003: Descoberta de Comunidades**
   - **M (Must Have):** Permite aos usuários encontrar e se conectar com comunidades de interesse.

4. **RF-004: Interação com Conteúdo de Comunidades**
   - **M (Must Have):** Habilita os usuários a participarem ativamente das comunidades, compartilhando e interagindo com conteúdos.

5. **RF-005: Recomendação de Conteúdo**
   - **S (Should Have):** Fornece recomendações personalizadas de conteúdo e comunidades com base nas preferências do usuário.

6. **RF-006: Personalização de Configurações**
   - **M (Must Have):** Permite aos usuários ajustarem as configurações do aplicativo de acordo com suas preferências individuais.

7. **RF-007: Interação Social**
   - **M (Must Have):** Oferece ferramentas para interação social, como comentários, curtidas e compartilhamentos de postagens.

8. **RF-008: Pesquisa de Conteúdo**
   - **S (Should Have):** Facilita a busca por novos conteúdos e comunidades dentro do aplicativo.

9. **RF-009: Configuração de Notificações**
   - **S (Should Have):** Permite aos usuários gerenciarem suas notificações e receberem atualizações relevantes.

### Requisitos Não Funcionais

1. **RNF-001: Usabilidade e Navegabilidade**
   - **M (Must Have):** Garante que o aplicativo seja fácil de usar e navegar para os usuários.

2. **RNF-002: Desempenho e Tempo de Resposta**
   - **M (Must Have):** Assegura que o aplicativo seja responsivo e rápido, proporcionando uma experiência fluida.

3. **RNF-003: Segurança e Privacidade**
   - **M (Must Have):** Protege as informações dos usuários e cumpre com as normas de privacidade e segurança.

4. **RNF-004: Acessibilidade**
   - **M (Must Have):** Garante que o aplicativo seja acessível a todos os usuários, independentemente de suas necessidades especiais.

5. **RNF-005: Intuitividade e Curva de Aprendizado**
   - **S (Should Have):** Torna o aplicativo intuitivo para novos usuários, facilitando o uso sem uma curva de aprendizado complexa.

6. **RNF-006: Escalabilidade**
   - **M (Must Have):** Garante que o aplicativo possa lidar com um grande número de usuários sem comprometer o desempenho.

  
## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| Conformidade Legal e Regulatória |
|02| Prazo e Orçamento        |
|03| Capacidade de Escalabilidade        |
|04| Considerações sobre o Público-Alvo |
|05| Melhores Práticas de Design e Desenvolvimento        |
|06| Acessibilidade e Inclusão        |
|07| Integração de Feedback        |

### Restrições do Projeto Quacs

1. **R01: Conformidade Legal e Regulatória**
   - O aplicativo deve seguir todas as leis e regulamentos de privacidade e proteção de dados relevantes para garantir a segurança e a integridade das informações dos usuários.

2. **R02: Prazo e Orçamento**
   - O desenvolvimento do aplicativo deve ser concluído dentro do prazo e do orçamento definidos para o projeto, assegurando uma entrega eficiente e dentro dos recursos disponíveis.

3. **R03: Capacidade de Escalabilidade**
   - O sistema deve ser dimensionado para suportar um grande número de usuários simultâneos sem comprometer significativamente o desempenho, mantendo uma experiência fluida e responsiva.

4. **R04: Considerações sobre o Público-Alvo**
   - O desenvolvimento do aplicativo deve levar em consideração as preferências e comportamentos do público-alvo identificados na segmentação B2C, garantindo uma experiência personalizada e relevante para os usuários.

5. **R05: Melhores Práticas de Design e Desenvolvimento**
   - O aplicativo deve ser projetado e desenvolvido de acordo com as melhores práticas de design e desenvolvimento de aplicativos móveis para garantir uma interface intuitiva, atraente e de fácil utilização.

6. **R07: Acessibilidade e Inclusão**
   - O aplicativo deve ser acessível a todos os usuários, incluindo aqueles com necessidades especiais, seguindo diretrizes de acessibilidade e garantindo uma experiência consistente em diferentes dispositivos e plataformas.

7. **R08: Integração de Feedback**
   - Deve ser implementado um sistema eficiente para coleta de feedback dos usuários e integração de melhorias ao aplicativo, visando constantemente aprimorar a experiência do usuário e atender às suas necessidades em evolução.

Essas restrições refletem os aspectos cruciais que devem ser considerados durante o desenvolvimento e a implantação do projeto Quacs, garantindo o cumprimento de requisitos legais, a qualidade da experiência do usuário e o sucesso geral do aplicativo.

## Diagrama de Casos de Uso

![Casos de Uso](https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-2024-1-e3-proj-mov-t8-pmv-ads-2024-1-e3-proj-quacs/assets/128256600/8bedc97e-19dc-4763-af14-93b6cc313baf)


# Matriz de Rastreabilidade

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-2024-1-e3-proj-mov-t8-pmv-ads-2024-1-e3-proj-quacs/assets/128256600/8be6291d-5143-4ec4-881b-637d0ee205cf)


> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

![Grafico de Gantt](https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-2024-1-e3-proj-mov-t8-pmv-ads-2024-1-e3-proj-quacs/assets/128256600/3f0836f6-1b8e-4ef7-94c6-8190eb108fb8)
[Diagrama de Gantt](https://app.powerbi.com/groups/me/reports/45b9c571-4422-41bb-bee7-4483ca6cf743/ReportSection?experience=power-bi)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-2024-1-e3-proj-mov-t8-pmv-ads-2024-1-e3-proj-quacs/assets/128256600/82ee58af-80ac-4de7-be0d-76223dfccfc1)

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/02-orcamento.png)
