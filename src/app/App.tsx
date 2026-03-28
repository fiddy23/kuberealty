import {useEffect, useState} from 'react';
import {
  ArrowRight,
  Building2,
  Calendar,
  ChevronUp,
  CheckCircle,
  Home,
  MapPin,
  Shield,
  Tag,
  Users,
} from 'lucide-react';
import {ContactForm} from './components/ContactForm';
import {PageShell} from './components/PageShell';
import {ProjectCard} from './components/ProjectCard';
import {PropertyCard} from './components/PropertyCard';
import {ImageWithFallback} from './components/figma/ImageWithFallback';
import {archivePages, blogPosts, contactInfo, projects, villas} from './data/siteContent';
import {withBase} from './utils/paths';

function SectionTitle({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="text-center mb-14">
      <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#AC835D] font-semibold">
        {eyebrow}
      </p>
      <h2 className="text-4xl md:text-5xl mb-4 font-bold text-[#181D24]">{title}</h2>
      <p className="text-gray-600 text-lg max-w-3xl mx-auto">{body}</p>
    </div>
  );
}

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.7);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
      className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#AC835D] text-white shadow-2xl hover:bg-[#CA9D75] transition"
    >
      <ChevronUp size={22} />
    </button>
  );
}

function scrollToHeroForm() {
  const form = document.getElementById('project-contact-form');
  if (!form) return;
  form.scrollIntoView({behavior: 'smooth', block: 'start'});
}

