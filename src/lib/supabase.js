import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

/** Supabase 환경변수가 모두 설정되어 있는지 여부 */
export const isSupabaseReady = Boolean(supabaseUrl && supabaseAnonKey);

/** Supabase 클라이언트 (환경변수가 없으면 null) */
export const supabase = isSupabaseReady
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;
