'use client';
import { useEffect, useState } from 'react';
import { getSupabase } from '../supabase';
import { defaults } from '../ContentProvider';
const blankProject = { name: '', category: 'Full Stack', description: '', image: '', alt: '', stack: [], live: '', note: '', gallery: [] };
const blankCertificate = { title: '', description: '', file: '' };
const input = 'w-full rounded-xl border border-white/15 bg-[#101025] p-3 text-sm text-white outline-none focus:border-indigo-400';
const button = 'rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white disabled:opacity-40';
export default function Admin() {
  const [db] = useState(getSupabase);
  const [session, setSession] = useState(null);
  const [owner, setOwner] = useState(false);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [doc, setDoc] = useState(defaults);
  const [tab, setTab] = useState('projects');
  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    if (!db) { setLoading(false); return; }
    async function load(s) {
      setSession(s); setOwner(false);
      if (!s) { setLoading(false); return; }
      const access = await db.from('portfolio_admins').select('user_id').eq('user_id', s.user.id).maybeSingle();
      if (access.error || !access.data) { setStatus('This account has no editing access. Contact the site owner.'); setLoading(false); return; }
      setOwner(true);
      const result = await db.from('portfolio_content').select('content').eq('id', 'main').maybeSingle();
      if (result.error) setStatus(result.error.message);
      else if (result.data?.content) setDoc({ ...defaults, ...result.data.content });
      setLoading(false);
    }
    db.auth.getSession().then(({ data }) => load(data.session));
    const { data } = db.auth.onAuthStateChange((_event, s) => { setTimeout(() => load(s), 0); });
    return () => data.subscription.unsubscribe();
  }, [db]);
  async function signIn(e) {
    e.preventDefault(); setBusy(true); setStatus('');
    const { error } = await db.auth.signInWithPassword({ email, password });
    setPassword(''); if (error) setStatus(error.message); setBusy(false);
  }
  function change(i, key, value) {
    setDoc(prev => ({ ...prev, [tab]: prev[tab].map((item, n) => n === i ? { ...item, [key]: value } : item) }));
  }
  function remove(i) {
    if (window.confirm('Remove this item? Save changes to apply it to the portfolio.')) setDoc(prev => ({ ...prev, [tab]: prev[tab].filter((_, n) => n !== i) }));
  }
  function validUrl(v) { try { return new URL(v).protocol === 'https:'; } catch { return false; } }
  function validAsset(v) { return v?.startsWith('/assets/') || validUrl(v); }
  async function save() {
    setStatus('');
    if (doc.projects.some(p => !p.name.trim() || !validUrl(p.live) || !validAsset(p.image))) { setStatus('Each project needs a name, an HTTPS live link and an image.'); return; }
    if (doc.projects.some(p => (p.gallery || []).some(g => !validAsset(typeof g === 'string' ? g : g.src)))) { setStatus('Use an uploaded image link or HTTPS link for each gallery image.'); return; }
    if (doc.certificates.some(c => !c.title.trim() || !validAsset(c.file))) { setStatus('Each certificate needs a title and an uploaded PDF link.'); return; }
    setBusy(true);
    const { error } = await db.from('portfolio_content').upsert({ id: 'main', content: { ...doc, skills: [...new Set(doc.skills.map(s => s.trim()).filter(Boolean))] }, updated_at: new Date().toISOString() });
    setStatus(error ? error.message : 'Saved. Refresh the portfolio to see your changes.'); setBusy(false);
  }
  async function upload(e, i, key) {
    const file = e.target.files?.[0]; if (!file) return;
    const allowed = key === 'file' ? ['application/pdf'] : ['image/jpeg','image/png','image/webp'];
    if (!allowed.includes(file.type) || file.size > 10 * 1024 * 1024) { setStatus('Choose a supported file under 10 MB.'); return; }
    setBusy(true); setStatus('Uploading...');
    const ext = file.type === 'application/pdf' ? 'pdf' : file.type.split('/')[1];
    const path = `${session.user.id}/${crypto.randomUUID()}.${ext}`;
    const { error } = await db.storage.from('portfolio-media').upload(path, file, { upsert: false, contentType: file.type });
    if (error) setStatus(error.message);
    else { const { data } = db.storage.from('portfolio-media').getPublicUrl(path); if (key === 'gallery') { setDoc(prev => ({ ...prev, projects: prev.projects.map((p,n) => n === i ? { ...p, gallery: [...(p.gallery || []), { src: data.publicUrl, caption: '' }] } : p) })); } else change(i, key, data.publicUrl); setStatus('Uploaded. Save changes to use this file in the portfolio.'); }
    setBusy(false);
  }
  return <section className="mx-auto min-h-[65vh] max-w-5xl px-6 py-16">
    <div className="mb-8 flex flex-wrap items-start justify-between gap-4"><div><p className="text-xs tracking-[.2em] text-indigo-300">OWNER WORKSPACE</p><h1 className="mt-3 text-4xl font-bold text-white">Portfolio Admin</h1><p className="mt-3 text-sm text-slate-400">Manage projects, skills and certificates without editing code.</p></div>{session && <button className={button} onClick={() => db.auth.signOut()}>Sign out</button>}</div>
    {!db ? <div className="rounded-2xl border border-amber-400/30 bg-amber-400/5 p-6"><h2 className="text-xl font-semibold text-white">Connection setup in progress</h2><p className="mt-3 text-sm leading-7 text-slate-300">The admin panel is prepared, but this build has no Supabase connection yet. Editing stays locked until the owner account, database and access rules are set up. The public portfolio still uses the bundled content.</p></div>
    : loading ? <p>Checking owner access...</p> : !session ? <form onSubmit={signIn} className="max-w-md space-y-5 rounded-2xl border border-white/10 bg-white/5 p-7"><h2 className="text-xl font-semibold">Owner sign-in</h2><label className="block text-sm">Email<input className={input + ' mt-2'} type="email" autoComplete="username" required value={email} onChange={e => setEmail(e.target.value)} /></label><label className="block text-sm">Password<input className={input + ' mt-2'} type="password" autoComplete="current-password" required value={password} onChange={e => setPassword(e.target.value)} /></label><button className={button} disabled={busy}>Sign in</button><p className="text-xs text-slate-400">Owner accounts only. Public registration is not available.</p></form>
    : owner && <><div className="mb-6 flex flex-wrap gap-3">{['projects','skills','certificates'].map(t => <button key={t} onClick={() => setTab(t)} className={button + (tab === t ? '' : ' bg-white/10')}>{t[0].toUpperCase() + t.slice(1)}</button>)}</div>
    <p className="mb-5 rounded-xl border border-white/10 p-4 text-xs leading-6 text-slate-400">Uploaded files are viewable by anyone who has their link. Upload only project screenshots and certificates you want in your portfolio. Hide names, personal activity and private IDs first. Keep originals on your computer.</p>
    {tab === 'skills' ? <label className="block">Skills, one per line<textarea rows={14} className={input + ' mt-3'} value={doc.skills.join('\n')} onChange={e => setDoc({ ...doc, skills: e.target.value.split('\n') })} /><span className="text-xs text-slate-400">Only include skills you have used and can explain.</span></label> : <div className="space-y-6">{doc[tab].map((item, i) => <article key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6"><div className="mb-5 flex justify-between gap-4"><h2 className="font-semibold">{item.name || item.title || `New ${tab === 'projects' ? 'project' : 'certificate'}`}</h2><button className="text-sm text-rose-300" onClick={() => remove(i)}>Remove</button></div><div className="grid gap-5 md:grid-cols-2">{(tab === 'projects' ? ['name','category','live','description','stack','image','alt','note'] : ['title','description','file']).map(key => <label className={'block text-sm text-slate-300 ' + (key === 'description' ? 'md:col-span-2' : '')} key={key}>{key === 'stack' ? 'Technologies (comma separated)' : key[0].toUpperCase() + key.slice(1)}{key === 'description' ? <textarea rows={3} className={input + ' mt-2'} value={item[key]} onChange={e => change(i,key,e.target.value)} /> : <input className={input + ' mt-2'} value={key === 'stack' ? item.stack.join(', ') : item[key] || ''} onChange={e => change(i,key,key === 'stack' ? e.target.value.split(',').map(s => s.trim()) : e.target.value)} />}</label>)}</div><label className="mt-5 block text-sm text-indigo-300">Upload {tab === 'projects' ? 'project image (JPG, PNG or WebP)' : 'certificate PDF'}<input type="file" accept={tab === 'projects' ? 'image/jpeg,image/png,image/webp' : 'application/pdf'} className="mt-2 block w-full text-sm" disabled={busy} onChange={e => upload(e,i,tab === 'projects' ? 'image' : 'file')} /></label>{tab === 'projects' && <div className="mt-5"><label className="block text-sm text-slate-300">Gallery images, one per line: image link | caption<textarea rows={4} className={input + ' mt-2'} value={(item.gallery || []).map(g => typeof g === 'string' ? g : `${g.src} | ${g.caption || ''}`).join('\n')} onChange={e => change(i,'gallery',e.target.value.split('\n').filter(v => v.trim()).map(v => { const [src,...caption] = v.split('|'); return { src: src.trim(), caption: caption.join('|').trim() }; }))} /></label><label className="mt-3 block text-sm text-indigo-300">Add gallery image<input type="file" accept="image/jpeg,image/png,image/webp" disabled={busy} className="mt-2 block w-full text-sm" onChange={e => upload(e,i,'gallery')} /></label><p className="mt-2 text-xs text-slate-400">An empty gallery uses the main image. Remove a line to remove it from the gallery, then save.</p></div>}{tab === 'projects' && item.image && <img className="mt-5 max-h-40 rounded-lg object-contain" src={item.image} alt={item.alt || 'Project image preview'} />}</article>)}<button className={button + ' bg-white/10'} onClick={() => setDoc(prev => ({ ...prev, [tab]: [...prev[tab], tab === 'projects' ? { ...blankProject } : { ...blankCertificate }] }))}>Add {tab === 'projects' ? 'project' : 'certificate'}</button></div>}
    <div className="sticky bottom-4 mt-8 flex flex-wrap items-center gap-4 rounded-2xl border border-white/15 bg-[#111126]/95 p-5 backdrop-blur"><button className={button} disabled={busy} onClick={save}>{busy ? 'Working...' : 'Save changes'}</button><a href="/projects" target="_blank" rel="noopener noreferrer" className="text-sm text-indigo-300">View portfolio</a><span className="text-xs text-slate-400">Changes stay on this page until saved.</span></div></>}
    {status && <p role="status" className="mt-6 rounded-xl border border-indigo-400/25 bg-indigo-400/10 p-4 text-sm text-indigo-100">{status}</p>}
  </section>;
}
