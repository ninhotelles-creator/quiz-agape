-- ============================================================
-- QUIZ LIVRARIA ÁGAPE — Schema Supabase
-- Execute no SQL Editor do Supabase
-- ============================================================

-- Extensão para UUIDs
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================================
-- SETTINGS (pixel Meta, configurações gerais)
-- ============================================================
CREATE TABLE IF NOT EXISTS settings (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  key text UNIQUE NOT NULL,
  value text,
  updated_at timestamptz DEFAULT now()
);

-- ============================================================
-- BOOKS (catálogo de livros)
-- ============================================================
CREATE TABLE IF NOT EXISTS books (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  author text NOT NULL,
  cover_url text,
  created_at timestamptz DEFAULT now()
);

-- ============================================================
-- THEMES (etapa 3 — opções por perfil)
-- ============================================================
CREATE TABLE IF NOT EXISTS themes (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  profile text NOT NULL,
  code text NOT NULL,
  label text NOT NULL,
  emoji text,
  verse text,
  verse_reference text,
  step3_question text NOT NULL DEFAULT 'O que melhor descreve sua vida agora?',
  step4_question text NOT NULL,
  order_index int DEFAULT 0,
  UNIQUE(profile, code)
);

-- ============================================================
-- FILTERS (etapa 4 — afunilamento por tema)
-- ============================================================
CREATE TABLE IF NOT EXISTS filters (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  theme_id uuid REFERENCES themes(id) ON DELETE CASCADE NOT NULL,
  code text NOT NULL,
  label text NOT NULL,
  emoji text,
  step5_question text NOT NULL,
  order_index int DEFAULT 0
);

-- ============================================================
-- RESULTS (etapa 5 — sub-afunilamento → livro)
-- ============================================================
CREATE TABLE IF NOT EXISTS results (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  filter_id uuid REFERENCES filters(id) ON DELETE CASCADE NOT NULL,
  label text NOT NULL,
  book_id uuid REFERENCES books(id),
  order_index int DEFAULT 0
);

-- ============================================================
-- CLICK EVENTS (rastreamento WhatsApp)
-- ============================================================
CREATE TABLE IF NOT EXISTS click_events (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  book_id uuid REFERENCES books(id),
  book_title text,
  author text,
  profile text,
  theme_code text,
  created_at timestamptz DEFAULT now()
);

-- ============================================================
-- RLS (Row Level Security)
-- ============================================================
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE books ENABLE ROW LEVEL SECURITY;
ALTER TABLE themes ENABLE ROW LEVEL SECURITY;
ALTER TABLE filters ENABLE ROW LEVEL SECURITY;
ALTER TABLE results ENABLE ROW LEVEL SECURITY;
ALTER TABLE click_events ENABLE ROW LEVEL SECURITY;

-- Leitura pública para quiz
CREATE POLICY "public_read_books" ON books FOR SELECT USING (true);
CREATE POLICY "public_read_themes" ON themes FOR SELECT USING (true);
CREATE POLICY "public_read_filters" ON filters FOR SELECT USING (true);
CREATE POLICY "public_read_results" ON results FOR SELECT USING (true);
CREATE POLICY "public_read_settings" ON settings FOR SELECT USING (true);

-- Insert público para rastreamento
CREATE POLICY "public_insert_clicks" ON click_events FOR INSERT WITH CHECK (true);

-- Service role tem acesso total (usado pelo admin)
CREATE POLICY "service_all_books" ON books USING (auth.role() = 'service_role');
CREATE POLICY "service_all_themes" ON themes USING (auth.role() = 'service_role');
CREATE POLICY "service_all_filters" ON filters USING (auth.role() = 'service_role');
CREATE POLICY "service_all_results" ON results USING (auth.role() = 'service_role');
CREATE POLICY "service_all_settings" ON settings USING (auth.role() = 'service_role');
CREATE POLICY "service_all_clicks" ON click_events USING (auth.role() = 'service_role');

-- ============================================================
-- ÍNDICES
-- ============================================================
CREATE INDEX IF NOT EXISTS idx_themes_profile ON themes(profile);
CREATE INDEX IF NOT EXISTS idx_filters_theme_id ON filters(theme_id);
CREATE INDEX IF NOT EXISTS idx_results_filter_id ON results(filter_id);
CREATE INDEX IF NOT EXISTS idx_click_events_created_at ON click_events(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_click_events_book_id ON click_events(book_id);
