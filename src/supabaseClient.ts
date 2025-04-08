import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xyktnydhgbxizwccdpdy.supabase.co';
// Using the Anon key for client-side operations as is standard practice.
// The Service Role key should NOT be exposed on the client-side for security reasons.
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5a3RueWRoZ2J4aXp3Y2NkcGR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1NTQ3NTgsImV4cCI6MjA1MTEzMDc1OH0.x7vQ8YSbHqZmGO_DpFYpkR7AkvCfYkvfHNda70ZvKG8';
// const supabaseServiceRoleKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5a3RueWRoZ2J4aXp3Y2NkcGR5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNTU1NDc1OCwiZXhwIjoyMDUxMTMwNzU4fQ.Rt_P4R8MxwO2LROU8D5Om7BRUzKxrMoBwmDtW2157rw'; // Keep this secure and use only server-side if needed.

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
