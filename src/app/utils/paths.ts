export function withBase(path: string) {
  const base =
    import.meta.env.BASE_URL === '/'
      ? ''
      : import.meta.env.BASE_URL.replace(/\/$/, '');
  const normalized = path.startsWith('/') ? path : `/${path}`;

  return `${base}${normalized}` || '/';
}
