-- ============================================================
-- QUIZ LIVRARIA ÁGAPE — Seed Completo
-- Execute APÓS o schema.sql
-- ============================================================

-- ============================================================
-- SETTINGS PADRÃO
-- ============================================================
INSERT INTO settings (key, value) VALUES
  ('pixel_id', ''),
  ('whatsapp_number', '5582988782681'),
  ('whatsapp_message', 'Olá! Fiz o quiz da Livraria Ágape e recebi a indicação do livro: [NOME DO LIVRO] de [AUTOR]. Gostaria de saber mais!')
ON CONFLICT (key) DO NOTHING;

-- ============================================================
-- BOOKS
-- ============================================================
INSERT INTO books (id, title, author) VALUES
-- HOMEM ADULTO — Pastor e Líder
('b0000001-0000-0000-0000-000000000001', 'O Sofrimento do Pastor', 'Glenn Packiam'),
('b0000001-0000-0000-0000-000000000002', 'Pastores em Perigo', 'Jaime Kemp'),
('b0000001-0000-0000-0000-000000000003', 'Se Eu Começasse o Meu Ministério Novamente', 'John Stott'),
('b0000001-0000-0000-0000-000000000004', 'Líder de Carne e Osso', 'Colin Buckland'),
('b0000001-0000-0000-0000-000000000005', 'A Liderança Pastoral', 'Timothy Witmer'),
('b0000001-0000-0000-0000-000000000006', 'Doze Desafios que as Igrejas Enfrentam', 'Mark Dever'),
('b0000001-0000-0000-0000-000000000007', 'Libertando o Ministério da Síndrome do Sucesso', 'Kent & Barbara Hughes'),
('b0000001-0000-0000-0000-000000000008', 'Ame Aqueles que te Enlouquecem', 'Jamie Rasmus'),
('b0000001-0000-0000-0000-000000000009', '10 Erros que um Líder não Pode Cometer', 'Hans Finzel'),
('b0000001-0000-0000-0000-000000000010', 'Depressão & Graça', 'Nelson Monteiro'),
('b0000001-0000-0000-0000-000000000011', 'Paulo, o Pastor', 'Scot McKnight'),
('b0000001-0000-0000-0000-000000000012', 'Líderes que Permanecem', 'Dave Kraft'),
-- HOMEM ADULTO — Apologética
('b0000002-0000-0000-0000-000000000001', 'Apologética Contemporânea', 'William Lane Craig'),
('b0000002-0000-0000-0000-000000000002', 'Apologética Pura e Simples', 'Alister McGrath'),
('b0000002-0000-0000-0000-000000000003', '77 Perguntas Sobre Deus e a Bíblia', 'Josh McDowell & Sean McDowell'),
('b0000002-0000-0000-0000-000000000004', 'Por Que Você Acredita?', 'K. Scott Oliphint'),
('b0000002-0000-0000-0000-000000000005', 'A Ciência Pode Explicar Tudo?', 'John C. Lennox'),
('b0000002-0000-0000-0000-000000000006', 'O Enigma do Mal', 'John W. Wenham'),
('b0000002-0000-0000-0000-000000000007', 'Em Guarda', 'William Lane Craig'),
('b0000002-0000-0000-0000-000000000008', 'Duvidando em Direção à Fé', 'Bobby Conway'),
('b0000002-0000-0000-0000-000000000009', 'Em Defesa de Deus', 'John C. Lennox'),
('b0000002-0000-0000-0000-000000000010', 'A Razão da Nossa Fé', 'William Lane Craig'),
('b0000002-0000-0000-0000-000000000011', 'Manual da Fé Cristã', 'John Schwarz'),
('b0000002-0000-0000-0000-000000000012', 'Não Tenho Fé Suficiente para Ser Ateu', 'Norman Geisler & Frank Turek'),
-- HOMEM ADULTO — Crise e Sofrimento
('b0000003-0000-0000-0000-000000000001', 'Caminhando com Deus em Meio à Dor e ao Sofrimento', 'Timothy Keller'),
('b0000003-0000-0000-0000-000000000002', 'Jesus: O Deus que Conhece o Seu Nome', 'Max Lucado'),
('b0000003-0000-0000-0000-000000000003', 'Conversões: Revertendo as Consequências Negativas da Vida', 'Tony Evans'),
('b0000003-0000-0000-0000-000000000004', 'Desvios: Nada em Sua Vida Acontece por Acaso', 'Tony Evans'),
('b0000003-0000-0000-0000-000000000005', 'Caminhos: Vivenciando o Agir de Deus nos Bastidores', 'Tony Evans'),
('b0000003-0000-0000-0000-000000000006', 'Você não está Sozinho', 'Max Lucado'),
('b0000003-0000-0000-0000-000000000007', 'O Sofrimento Roubou Minha Fé', 'Ismael Sobrinho'),
('b0000003-0000-0000-0000-000000000008', 'Você Vai Sair Dessa!', 'Max Lucado'),
('b0000003-0000-0000-0000-000000000009', 'Você Nunca Está Só', 'Max Lucado'),
('b0000003-0000-0000-0000-000000000010', 'Jesus não chamou você para isso!', 'Luciana Melo'),
('b0000003-0000-0000-0000-000000000011', 'Dias Melhores Virão', 'Max Lucado'),
('b0000003-0000-0000-0000-000000000012', 'Deus não desiste de Você', 'Max Lucado'),
-- HOMEM ADULTO — Pai e Marido
('b0000004-0000-0000-0000-000000000001', 'Casados & Felizes', 'Hernandes Dias Lopes'),
('b0000004-0000-0000-0000-000000000002', 'Homens Mais Parecidos com Jesus', 'David J. Merkh'),
('b0000004-0000-0000-0000-000000000003', 'O Homem da Casa', 'C. R. Wiley'),
('b0000004-0000-0000-0000-000000000004', 'Paternidade Sagrada', 'Gary Thomas'),
('b0000004-0000-0000-0000-000000000005', 'Conflitos no Casamento', 'Mauro Clark'),
('b0000004-0000-0000-0000-000000000006', 'Pai, um Homem de Valor', 'Hernandes Dias Lopes'),
('b0000004-0000-0000-0000-000000000007', 'Eu Ainda Digo "Sim"', 'Dave Harvey'),
('b0000004-0000-0000-0000-000000000008', 'O Homem Completo', 'Larry Titus'),
('b0000004-0000-0000-0000-000000000009', 'Felizes Mesmo Depois', 'Dannah Gresh'),
-- MULHER ADULTA — Família e Casamento
('b0000005-0000-0000-0000-000000000001', 'O Poder da Oração pelo Casamento', 'Elizabeth George'),
('b0000005-0000-0000-0000-000000000002', 'Como Lidar com a Teimosia de Seu Filho', 'James Dobson'),
('b0000005-0000-0000-0000-000000000003', 'Esposa Excelente', 'Martha Peace'),
('b0000005-0000-0000-0000-000000000004', 'Momentos com Deus para Casais', 'Pão Diário'),
('b0000005-0000-0000-0000-000000000005', 'Famílias Imperfeitas, Graça Perfeita', 'Lisânias Moura'),
-- MULHER ADULTA — Crise e Momentos Difíceis
('b0000006-0000-0000-0000-000000000001', 'A Felicidade ao seu Alcance', 'Hernandes Dias Lopes'),
('b0000006-0000-0000-0000-000000000002', 'Criado para Sonhar', 'Rick Warren'),
('b0000006-0000-0000-0000-000000000003', 'Medos do Coração', 'Trillia J. Newbell'),
('b0000006-0000-0000-0000-000000000004', 'Respire e Ore', 'Jennifer Tucker'),
('b0000006-0000-0000-0000-000000000005', 'Teimosamente Feliz', 'Joy Marie Clarkson'),
('b0000006-0000-0000-0000-000000000006', 'Viva a Vida', 'Max Lucado'),
('b0000006-0000-0000-0000-000000000007', 'Ciclos Emocionais Viciantes', 'Roberta Sara'),
('b0000006-0000-0000-0000-000000000008', 'Quero Confiar, mas não Consigo', 'Lysa TerKeurst'),
('b0000006-0000-0000-0000-000000000009', 'Tudo Bem não estar Bem', 'Sheila Walsh'),
('b0000006-0000-0000-0000-000000000010', 'Mais Forte que sua Dor', 'Roberta Sara'),
-- MULHER ADULTA — Propósito
('b0000007-0000-0000-0000-000000000001', 'Forte', 'Lisa Bevere'),
('b0000007-0000-0000-0000-000000000002', 'Caminhada com Propósitos para Mulheres', 'Katie Brazelton'),
('b0000007-0000-0000-0000-000000000003', 'Nascidas para Florescer', 'Gretchen Saffles'),
('b0000007-0000-0000-0000-000000000004', 'Mulher Nota 10', 'Hernandes Dias Lopes'),
('b0000007-0000-0000-0000-000000000005', 'O que Aprendi com as Videiras', 'Beth Moore'),
('b0000007-0000-0000-0000-000000000006', 'Voando nas Alturas', 'Hernandes Dias Lopes'),
('b0000007-0000-0000-0000-000000000007', 'Deus te fez de Propósito', 'Douglas Gonçalves & Thiago Marques'),
('b0000007-0000-0000-0000-000000000008', 'Sábia & Conselheira', 'Martha Peace'),
-- MULHER ADULTA — Relacionamento com Deus
('b0000008-0000-0000-0000-000000000001', 'Bem-aventuradas', 'Alana Carla'),
('b0000008-0000-0000-0000-000000000002', 'Hábitos Espirituais', 'David Mathis'),
('b0000008-0000-0000-0000-000000000003', 'O Coração de Maria', 'Filipe Santos'),
('b0000008-0000-0000-0000-000000000004', 'Mulheres Sábias', 'Lydia Brownback'),
('b0000008-0000-0000-0000-000000000005', 'Redescobrindo a Beleza da Vida', 'Lysa TerKeurst'),
('b0000008-0000-0000-0000-000000000006', 'Mulheres Destemidas', 'Kimberly Wagner'),
('b0000008-0000-0000-0000-000000000007', 'O Poder da Mulher que Ora', 'Stormie Omartian'),
-- HOMEM JOVEM — Ficção
('b0000009-0000-0000-0000-000000000001', 'Personagens ao Redor da Cruz', 'Tom Houston'),
('b0000009-0000-0000-0000-000000000002', 'Doze Homens Extraordinariamente Comuns', 'John MacArthur'),
('b0000009-0000-0000-0000-000000000003', 'O Homem do Céu', 'Irmão Yun & Paul Hattaway'),
('b0000009-0000-0000-0000-000000000004', 'Cartas de um Diabo a seu Aprendiz', 'C. S. Lewis'),
('b0000009-0000-0000-0000-000000000005', 'Jim Elliot', 'Janet & Geoff Benge'),
('b0000009-0000-0000-0000-000000000006', 'Pretoriano: Uma história de heróis e mártires', 'Unidade K9'),
('b0000009-0000-0000-0000-000000000007', 'Doze Homens, Uma Missão', 'Aramis C. DeBarros'),
('b0000009-0000-0000-0000-000000000008', 'O Peregrino', 'John Bunyan'),
-- MULHER JOVEM — Ficção
('b0000010-0000-0000-0000-000000000001', 'Se Pudesse Contar as Estrelas', 'Becca Mackenzie'),
('b0000010-0000-0000-0000-000000000002', 'A Música das Nuvens', 'Arlene Diniz'),
('b0000010-0000-0000-0000-000000000003', 'Deixa Nevar', 'Camila Antunes'),
('b0000010-0000-0000-0000-000000000004', 'No Final Daquele Dia', 'Arlene Diniz'),
('b0000010-0000-0000-0000-000000000005', 'O Príncipe Oculto', 'Tessa Afshar'),
('b0000010-0000-0000-0000-000000000006', 'Teólogas da Igreja Medieval', 'Rute Salviano Almeida'),
('b0000010-0000-0000-0000-000000000007', 'Doze Mulheres Extraordinariamente Comuns', 'John MacArthur'),
-- JOVENS — Apologética exclusivos
('b0000011-0000-0000-0000-000000000001', 'Deus e a Ciência Podem Andar Juntos?', 'John C. Lennox'),
('b0000011-0000-0000-0000-000000000002', 'A Prova Definitiva da Criação', 'Dr. Jason Lisle'),
('b0000011-0000-0000-0000-000000000003', 'A Morte da Razão', 'Francis Schaeffer'),
('b0000011-0000-0000-0000-000000000004', 'O que a Bíblia diz sobre o Aborto, a Eutanásia...', 'Wayne Grudem'),
('b0000011-0000-0000-0000-000000000005', 'Contra Cultura', 'David Platt'),
('b0000011-0000-0000-0000-000000000006', 'Não é Errado se me Faz Feliz', 'Alisa Childers'),
('b0000011-0000-0000-0000-000000000007', 'O Carpinteiro', 'Josh McDowell & Sean McDowell'),
('b0000011-0000-0000-0000-000000000008', 'Como ser Cristão', 'John Stott'),
-- JOVENS — Relacionamento e Pureza
('b0000012-0000-0000-0000-000000000001', 'Sexualidade Santa', 'Christopher West'),
('b0000012-0000-0000-0000-000000000002', 'Mais que uma Batalha', 'Joe Rigney'),
('b0000012-0000-0000-0000-000000000003', 'Curando as Feridas do Vício Sexual', 'Mark R. Laaser'),
('b0000012-0000-0000-0000-000000000004', 'Paixão & Pureza', 'Elisabeth Elliot'),
('b0000012-0000-0000-0000-000000000005', 'Com Toda Pureza', 'Tim Chester'),
('b0000012-0000-0000-0000-000000000006', 'Reforma Sexual', 'Aimee Byrd'),
('b0000012-0000-0000-0000-000000000007', 'O Namoro e o Noivado que Deus sempre quis', 'Alexandre Mendes & David Merkh'),
('b0000012-0000-0000-0000-000000000008', 'Eu amo você! Namoro, noivado, casamento e sexo', 'Jaime Kemp'),
('b0000012-0000-0000-0000-000000000009', 'Sete Ciladas do Inimigo', 'Erwin W. Lutzer'),
('b0000012-0000-0000-0000-000000000010', 'Ainda não Casei', 'Marshall Segal'),
-- HOMEM JOVEM — Relacionamento com Deus
('b0000013-0000-0000-0000-000000000001', 'Surpreendido por Jesus', 'Dane Ortlund'),
('b0000013-0000-0000-0000-000000000002', 'Domine seus Pensamentos', 'Max Lucado'),
('b0000013-0000-0000-0000-000000000003', 'O Caminho da Felicidade', 'Max Lucado'),
('b0000013-0000-0000-0000-000000000004', 'Pecados Intocáveis', 'Jerry Bridges'),
('b0000013-0000-0000-0000-000000000005', 'Viciados em si Mesmos', 'Larry Crabb'),
('b0000013-0000-0000-0000-000000000006', 'Ídolos do Coração', 'Elyse Fitzpatrick'),
('b0000013-0000-0000-0000-000000000007', 'A Parábola do Filho Pródigo', 'John MacArthur'),
('b0000013-0000-0000-0000-000000000008', 'Um Mês para Viver', 'Kerry & Chris Shook'),
('b0000013-0000-0000-0000-000000000009', 'Vale da Sombra da Morte', 'Emílio Garofalo Neto'),
('b0000013-0000-0000-0000-000000000010', 'O Deus que Destrói Sonhos', 'Rodrigo Bibo'),
('b0000013-0000-0000-0000-000000000011', 'Como se Tornar um Cristão Inútil', 'Rodrigo Bibo'),
-- MULHER JOVEM — Relacionamento com Deus (exclusivos)
('b0000014-0000-0000-0000-000000000001', '24 Horas que Transformaram o Mundo', 'Adam Hamilton')
ON CONFLICT DO NOTHING;

