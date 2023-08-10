import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://mmyekqjulpgmcqzuzmvi.supabase.co";

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1teWVrcWp1bHBnbWNxenV6bXZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcxODUxNjQsImV4cCI6MjAwMjc2MTE2NH0.O59aWf_PgUkn9bG9VwfoLeCfyNDb96ZFLo-wl4fdwQI";

const supabaseClient = createClient(supabaseUrl, supabaseKey);

export default supabaseClient;