/// <reference lib="deno.ns" />

export const SUPABASE_URL = 'http://127.0.0.1:54321'
export const ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0'

export const headers = {
  'Authorization': `Bearer ${ANON_KEY}`,
  'Content-Type': 'application/json'
}

export function generateUniqueUsername() {
  return `testuser_${Date.now()}_${Math.floor(Math.random() * 1000)}`
}