-- ============================================================
-- THEMES
-- ============================================================

-- HOMEM ADULTO
INSERT INTO themes (id, profile, code, label, emoji, verse, verse_reference, step3_question, step4_question, order_index) VALUES
('t0001', 'homem-adulto', 'pastor-lider',
  'Sou pastor ou líder na minha igreja', '🧭',
  'Apascenta as minhas ovelhas', 'João 21:17',
  'O que melhor descreve sua vida agora?',
  'Qual é sua maior realidade agora?', 1),
('t0002', 'homem-adulto', 'apologetica',
  'Quero entender e defender melhor minha fé', '🛡️',
  'Estai sempre preparados para responder a qualquer pessoa que vos pedir a razão da esperança', '1 Pedro 3:15',
  'O que melhor descreve sua vida agora?',
  'Onde você mais sente esse desafio?', 2),
('t0003', 'homem-adulto', 'crise-sofrimento',
  'Estou passando por um momento difícil', '💔',
  'Porque eu sei os planos que tenho para vós... planos de paz e não de mal', 'Jeremias 29:11',
  'O que melhor descreve sua vida agora?',
  'O que melhor descreve o que você está vivendo?', 3),
('t0004', 'homem-adulto', 'pai-marido',
  'Quero crescer como pai e marido', '👨‍👩‍👧',
  'Quanto a mim e à minha casa, serviremos ao Senhor', 'Josué 24:15',
  'O que melhor descreve sua vida agora?',
  'Onde você sente mais necessidade de crescer?', 4),

