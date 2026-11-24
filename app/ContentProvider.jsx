'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { projects, tools, about } from './data';
import { getSupabase } from './supabase';
export const defaults = { projects, skills: tools, certificates: about.certifications };
const Content = createContext(defaults);
export function ContentProvider({ children }) {
  const [content, setContent] = useState(defaults);
  useEffect(() => {
    const db = getSupabase();
    if (!db) return;
    let live = true;
    db.from('portfolio_content').select('content').eq('id', 'main').maybeSingle().then(({ data, error }) => {
      if (!live || error || !data?.content) return;
      const doc = data.content;
      setContent({
        projects: Array.isArray(doc.projects) ? doc.projects : defaults.projects,
        skills: Array.isArray(doc.skills) ? doc.skills : defaults.skills,
        certificates: Array.isArray(doc.certificates) ? doc.certificates : defaults.certificates,
      });
    });
    return () => { live = false; };
  }, []);
  return <Content.Provider value={content}>{children}</Content.Provider>;
}
export const useContent = () => useContext(Content);
