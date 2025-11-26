// Função para criar projetos mantendo a ordem exata dos campos
function criarProjeto(dados) {
    return {
        sigla: dados.sigla,
        imagem: dados.imagem,
        titulo: dados.titulo,
        instituicao: dados.instituicao,
        coordenacao: dados.coordenacao,
        resumo: dados.resumo,
        cidade: dados.cidade,
        coordenadas: dados.coordenadas,
        executora: dados.executora,
        get info() {
            return `
<div class='project-info'>
    <h3>${this.sigla}</h3>
    <img src="${this.imagem}" alt="${this.sigla}" style="display: block; margin: 10px auto; max-width: 250px; max-height: 250px;">
    <p><b>Título:</b> ${this.titulo}</p>
    <p><b>Instituição:</b> ${this.instituicao}</p>
    <p><b>Coordenação:</b> ${this.coordenacao}</p>
    <p><b>Resumo:</b> ${this.resumo}</p>
</div>
            `;
        }
    };
}

// Array completo com os 27 projetos na ordem exata solicitada
const projetos = [
    // Belo Horizonte (MG)
    criarProjeto({
        sigla: "BIOPROT",
        imagem: "imagem_bioprot.png",
        titulo: "Desenvolvimento de sistemas para melhoria da usabilidade e incorporação de próteses de membro superior",
        instituicao: "Universidade Federal de Minas Gerais",
        coordenacao: "Claysson Bruno Santos Vimieiro",
        resumo: `Este projeto se aplica na área de próteses de membros superiores com intuito de desenvolver tecnologias que reduzam as taxas de rejeição da prótese pelo usuário ao longo de sua vida. O objetivo é consolidar uma rede de laboratórios de pesquisa, com grande experiência na área de Tecnologias Assistivas, que em conjunto irão propor novos sistemas para melhoria da usabilidade e incorporação de próteses de membro superior, por meio de modelos inovadores para otimização dos sistemas estruturais de movimentação das articulações, implementação de feedback sensorial e treinamento dos usuários, reduzindo a rejeição e abandono do dispositivo. Os modelos de controle serão baseados em aprendizado de máquina, para retroalimentação sensorial (tátil, nociceptiva e proprioceptiva). Serão usados sistemas de apoio ao treinamento baseado em realidade aumentada (imersiva e não imersiva) e realidade virtual. Posteriormente, serão implementados protocolos de testes clínicos para validar e comparar o desempenho dos sistemas propostos. Finalizados os experimentos, espera-se obter medidas para avaliar a capacidade do sistema de transmitir informações táteis significativas ao amputado.`,
        cidade: "Belo Horizonte (MG)",
        coordenadas: [-19.8697, -43.9644],
        executora: "Universidade Federal de Minas Gerais"
    }),

    // Campina Grande (PB)
    criarProjeto({
        sigla: "UFCGCERT",
        imagem: "imagem_ufcgcert.png",
        titulo: "Psilocibina, o princípio ativo dos cogumelos psicodélicos, para auxiliar no desenvolvimento de pessoas com transtorno do espectro autista (TEA)",
        instituicao: "Universidade Federal de Campina Grande",
        coordenacao: "Marcus Vinícius Lia Fook",
        resumo: `O objetivo deste projeto é desenvolver remédios com psilocibina, o princípio ativo presente nos "cogumelos mágicos" visando auxiliar no desenvolvimento intelectual, cognitivo, socioemocional e socioeconômico de pessoas com deficiência intelectual, mental, autismo e múltipla. Assim, serão conduzidas as etapas de extração, separação, encapsulamento e avaliação do efeito da psilocibina na microbiota intestinal de indivíduos com TEA. Posteriormente, serão conduzidos estudos préclínicos e por fim, ensaios clínicos no Instituto Alma Viva/Biocase, empresa em que o CERTBIO mantem parceria desde fevereiro de 2022. Essa é uma área que está em plena expansão e estima-se que, globalmente, o segmento já valha US$ 190 milhões, segundo relatório sobre pesquisas, negócios e regulamentação de psicodélicos do grupo Psych/Blossom, de 2021. O CERTBIO se tornou, em maio de 2022, o primeiro no país autorizado a desenvolver pesquisas com psilocibina. Portanto, este será um estudo pioneiro para desenvolvimento de remédios derivados de psicodélicos. A condução deste projeto resultará no maior avanço para o desenvolvimento científico, tecnológico, inovador e empreendedor na área de tecnologia assistiva.`,
        cidade: "Campina Grande (PB)",
        coordenadas: [-7.2156, -35.9086],
        executora: "Universidade Federal de Campina Grande"
    }),

    // Campinas (SP)
    criarProjeto({
        sigla: "DReANNs",
        imagem: "imagem_dreanns.jpg",
        titulo: "Dispositivos de reabilitação e assistência em neurociência e neurotecnologias",
        instituicao: "Universidade Estadual de Campinas",
        coordenacao: "Coordenação não informada",
        resumo: "Resumo não disponível",
        cidade: "Campinas (SP)",
        coordenadas: [-22.8149, -47.0669],
        executora: "Universidade Estadual de Campinas"
    }),

    // Curitiba (PR)
    criarProjeto({
        sigla: "TecnoAging",
        imagem: "imagem_tecnoaging.jpg",
        titulo: "Tecnologia assistiva na avaliação clínico-funcional integrada e prescrição de exercícios para pessoas idosas usuárias do SUS",
        instituicao: "Universidade Federal do Paraná",
        coordenacao: "Coordenação não informada",
        resumo: "Resumo não disponível",
        cidade: "Curitiba (PR)",
        coordenadas: [-25.4504, -49.2325],
        executora: "Universidade Federal do Paraná"
    }),

    // Diamantina (MG)
    criarProjeto({
        sigla: "FabICT-CER",
        imagem: "imagem_fabict_cer.png",
        titulo: "Automação na fabricação de órteses e próteses personalizadas para redução de custo e tempo de produção: uma parceria entre a UFVJM e o CER-Diamantina",
        instituicao: "Universidade Federal dos Vales do Jequitinhonha e Mucuri",
        coordenacao: "Libardo Andrés González Torres",
        resumo: `O escopo do presente projeto é o de aperfeiçoar os processos de fabricação de órteses/próteses personalizadas em oficina destinada a este propósito, por meio da automação de diferentes etapas.

Para atingir o objetivo é proposta a utilização dos conceitos e técnicas do SisAssistiva - MCTI:
- Desenho/Projeto Assistido por Computador (CAD - Computer Aided Design)
- Manufatura Assistida por Computador (CAM - Computer Aided Manufacturing)
- Análise de Engenharia Assistida por Computador (CAE - Computer Aided Engineering)
- Manufatura Aditiva (Impressão 3D)

A implementação do projeto deve:
• Reduzir custos e tempo de produção em oficinas públicas e privadas
• Viabilizar atendimento a maior número de pacientes
• Facilitar acesso para população de menor poder aquisitivo

Contexto importante:
A tabela do SUS para órteses/próteses não é atualizada desde 2010, tornando a otimização de recursos ainda mais crucial. A automação permitirá melhor uso dos recursos humanos e materiais disponíveis.`,
        cidade: "Diamantina (MG)",
        coordenadas: [-18.2419, -43.6033],
        executora: "Universidade Federal dos Vales do Jequitinhonha e Mucuri"
    }),

    // Florianópolis (SC)
    criarProjeto({
        sigla: "AMPUTSUS",
        imagem: "imagem_amputsus.jpg",
        titulo: "Recurso tecnológico inovador para soluções protéticas em amputados de membros inferiores usuários do SUS: atualização e estruturação da prescrição",
        instituicao: "Fundação Universidade do Estado de Santa Catarina",
        coordenacao: "Coordenação não informada",
        resumo: "Resumo não disponível",
        cidade: "Florianópolis (SC)",
        coordenadas: [-27.5925, -48.5497],
        executora: "Fundação Universidade do Estado de Santa Catarina"
    }),

    // Goiânia (GO)
    criarProjeto({
        sigla: "CRM-IOT",
        imagem: "imagem_crm_iot.png",
        titulo: "Cadeira de rodas motorizada com telemetria por internet das coisas (IOT)",
        instituicao: "Instituto Federal de Educação Ciência e Tecnologia de Goiás",
        coordenacao: "Josemar Alves dos Santos Junior",
        resumo: `Este projeto visa o desenvolvimento de uma cadeira de rodas motorizada adaptativa, com controle eletrônico via Internet das Coisas (IoT), que oferece maior conforto, independência e segurança ao usuário. 

O sistema inclui: Monitoramento da bateria, Rastreamento via GPS, Alarmes de falhas, Botão de emergência e Construção com peças acessíveis e de baixo custo. 

Objetivos adicionais: Expandir a infraestrutura do Campus para tecnologias assistivas, Permitir impressão 3D de órteses, Facilitar reposição de peças de cadeiras de rodas a custo reduzido e Reestruturar laboratório para desenvolvimento de projetos com metais.`,
        cidade: "Goiânia (GO)",
        coordenadas: [-16.6864, -49.2647],
        executora: "Instituto Federal de Goiás"
    }),

    // Itajaí (SC)
    criarProjeto({
        sigla: "DUA-GAMES",
        imagem: "imagem_dua_games.jpg",
        titulo: "Ateliês de criação colaborativa de tecnologias assistivas digitais: games para o desenvolvimento intelectual, cognitivo e socioambiental",
        instituicao: "Fundação Universidade do Vale do Itajaí",
        coordenacao: "Coordenação não informada",
        resumo: "Resumo não disponível",
        cidade: "Itajaí (SC)",
        coordenadas: [-26.9024, -48.6743],
        executora: "Fundação Universidade do Vale do Itajaí"
    }),

    // Natal (RN) - Projeto 1
    criarProjeto({
        sigla: "LITA",
        imagem: "imagem_lita.png",
        titulo: "Inovação, tecnologia e acessibilidade: soluções e projetos voltados para o desenho universal e a comunicação acessível",
        instituicao: "Universidade Federal do Rio Grande do Norte",
        coordenacao: "Hélio Takashi Maciel de Farias",
        resumo: `O Laboratório de Inovação em Tecnologia e Acessibilidade (LITA) é um laboratório que agrega esforços de distintos Departamentos do Centro de Tecnologia da UFRN com atuação na área de acessibilidade e tecnologias assistivas, visando proporcionar a docentes, pesquisadores, discentes e comunidade externa à UFRN um ambiente devidamente equipado para desenvolver e produzir conjuntamente soluções e projetos inovadores relacionados ao campo da Tecnologia Assistiva.

A consolidação do espaço físico destinado ao LITA dota a UFRN de um aparato técnico modernizado, instalado em uma estrutura conectada a demandas atuais de inclusão local e regional, gerido por uma equipe multidisciplinar, em contato com iniciativas de inovação tecnológica oriundas de demandas internas e externas à comunidade universitária.

Dentre os produtos/serviços gerados, estão:
1) Assessoria em desenho universal e produção de projetos de acessibilidade;
2) Comunicação Tátil: Mapas táteis e modelos didáticos;
3) Aplicações digitais e de automação para acessibilidade;
4) Mobiliário Acessível.

O espaço está em localização estratégica na UFRN, com importante acesso ao meio externo, e contará com:
- Ambiente de trabalho compartilhado
- Espaço para acomodar startups
- Micro e Pequenas Empresas
- Ampla área operacional constituída pelas áreas de prototipagem e de produção de marcenaria.`,
        cidade: "Natal (RN)",
        coordenadas: [-5.8372, -35.2014],
        executora: "Universidade Federal do Rio Grande do Norte"
    }),

    // Natal (RN) - Projeto 2
    criarProjeto({
        sigla: "ReAbLITA",
        imagem: "imagem_lita.png",
        titulo: "Reablita: rede de laboratórios para o desenvolvimento e validação de tecnologias moveis e acessíveis para a deficiencia auditiva nos ciclos da vida",
        instituicao: "Universidade Federal do Rio Grande do Norte",
        coordenacao: "Sheila Andreoli Balen",
        resumo: `A perda auditiva incapacitante (PAI) pode ser mitigada por meio da identificação precoce, diagnóstico e intervenções eficazes. Apesar da oferta de diagnóstico e tratamentos pelo SUS, muitos indivíduos com PAI no Brasil demoram em média sete anos para buscar tratamento. A triagem auditiva neonatal tem avançado no diagnóstico de perdas auditivas congênitas, mas a perda auditiva progressiva ou tardia ainda é frequentemente não identificada. Este projeto propõe criar uma rede de laboratórios em ICTs nacionais e internacionais para desenvolver soluções tecnológicas, como audiometria automatizada e testes de diagnóstico, com o objetivo de identificar, diagnosticar e monitorar a reabilitação auditiva em diversas faixas etárias, além de contribuir para o aprimoramento das políticas públicas no Brasil.`,
        cidade: "Natal (RN)",
        coordenadas: [-5.8372, -35.2014],
        executora: "Universidade Federal do Rio Grande do Norte"
    }),

    // Niterói (RJ)
    criarProjeto({
        sigla: "SenseGames",
        imagem: "imagem_sensegames.jpg",
        titulo: "Laboratório e-health lab - projeto sensegames - jogos sérios multissensoriais para pessoas com deficiência intelectual, mental, autismo e múltipla",
        instituicao: "Universidade Federal Fluminense",
        coordenacao: "Coordenação não informada",
        resumo: "Resumo não disponível",
        cidade: "Niterói (RJ)",
        coordenadas: [-22.9083, -43.1258],
        executora: "Universidade Federal Fluminense"
    }),

    // Porto Alegre (RS)
    criarProjeto({
        sigla: "OP-MFA",
        imagem: "imagem_op_mfa.jpg",
        titulo: "Órteses posturais para melhora da mobilidade funcional e autonomia em idosos",
        instituicao: "Pontifícia Universidade Católica do Rio Grande do Sul",
        coordenacao: "Coordenação não informada",
        resumo: "Resumo não disponível",
        cidade: "Porto Alegre (RS)",
        coordenadas: [-30.0586, -51.1719],
        executora: "Pontifícia Universidade Católica do Rio Grande do Sul"
    }),

    // Recife (PE) - Projeto 1
    criarProjeto({
        sigla: "NeuroBeep",
        imagem: "imagem_neurobeep.png",
        titulo: "Neurorrobótica educacional: uma proposta de inclusão de crianças com severas deficiências motoras na robótica educacional",
        instituicao: "Universidade Federal de Pernambuco",
        coordenacao: "Nivaldo Antonio Portela de Vasconcelos",
        resumo: "O NeuroBeep é um projeto transformador que integra avanços em neurociência e tecnologia assistiva para criar soluções inovadoras que permitam a crianças com paralisia cerebral severa participar ativamente de processos educacionais mediados por robótica. Por meio do desenvolvimento de interfaces cérebro máquina e plataformas de robótica, o projeto busca não apenas superar barreiras físicas e cognitivas, mas também promover a autonomia e a inclusão social dessas crianças. Além disso, o NeuroBeep se compromete a capacitar professores e profissionais da educação, fornecendo conhecimentos e ferramentas inovadoras para ampliar a inclusão em escolas e comunidades. Com foco na inovação tecnológica e na acessibilidade, o projeto constrói pontes entre ciência, educação e sociedade, fortalecendo redes de colaboração interdisciplinar e gerando soluções replicáveis para uma sociedade mais inclusiva. ",
        cidade: "Recife (PE)",
        coordenadas: [-8.0527, -34.9513],
        executora: "Universidade Federal de Pernambuco"
    }),

    // Recife (PE) - Projeto 2
    criarProjeto({
        sigla: "ALETA",
        imagem: "imagem_aleta.jpg",
        titulo: "Alfabetizar letrando: tecnologia assistiva e aprendizagem de estudantes com deficiência",
        instituicao: "Universidade Federal de Pernambuco",
        coordenacao: "Tícia Cassiany Ferro Cavalcante",
        resumo: "Desenvolver uma mesa digital interativa sensível ao contexto, baseada no conceito de Desenho Universal para Aprendizagem (DUA), para auxiliar o processo de alfabetização de crianças com deficiência. A ferramenta utilizará interfaces tangíveis, realidade virtual, dispositivos robóticos adaptáveis e recursos multimídia com apoio do Mundo Bita, promovendo atividades lúdicas, jogos, músicas e textos acessíveis.",
        cidade: "Recife (PE)",
        coordenadas: [-8.0527, -34.9513],
        executora: "Universidade Federal de Pernambuco"
    }),

    // Recife (PE) - Projeto 3
    criarProjeto({
        sigla: "TECLABORAL",
        imagem: "imagem_teclaboral.png",
        titulo: "Tecnologia Assistiva para Autonomia Cotidiana / Laboral de Pessoas com Deficiência e Formação de Recursos Humanos",
        instituicao: "Universidade Federal de Pernambuco (UFPE), Universidade Federal de Santa Catarina (UFSC), Universidade do Estado de Santa Catarina (UDESC) e Instituto Federal de  Pernambuco (IFPE)",
        coordenacao: "Ana Karina Pessoa da Silva Cabral",
        resumo: `O objetivo da pesquisa é desenvolver e conceder produtos de Tecnologia Assistiva (TA) para as atividades diárias e laborais de pessoas com deficiência para autonomia diária e inclusão no posto de trabalho, e fortalecer o serviço de TA para esse público. Caracteriza-se como pesquisa aplicada de intervenção, do tipo antes e depois. Os participantes serão pessoas com deficiência encaminhados ao Laboratório de Tecnologia Assistiva e Terapia Ocupacional – LabTATO UFPE,  por meio dos Projetos de extensão Incluir UFPE e AssisTA UFPE, pelo Hospital das Clínicas/UFPE,  Hospital Getúlio Vargas/PE, Hospital da Restauração/PE e Programa de Reabilitação Profissional do INSS. A equipe conta com pesquisadores e estudantes das áreas de Terapia Ocupacional, Engenharia, Design e Computação vinculados ao LabTATO/UFPE, SIMULAB/UFPE, TERMOLAB/UFPE, NGD/LDU UFSC, SIMUFAB/IFPE, UDESC E UFRJ. Serão aprimorados e/ou desenvolvidos dispositivos assistivos para as atividades diárias e laborais, e concedidos aos participantes da pesquisa, após análises ergonômicas e de usabilidade, bem como qualificação de profissionais e serviços. Como resultados, espera-se promover ganhos funcionais ao público, desenvolvimento e melhorias de processos e produtos voltados à inclusão laboral, atualização tecnológica do SUS com a ampliação da oferta de produtos de TA, disponibilização dos produtos ao mercado, registro de novas patentes, ampliação da produção técnica e científica no campo da TA e Trabalho. Em paralelo, haverá a formação continuada dos profissionais dos serviços envolvidos com a inclusão laboral no campo da Tecnologia Assistiva,  Ergonomia e Design Inclusivo.`,
        cidade: "Recife (PE)",
        coordenadas: [-8.0527, -34.9513],
        executora: "Universidade Federal de Pernambuco"
    }),

    // Recife (PE) - Projeto 4
    criarProjeto({
        sigla: "MONAN",
        imagem: "imagem_monan.png",
        titulo: "Monan: Plataforma Inteligente para Diagnóstico e Desenvolvimento da Comunicação e Aprendizagem da Criança Autista",
        instituicao: "Universidade Federal de Pernambuco",
        coordenacao: "Wellington Pinheiro dos Santos",
        resumo:  'O Transtorno do Espectro Autista (TEA) é um distúrbio do neurodesenvolvimento que resulta em dificuldades na aprendizagem, comunicação e interação social. A plataforma MONAN (infinito em tupi-guarani) visa construir uma solução integrada de software e hardware para apoio ao diagnóstico do TEA e ao desenvolvimento intelectual, cognitivo e socioemocional de crianças autistas, especialmente as que estiverem na primeira infância. Para isto, buscar-se-á otimizar as etapas de rastreio, diagnóstico, intervenção e reavaliação dessas crianças, a partir dos seguintes objetivos específicos: i) otimização do rastreio a partir da construção de instrumentos de avaliação eficazes; ii) otimização do diagnóstico clínico propondo sistemas inteligentes que analisem áudios e vídeos; iii) investigação de métodos de diagnóstico diferencial baseados em sistemas inteligentes e eletroencefalografia; iv) desenvolvimento de um sistema de Comunicação Aumentativa e Alternativa (CAA) inteligente; v) construção de aplicativos gamificados para auxiliar no desenvolvimento da consciência fonológica e vi) construção de um corpus em português brasileiro para CAA.',
        cidade: "Recife (PE)",
        coordenadas: [-8.0527, -34.9513],
        executora: "Universidade Federal de Pernambuco"
    }),

    // Rio de Janeiro (RJ) - Projeto 1
    criarProjeto({
        sigla: "3DucAssist",
        imagem: "imagem_3ducassist.jpg",
        titulo: "Ações integradas para implementação de práticas inovadoras na educação inclusiva: impressão 3D, jardim sensorial e outras tecnologias assistivas",
        instituicao: "Universidade do Estado do Rio de Janeiro",
        coordenacao: "Coordenação não informada",
        resumo: "Resumo não disponível",
        cidade: "Rio de Janeiro (RJ)",
        coordenadas: [-22.8625, -43.2236],
        executora: "Universidade do Estado do Rio de Janeiro"
    }),

    // Rio de Janeiro (RJ) - Projeto 2
    criarProjeto({
        sigla: "NeuroSuTre",
        imagem: "imagem_neurosutre.jpg",
        titulo: "Estimulação somatossensitiva periférica por corrente senoidal para supressão do tremor na doença de Parkinson e no tremor essencial",
        instituicao: "Universidade Federal do Rio de Janeiro",
        coordenacao: "Coordenação não informada",
        resumo: "Resumo não disponível",
        cidade: "Rio de Janeiro (RJ)",
        coordenadas: [-22.8625, -43.2236],
        executora: "Universidade Federal do Rio de Janeiro"
    }),

    // Rio de Janeiro (RJ) - Projeto 3
    criarProjeto({
        sigla: "SIVAM",
        imagem: "imagem_sivam.jpg",
        titulo: "Técnicas de baixo custo para análise do movimento humano baseadas em inteligência artificial, sensores vestíveis e IOT",
        instituicao: "Universidade Federal do Rio de Janeiro",
        coordenacao: "Coordenação não informada",
        resumo: "Resumo não disponível",
        cidade: "Rio de Janeiro (RJ)",
        coordenadas: [-22.8625, -43.2236],
        executora: "Universidade Federal do Rio de Janeiro"
    }),

    // Rio de Janeiro (RJ) - Projeto 4
    criarProjeto({
        sigla: "AssistEMT",
        imagem: "imagem_assistemt.jpg",
        titulo: "Efeitos da estimulação transcraniana não-invasiva na funcionalidade de membro superior após o acidente vascular cerebral e sua associação à COVID-19",
        instituicao: "Universidade Federal do Rio de Janeiro",
        coordenacao: "Coordenação não informada",
        resumo: "Resumo não disponível",
        cidade: "Rio de Janeiro (RJ)",
        coordenadas: [-22.8625, -43.2236],
        executora: "Universidade Federal do Rio de Janeiro"
    }),

    // Salvador (BA)
    criarProjeto({
        sigla: "CuidarLab",
        imagem: "imagem_cuidarlab.png",
        titulo: "Laboratório de tecnologias de cuidados sociais: formação, experiências e soluções inovadoras",
        instituicao: "Universidade Federal da Bahia",
        coordenacao: "Edgilson Tavares de Araújo",
           resumo: `O CuidarLab visa desenvolver tecnologias de cuidados sociais para pessoas com deficiência e/ou idosas, promovendo a melhoria das relações de interdependência familiar e comunitária, além da autonomia cotidiana.

Seus objetivos incluem:
- Criar tecnologias para ampliar a oferta de produtos e serviços de cuidados
- Desenvolver estratégias de formação contínua para cuidadores
- Impulsionar políticas públicas na área
- Apoiar a criação de startups e cooperativas voltadas ao cuidado
- Realizar estudos e pesquisas tecnológicas

O cuidado é visto como um direito universal, sendo garantido por meio de políticas públicas e iniciativas do mercado.`,
        cidade: "Salvador (BA)",
        coordenadas: [-13.0017, -38.5086],
        executora: "Universidade Federal da Bahia"
    }),

    // São Paulo (SP) - Projeto 1
    criarProjeto({
        sigla: "PdComp",
        imagem: "imagem_pdcomp.jpg",
        titulo: "Desenvolvimento de pé protético em compósito via tecnologia assistiva com foco em melhora da funcionalidade e custo competitivo ao mercado nacional",
        instituicao: "Instituto de Pesquisas Tecnológicas do Estado de São Paulo",
        coordenacao: "Coordenação não informada",
        resumo: "Resumo não disponível",
        cidade: "São Paulo (SP)",
        coordenadas: [-23.5614, -46.7072],
        executora: "Instituto de Pesquisas Tecnológicas do Estado de São Paulo"
    }),

    // São Paulo (SP) - Projeto 2
    criarProjeto({
        sigla: "RPS5.0-TA",
        imagem: "imagem_rps50_ta.jpg",
        titulo: "Rede de laboratórios de pesquisa em saúde 5.0 da UNIFESP para desenvolvimento e inovação em tecnologia assistiva",
        instituicao: "Universidade Federal de São Paulo",
        coordenacao: "Coordenação não informada",
        resumo: "Resumo não disponível",
        cidade: "São Paulo (SP)",
        coordenadas: [-23.6036, -46.6733],
        executora: "Universidade Federal de São Paulo"
    }),

    // Seropédica (RJ)
    criarProjeto({
        sigla: "TECincluir",
        imagem: "imagem_tecincluir.jpg",
        titulo: "Inclusão e desenvolvimento de pessoas com deficiência: rede intersetorial e interinstitucional de laboratórios multiusuários de tecnologia assistiva",
        instituicao: "Universidade Federal Rural do Rio de Janeiro",
        coordenacao: "Coordenação não informada",
        resumo: "Resumo não disponível",
        cidade: "Seropédica (RJ)",
        coordenadas: [-22.7608, -43.6919],
        executora: "Universidade Federal Rural do Rio de Janeiro"
    }),

    // Uberlândia (MG) - Projeto 1
    criarProjeto({
        sigla: "Reabnet",
        imagem: "imagem_reabnet.jpg",
        titulo: "Desenvolvimento e teste de estratégias telerreabilitadoras para usuários de cadeiras de rodas com comprometimento de ombro para a plataforma reabnet",
        instituicao: "Universidade Federal de Uberlândia",
        coordenacao: "Eduardo Lázaro Martins Naves",
        resumo: `A prevalência de dor e lesões nos membros superiores em usuários de cadeiras de rodas é alta, e a reabilitação de acometimentos ortopédicos no ombro exige programas personalizados. Principais aspectos do projeto: Desenvolvimento de avaliações adequadas e exercícios padronizados, auxílio a terapeutas na seleção de intervenções específicas e Utilização da telerreabilitação como solução eficaz. Objetivo principal:Desenvolver e testar estratégias de avaliação e intervenção em telerreabilitação para usuários de cadeiras de rodas com comprometimento ortopédico de ombro, utilizando a plataforma Reabnet.`,
        cidade: "Uberlândia (MG)",
        coordenadas: [-18.9186, -48.2628],
        executora: "Universidade Federal de Uberlândia"
    }),

    // Uberlândia (MG) - Projeto 2 (com coordenação específica)
    criarProjeto({
        sigla: "TACintesp",
        imagem: "imagem_reabnet.jpg",
        titulo: "Inovação em Tecnologia Assistiva para a Vida Diária e o Esporte",
        instituicao: "Universidade Federal de Uberlândia",
        coordenacao: "Cleudmar Amaral de Araújo",
        resumo:  `A proposta visa atender as demandas das pessoas com deficiências e doenças raras, especialmente cadeirantes, que ainda enfrentam desafios apesar dos avanços tecnológicos. As soluções abrangem a criação de tecnologias assistivas para promover o desenvolvimento pessoal, desempenho físico e redução da dependência de importações. Entre as iniciativas estão: o desenvolvimento de uma tecnologia para detecção de câncer de mama, reatores para produção de materiais viscoelásticos, protótipos de cadeiras de rodas de alto desempenho, ergômetros para avaliação física, impressoras 3D de grande porte,  projetos de espaços recreativos acessíveis, sistemas de mobilidade urbana adaptados, bikes para esportes paralímpicos e recursos pedagógicos inovadores. Além dissom, a proposta busca a disseminação de conhecimentos em TA no Brasil.`,
        cidade: "Uberlândia (MG)",
        coordenadas: [-18.9186, -48.2628],
        executora: "Universidade Federal de Uberlândia"
    }),

    // Uberlândia (MG) - Projeto 3 (SisLab com imagem centralizada)
    {
        sigla: "SisLab",
        imagem: "logosislab_transp.png",
        titulo: "Laboratório Integrador SEDES/MCTI-UFU",
        instituicao: "Universidade Federal de Uberlândia",
        coordenacao: "Cleudmar Amaral de Araújo",
        resumo:  `Sistema Nacional de Laboratórios de Tecnologia Assistiva (SisAssistiva) é uma iniciativa do MCTI, estruturado por REDES de laboratórios multiusuários, por meio da gestão e articulação do Laboratório Integrador SEDES/MCTI - UFU (SisLAB), com o objetivo de promover pesquisa, desenvolvimento, formação de capital humano, serviços tecnológicos, empreendedorismo e inovação em Tecnologia Assistiva (TA), visando o desenvolvimento de métodos, processos e produtos assistivos.`,
        cidade: "Uberlândia (MG)",
        coordenadas: [-18.9186, -48.2628],
        executora: "Universidade Federal de Uberlândia",
 get info() {
            return `
<div class='project-info'>
    <h3>${this.sigla}</h3>
    <div style='display: flex; justify-content: center; margin: 15px 0;'>
        <img src='${this.imagem}' alt='${this.sigla}' style='max-width: 250px;'>
    </div>
    <p><b>Título:</b> ${this.titulo}</p>
    <p><b>Instituição:</b> ${this.instituicao}</p>
    <p><b>Coordenação:</b> ${this.coordenacao}</p>
    <p><b>Resumo:</b> ${this.resumo}</p>
    <p><b>Localização:</b> ${this.cidade}</p>
</div>
            `;
        }
    },
          
    // Vitória (ES)
    criarProjeto({
        sigla: "RoBOpTICA",
        imagem: "imagem_roboptica.png",
        titulo: "Robótica de assistência e reabilitação através da união entre realidade virtual, biossensores, óptica, inteligência artificial e computação em nuvem",
        instituicao: "Universidade Federal do Espírito Santo",
        coordenacao: "Arnaldo Gomes Leal Júnior",
        resumo: `Este projeto visa integrar tecnologias de robótica vestível e móvel com realidade virtual (RV), biossensores, inteligência artificial e computação em nuvem para criar uma nova geração de robôs de reabilitação e assistência, abordando três contextos:

1. Sistemas de reabilitação e locomoção:
   - Utilização de materiais multifuncionais como sensores e atuadores
   - Otimização de peso e consumo energético

2. Exoesqueletos ocupacionais:
   - Auxílio em tarefas laborais
   - Realidade virtual para treinamento de atividades

3. Monitoramento contínuo de pacientes:
   - Têxteis fotônicos para sensoriamento
   - Inteligência artificial para análise
   - Sistema multiparamétrico conectado à nuvem`,
        cidade: "Vitória (ES)",
        coordenadas: [-20.2756, -40.3083],
        executora: "Universidade Federal do Espírito Santo"
    })
];