-- MULHER ADULTA
('t0005', 'mulher-adulta', 'familia-casamento',
  'Quero cuidar melhor da minha família e casamento', '👨‍👩‍👧',
  'Melhor é serem dois do que um', 'Eclesiastes 4:9',
  'O que melhor descreve sua vida agora?',
  'Onde você sente mais necessidade agora?', 1),
('t0006', 'mulher-adulta', 'crise-momentos-dificeis',
  'Estou passando por um momento difícil', '💔',
  'Porque eu sei os planos que tenho para vós... planos de paz e não de mal', 'Jeremias 29:11',
  'O que melhor descreve sua vida agora?',
  'O que melhor descreve o que você está vivendo?', 2),
('t0007', 'mulher-adulta', 'proposito',
  'Quero descobrir e viver meu propósito', '🌱',
  'Porque dele, e por meio dele, e para ele são todas as coisas', 'Romanos 11:36',
  'O que melhor descreve sua vida agora?',
  'O que melhor descreve seu momento?', 3),
('t0008', 'mulher-adulta', 'relacionamento-deus',
  'Quero aprofundar meu relacionamento com Deus', '🔥',
  'Chegai-vos a Deus e ele se chegará a vós', 'Tiago 4:8',
  'O que melhor descreve sua vida agora?',
  'O que melhor descreve sua vida espiritual agora?', 4),

-- HOMEM JOVEM
('t0009', 'homem-jovem', 'ficcao',
  'Quero uma boa história para ler', '📖',
  'Tudo o que é verdadeiro... tudo o que é amável... nisso pensai', 'Filipenses 4:8',
  'O que melhor descreve você agora?',
  'Que tipo de história te prende?', 1),
('t0010', 'homem-jovem', 'apologetica',
  'Quero entender e defender minha fé', '🛡️',
  'Estai sempre preparados para responder a qualquer pessoa que vos pedir a razão da esperança', '1 Pedro 3:15',
  'O que melhor descreve você agora?',
  'Onde você mais sente esse desafio?', 2),
('t0011', 'homem-jovem', 'relacionamento-pureza',
  'Relacionamento e pureza é uma área que me gera conflito', '💛',
  'Fugi da impureza sexual... o que peca dessa forma peca contra o próprio corpo', '1 Coríntios 6:18',
  'O que melhor descreve você agora?',
  'O que melhor descreve sua luta agora?', 3),
('t0012', 'homem-jovem', 'relacionamento-deus',
  'Quero aprofundar meu relacionamento com Deus', '🔥',
  'Chegai-vos a Deus e ele se chegará a vós', 'Tiago 4:8',
  'O que melhor descreve você agora?',
  'O que melhor descreve sua vida espiritual agora?', 4),

-- MULHER JOVEM
('t0013', 'mulher-jovem', 'ficcao',
  'Quero uma boa história para ler', '📖',
  'Tudo o que é verdadeiro... tudo o que é amável... nisso pensai', 'Filipenses 4:8',
  'O que melhor descreve você agora?',
  'Que tipo de história te prende?', 1),
('t0014', 'mulher-jovem', 'apologetica',
  'Quero entender e defender minha fé', '🛡️',
  'Estai sempre preparados para responder a qualquer pessoa que vos pedir a razão da esperança', '1 Pedro 3:15',
  'O que melhor descreve você agora?',
  'Onde você mais sente esse desafio?', 2),
('t0015', 'mulher-jovem', 'relacionamento-pureza',
  'Relacionamento e pureza é uma área que me gera conflito', '💛',
  'Fugi da impureza sexual... o que peca dessa forma peca contra o próprio corpo', '1 Coríntios 6:18',
  'O que melhor descreve você agora?',
  'O que melhor descreve sua luta agora?', 3),
('t0016', 'mulher-jovem', 'relacionamento-deus',
  'Quero aprofundar meu relacionamento com Deus', '🔥',
  'Chegai-vos a Deus e ele se chegará a vós', 'Tiago 4:8',
  'O que melhor descreve você agora?',
  'O que melhor descreve sua vida espiritual agora?', 4)
ON CONFLICT (profile, code) DO NOTHING;

-- ============================================================
-- FILTERS (Etapa 4)
-- ============================================================

-- pastor-lider (t0001)
INSERT INTO filters (id, theme_id, code, label, emoji, step5_question, order_index) VALUES
('f0001', 't0001', 'esgotado', 'Estou esgotado e pensando em desistir', '😔', 'O que melhor descreve esse cansaço?', 1),
('f0002', 't0001', 'conflitos', 'Enfrento conflitos e pessoas difíceis na igreja', '⚔️', 'Onde está o maior atrito?', 2),
('f0003', 't0001', 'crescimento', 'Quero crescer e me preparar melhor como líder', '📈', 'O que você mais quer desenvolver?', 3),
('f0004', 't0001', 'crise', 'Estou passando por uma crise emocional ou espiritual', '🌑', 'Como você está por dentro?', 4),

-- apologetica homem adulto (t0002)
('f0005', 't0002', 'familia', 'Em casa com filhos ou familiares que estão abandonando a fé', '🏠', 'Qual é sua maior preocupação?', 1),
('f0006', 't0002', 'trabalho', 'No trabalho com pessoas que questionam minha fé', '💼', 'Como essa pressão aparece na sua vida?', 2),
('f0007', 't0002', 'sofrimento', 'O sofrimento da vida me faz questionar se Deus existe', '💔', 'O que mais te faz questionar?', 3),
('f0008', 't0002', 'duvidas', 'Tenho dúvidas internas que nunca resolvi', '🧠', 'O que mais te inquieta?', 4),

