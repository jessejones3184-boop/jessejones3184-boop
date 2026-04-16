import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Avoid crashing the entire application on load
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('⚠️ Missing Supabase environment variables. Auth features will not work until VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set.');
}

// Fallback to a dummy client structure if keys are missing so imports don't crash
export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null as any;
// Types for our database
export interface User {
    id: string;
    email: string;
    name: string;
    website?: string;
    created_at: string;
    updated_at: string;
}

export interface UserDashboard {
    id: string;
    user_id: string;
    goal?: string;
    income?: number;
    clients?: number;
    created_at: string;
    updated_at: string;
}
