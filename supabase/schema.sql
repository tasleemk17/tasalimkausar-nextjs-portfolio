-- Run in your own portfolio project's SQL editor. No credentials belong in this file.
create table if not exists public.portfolio_admins (
  user_id uuid primary key references auth.users(id) on delete cascade
);
alter table public.portfolio_admins enable row level security;
create policy "Owner may check own access" on public.portfolio_admins
  for select to authenticated using (user_id = auth.uid());
-- No client insert/update policy. Add the confirmed owner UUID from Auth users:
-- insert into public.portfolio_admins (user_id) values ('OWNER_AUTH_USER_UUID');
create table if not exists public.portfolio_content (
  id text primary key check (id = 'main'),
  content jsonb not null,
  updated_at timestamptz not null default now()
);
alter table public.portfolio_content enable row level security;
create policy "Visitors read portfolio" on public.portfolio_content for select using (true);
create policy "Only owner edits portfolio" on public.portfolio_content for all to authenticated
  using (exists (select 1 from public.portfolio_admins where user_id = auth.uid()))
  with check (exists (select 1 from public.portfolio_admins where user_id = auth.uid()));
-- Public bucket is ONLY for media intentionally shown in the public portfolio.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('portfolio-media', 'portfolio-media', true, 10485760,
  array['image/jpeg','image/png','image/webp','application/pdf']) on conflict (id) do nothing;
create policy "Owner uploads portfolio media" on storage.objects for insert to authenticated
  with check (bucket_id = 'portfolio-media' and exists
    (select 1 from public.portfolio_admins where user_id = auth.uid()));
create policy "Owner deletes portfolio media" on storage.objects for delete to authenticated
  using (bucket_id = 'portfolio-media' and exists
    (select 1 from public.portfolio_admins where user_id = auth.uid()));

-- Explicit API grants. RLS remains the write boundary.
grant select on public.portfolio_content to anon, authenticated;
grant insert, update, delete on public.portfolio_content to authenticated;
grant select on public.portfolio_admins to authenticated;

-- Owner object lookup is needed by the storage delete API.
create policy "Owner reads media records" on storage.objects for select to authenticated
  using (bucket_id = 'portfolio-media' and exists
    (select 1 from public.portfolio_admins where user_id = auth.uid()));