-- crise-sofrimento (t0003)
('f0009', 't0003', 'luto', 'Perdi algo ou alguém importante e estou de luto', '😢', 'O que você mais precisa agora?', 1),
('f0010', 't0003', 'fora-dos-trilhos', 'Sinto que minha vida saiu dos trilhos', '😤', 'Como você chegou até aqui?', 2),
('f0011', 't0003', 'solidao', 'Estou me sentindo sozinho e abandonado', '😶', 'O que você mais sente?', 3),
('f0012', 't0003', 'fe-abalada', 'O sofrimento está abalando minha fé em Deus', '🤯', 'Como está sua relação com Deus nesse momento?', 4),

-- pai-marido (t0004)
('f0013', 't0004', 'casamento', 'Meu casamento precisa de atenção', '💍', 'O que você mais quer construir no seu casamento?', 1),
('f0014', 't0004', 'paternidade', 'Quero ser um pai mais presente e intencional', '👨‍👧', 'O que mais te preocupa como pai?', 2),
('f0015', 't0004', 'identidade', 'Quero entender melhor meu papel como homem cristão', '💪', 'O que você sente que falta em você?', 3),
('f0016', 't0004', 'crise-casamento', 'Meu casamento está em crise ou com conflitos sérios', '⚡', 'Como estão os conflitos no seu casamento?', 4),

-- familia-casamento mulher adulta (t0005)
('f0017', 't0005', 'casamento', 'Meu casamento precisa de mais atenção e cuidado', '💍', 'O que você mais quer para seu casamento?', 1),
('f0018', 't0005', 'filhos', 'Tenho dificuldades com meus filhos', '👶', 'Qual é seu maior desafio com seus filhos?', 2),
('f0019', 't0005', 'espiritualidade', 'Quero ser uma esposa e mãe mais espiritualizada', '🙏', 'O que você quer construir?', 3),
('f0020', 't0005', 'familia-ideal', 'Minha família está longe de ser o que eu sonhei', '💔', 'O que mais te pesa?', 4),

-- crise-momentos-dificeis mulher adulta (t0006)
('f0021', 't0006', 'ansiedade', 'Estou cheia de ansiedade e medos que não consigo controlar', '😰', 'O que mais te paralisa?', 1),
('f0022', 't0006', 'esgotamento', 'Estou emocionalmente esgotada e no limite', '💔', 'Como você está por dentro?', 2),
('f0023', 't0006', 'alegria', 'Perdi a alegria e não consigo ser feliz', '😔', 'O que você mais quer recuperar?', 3),
('f0024', 't0006', 'ciclos', 'Caio nos mesmos padrões e ciclos sempre', '🔁', 'O que você reconhece em si mesma?', 4),

-- proposito mulher adulta (t0007)
('f0025', 't0007', 'descoberta', 'Ainda não sei qual é o meu propósito e chamado', '🌱', 'O que mais te trava?', 1),
('f0026', 't0007', 'florescimento', 'Sei quem sou mas não estou florescendo como poderia', '🌸', 'O que você sente que ainda não desabrochou?', 2),
('f0027', 't0007', 'identidade', 'Quero me tornar a mulher que Deus criou para eu ser', '👑', 'O que você mais quer desenvolver?', 3),
('f0028', 't0007', 'liberdade', 'Estou presa e quero voar mais alto na vida', '🦅', 'O que te prende no chão?', 4),

-- relacionamento-deus mulher adulta (t0008)
('f0029', 't0008', 'fria', 'Minha vida devocional está fria e mecânica', '🥶', 'O que você sente que está faltando?', 1),
('f0030', 't0008', 'oracao', 'Quero aprender a orar com mais poder e profundidade', '🙏', 'Como é sua vida de oração hoje?', 2),
('f0031', 't0008', 'sabedoria', 'Quero me tornar uma mulher mais sábia e bíblica', '📖', 'O que você quer desenvolver?', 3),
('f0032', 't0008', 'coragem', 'Quero uma fé mais corajosa e intensa', '🔥', 'O que você quer romper?', 4),

-- ficcao homem jovem (t0009)
('f0033', 't0009', 'aventura', 'Histórias de coragem, aventura e superação', '⚔️', 'O que mais te atrai nesse tipo de história?', 1),
('f0034', 't0009', 'reflexao', 'Histórias que me fazem pensar e enxergar a vida diferente', '🧠', 'O que você quer que a história desperte em você?', 2),
('f0035', 't0009', 'biografias', 'Histórias reais de pessoas que mudaram o mundo', '🌍', 'Que tipo de herói te inspira mais?', 3),
('f0036', 't0009', 'classicos', 'Histórias clássicas que marcaram gerações', '📜', 'O que você busca num clássico?', 4),

-- apologetica homem jovem (t0010)
('f0037', 't0010', 'academico', 'Na faculdade ou escola com professores e colegas céticos', '🎓', 'Qual é o maior ataque que você enfrenta?', 1),
('f0038', 't0010', 'redes-sociais', 'Nas redes sociais e debates online', '📱', 'O que mais te trava nos debates?', 2),
('f0039', 't0010', 'mundo-atual', 'Com questões do mundo atual que me deixam sem resposta', '🌍', 'Qual tema te gera mais dúvida ou pressão?', 3),
('f0040', 't0010', 'duvidas', 'Dentro de mim mesmo tenho dúvidas que não consigo resolver', '🤔', 'O que mais te inquieta por dentro?', 4),

-- relacionamento-pureza homem jovem (t0011)
('f0041', 't0011', 'pureza', 'Luto com pureza sexual e não consigo vencer sozinho', '🔥', 'Como é essa batalha para você?', 1),
('f0042', 't0011', 'relacionamento-confuso', 'Estou num relacionamento confuso e sem direção', '💔', 'Onde está a confusão?', 2),
('f0043', 't0011', 'preparacao', 'Quero me preparar para um relacionamento que honre a Deus', '💍', 'O que você quer construir?', 3),
('f0044', 't0011', 'cultura', 'A cultura me bombardeia com uma visão de sexo que confunde tudo', '🤯', 'O que mais te confunde?', 4),

-- relacionamento-deus homem jovem (t0012)
('f0045', 't0012', 'fria', 'Minha fé está fria e virou rotina sem sentido', '🥶', 'O que você sente que está faltando?', 1),
('f0046', 't0012', 'vicios', 'Tenho pecados e vícios que me prendem e me envergonham', '⛓️', 'Qual é sua maior luta como homem?', 2),
('f0047', 't0012', 'mente', 'Minha mente está caótica e não consigo focar em Deus', '😵', 'O que mais te domina internamente?', 3),
('f0048', 't0012', 'conhecer-jesus', 'Não sei se realmente conheço Jesus ou só sei sobre Ele', '❓', 'O que mais te inquieta na sua fé?', 4),

-- ficcao mulher jovem (t0013)
('f0049', 't0013', 'romance', 'Histórias de romance, fé e relacionamentos com propósito', '💕', 'O que você quer sentir lendo essa história?', 1),
('f0050', 't0013', 'reflexao', 'Histórias que me fazem pensar e enxergar a vida diferente', '🧠', 'O que você quer que a história desperte em você?', 2),
('f0051', 't0013', 'biografias', 'Histórias reais de mulheres que marcaram a história', '👑', 'Que tipo de mulher te inspira mais?', 3),
('f0052', 't0013', 'classicos', 'Histórias clássicas que marcaram gerações', '📜', 'O que você busca num clássico?', 4),

