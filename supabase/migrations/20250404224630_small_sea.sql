/*
  # Add sample posts

  1. Changes
    - Insert 10 sample posts to demonstrate the timeline
*/

INSERT INTO posts (content, image_url, created_at)
VALUES
  ('Bem-vindos ao futuro da expressão digital! 🌐 Aqui seu microcosmo ganha vida. #NovoHorizonte', 'https://images.unsplash.com/photo-1515630278258-407f66498911?q=80&w=1200', NOW() - INTERVAL '2 hours'),
  
  ('Cada post é uma janela para um universo único. Compartilhe sua realidade! ✨ #Microcosmo', 'https://images.unsplash.com/photo-1518544801976-3e159e50e5bb?q=80&w=1200', NOW() - INTERVAL '1.5 hours'),
  
  ('A matrix está viva e pulsa através de nossas conexões digitais. Você sente? 🖥️ #MatrixVibe', NULL, NOW() - INTERVAL '1 hour'),
  
  ('Arte digital, pensamentos binários, existência quântica. Este é nosso playground! 🎨', 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=1200', NOW() - INTERVAL '45 minutes'),
  
  ('Seu microcosmo é único. Deixe sua marca no ciberespaço! 💫 #ExpressãoDigital', NULL, NOW() - INTERVAL '30 minutes'),
  
  ('Na fronteira entre real e virtual, criamos nossa própria narrativa. Qual é a sua história? 🌌', 'https://images.unsplash.com/photo-1502189562704-87e622a34c85?q=80&w=1200', NOW() - INTERVAL '25 minutes'),
  
  ('Códigos, pixels e emoções se misturam aqui. Bem-vindo ao seu espaço! 🚀', NULL, NOW() - INTERVAL '20 minutes'),
  
  ('Cada post é uma pegada digital na eternidade do ciberespaço. Deixe sua marca! ⚡', 'https://images.unsplash.com/photo-1504192010706-dd7f569ee2be?q=80&w=1200', NOW() - INTERVAL '15 minutes'),
  
  ('Manipule, crie, transforme. Seu microcosmo, suas regras! 🎮 #CyberpunkVibes', NULL, NOW() - INTERVAL '10 minutes'),
  
  ('O futuro é agora, e você é parte dele. Vamos construir juntos! 🌟 #Manipulations', 'https://images.unsplash.com/photo-1507729105591-77faf8189df4?q=80&w=1200', NOW() - INTERVAL '5 minutes');