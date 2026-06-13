import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';

const pageMeta = {
  '/': {
    title: 'Alisha Chaudhari | AI Product Manager — GenAI, LLMs & RAG',
    description: 'Alisha Chaudhari is an AI Product Manager shipping agentic AI products grounded in RAG, with 4+ years of growth and lifecycle product management across S&P Global, WNS, and DivineAPI.',
  },
  '/contact': {
    title: 'Contact — Alisha Chaudhari',
    description: 'Get in touch with Alisha Chaudhari for AI Product Manager and Product Manager roles, or to build agentic AI products.',
  },
  '/case-studies': {
    title: 'Case Studies — Alisha Chaudhari',
    description: 'Deep-dive case studies on the AI Email Agent, growth funnels, marketing automation, and experimentation programs by Alisha Chaudhari.',
  },
};

const SEO = () => {
  const location = useLocation();
  const meta = pageMeta[location.pathname] || pageMeta['/'];
  // NOTE: update baseUrl to the deployed domain (placeholder until then).
  const baseUrl = 'https://alishachaudhari.com';
  const canonicalUrl = `${baseUrl}${location.pathname === '/' ? '' : location.pathname}`;
  const keywords = [
    'Alisha Chaudhari',
    'AI Product Manager',
    'Product Manager',
    'GenAI Product Manager',
    'RAG Product Manager',
    'LLM Product Manager',
    'Growth Product Manager',
    'Lifecycle Marketing',
    'B2B SaaS Product',
    'Product Portfolio',
  ].join(', ');
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: portfolioData.name,
    email: portfolioData.email,
    telephone: portfolioData.phone,
    address: portfolioData.location,
    jobTitle: 'AI Product Manager',
    description: meta.description,
    url: baseUrl,
    sameAs: [
      portfolioData.linkedin,
      portfolioData.github,
      portfolioData.portfolio,
    ],
    knowsAbout: [
      'Artificial Intelligence',
      'Generative AI',
      'Retrieval-Augmented Generation (RAG)',
      'Product Management',
      'Growth & Lifecycle Marketing',
      'A/B Testing & Experimentation',
    ],
    hasPart: portfolioData.projects.map((project) => ({
      '@type': 'CreativeWork',
      name: project.title,
      description: project.impact,
      keywords: [...(project.techStack || []), ...(project.hardSkills || [])].join(', '),
    })),
  };

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={portfolioData.name} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Alisha Chaudhari Portfolio" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:image" content={`${baseUrl}/monochromatic-hero.png`} />
      <meta property="og:image:alt" content="Alisha Chaudhari AI product portfolio visual" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={`${baseUrl}/monochromatic-hero.png`} />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