-- apologetica mulher jovem (t0014) — mesmo fluxo homem jovem
('f0053', 't0014', 'academico', 'Na faculdade ou escola com professores e colegas céticos', '🎓', 'Qual é o maior ataque que você enfrenta?', 1),
('f0054', 't0014', 'redes-sociais', 'Nas redes sociais e debates online', '📱', 'O que mais te trava nos debates?', 2),
('f0055', 't0014', 'mundo-atual', 'Com questões do mundo atual que me deixam sem resposta', '🌍', 'Qual tema te gera mais dúvida ou pressão?', 3),
('f0056', 't0014', 'duvidas', 'Dentro de mim mesma tenho dúvidas que não consigo resolver', '🤔', 'O que mais te inquieta por dentro?', 4),

-- relacionamento-pureza mulher jovem (t0015)
('f0057', 't0015', 'pureza', 'Luto com pureza sexual e não consigo vencer sozinha', '🔥', 'Como é essa batalha para você?', 1),
('f0058', 't0015', 'relacionamento-confuso', 'Estou num relacionamento confuso e sem direção', '💔', 'Onde está a confusão?', 2),
('f0059', 't0015', 'preparacao', 'Quero me preparar para um relacionamento que honre a Deus', '💍', 'O que você quer construir?', 3),
('f0060', 't0015', 'cultura', 'A cultura me bombardeia com uma visão de sexo que confunde tudo', '🤯', 'O que mais te confunde?', 4),

-- relacionamento-deus mulher jovem (t0016)
('f0061', 't0016', 'fria', 'Minha fé está fria e me sinto distante de Deus', '🥶', 'O que você sente que está faltando?', 1),
('f0062', 't0016', 'vicios', 'Tenho padrões e vícios que me afastam de Deus', '⛓️', 'Qual é sua maior luta?', 2),
('f0063', 't0016', 'emocoes', 'Minhas emoções e ansiedades me dominam mais que Deus', '😵', 'O que mais te domina por dentro?', 3),
('f0064', 't0016', 'conhecer-jesus', 'Quero conhecer Jesus de uma forma mais profunda e real', '❓', 'O que você mais quer descobrir?', 4);

-- ============================================================
-- RESULTS (Etapa 5 → Livro)
-- ============================================================

-- f0001: pastor-lider / esgotado
INSERT INTO results (filter_id, label, book_id, order_index) VALUES
('f0001', 'Sinto que o ministério consumiu tudo de mim', 'b0000001-0000-0000-0000-000000000001', 1),
('f0001', 'Tenho medo de estar caminhando para o erro ou queda', 'b0000001-0000-0000-0000-000000000002', 2),
('f0001', 'Se pudesse recomeçaria tudo de forma diferente', 'b0000001-0000-0000-0000-000000000003', 3),

-- f0002: pastor-lider / conflitos
('f0002', 'Tenho pessoas que travam tudo que tento fazer', 'b0000001-0000-0000-0000-000000000008', 1),
('f0002', 'Cometo erros de liderança e não sei como evitá-los', 'b0000001-0000-0000-0000-000000000009', 2),
('f0002', 'Minha igreja enfrenta desafios que não sei como lidar', 'b0000001-0000-0000-0000-000000000006', 3),

-- f0003: pastor-lider / crescimento
('f0003', 'Quero entender melhor meu papel pastoral na prática', 'b0000001-0000-0000-0000-000000000005', 1),
('f0003', 'Quero ser um líder mais humano e próximo das pessoas', 'b0000001-0000-0000-0000-000000000004', 2),
('f0003', 'Quero aprender com o exemplo de Paulo como pastor', 'b0000001-0000-0000-0000-000000000011', 3),

-- f0004: pastor-lider / crise
('f0004', 'Estou lutando contra depressão e ninguém sabe', 'b0000001-0000-0000-0000-000000000010', 1),
('f0004', 'Tenho medo de não durar no ministério a longo prazo', 'b0000001-0000-0000-0000-000000000012', 2),
('f0004', 'Quero me livrar da pressão de ser bem sucedido', 'b0000001-0000-0000-0000-000000000007', 3),

-- f0005: apologetica / familia
('f0005', 'Meu filho está sendo bombardeado por ateísmo e relativismo', 'b0000002-0000-0000-0000-000000000012', 1),
('f0005', 'Quero ter respostas quando a família questiona a Bíblia', 'b0000002-0000-0000-0000-000000000003', 2),
('f0005', 'Quero argumentos sólidos para conversas difíceis em família', 'b0000002-0000-0000-0000-000000000002', 3),

-- f0006: apologetica / trabalho
('f0006', 'Colegas usam ciência e razão para dizer que fé é ingenuidade', 'b0000002-0000-0000-0000-000000000005', 1),
('f0006', 'Sinto que o mundo está indo contra tudo que acredito', 'b0000002-0000-0000-0000-000000000007', 2),
('f0006', 'Preciso de uma fé que dialogue com o mundo intelectual', 'b0000002-0000-0000-0000-000000000001', 3),

-- f0007: apologetica / sofrimento
('f0007', 'Não consigo entender por que Deus permite tanto sofrimento', 'b0000002-0000-0000-0000-000000000006', 1),
('f0007', 'Passei por algo tão difícil que minha fé balançou', 'b0000002-0000-0000-0000-000000000008', 2),
('f0007', 'Quero uma resposta racional e bíblica sobre o problema do mal', 'b0000002-0000-0000-0000-000000000009', 3),

-- f0008: apologetica / duvidas
('f0008', 'Tenho dúvidas que não consigo falar com ninguém na igreja', 'b0000002-0000-0000-0000-000000000004', 1),
('f0008', 'Quero uma fé com fundamento racional e não só emocional', 'b0000002-0000-0000-0000-000000000010', 2),
('f0008', 'Quero um guia completo que responda minhas perguntas mais profundas', 'b0000002-0000-0000-0000-000000000011', 3),

-- f0009: crise-sofrimento / luto
('f0009', 'Quero entender por que Deus permite tanto sofrimento', 'b0000003-0000-0000-0000-000000000001', 1),
('f0009', 'Preciso saber que Deus me conhece e se importa comigo', 'b0000003-0000-0000-0000-000000000002', 2),
('f0009', 'Quero encontrar esperança de que dias melhores virão', 'b0000003-0000-0000-0000-000000000011', 3),

-- f0010: crise-sofrimento / fora-dos-trilhos
('f0010', 'Tomei decisões erradas e estou colhendo as consequências', 'b0000003-0000-0000-0000-000000000003', 1),
('f0010', 'Sinto que minha vida tomou um rumo que não planejei', 'b0000003-0000-0000-0000-000000000004', 2),
('f0010', 'Não consigo enxergar Deus agindo na minha situação', 'b0000003-0000-0000-0000-000000000005', 3),

-- f0011: crise-sofrimento / solidao
('f0011', 'Sinto que ninguém entende o que estou passando', 'b0000003-0000-0000-0000-000000000006', 1),
('f0011', 'Sinto que até Deus está distante de mim', 'b0000003-0000-0000-0000-000000000009', 2),
('f0011', 'Estou sobrecarregado com algo que não escolhi carregar', 'b0000003-0000-0000-0000-000000000010', 3),

-- f0012: crise-sofrimento / fe-abalada
('f0012', 'O sofrimento me fez questionar se Deus existe ou se me ama', 'b0000003-0000-0000-0000-000000000007', 1),
('f0012', 'Sei que Deus existe mas não consigo ver saída', 'b0000003-0000-0000-0000-000000000008', 2),
('f0012', 'Tenho medo de que Deus tenha desistido de mim', 'b0000003-0000-0000-0000-000000000012', 3),

-- f0013: pai-marido / casamento
('f0013', 'Quero recuperar a alegria e a cumplicidade com minha esposa', 'b0000004-0000-0000-0000-000000000001', 1),
('f0013', 'Quero aprender a amar minha esposa como Cristo amou a igreja', 'b0000004-0000-0000-0000-000000000007', 2),
('f0013', 'Quero que meu casamento seja feliz a longo prazo', 'b0000004-0000-0000-0000-000000000009', 3),