function HomePage() {
  const features = [
    {
      icon: <Building2 className="text-[#CA9D75]" size={40} />,
      title: 'Thoughtful Development',
      description:
        'Residential and commercial projects designed around comfort, convenience, and long-term value.',
    },
    {
      icon: <Shield className="text-[#CA9D75]" size={40} />,
      title: 'Secure Communities',
      description:
        'Gated environments, managed access, and infrastructure that supports modern family life.',
    },
    {
      icon: <Users className="text-[#CA9D75]" size={40} />,
      title: 'Diaspora Friendly',
      description:
        'A buyer journey shaped for local homeowners, investors, and the diaspora market.',
    },
  ];

  return (
    <PageShell>
      <BackToTopButton />
      <section id="home" className="relative bg-[#181D24]">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')] bg-cover bg-center" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center text-white">
            <div className="mb-6">
              <span className="inline-block border border-[#CA9D75] text-[#CA9D75] px-6 py-2 rounded-full text-sm tracking-wide font-semibold uppercase">
                Building Africa
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl mb-6 max-w-4xl mx-auto leading-tight font-light tracking-wide">
              MY LAND. <br />
              <span className="text-[#CA9D75] font-bold">MY VILLA.</span> <br />
              MY SKY.
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto font-light">
              Kuber Realty is transforming the African real estate landscape with
              world-class residential and commercial developments that combine luxury,
              elegance, and modern living.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={withBase('/kr-projects/')}
                className="bg-[#AC835D] text-white px-10 py-4 rounded-lg hover:bg-[#CA9D75] transition shadow-xl font-medium"
              >
                Explore Our Properties
              </a>
              <a
                href={withBase('/register-interest/')}
                className="border-2 border-[#CA9D75] text-[#CA9D75] px-10 py-4 rounded-lg hover:bg-[#CA9D75]/10 transition font-medium"
              >
                Schedule a Tour
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Signature Villas"
            title="Live inside Bella Vida"
            body="Discover the villa collection referenced across the original Kuber Realty pages, now presented in one place."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {villas.map((villa) => (
              <a key={villa.slug} href={withBase(villa.slug)} className="block">
                <PropertyCard
                  image={villa.image}
                  title={villa.name}
                  location={villa.location}
                  price={villa.price}
                  bedrooms={villa.bedrooms}
                  bathrooms={villa.bathrooms}
                  area={villa.area}
                  status={villa.status}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="KR Projects"
            title="Residential, commercial, and lifestyle destinations"
            body="From Bella Vida to Oxford Towers, these pages carry the Kuber Realty project content into a unified website experience."
          />
          <div className="space-y-16">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                href={project.slug}
                name={project.name}
                tagline={project.tagline}
                description={project.overview[0]}
                location={project.location}
                priceRange={project.priceRange}
                unitTypes={project.unitTypes}
                amenities={project.amenities}
                image={project.image}
                status={project.status}
                completionDate={project.completionDate}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Why Kuber"
            title="Built for families, investors, and the diaspora"
            body="The original Kuber pages consistently point to quality construction, secure ownership, and better day-to-day living."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition text-center border border-gray-100"
              >
                <div className="mb-6 flex justify-center">{feature.icon}</div>
                <h3 className="mb-3 font-bold text-xl text-[#181D24]">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#181D24] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl mb-6 font-bold">Ready to register your interest?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            Talk to the Kuber Realty team about villas, commercial opportunities,
            and upcoming developments.
          </p>
          <a
            href={withBase('/register-interest/')}
            className="inline-flex items-center bg-[#AC835D] text-white px-10 py-4 rounded-lg hover:bg-[#CA9D75] transition shadow-lg font-medium"
          >
            Register Interest
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </section>
    </PageShell>
  );
}

function VillasIndexPage() {
  return (
    <PageShell>
      <BackToTopButton />
      <section className="bg-[#181D24] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.35em] text-[#AC835D] mb-4">Villas</p>
          <h1 className="text-5xl font-bold mb-6">The Bella Vida villa collection</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Explore the M Villa, R Villa, and A Villa pages inspired by the current
            Kuber Realty property catalogue.
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {villas.map((villa) => (
              <a key={villa.slug} href={withBase(villa.slug)} className="block">
                <PropertyCard
                  image={villa.image}
                  title={villa.name}
                  location={villa.location}
                  price={villa.price}
                  bedrooms={villa.bedrooms}
                  bathrooms={villa.bathrooms}
                  area={villa.area}
                  status={villa.status}
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function ProjectsIndexPage() {
  return (
    <PageShell>
      <BackToTopButton />
      <section className="bg-[#181D24] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.35em] text-[#AC835D] mb-4">KR Projects</p>
          <h1 className="text-5xl font-bold mb-6">Residential, commercial, and lifestyle destinations</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Dedicated project pages for Bella Vida, Oxford Towers, Kmart developments,
            Mamobi Pride, and 11th June Club.
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              href={project.slug}
              name={project.name}
              tagline={project.tagline}
              description={project.overview[0]}
              location={project.location}
              priceRange={project.priceRange}
              unitTypes={project.unitTypes}
              amenities={project.amenities}
              image={project.image}
              status={project.status}
              completionDate={project.completionDate}
            />
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function VillaPage({slug}: {slug: string}) {
  const villa = villas.find((item) => item.slug === slug);
  if (!villa) return <NotFoundPage />;

  return (
    <PageShell>
      <BackToTopButton />
      <section className="relative min-h-screen bg-[#181D24] text-white flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{backgroundImage: `url(${villa.image})`}}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117]/95 via-[#181D24]/78 to-[#181D24]/50" />
        <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-28 lg:py-32">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 xl:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <ContactForm pageLabel={villa.name} formId="project-contact-form" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm uppercase tracking-[0.35em] text-[#CA9D75] mb-4">Villa</p>
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold mb-4">{villa.name}</h1>
              <p className="text-2xl text-[#CA9D75] mb-6">{villa.tagline}</p>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mb-8">
                {villa.heroTitle}
              </p>
              <div className="grid sm:grid-cols-3 gap-4 max-w-3xl">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.28em] text-gray-400 mb-2">Location</p>
                  <p className="text-base font-medium text-white">{villa.location}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.28em] text-gray-400 mb-2">Price</p>
                  <p className="text-base font-medium text-white">{villa.price}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.28em] text-gray-400 mb-2">Layout</p>
                  <p className="text-base font-medium text-white">
                    {villa.bedrooms} Bed / {villa.bathrooms} Bath
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.25fr_0.85fr] gap-12 items-start">
          <div>
            <ImageWithFallback src={villa.image} alt={villa.name} className="w-full h-[420px] object-cover rounded-3xl shadow-xl mb-10" />
            <div className="space-y-6">
              {villa.overview.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-8 text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[#181D24] mb-6">Property Snapshot</h2>
            <div className="space-y-4 text-gray-700 mb-8">
              <div className="flex items-center"><MapPin className="mr-3 text-[#AC835D]" size={18} />{villa.location}</div>
              <div className="flex items-center"><Tag className="mr-3 text-[#AC835D]" size={18} />{villa.price}</div>
              <div className="flex items-center"><Home className="mr-3 text-[#AC835D]" size={18} />{villa.bedrooms} bedrooms, {villa.bathrooms} bathrooms</div>
            </div>
            <h3 className="text-lg font-semibold text-[#181D24] mb-4">Highlights</h3>
            <div className="space-y-3 mb-8">
              {villa.highlights.map((highlight) => (
                <div key={highlight} className="flex items-start text-gray-700">
                  <CheckCircle className="mr-3 mt-1 text-[#CA9D75] flex-shrink-0" size={18} />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={scrollToHeroForm}
              className="inline-flex items-center justify-center w-full bg-[#AC835D] text-white px-6 py-4 rounded-xl hover:bg-[#CA9D75] transition font-medium"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function ProjectPage({slug}: {slug: string}) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <NotFoundPage />;

  return (
    <PageShell>
      <BackToTopButton />
      <section className="relative min-h-screen bg-[#181D24] text-white flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{backgroundImage: `url(${project.image})`}}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117]/95 via-[#181D24]/78 to-[#181D24]/50" />
        <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-28 lg:py-32">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 xl:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <ContactForm pageLabel={project.name} formId="project-contact-form" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm uppercase tracking-[0.35em] text-[#CA9D75] mb-4">Development</p>
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold mb-4">{project.name}</h1>
              <p className="text-2xl text-[#CA9D75] mb-6">{project.tagline}</p>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mb-8">
                {project.overview[0]}
              </p>
              <div className="grid sm:grid-cols-3 gap-4 max-w-3xl">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.28em] text-gray-400 mb-2">Location</p>
                  <p className="text-base font-medium text-white">{project.location}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.28em] text-gray-400 mb-2">Pricing</p>
                  <p className="text-base font-medium text-white">{project.priceRange}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.28em] text-gray-400 mb-2">Completion</p>
                  <p className="text-base font-medium text-white">{project.completionDate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
          <div>
            <ImageWithFallback src={project.image} alt={project.name} className="w-full h-[420px] object-cover rounded-3xl shadow-xl mb-10" />
            <div className="space-y-6">
              {project.overview.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-8 text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[#181D24] mb-6">Development Snapshot</h2>
            <div className="space-y-4 text-gray-700 mb-8">
              <div className="flex items-center"><MapPin className="mr-3 text-[#AC835D]" size={18} />{project.location}</div>
              <div className="flex items-center"><Tag className="mr-3 text-[#AC835D]" size={18} />{project.priceRange}</div>
              <div className="flex items-center"><Calendar className="mr-3 text-[#AC835D]" size={18} />{project.completionDate}</div>
            </div>
            <h3 className="text-lg font-semibold text-[#181D24] mb-4">Amenities</h3>
            <div className="space-y-3 mb-8">
              {project.amenities.map((amenity) => (
                <div key={amenity} className="flex items-start text-gray-700">
                  <CheckCircle className="mr-3 mt-1 text-[#CA9D75] flex-shrink-0" size={18} />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
            <h3 className="text-lg font-semibold text-[#181D24] mb-4">Landmarks</h3>
            <div className="space-y-3 mb-8">
              {project.landmarks.map((landmark) => (
                <div key={landmark} className="flex items-start text-gray-700">
                  <MapPin className="mr-3 mt-1 text-[#AC835D] flex-shrink-0" size={18} />
                  <span>{landmark}</span>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={scrollToHeroForm}
              className="inline-flex items-center justify-center w-full bg-[#AC835D] text-white px-6 py-4 rounded-xl hover:bg-[#CA9D75] transition font-medium"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function BlogIndexPage({path}: {path: keyof typeof archivePages}) {
  const archive = archivePages[path];

  return (
    <PageShell>
      <section className="bg-[#181D24] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.35em] text-[#AC835D] mb-4">Archive</p>
          <h1 className="text-5xl font-bold mb-6">{archive.title}</h1>
          <p className="text-xl text-gray-300 max-w-3xl">{archive.intro}</p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {archive.posts.map((post) => (
            <article key={post.slug} className="border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition">
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                <span>{post.date}</span>
                <span>By {post.author}</span>
                <span>{post.category}</span>
              </div>
              <h2 className="text-3xl font-bold text-[#181D24] mb-4">
              <a href={withBase(post.slug)}>{post.title}</a>
              </h2>
              <p className="text-lg text-gray-600 mb-6">{post.excerpt}</p>
              <a href={withBase(post.slug)} className="inline-flex items-center text-[#AC835D] font-medium hover:text-[#CA9D75]">
                Read more
                <ArrowRight size={16} className="ml-2" />
              </a>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function BlogPostPage({slug}: {slug: string}) {
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return <NotFoundPage />;

  return (
    <PageShell>
      <section className="bg-[#181D24] text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.35em] text-[#AC835D] mb-4">{post.category}</p>
          <h1 className="text-5xl font-bold mb-6">{post.title}</h1>
          <div className="flex flex-wrap gap-4 text-gray-300">
            <span>{post.date}</span>
            <span>By {post.author}</span>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-lg leading-8 text-gray-700">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {post.tags.map((tag) => (
              <a
                key={tag}
                href={withBase(`/tag/${tag}/`)}
                className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
              >
                #{tag}
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function RegisterInterestPage() {
  return (
    <PageShell>
      <BackToTopButton />
      <section className="bg-[#181D24] text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#AC835D] mb-4">Register Interest</p>
          <h1 className="text-5xl font-bold mb-6">Tell us what you’re looking for</h1>
          <p className="text-xl text-gray-300">
            Register your interest in a villa, commercial space, or upcoming Kuber Realty development.
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <form className="bg-gray-50 border border-gray-200 rounded-3xl p-8 shadow-lg space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <label className="block">
                <span className="block text-sm font-medium text-gray-700 mb-2">Full name</span>
                <input className="w-full rounded-xl border border-gray-300 px-4 py-3" placeholder="Your full name" />
              </label>
              <label className="block">
                <span className="block text-sm font-medium text-gray-700 mb-2">Email address</span>
                <input className="w-full rounded-xl border border-gray-300 px-4 py-3" placeholder="you@example.com" />
              </label>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <label className="block">
                <span className="block text-sm font-medium text-gray-700 mb-2">Phone number</span>
                <input className="w-full rounded-xl border border-gray-300 px-4 py-3" placeholder={contactInfo.phone} />
              </label>
              <label className="block">
                <span className="block text-sm font-medium text-gray-700 mb-2">Interest</span>
                <select className="w-full rounded-xl border border-gray-300 px-4 py-3">
                  <option>Villa</option>
                  <option>Commercial Property</option>
                  <option>Project Update</option>
                  <option>Site Visit</option>
                </select>
              </label>
            </div>
            <label className="block">
              <span className="block text-sm font-medium text-gray-700 mb-2">Message</span>
              <textarea className="w-full rounded-xl border border-gray-300 px-4 py-3 min-h-36" placeholder="Tell us which property or project you are interested in." />
            </label>
            <button className="w-full bg-[#AC835D] text-white px-6 py-4 rounded-xl hover:bg-[#CA9D75] transition font-medium">
              Submit Interest
            </button>
            <div className="text-sm text-gray-500 space-y-2">
              <p>{contactInfo.address}</p>
              <p>{contactInfo.email}</p>
            </div>
          </form>
        </div>
      </section>
    </PageShell>
  );
}

function NotFoundPage() {
  return (
    <PageShell>
      <BackToTopButton />
      <section className="py-32 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.35em] text-[#AC835D] mb-4">Page not found</p>
          <h1 className="text-5xl font-bold text-[#181D24] mb-6">This page is not in the Kuber Realty sitemap yet.</h1>
          <a href={withBase('/')} className="inline-flex items-center bg-[#AC835D] text-white px-8 py-4 rounded-xl hover:bg-[#CA9D75] transition font-medium">
            Back to homepage
          </a>
        </div>
      </section>
    </PageShell>
  );
}

export default function App() {
  const basePath =
    import.meta.env.BASE_URL === '/'
      ? ''
      : import.meta.env.BASE_URL.replace(/\/$/, '');
  const rawPath = window.location.pathname.startsWith(basePath)
    ? window.location.pathname.slice(basePath.length) || '/'
    : window.location.pathname;
  const path = rawPath.endsWith('/') ? rawPath : `${rawPath}/`;

  if (path === '/') return <HomePage />;
  if (path === '/villas/') return <VillasIndexPage />;
  if (path === '/kr-projects/') return <ProjectsIndexPage />;
  if (path in archivePages) return <BlogIndexPage path={path as keyof typeof archivePages} />;
  if (path === '/register-interest/') return <RegisterInterestPage />;
  if (villas.some((villa) => villa.slug === path)) return <VillaPage slug={path} />;
  if (projects.some((project) => project.slug === path)) return <ProjectPage slug={path} />;
  if (blogPosts.some((post) => post.slug === path)) return <BlogPostPage slug={path} />;

  return <NotFoundPage />;
}
