import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';

const actualites = [
  {
    id: "candidatures-2026",
    title: "Lancement du 2e Appel à candidatures",
    category: "Candidature",
    date: "2026-2027",
    image: "/news_1.jpg",
    content: "L'École Doctorale des Sciences Exactes et Appliquées (ED-SEA) a le plaisir d'annoncer l'ouverture officielle de la campagne de recrutement pour l'année académique 2026-2027 (2e appel). Cette campagne vise à sélectionner les meilleurs talents désireux de poursuivre des recherches pointues dans nos différents domaines d'excellence (Mathématiques, Chimie, Physique, Océanographie). Le processus est hautement sélectif et basé sur le mérite, conformément aux exigences internationales.",
    keyDates: [
      { label: "Ouverture des dépôts", value: "06 Juillet 2026" },
      { label: "Clôture rigoureuse", value: "28 Septembre 2026" },
      { label: "Sessions d'étude (CUCA)", value: "À partir du 05 Octobre 2026" }
    ],
    pdfLink: "/pdfs/appel_candidature.pdf"
  },
  {
    id: "soutenances-juin",
    title: "Programme des Soutenances (Juin)",
    category: "Académique",
    date: "12 Juin 2026",
    image: "/news_2.jpg",
    content: "Les soutenances de thèses publiques pour les départements de Chimie (FDCA) et de Mathématiques (FDSM) approchent à grands pas. Ce moment fort de la vie académique marque l'aboutissement de plusieurs années de recherche assidue pour nos doctorants, qui présenteront leurs découvertes devant des jurys composés d'experts nationaux et internationaux. Le grand public, ainsi que toute la communauté universitaire, sont cordialement invités à assister à ces présentations qui se tiendront dans les grands amphithéâtres du campus central.",
    keyDates: [
      { label: "Début des soutenances", value: "15 Juin 2026" },
      { label: "Fin des sessions", value: "30 Juin 2026" },
      { label: "Proclamation des résultats", value: "À l'issue de chaque soutenance" }
    ],
    pdfLink: "/pdfs/calendrier.pdf"
  },
  {
    id: "colloque-cipma",
    title: "Colloque International du CIPMA",
    category: "Recherche",
    date: "5 Mai 2026",
    image: "/news_3.jpg",
    content: "La Chaire Internationale en Physique Mathématique et Applications (CIPMA) organise son grand colloque annuel réunissant des experts mondiaux, des chercheurs africains et des doctorants autour des thématiques cruciales de l'Océanographie Physique et des changements climatiques. Cet espace d'échange scientifique de haut niveau vise à renforcer les collaborations Sud-Sud et Nord-Sud pour le développement de solutions durables et innovantes en Afrique de l'Ouest face aux défis environnementaux majeurs.",
    keyDates: [
      { label: "Ouverture du colloque", value: "10 Mai 2026" },
      { label: "Sessions plénières", value: "11 et 12 Mai 2026" },
      { label: "Clôture et remise des prix", value: "13 Mai 2026" }
    ],
    pdfLink: "/pdfs/profil_cipma.pdf"
  }
];

export default async function ActualiteDetailPage({ params }: { params: any }) {
  const resolvedParams = await Promise.resolve(params);
  const news = actualites.find(a => a.id === resolvedParams.id);

  if (!news) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow">
        {/* HERO BANNER */}
        <section className="relative h-96 bg-cover bg-center flex flex-col justify-end" style={{ backgroundImage: `url(${news.image})` }}>
          <div className="absolute inset-0 bg-gradient-to-t from-[#162534] via-[#162534]/70 to-transparent"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12">
            <Link href="/#actualites" className="text-gray-300 hover:text-white mb-6 inline-flex items-center gap-2 font-medium text-sm transition">
              <span>←</span> Retour aux actualités
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#006900] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {news.category}
              </span>
              <span className="text-gray-300 font-medium text-sm">
                {news.date}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-md">
              {news.title}
            </h1>
          </div>
        </section>

        {/* CONTENU PRINCIPAL */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
              
              {/* Colonne Gauche: Texte */}
              <div className="md:col-span-2 space-y-8">
                <div className="prose prose-lg text-gray-700 leading-relaxed font-medium">
                  <p>{news.content}</p>
                </div>
                
                {/* Section Document */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-red-50 text-red-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9h1.5m1.5 0H15m-1.5 3H15m-6 3h6" /></svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#162534]">Document officiel</h3>
                      <p className="text-sm text-gray-500">Consultez ou téléchargez le fichier PDF pour tous les détails.</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href={news.pdfLink} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#162534] hover:bg-[#0f1923] text-white font-bold py-3 px-6 rounded-lg text-center transition flex items-center justify-center gap-2 shadow-md">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                      Aperçu du PDF
                    </a>
                    <a href={news.pdfLink} download className="flex-1 bg-white hover:bg-gray-50 text-[#162534] border border-gray-200 font-bold py-3 px-6 rounded-lg text-center transition flex items-center justify-center gap-2 shadow-sm">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                      Télécharger
                    </a>
                  </div>
                </div>
              </div>

              {/* Colonne Droite: Dates Clés */}
              <div className="md:col-span-1">
                <div className="bg-[#162534] rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
                  <div className="absolute right-0 top-0 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
                  <h3 className="text-lg font-bold mb-6 text-[#006900] uppercase tracking-wider flex items-center gap-2 relative z-10">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    Dates clés
                  </h3>
                  <div className="space-y-6 relative z-10">
                    {news.keyDates.map((dateItem, index) => (
                      <div key={index} className="relative pl-4 border-l border-gray-600">
                        <div className="absolute w-2 h-2 bg-[#006900] rounded-full -left-[4.5px] top-1.5"></div>
                        <p className="text-xs text-gray-400 font-bold uppercase mb-1">{dateItem.label}</p>
                        <p className="font-medium text-white">{dateItem.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* FOOTER SIMPLE */}
      <footer className="bg-[#0a1118] text-gray-400 py-8 border-t border-[#1f2e40] mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm">
          <p>© 2026 ED-SEA - Université d'Abomey-Calavi. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