-- f0014: pai-marido / paternidade
('f0014', 'Quero deixar um legado espiritual para meus filhos', 'b0000004-0000-0000-0000-000000000004', 1),
('f0014', 'Quero ser uma referência de homem para minha família', 'b0000004-0000-0000-0000-000000000006', 2),
('f0014', 'Quero entender meu papel de líder espiritual em casa', 'b0000004-0000-0000-0000-000000000003', 3),

-- f0015: pai-marido / identidade
('f0015', 'Quero ser um homem mais parecido com Jesus no dia a dia', 'b0000004-0000-0000-0000-000000000002', 1),
('f0015', 'Quero crescer em todas as áreas como homem completo', 'b0000004-0000-0000-0000-000000000008', 2),
('f0015', 'Quero entender meu papel de líder espiritual em casa', 'b0000004-0000-0000-0000-000000000003', 3),

-- f0016: pai-marido / crise-casamento
('f0016', 'Brigamos muito e não sabemos como resolver', 'b0000004-0000-0000-0000-000000000005', 1),
('f0016', 'Quero recuperar a alegria e a cumplicidade com minha esposa', 'b0000004-0000-0000-0000-000000000001', 2),
('f0016', 'Quero aprender a amar minha esposa como Cristo amou a igreja', 'b0000004-0000-0000-0000-000000000007', 3),

-- f0017: familia-casamento / casamento
('f0017', 'Quero aprender a orar pelo meu casamento e meu marido', 'b0000005-0000-0000-0000-000000000001', 1),
('f0017', 'Quero ser a esposa que Deus me chamou para ser', 'b0000005-0000-0000-0000-000000000003', 2),
('f0017', 'Quero que meu casamento seja feliz a longo prazo', 'b0000004-0000-0000-0000-000000000009', 3),

-- f0018: familia-casamento / filhos
('f0018', 'Meu filho é teimoso e não sei como lidar', 'b0000005-0000-0000-0000-000000000002', 1),
('f0018', 'Quero criar meus filhos com mais intenção espiritual', 'b0000005-0000-0000-0000-000000000005', 2),
('f0018', 'Minha família está longe do que eu sonhei e me sinto culpada', 'b0000005-0000-0000-0000-000000000005', 3),

-- f0019: familia-casamento / espiritualidade
('f0019', 'Quero criar momentos de devoção e oração em casal', 'b0000005-0000-0000-0000-000000000004', 1),
('f0019', 'Quero aprender a orar especificamente pelo meu casamento', 'b0000005-0000-0000-0000-000000000001', 2),
('f0019', 'Quero ser a esposa que Deus me chamou para ser', 'b0000005-0000-0000-0000-000000000003', 3),

-- f0020: familia-casamento / familia-ideal
('f0020', 'Minha família é cheia de imperfeições e me sinto culpada', 'b0000005-0000-0000-0000-000000000005', 1),
('f0020', 'Quero que meu casamento seja feliz a longo prazo', 'b0000004-0000-0000-0000-000000000009', 2),
('f0020', 'Quero criar momentos espirituais que unam minha família', 'b0000005-0000-0000-0000-000000000004', 3),

-- f0021: crise / ansiedade
('f0021', 'Tenho medos que dominam minha mente e me impedem de viver', 'b0000006-0000-0000-0000-000000000003', 1),
('f0021', 'Preciso aprender a respirar, orar e soltar o controle', 'b0000006-0000-0000-0000-000000000004', 2),
('f0021', 'Quero confiar em Deus mas algo me impede', 'b0000006-0000-0000-0000-000000000008', 3),

-- f0022: crise / esgotamento
('f0022', 'Estou no limite e sinto que tudo bem não estar bem', 'b0000006-0000-0000-0000-000000000009', 1),
('f0022', 'A dor está grande demais e preciso de força para continuar', 'b0000006-0000-0000-0000-000000000010', 2),
('f0022', 'Quero voltar a viver de verdade e não só sobreviver', 'b0000006-0000-0000-0000-000000000006', 3),

-- f0023: crise / alegria
('f0023', 'Quero voltar a ser feliz de verdade', 'b0000006-0000-0000-0000-000000000001', 1),
('f0023', 'Quero aprender a ser feliz mesmo no meio da dificuldade', 'b0000006-0000-0000-0000-000000000005', 2),
('f0023', 'Quero resgatar meus sonhos que ficaram pelo caminho', 'b0000006-0000-0000-0000-000000000002', 3),

-- f0024: crise / ciclos
('f0024', 'Caio nos mesmos ciclos emocionais e não sei como sair', 'b0000006-0000-0000-0000-000000000007', 1),
('f0024', 'Quero confiar nas pessoas mas fui magoada muitas vezes', 'b0000006-0000-0000-0000-000000000008', 2),
('f0024', 'Sei que Deus tem mais para mim mas não consigo avançar', 'b0000006-0000-0000-0000-000000000002', 3),

-- f0025: proposito / descoberta
('f0025', 'Nunca parei para pensar em quem Deus me criou para ser', 'b0000007-0000-0000-0000-000000000007', 1),
('f0025', 'Quero um guia prático para caminhar com propósito', 'b0000007-0000-0000-0000-000000000002', 2),
('f0025', 'Quero entender o que Deus quer de mim como mulher', 'b0000007-0000-0000-0000-000000000004', 3),

-- f0026: proposito / florescimento
('f0026', 'Sinto que fui criada para mais mas ainda não encontrei', 'b0000007-0000-0000-0000-000000000003', 1),
('f0026', 'Passei por podas e dificuldades e quero entender o porquê', 'b0000007-0000-0000-0000-000000000005', 2),
('f0026', 'Quero ser fortalecida espiritualmente para viver meu chamado', 'b0000007-0000-0000-0000-000000000001', 3),

-- f0027: proposito / identidade
('f0027', 'Quero ser uma mulher íntegra, sábia e de influência', 'b0000007-0000-0000-0000-000000000008', 1),
('f0027', 'Quero ser uma mulher de valor em todas as áreas da vida', 'b0000007-0000-0000-0000-000000000004', 2),
('f0027', 'Quero devocionais que me fortaleçam no dia a dia', 'b0000007-0000-0000-0000-000000000001', 3),

-- f0028: proposito / liberdade
('f0028', 'Sinto que tenho potencial mas algo sempre me limita', 'b0000007-0000-0000-0000-000000000006', 1),
('f0028', 'Quero romper com o que me impede de avançar', 'b0000007-0000-0000-0000-000000000003', 2),
('f0028', 'Quero um devocional que me mova todos os dias', 'b0000007-0000-0000-0000-000000000001', 3),

-- f0029: rel-deus mulher adulta / fria
('f0029', 'Preciso criar hábitos espirituais consistentes no dia a dia', 'b0000008-0000-0000-0000-000000000002', 1),
('f0029', 'Quero redescobrir a beleza de viver com Deus', 'b0000008-0000-0000-0000-000000000005', 2),
('f0029', 'Quero me sentir verdadeiramente abençoada e grata', 'b0000008-0000-0000-0000-000000000001', 3),

-- f0030: rel-deus mulher adulta / oracao
('f0030', 'Oro pouco e quero aprender a orar de verdade', 'b0000008-0000-0000-0000-000000000007', 1),
('f0030', 'Quero me inspirar no exemplo de Maria e sua entrega a Deus', 'b0000008-0000-0000-0000-000000000003', 2),
('f0030', 'Quero criar disciplinas espirituais que transformem minha rotina', 'b0000008-0000-0000-0000-000000000002', 3),

