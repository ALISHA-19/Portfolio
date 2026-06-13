import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const TerminalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>
  </svg>
);

const tagTone = (tag) => {
  const value = tag.toLowerCase();

  // STACK (Tools / Platforms) -> Sapphire
  if (value.includes('python') || value.includes('sql') || value.includes('react') || value.includes('vite') ||
      value.includes('marketo') || value.includes('salesforce') || value.includes('sfdc') || value.includes('figma') ||
      value.includes('monday') || value.includes('workfront') || value.includes('dashboard') || value.includes('crm') ||
      value.includes('llm') || value.includes('knowledge base'))
    return 'tone-sapphire';

  // CORE (Methods / Growth / AI techniques) -> Emerald
  if (value.includes('rag') || value.includes('prompt') || value.includes('analytics') || value.includes('testing') ||
      value.includes('qa') || value.includes('funnel') || value.includes('segmentation') || value.includes('lifecycle') ||
      value.includes('retention') || value.includes('conversion') || value.includes('experiment') || value.includes('metric') ||
      value.includes('evaluation') || value.includes('attribution') || value.includes('kpi') || value.includes('a/b') ||
      value.includes('automation') || value.includes('hygiene') || value.includes('optimization') || value.includes('modeling'))
    return 'tone-emerald';

  // LEAD (Product / Strategy / Soft skills) -> Violet
  if (value.includes('strategy') || value.includes('product') || value.includes('ux') || value.includes('mapping') ||
      value.includes('requirement') || value.includes('stakeholder') || value.includes('management') || value.includes('leadership') ||
      value.includes('collaboration') || value.includes('communication') || value.includes('storytelling') || value.includes('roadmap') ||
      value.includes('discovery') || value.includes('documentation') || value.includes('alignment') || value.includes('partnership') ||
      value.includes('coordination') || value.includes('ownership') || value.includes('agentic') || value.includes('reporting') ||
      value.includes('human-in-the-loop') || value.includes('architecture'))
    return 'tone-violet';

  return 'tone-ivory';
};

const HighlightText = ({ text, highlight }) => {
  if (!highlight.trim()) return <span>{text}</span>;
  const regex = new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);
  return (
    <span>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <span key={i} className="search-highlight">{part}</span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
};

