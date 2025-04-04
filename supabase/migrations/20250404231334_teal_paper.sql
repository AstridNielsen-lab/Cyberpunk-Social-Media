/*
  # Add more engaging posts

  1. Changes
    - Add 10 new posts to excite users
    - Posts include a mix of text and images
    - Timestamps are staggered for natural timeline flow
*/

INSERT INTO posts (content, image_url, created_at)
VALUES
  ('Mergulhe no ciberespaço conosco! 🌊 A revolução digital começa aqui. #CyberRevolution', 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200', NOW() - INTERVAL '2.5 hours'),
  
  ('Seu pensamento é código, sua expressão é arte. Liberte sua mente! 🧠 #DigitalArt', 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200', NOW() - INTERVAL '2.2 hours'),
  
  ('Navegue pelos fluxos de dados e descubra novos horizontes digitais ⚡ #DataFlow', NULL, NOW() - INTERVAL '1.8 hours'),
  
  ('Aqui, cada pixel conta uma história. Qual será a sua? 📱 #DigitalStories', 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1200', NOW() - INTERVAL '1.5 hours'),
  
  ('Transforme pensamentos em realidade digital. O futuro é agora! 🚀 #FutureIsNow', NULL, NOW() - INTERVAL '1.2 hours'),
  
  ('Entre na matrix do seu próprio microcosmo. Você controla os códigos! 💻 #YourMatrix', 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200', NOW() - INTERVAL '50 minutes'),
  
  ('Sua criatividade não tem limites no universo digital. Explore! ✨ #NoLimits', 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200', NOW() - INTERVAL '35 minutes'),
  
  ('Conecte-se ao fluxo infinito de ideias. Seu microcosmo espera! 🌐 #InfiniteIdeas', NULL, NOW() - INTERVAL '20 minutes'),
  
  ('Arte digital em movimento. Cada post é uma obra-prima! 🎨 #DigitalMasterpiece', 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1200', NOW() - INTERVAL '10 minutes'),
  
  ('Seja parte da revolução digital. Seu microcosmo, sua voz! 🗣️ #DigitalRevolution', NULL, NOW() - INTERVAL '5 minutes');