-- f0031: rel-deus mulher adulta / sabedoria
('f0031', 'Quero ser uma mulher com sabedoria bíblica para a vida prática', 'b0000008-0000-0000-0000-000000000004', 1),
('f0031', 'Quero me aprofundar no caráter de Maria como modelo de fé', 'b0000008-0000-0000-0000-000000000003', 2),
('f0031', 'Quero redescobrir o quanto a vida com Deus é bela e significativa', 'b0000008-0000-0000-0000-000000000005', 3),

-- f0032: rel-deus mulher adulta / coragem
('f0032', 'Quero parar de ter medo e viver uma fé mais ousada', 'b0000008-0000-0000-0000-000000000006', 1),
('f0032', 'Quero ser uma mulher que impacta através da oração', 'b0000008-0000-0000-0000-000000000007', 2),
('f0032', 'Quero ser abençoada e ser uma bênção para quem está ao redor', 'b0000008-0000-0000-0000-000000000001', 3),

-- f0033: ficcao hj / aventura
('f0033', 'Quero ler sobre alguém que deu tudo por uma missão', 'b0000009-0000-0000-0000-000000000005', 1),
('f0033', 'Quero uma história de guerra, sacrifício e fé inabalável', 'b0000009-0000-0000-0000-000000000006', 2),
('f0033', 'Quero ler sobre homens que enfrentaram o impossível por Deus', 'b0000009-0000-0000-0000-000000000007', 3),

-- f0034: ficcao hj / reflexao
('f0034', 'Quero uma história que me mostre como o mal pensa e age', 'b0000009-0000-0000-0000-000000000004', 1),
('f0034', 'Quero uma jornada espiritual que reflita minha própria vida', 'b0000009-0000-0000-0000-000000000008', 2),
('f0034', 'Quero entender como personagens bíblicos pensavam e viviam', 'b0000009-0000-0000-0000-000000000001', 3),

-- f0035: ficcao hj / biografias
('f0035', 'Quero ler sobre alguém que sobreviveu à perseguição pela fé', 'b0000009-0000-0000-0000-000000000003', 1),
('f0035', 'Quero ler sobre homens comuns que Deus usou de forma extraordinária', 'b0000009-0000-0000-0000-000000000002', 2),
('f0035', 'Quero me inspirar em heróis reais da fé cristã', 'b0000009-0000-0000-0000-000000000005', 3),

-- f0036: ficcao hj / classicos
('f0036', 'Quero um clássico profundo que desafie minha mente', 'b0000009-0000-0000-0000-000000000004', 1),
('f0036', 'Quero uma alegoria espiritual que fale da jornada cristã', 'b0000009-0000-0000-0000-000000000008', 2),
('f0036', 'Quero entender quem foram os homens que Jesus escolheu', 'b0000009-0000-0000-0000-000000000002', 3),

-- f0037: apol jovem / academico
('f0037', 'Dizem que ciência e fé cristã são incompatíveis', 'b0000002-0000-0000-0000-000000000005', 1),
('f0037', 'Questionam a existência de Deus com argumentos filosóficos', 'b0000002-0000-0000-0000-000000000001', 2),
('f0037', 'Atacam a Bíblia dizendo que é contraditória e sem sentido', 'b0000002-0000-0000-0000-000000000003', 3),

-- f0038: apol jovem / redes-sociais
('f0038', 'Não sei como responder quando atacam o cristianismo', 'b0000002-0000-0000-0000-000000000012', 1),
('f0038', 'Preciso de argumentos para debates sobre moral e ética', 'b0000011-0000-0000-0000-000000000006', 2),
('f0038', 'Quero entender como responder à cultura sem perder a fé', 'b0000011-0000-0000-0000-000000000005', 3),

-- f0039: apol jovem / mundo-atual
('f0039', 'Questões como aborto e eutanásia me deixam confuso', 'b0000011-0000-0000-0000-000000000004', 1),
('f0039', 'Deus e ciência parecem mundos opostos e não sei conciliar', 'b0000011-0000-0000-0000-000000000001', 2),
('f0039', 'Questiono se o universo pode ter surgido sem um criador', 'b0000011-0000-0000-0000-000000000002', 3),

-- f0040: apol jovem / duvidas
('f0040', 'Sinto que minha geração perdeu a capacidade de raciocinar sobre fé', 'b0000011-0000-0000-0000-000000000003', 1),
('f0040', 'Quero entender quem foi Jesus de verdade antes de qualquer debate', 'b0000011-0000-0000-0000-000000000007', 2),
('f0040', 'Quero aprender o básico sólido do que significa ser cristão', 'b0000011-0000-0000-0000-000000000008', 3),

-- f0041: rel-pureza hj / pureza
('f0041', 'Luto com pornografia e vício sexual e quero me libertar', 'b0000012-0000-0000-0000-000000000003', 1),
('f0041', 'Sei que é errado mas não consigo vencer essa batalha sozinho', 'b0000012-0000-0000-0000-000000000002', 2),
('f0041', 'Caio em ciladas sempre e não entendo como o inimigo age', 'b0000012-0000-0000-0000-000000000009', 3),

-- f0042: rel-pureza hj / relacionamento-confuso
('f0042', 'Não sei se o relacionamento que estou é de Deus ou não', 'b0000012-0000-0000-0000-000000000007', 1),
('f0042', 'Quero entender como namorar, noivar e casar da forma certa', 'b0000012-0000-0000-0000-000000000008', 2),
('f0042', 'Quero aprender a esperar pelo relacionamento certo sem ansiedade', 'b0000012-0000-0000-0000-000000000010', 3),

-- f0043: rel-pureza hj / preparacao
('f0043', 'Quero entender o que Deus pensa sobre sexo e relacionamento', 'b0000012-0000-0000-0000-000000000001', 1),
('f0043', 'Quero aprender a viver com pureza enquanto espero', 'b0000012-0000-0000-0000-000000000004', 2),
('f0043', 'Quero me preparar para um relacionamento com propósito e pureza', 'b0000012-0000-0000-0000-000000000005', 3),

-- f0044: rel-pureza hj / cultura
('f0044', 'A cultura diz que tudo é válido e não sei mais o que é certo', 'b0000012-0000-0000-0000-000000000006', 1),
('f0044', 'Quero uma visão bíblica clara sobre sexo numa cultura distorcida', 'b0000012-0000-0000-0000-000000000001', 2),
('f0044', 'Caio em armadilhas que nem percebia que eram armadilhas', 'b0000012-0000-0000-0000-000000000009', 3),

-- f0045: rel-deus hj / fria
('f0045', 'Nunca aprendi a ter disciplinas espirituais de verdade', 'b0000008-0000-0000-0000-000000000002', 1),
('f0045', 'Quero um mês que sacuda minha fé e mude minha rotina', 'b0000013-0000-0000-0000-000000000008', 2),
('f0045', 'Vivo uma fé superficial e inútil e quero mudar isso', 'b0000013-0000-0000-0000-000000000011', 3),

-- f0046: rel-deus hj / vicios
('f0046', 'Tenho pecados escondidos que ninguém sabe e não consigo largar', 'b0000013-0000-0000-0000-000000000004', 1),
('f0046', 'Percebo que vivo para mim mesmo e meu ego está no centro de tudo', 'b0000013-0000-0000-0000-000000000005', 2),
('f0046', 'Tenho ídolos no coração que ocupam o lugar de Deus sem eu perceber', 'b0000013-0000-0000-0000-000000000006', 3),

-- f0047: rel-deus hj / mente
('f0047', 'Meus pensamentos negativos me controlam e me paralisam', 'b0000013-0000-0000-0000-000000000002', 1),
('f0047', 'Estou num momento escuro e não consigo enxergar saída', 'b0000013-0000-0000-0000-000000000009', 2),
('f0047', 'Quero encontrar uma felicidade real que não dependa das circunstâncias', 'b0000013-0000-0000-0000-000000000003', 3),