const Experiments = () => {
  const [search, setSearch] = useState('');
  const projects = portfolioData.projects || [];

  const filtered = useMemo(() => {
    const query = search.toLowerCase().trim();
    if (!query) return projects;
    return projects.filter((p) => {
      const haystack = [
        p.title, p.outcome, p.problem, p.impact, p.approach, p.challenge,
        ...(p.highlights || []),
        ...(p.techStack || []),
        ...(p.hardSkills || []),
        ...(p.softSkills || []),
      ].join(' ').toLowerCase();
      return haystack.includes(query);
    });
  }, [projects, search]);

  const summaryStats = [
    { label: 'Case Studies', value: projects.length, color: 'text-white' },
    { label: 'Lifecycle Stages Shipped', value: 5, color: 'text-gold' },
    { label: 'Conversion Lift', value: '22%', color: 'text-emerald-500' },
    { label: 'Years in Product', value: '4+', color: 'text-stone-400' },
  ];

  return (
    <div className="pt-24 pb-48 px-6 bg-[#070B14]">
      <div className="max-w-[1400px] mx-auto">

        {/* Diagnostic Scanline */}
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden opacity-[0.01]">
          <motion.div
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="w-full h-[1px] bg-white shadow-[0_0_20px_rgba(255,255,255,1)]"
          />
        </div>

        {/* Console Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 border-b border-white/[0.04] pb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/40" />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/20" />
              </div>
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-emerald-500/80">PRODUCT_DOSSIER // SELECTED_WORK</p>
            </div>
            <h1 className="text-display text-5xl md:text-9xl font-bold text-white mb-8 tracking-tighter leading-[0.85]">
              Case <span className="premium-text italic">Studies</span>
            </h1>
            <p className="text-stone-400 max-w-2xl text-lg md:text-xl leading-relaxed font-medium">
              Deep dives into the products and programs — from an AI email agent grounded in RAG to growth funnels, marketing automation, and experimentation at scale.
            </p>
          </div>

          <div className="relative max-w-md w-full group">
            <div className="absolute left-5 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-white/[0.02] border border-white/5 text-stone-600 group-focus-within:text-gold transition-all">
              <TerminalIcon />
            </div>
            <input
              type="text"
              placeholder="$ search_work --query"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#0A0F1A] border border-white/10 rounded-2xl py-5 pl-16 pr-8 text-sm font-mono text-white focus:outline-none focus:ring-1 focus:ring-gold/20 focus:border-gold/50 transition-all placeholder:text-stone-700 font-sans"
            />
          </div>
        </motion.div>

        {/* Case study list */}
        <div className="flex flex-col gap-10">
          {filtered.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
              className="research-card group relative overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                boxShadow: '0 24px 60px rgba(0, 0, 0, 0.5)',
                padding: '48px',
              }}
            >
              <div className="premium-card-glow" aria-hidden="true" />
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-gold/40 to-transparent opacity-50 z-20" />

              {/* Header row */}
              <div className="relative z-10 flex flex-wrap items-center gap-4 mb-8">
                <span className="text-[11px] font-mono text-stone-600 tracking-widest">{String(i + 1).padStart(2, '0')}</span>
                <span className="tech-pill tone-gold text-[11px] font-bold uppercase tracking-widest px-4 py-1.5">
                  {project.outcome}
                </span>
                {project.featured && (
                  <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-emerald-500/80">★ Flagship</span>
                )}
              </div>

              <h2 className="research-title group-hover:text-gold transition-colors duration-500" style={{ fontSize: '2rem', marginBottom: '20px' }}>
                <HighlightText text={project.title} highlight={search} />
              </h2>

              <p className="research-abstract italic" style={{ marginBottom: '28px' }}>
                "<HighlightText text={project.problem} highlight={search} />"
              </p>

              {/* Results */}
              {project.results && (
                <div className="project-results-row relative z-10">
                  {project.results.map((r) => (
                    <div key={r.label} className="project-result-stat">
                      <span className="project-result-value">{r.value}</span>
                      <span className="project-result-label">{r.label}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="relative z-10 grid lg:grid-cols-2 gap-10 mt-10">
                <div>
                  <p className="project-meta-label">What it delivered</p>
                  <p className="project-copy"><HighlightText text={project.impact} highlight={search} /></p>
                </div>
                <div>
                  <p className="project-meta-label">Approach</p>
                  <p className="project-copy"><HighlightText text={project.approach} highlight={search} /></p>
                </div>
              </div>

              {/* Challenge */}
              {project.challenge && (
                <div className="project-challenge-block relative z-10 mt-10">
                  <p className="project-challenge-kicker">
                    <span className="project-challenge-icon" aria-hidden="true">◈</span>
                    The challenge
                  </p>
                  <p className="project-challenge-text"><HighlightText text={project.challenge} highlight={search} /></p>
                </div>
              )}

              {/* Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="relative z-10 mt-10">
                  <p className="project-meta-label">Key highlights</p>
                  <div className="project-highlights">
                    {project.highlights.map((line) => (
                      <div key={line} className="project-highlight-line">
                        <span className="project-highlight-dot" aria-hidden="true" />
                        <span><HighlightText text={line} highlight={search} /></span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Stack / Core / Lead */}
              <div className="relative z-10 grid sm:grid-cols-3 gap-8 mt-12 pt-10 border-t border-white/5">
                {[
                  ['STACK', project.techStack],
                  ['CORE', project.hardSkills],
                  ['LEAD', project.softSkills],
                ].map(([label, items]) => (
                  <div key={label}>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-3 flex items-center gap-2">
                      <span className="w-[1px] h-3 bg-stone-600/60" /> {label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {(items || []).map((item) => (
                        <span key={item} className={`tech-pill ${tagTone(item)}`}>
                          <HighlightText text={item} highlight={search} />
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="research-card-line bg-[#38BDF8]" style={{ opacity: 0.3 }} />
            </motion.article>
          ))}

          {filtered.length === 0 && (
            <div className="text-center py-32 border border-white/[0.04] rounded-[2rem]">
              <p className="font-mono text-sm text-stone-500">No case studies match “{search}”.</p>
            </div>
          )}
        </div>

        {/* Summary */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-48 pt-24 border-t border-white/[0.04]"
        >
          <div className="grid lg:grid-cols-3 gap-20">
            <div className="col-span-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold font-mono text-xs">SUM</div>
                <h2 className="text-display text-3xl font-bold text-white tracking-tight">By the numbers</h2>
              </div>
              <p className="text-stone-500 leading-relaxed text-lg">
                A snapshot of outcomes across the work — shipped AI, measurable growth, and 4+ years of product delivery.
              </p>
            </div>

            <div className="col-span-1 lg:col-span-2 grid sm:grid-cols-2 gap-8">
              {summaryStats.map((stat, idx) => (
                <div key={idx} className="p-10 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] flex flex-col justify-between aspect-video">
                  <span className="text-[10px] font-mono text-stone-600 uppercase tracking-widest">{stat.label}</span>
                  <span className={`text-4xl md:text-5xl font-bold tabular-nums ${stat.color}`}>{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Experiments;
