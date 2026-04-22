export type Profile = "homem-adulto" | "mulher-adulta" | "homem-jovem" | "mulher-jovem";
export type AgeGroup = "adulto" | "jovem";
export type Gender = "homem" | "mulher";

export interface Book {
  id: string;
  title: string;
  author: string;
  cover_url: string | null;
}

export interface Theme {
  id: string;
  profile: string;
  code: string;
  label: string;
  emoji: string | null;
  verse: string | null;
  verse_reference: string | null;
  step3_question: string;
  step4_question: string;
  order_index: number;
}

export interface Filter {
  id: string;
  theme_id: string;
  code: string;
  label: string;
  emoji: string | null;
  step5_question: string;
  order_index: number;
}

export interface Result {
  id: string;
  filter_id: string;
  label: string;
  book_id: string;
  order_index: number;
  book?: Book;
}

export interface ClickEvent {
  id: string;
  book_id: string | null;
  book_title: string | null;
  author: string | null;
  profile: string | null;
  theme_code: string | null;
  created_at: string;
}

export interface Setting {
  id: string;
  key: string;
  value: string | null;
  updated_at: string;
}

// Use a simple generic Database type that avoids the strict 'never' issues
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Database = any;