-- f0048: rel-deus hj / conhecer-jesus
('f0048', 'Quero ser surpreendido por quem Jesus realmente é', 'b0000013-0000-0000-0000-000000000001', 1),
('f0048', 'Quero entender o coração de Deus através da história do filho pródigo', 'b0000013-0000-0000-0000-000000000007', 2),
('f0048', 'Deus destruiu meus planos e não entendo o que Ele está fazendo', 'b0000013-0000-0000-0000-000000000010', 3),

-- f0049: ficcao mj / romance
('f0049', 'Quero uma história que misture romance e fé de forma bonita', 'b0000010-0000-0000-0000-000000000001', 1),
('f0049', 'Quero uma história leve que me faça sonhar e acreditar', 'b0000010-0000-0000-0000-000000000003', 2),
('f0049', 'Quero uma história envolvente com personagens que me inspiram', 'b0000010-0000-0000-0000-000000000005', 3),

-- f0050: ficcao mj / reflexao
('f0050', 'Quero uma história que me mostre como o mal pensa e age', 'b0000009-0000-0000-0000-000000000004', 1),
('f0050', 'Quero uma jornada espiritual que reflita minha própria vida', 'b0000009-0000-0000-0000-000000000008', 2),
('f0050', 'Quero uma história que misture fé, música e emoção', 'b0000010-0000-0000-0000-000000000002', 3),

-- f0051: ficcao mj / biografias
('f0051', 'Quero ler sobre mulheres comuns que Deus usou de forma extraordinária', 'b0000010-0000-0000-0000-000000000007', 1),
('f0051', 'Quero conhecer mulheres que fizeram história na teologia e na fé', 'b0000010-0000-0000-0000-000000000006', 2),
('f0051', 'Quero me inspirar em personagens que estiveram ao redor de Jesus', 'b0000009-0000-0000-0000-000000000001', 3),

-- f0052: ficcao mj / classicos
('f0052', 'Quero um clássico profundo que desafie minha mente', 'b0000009-0000-0000-0000-000000000004', 1),
('f0052', 'Quero uma alegoria espiritual que fale da jornada cristã', 'b0000009-0000-0000-0000-000000000008', 2),
('f0052', 'Quero uma história emocionante que me marque para sempre', 'b0000010-0000-0000-0000-000000000004', 3),

-- f0053-f0056: apol mulher jovem (mesmo que homem jovem)
('f0053', 'Dizem que ciência e fé cristã são incompatíveis', 'b0000002-0000-0000-0000-000000000005', 1),
('f0053', 'Questionam a existência de Deus com argumentos filosóficos', 'b0000002-0000-0000-0000-000000000001', 2),
('f0053', 'Atacam a Bíblia dizendo que é contraditória e sem sentido', 'b0000002-0000-0000-0000-000000000003', 3),

('f0054', 'Não sei como responder quando atacam o cristianismo', 'b0000002-0000-0000-0000-000000000012', 1),
('f0054', 'Preciso de argumentos para debates sobre moral e ética', 'b0000011-0000-0000-0000-000000000006', 2),
('f0054', 'Quero entender como responder à cultura sem perder a fé', 'b0000011-0000-0000-0000-000000000005', 3),

('f0055', 'Questões como aborto e eutanásia me deixam confusa', 'b0000011-0000-0000-0000-000000000004', 1),
('f0055', 'Deus e ciência parecem mundos opostos e não sei conciliar', 'b0000011-0000-0000-0000-000000000001', 2),
('f0055', 'Questiono se o universo pode ter surgido sem um criador', 'b0000011-0000-0000-0000-000000000002', 3),

('f0056', 'Sinto que minha geração perdeu a capacidade de raciocinar sobre fé', 'b0000011-0000-0000-0000-000000000003', 1),
('f0056', 'Quero entender quem foi Jesus de verdade antes de qualquer debate', 'b0000011-0000-0000-0000-000000000007', 2),
('f0056', 'Quero aprender o básico sólido do que significa ser cristã', 'b0000011-0000-0000-0000-000000000008', 3),

-- f0057-f0060: rel-pureza mulher jovem
('f0057', 'Luto com vício sexual e conteúdo que me prende e quero me libertar', 'b0000012-0000-0000-0000-000000000003', 1),
('f0057', 'Sei que é errado mas não consigo vencer essa batalha sozinha', 'b0000012-0000-0000-0000-000000000002', 2),
('f0057', 'Caio em ciladas sempre e não entendo como o inimigo age', 'b0000012-0000-0000-0000-000000000009', 3),

('f0058', 'Não sei se o relacionamento que estou é de Deus ou não', 'b0000012-0000-0000-0000-000000000007', 1),
('f0058', 'Quero entender como namorar, noivar e casar da forma certa', 'b0000012-0000-0000-0000-000000000008', 2),
('f0058', 'Quero aprender a esperar pelo relacionamento certo sem ansiedade', 'b0000012-0000-0000-0000-000000000010', 3),

('f0059', 'Quero entender o que Deus pensa sobre sexo e relacionamento', 'b0000012-0000-0000-0000-000000000001', 1),
('f0059', 'Quero aprender a viver com pureza enquanto espero', 'b0000012-0000-0000-0000-000000000004', 2),
('f0059', 'Quero me preparar para um relacionamento com propósito e pureza', 'b0000012-0000-0000-0000-000000000005', 3),

('f0060', 'A cultura diz que tudo é válido e não sei mais o que é certo', 'b0000012-0000-0000-0000-000000000006', 1),
('f0060', 'Quero uma visão bíblica clara sobre sexo numa cultura distorcida', 'b0000012-0000-0000-0000-000000000001', 2),
('f0060', 'Caio em armadilhas que nem percebia que eram armadilhas', 'b0000012-0000-0000-0000-000000000009', 3),

-- f0061: rel-deus mj / fria
('f0061', 'Quero aprender a orar de forma poderosa e transformadora', 'b0000008-0000-0000-0000-000000000007', 1),
('f0061', 'Preciso criar hábitos espirituais que realmente funcionem na minha rotina', 'b0000008-0000-0000-0000-000000000002', 2),
('f0061', 'Quero um mês intencional que transforme minha vida espiritual', 'b0000013-0000-0000-0000-000000000008', 3),

-- f0062: rel-deus mj / vicios
('f0062', 'Tenho pecados que ninguém sabe e não consigo me libertar', 'b0000013-0000-0000-0000-000000000004', 1),
('f0062', 'Percebo que vivo para agradar a mim mesma e não a Deus', 'b0000013-0000-0000-0000-000000000005', 2),
('f0062', 'Tenho coisas no coração que ocupam o lugar de Deus sem eu perceber', 'b0000013-0000-0000-0000-000000000006', 3),

-- f0063: rel-deus mj / emocoes
('f0063', 'Meus pensamentos negativos sobre mim mesma me paralisam', 'b0000013-0000-0000-0000-000000000002', 1),
('f0063', 'Estou num momento muito escuro e preciso de esperança', 'b0000013-0000-0000-0000-000000000009', 2),
('f0063', 'Quero encontrar felicidade real que não dependa de como estou me sentindo', 'b0000013-0000-0000-0000-000000000003', 3),

-- f0064: rel-deus mj / conhecer-jesus
('f0064', 'Quero ser surpreendida por quem Jesus realmente é no dia a dia', 'b0000013-0000-0000-0000-000000000001', 1),
('f0064', 'Quero entender o amor do Pai através da história do filho pródigo', 'b0000013-0000-0000-0000-000000000007', 2),
('f0064', 'Quero entender o que aconteceu nas últimas 24 horas de Jesus', 'b0000014-0000-0000-0000-000000000001', 3);
