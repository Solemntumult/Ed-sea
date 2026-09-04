import Link from 'next/link';
import Header from '@/components/Header';

export default function VitrinePage() {
  return (
    <div className="min-h-screen font-sans text-[#162534] flex flex-col relative">
      
      {/* ARRIÈRE-PLAN GLOBAL STYLÉ (Dégradé doux + Motif UAC fixe) */}
      <div className="fixed inset-0 z-[-1] bg-gradient-to-br from-[#e8f5e9] via-[#f8fafc] to-[#e3f2fd]">
        <div 
          className="absolute inset-0 opacity-[0.04] mix-blend-multiply" 
          style={{ backgroundImage: "url('https://etudiant.uac.bj/assets/bg_motif-ByefhJfp.png')", backgroundRepeat: 'repeat' }}
        ></div>
      </div>

      <Header />

      <main className="flex-grow">
        
        {/* HERO SECTION / BANNIERE */}
        <section className="relative text-white py-24 sm:py-32 overflow-hidden border-b-4 border-gray-200 bg-cover bg-center" style={{ backgroundImage: "url('/hero_campus.jpg')" }}>
          {/* Overlay dégradé sombre pour assurer une lisibilité parfaite du texte */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#162534]/95 via-[#0b1722]/80 to-transparent z-0"></div>
          {/* Motif UAC subtil */}
          <div className="absolute inset-0 opacity-10 mix-blend-overlay z-0" style={{ backgroundImage: "url('https://etudiant.uac.bj/assets/bg_motif-ByefhJfp.png')", backgroundRepeat: 'repeat', backgroundSize: '400px' }}></div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-10 text-center sm:text-left">
            <h2 className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight leading-tight drop-shadow-lg">
              Recherche scientifique <br className="hidden sm:block"/> d'Excellence à l'UAC
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl font-medium drop-shadow-md">
              L'ED-SEA forme les futurs chercheurs et hauts cadres dans les domaines de la chimie, des mathématiques, de l'océanographie et de la didactique des sciences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <a href="/pdfs/appel_candidature.pdf" target="_blank" rel="noopener noreferrer" className="bg-white text-[#006900] px-8 py-3 rounded font-extrabold text-lg hover:bg-gray-100 transition shadow-lg text-center">
                S'inscrire (Appel 2026-2027)
              </a>
              <a href="#formations" className="bg-transparent border-2 border-white px-8 py-3 rounded font-bold text-lg hover:bg-white hover:text-[#162534] transition shadow-lg text-center backdrop-blur-sm bg-black/20">
                Découvrir nos formations
              </a>
            </div>
          </div>
        </section>


        {/* SECTION: PRÉSENTATION & MOT DU DIRECTEUR */}
        <section id="presentation" className="py-20 relative bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-sm font-bold text-[#006900] uppercase tracking-widest mb-2">Mot de la Direction</h3>
                <h2 className="text-3xl font-extrabold text-[#162534] mb-6">Bienvenue à l'ED-SEA</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed font-medium">
                  <p>
                    L’École Doctorale des Sciences Exactes et Appliquées (ED-SEA) est un établissement d'enseignement supérieur offrant un encadrement scientifique personnalisé de haut niveau pour la préparation d'une thèse de doctorat.
                  </p>
                  <p>
                    Conformément au <strong>décret-2024-1055 du 24 juillet 2024</strong> de l'UAC, l’ED-SEA a pour mission d'assurer la coordination des Formations Doctorales, de préparer les offres de formation, de veiller à l'encadrement des doctorants, et de contribuer activement au développement de la recherche scientifique et à l'insertion professionnelle.
                  </p>
                  <p>
                    La Formation Doctorale est un cursus structuré en <strong>6 semestres (180 crédits)</strong>. Elle comprend 60 crédits dédiés à l'approfondissement théorique, la pédagogie et la rédaction scientifique, et 120 crédits réservés au travail de recherche approfondie.
                  </p>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-2 shadow-xl border border-gray-200">
                <div className="relative p-8 text-center">
                  <img src="/logo_edsea.png" alt="Emblème ED-SEA" className="h-32 mx-auto mb-6 drop-shadow-md" />
                  <h4 className="font-bold text-xl mb-4 text-[#006900]">L'ED-SEA en Chiffres</h4>
                  <div className="grid grid-cols-2 gap-3 text-left border-t border-gray-200 pt-4">
                    <div className="bg-white/60 p-3 rounded-lg border border-gray-100 hover:shadow-md transition">
                      <span className="block text-2xl font-extrabold text-[#162534]">4</span>
                      <span className="text-xs text-gray-500 font-bold uppercase">Pôles de formation</span>
                    </div>
                    <div className="bg-white/60 p-3 rounded-lg border border-gray-100 hover:shadow-md transition">
                      <span className="block text-2xl font-extrabold text-[#162534]">6+</span>
                      <span className="text-xs text-gray-500 font-bold uppercase">Laboratoires rattachés</span>
                    </div>
                    <div className="bg-white/60 p-3 rounded-lg border border-gray-100 hover:shadow-md transition">
                      <span className="block text-2xl font-extrabold text-[#162534]">150+</span>
                      <span className="text-xs text-gray-500 font-bold uppercase">Thèses soutenues</span>
                    </div>
                    <div className="bg-white/60 p-3 rounded-lg border border-gray-100 hover:shadow-md transition">
                      <span className="block text-2xl font-extrabold text-[#162534]">2</span>
                      <span className="text-xs text-gray-500 font-bold uppercase">Appels par an</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* SECTION: ACTUALITÉS */}
        <section id="actualites" className="py-20 relative bg-white/40 backdrop-blur-sm border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h3 className="text-sm font-bold text-[#006900] uppercase tracking-widest mb-2">Informations</h3>
                <h2 className="text-3xl font-extrabold text-[#162534]">Actualités de l'ED-SEA</h2>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Actu 1 */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:-translate-y-1 transition duration-300 group">
                <div className="h-48 bg-cover bg-center relative overflow-hidden saturate-[.80] sepia-[.15] contrast-[.95]" style={{ backgroundImage: "url('/news_1.jpg')" }}>
                  {/* Filtre pour atténuer l'effet "IA" et donner un aspect photographique plus naturel */}
                  <div className="absolute inset-0 bg-yellow-900/10 mix-blend-multiply"></div>
                </div>
                <div className="p-6">
                  <span className="text-xs text-[#006900] font-bold uppercase mb-2 block">Candidature • 2026-2027</span>
                  <h4 className="text-xl font-bold text-[#162534] mb-3 leading-tight">Lancement du 2e Appel à candidatures</h4>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    L'ED-SEA informe le public de l'ouverture officielle du dépôt des dossiers pour le second appel de l'année. Les candidats sont invités à soumettre leurs pièces justificatives en ligne avant le 28 septembre de rigueur.
                  </p>
                  <a href="/actualites/candidatures-2026" className="text-[#006900] font-bold text-sm hover:underline flex items-center gap-1">Lire la suite <span className="text-lg leading-none">→</span></a>
                </div>
              </div>
              {/* Actu 2 */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:-translate-y-1 transition duration-300 group">
                <div className="h-48 bg-cover bg-center relative overflow-hidden saturate-[.80] sepia-[.15] contrast-[.95]" style={{ backgroundImage: "url('/news_2.jpg')" }}>
                  {/* Filtre pour atténuer l'effet "IA" et donner un aspect photographique plus naturel */}
                  <div className="absolute inset-0 bg-yellow-900/10 mix-blend-multiply"></div>
                </div>
                <div className="p-6">
                  <span className="text-xs text-[#006900] font-bold uppercase mb-2 block">Académique • 12 Juin 2026</span>
                  <h4 className="text-xl font-bold text-[#162534] mb-3 leading-tight">Programme des Soutenances (Juin)</h4>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    Consultez le planning officiel des soutenances de thèses publiques pour les départements de Chimie (FDCA) et de Mathématiques (FDSM). Les sessions se tiendront dans les amphithéâtres du campus central.
                  </p>
                  <a href="/actualites/soutenances-juin" className="text-[#006900] font-bold text-sm hover:underline flex items-center gap-1">Lire la suite <span className="text-lg leading-none">→</span></a>
                </div>
              </div>
              {/* Actu 3 */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:-translate-y-1 transition duration-300 group">
                <div className="h-48 bg-cover bg-center relative overflow-hidden saturate-[.80] sepia-[.15] contrast-[.95]" style={{ backgroundImage: "url('/news_3.jpg')" }}>
                  {/* Filtre pour atténuer l'effet "IA" et donner un aspect photographique plus naturel */}
                  <div className="absolute inset-0 bg-yellow-900/10 mix-blend-multiply"></div>
                </div>
                <div className="p-6">
                  <span className="text-xs text-[#006900] font-bold uppercase mb-2 block">Recherche • 5 Mai 2026</span>
                  <h4 className="text-xl font-bold text-[#162534] mb-3 leading-tight">Colloque International du CIPMA</h4>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    Le CIPMA organise sa grande conférence annuelle sur l'Océanographie Physique et les changements climatiques. Cet événement rassemblera des chercheurs de toute l'Afrique de l'Ouest autour de la modélisation côtière.
                  </p>
                  <a href="/actualites/colloque-cipma" className="text-[#006900] font-bold text-sm hover:underline flex items-center gap-1">Lire la suite <span className="text-lg leading-none">→</span></a>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* SECTION: ADMISSIONS & OFFRES (Montage Web inclus) */}
        <section id="admissions" className="py-20 relative bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-sm font-bold text-[#006900] uppercase tracking-widest mb-2">Rejoindre l'école</h3>
              <h2 className="text-3xl font-extrabold text-[#162534]">Conditions d'Admission (2e Appel)</h2>
              <p className="text-gray-700 font-medium mt-4 max-w-2xl mx-auto">La campagne de recrutement 2026-2027 est structurée autour de règles d'excellence strictes (Note NS048) établies par le Conseil Scientifique.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Infos de l'Appel */}
              <div className="bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-lg border border-gray-100 border-t-4 border-t-[#006900]">
                <h4 className="text-xl font-bold text-[#162534] mb-6">
                  Critères et Pièces à fournir (Dossier)
                </h4>
                <ul className="space-y-4 text-sm text-gray-700 font-medium mb-8 border-l-2 border-green-200 pl-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#006900] mt-0.5 font-bold">1.</span> 
                    <span><strong>Moyenne d'éligibilité :</strong> Selon la note de service NS048, le candidat doit justifier d'une moyenne pondérée supérieure ou égale à <strong className="text-[#162534]">14/20</strong> (Semestres S1 à S4 comptant pour 75%, Soutenance plafonnée à 25%).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#006900] mt-0.5 font-bold">2.</span> 
                    <span><strong>Protocole de recherche :</strong> Un projet détaillé, validé et signé par le futur directeur de thèse (enseignant de rang A).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#006900] mt-0.5 font-bold">3.</span> 
                    <span><strong>Dossier Académique :</strong> CV détaillé, copies légalisées des diplômes et relevés de notes (du Baccalauréat au Master), copie du mémoire.</span>
                  </li>
                </ul>

                <h4 className="text-xl font-bold text-[#162534] mb-4 border-t border-gray-200 pt-6">
                  Frais d'Étude de Dossier
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50/80 p-4 rounded-lg border border-gray-200 shadow-sm">
                    <p className="font-bold text-[#162534] text-sm">Quittance CUCA</p>
                    <p className="text-2xl text-[#006900] font-extrabold mt-1">20 000 F</p>
                    <p className="text-xs text-gray-500 mt-1">Compte ED-SEA</p>
                  </div>
                  <div className="bg-gray-50/80 p-4 rounded-lg border border-gray-200 shadow-sm">
                    <p className="font-bold text-[#162534] text-sm">Quittance CUO</p>
                    <p className="text-2xl text-[#006900] font-extrabold mt-1">2 000 F</p>
                    <p className="text-xs text-gray-500 mt-1">Compte Rectorat</p>
                  </div>
                </div>
              </div>

              {/* Calendrier */}
              <div className="bg-[#162534]/95 backdrop-blur-md p-8 rounded-xl shadow-lg text-white border-t-4 border-t-[#006900] relative overflow-hidden">
                <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
                <h4 className="text-xl font-bold mb-6 text-white relative z-10">
                  Calendrier de la Campagne
                </h4>
                <div className="relative border-l border-gray-600 ml-3 space-y-8 pb-4 mt-8 z-10">
                  <div className="relative pl-6">
                    <div className="absolute w-4 h-4 bg-[#006900] rounded-full -left-[8.5px] top-1 border-2 border-[#162534]"></div>
                    <p className="text-sm font-bold text-[#4ade80] mb-1">06 Juillet 2026</p>
                    <h5 className="font-bold text-white text-lg">Ouverture du dépôt des dossiers</h5>
                    <p className="text-sm text-gray-300 mt-1">Début de la soumission en ligne sur la plateforme.</p>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute w-4 h-4 bg-gray-500 rounded-full -left-[8.5px] top-1 border-2 border-[#162534]"></div>
                    <p className="text-sm font-bold text-gray-400 mb-1">28 Septembre 2026</p>
                    <h5 className="font-bold text-white text-lg">Clôture des soumissions</h5>
                    <p className="text-sm text-gray-300 mt-1">Date limite rigoureuse pour le 2ème appel.</p>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute w-4 h-4 bg-gray-500 rounded-full -left-[8.5px] top-1 border-2 border-[#162534]"></div>
                    <p className="text-sm font-bold text-gray-400 mb-1">À partir du 05 Octobre 2026</p>
                    <h5 className="font-bold text-white text-lg">Sessions CUCA</h5>
                    <p className="text-sm text-gray-300 mt-1">Vérification de l'éligibilité scientifique et pédagogique.</p>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute w-4 h-4 bg-gray-500 rounded-full -left-[8.5px] top-1 border-2 border-[#162534]"></div>
                    <p className="text-sm font-bold text-gray-400 mb-1">À partir du 26 Octobre 2026</p>
                    <h5 className="font-bold text-white text-lg">Sessions CUO (VRAA)</h5>
                    <p className="text-sm text-gray-300 mt-1">Délibérations finales et publication des résultats.</p>
                  </div>
                </div>
                <div className="mt-8 relative z-10">
                  <a href="https://cuo.sigan-uac.bj/" target="_blank" rel="noopener noreferrer" className="block text-center bg-white text-[#006900] px-6 py-4 rounded font-extrabold hover:bg-gray-100 transition uppercase tracking-wide shadow-md">
                    Soumettre mon dossier maintenant
                  </a>
                </div>
              </div>
            </div>

            {/* Droits Universitaires */}
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-lg border border-gray-100 border-t-4 border-t-[#006900] mt-12">
              <h4 className="text-xl font-bold text-[#162534] mb-6">
                Droits Universitaires en Vigueur à l'ED-SEA
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-700">
                  <thead className="text-xs text-white uppercase bg-[#162534]">
                    <tr>
                      <th className="px-6 py-4 rounded-tl-lg">Nationalité / Statut</th>
                      <th className="px-6 py-4">Frais d'inscription (FCFA)</th>
                      <th className="px-6 py-4 rounded-tr-lg">Frais de formation (FCFA)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-bold text-[#162534]">National (Régime Normal)</td>
                      <td className="px-6 py-4">51 200</td>
                      <td className="px-6 py-4 font-bold text-[#006900]">500 000</td>
                    </tr>
                    <tr className="bg-gray-50 border-b hover:bg-gray-100">
                      <td className="px-6 py-4 font-bold text-[#162534]">Conseil de l'Entente</td>
                      <td className="px-6 py-4">335 000</td>
                      <td className="px-6 py-4 font-bold text-[#006900]">500 000</td>
                    </tr>
                    <tr className="bg-white border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-bold text-[#162534]">CEDEAO</td>
                      <td className="px-6 py-4">260 000</td>
                      <td className="px-6 py-4 font-bold text-[#006900]">500 000</td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-gray-100">
                      <td className="px-6 py-4 font-bold text-[#162534]">Autres nationalités</td>
                      <td className="px-6 py-4">310 000</td>
                      <td className="px-6 py-4 font-bold text-[#006900]">500 000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-4 italic">
                * Les montants s'appliquent pour les 1ère, 2ème et 3ème années de thèse. Les frais de laboratoire, d'encadrement et de recherche sont fixés par Note de service du Recteur.
              </p>
            </div>
          </div>
        </section>


        {/* SECTION: FORMATIONS DÉTAILLÉES */}
        <section id="formations" className="py-24 relative bg-[#162534]/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h3 className="text-sm font-bold text-green-400 uppercase tracking-widest mb-2">Offre de formation</h3>
              <h2 className="text-3xl font-extrabold text-white">Les Filières de l'ED-SEA</h2>
              <p className="text-gray-300 mt-4 max-w-3xl mx-auto">Découvrez en détail les conditions d'entrée spécifiques et les axes de recherche de chacun de nos départements partenaires.</p>
            </div>

            <div className="space-y-8">
              
              {/* FDCA */}
              <div className="flex flex-col md:flex-row gap-8 bg-white rounded-xl p-8 shadow-xl border border-gray-200 hover:border-[#006900] transition duration-300">
                <div className="md:w-1/3">
                  <span className="inline-block px-3 py-1 bg-[#162534] text-white rounded font-bold text-xs mb-4 uppercase tracking-widest">Chimie</span>
                  <h3 className="text-2xl font-extrabold text-[#162534] mb-2">Formation Doctorale en Chimie et Applications (FDCA)</h3>
                </div>
                <div className="md:w-2/3 border-l-0 md:border-l-2 border-gray-100 md:pl-8">
                  <h4 className="font-bold text-[#006900] mb-2">Profils acceptés :</h4>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed font-medium">
                    Accès prioritaire aux titulaires d'un Master en Chimie Organique, Chimie Inorganique, Chimie Physique, Chimie Analytique ou Génie des Procédés. Possibilité d'accès sur étude de dossier pour les diplômes connexes (Biochimie, Pharmacie, etc.).
                  </p>
                  <h4 className="font-bold text-[#006900] mb-2">Domaines de recherche :</h4>
                  <ul className="grid sm:grid-cols-2 gap-2 text-sm text-gray-600 font-semibold">
                    <li>• Chimie des Matériaux</li>
                    <li>• Molécules Bioactives</li>
                    <li>• Environnement & Traitement des Eaux</li>
                    <li>• Valorisation des Ressources Naturelles</li>
                  </ul>
                  <div className="mt-6">
                    <a href="/pdfs/profils_fdca.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[#006900] hover:underline bg-green-50 px-4 py-2 rounded-lg border border-green-100">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                      Télécharger les profils d'entrée FDCA
                    </a>
                  </div>
                </div>
              </div>

              {/* CIPMA */}
              <div className="flex flex-col md:flex-row gap-8 bg-white rounded-xl p-8 shadow-xl border border-gray-200 hover:border-[#006900] transition duration-300">
                <div className="md:w-1/3">
                  <span className="inline-block px-3 py-1 bg-[#162534] text-white rounded font-bold text-xs mb-4 uppercase tracking-widest">Océanographie & Physique</span>
                  <h3 className="text-2xl font-extrabold text-[#162534] mb-2">Chaire Internationale en Physique Mathématique et Applications (CIPMA)</h3>
                </div>
                <div className="md:w-2/3 border-l-0 md:border-l-2 border-gray-100 md:pl-8">
                  <h4 className="font-bold text-[#006900] mb-2">Profils acceptés :</h4>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed font-medium">
                    Ouvert aux diplômés d'un Master (ou DEA) en Océanographie Physique, Mécanique des fluides, Météorologie ou Physique Mathématique. La chaire promeut particulièrement les recherches liées aux changements globaux en Afrique.
                  </p>
                  <h4 className="font-bold text-[#006900] mb-2">Domaines de recherche :</h4>
                  <ul className="grid sm:grid-cols-2 gap-2 text-sm text-gray-600 font-semibold">
                    <li>• Océanographie Physique</li>
                    <li>• Changements Climatiques</li>
                    <li>• Modélisation Atmosphérique</li>
                    <li>• Dynamique Côtière</li>
                  </ul>
                  <div className="mt-6">
                    <a href="/pdfs/profils_fdsm.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[#006900] hover:underline bg-green-50 px-4 py-2 rounded-lg border border-green-100">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                      Télécharger les profils d'entrée CIPMA
                    </a>
                  </div>
                </div>
              </div>

              {/* IMSP */}
              <div className="flex flex-col md:flex-row gap-8 bg-white rounded-xl p-8 shadow-xl border border-gray-200 hover:border-[#006900] transition duration-300">
                <div className="md:w-1/3">
                  <span className="inline-block px-3 py-1 bg-[#162534] text-white rounded font-bold text-xs mb-4 uppercase tracking-widest">Didactique</span>
                  <h3 className="text-2xl font-extrabold text-[#162534] mb-2">Institut de Mathématiques et de Sciences Physiques (IMSP)</h3>
                </div>
                <div className="md:w-2/3 border-l-0 md:border-l-2 border-gray-100 md:pl-8">
                  <h4 className="font-bold text-[#006900] mb-2">Profils acceptés :</h4>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed font-medium">
                    Spécialité "Didactique des Sciences et Technologies". Le public cible comprend les Enseignants du Secondaire, les Conseillers Pédagogiques, les Inspecteurs, et les Formateurs des Écoles Normales, justifiant d'un cursus solide en pédagogie.
                  </p>
                  <h4 className="font-bold text-[#006900] mb-2">Domaines de recherche :</h4>
                  <ul className="grid sm:grid-cols-2 gap-2 text-sm text-gray-600 font-semibold">
                    <li>• Ingénierie Pédagogique</li>
                    <li>• Didactique des Mathématiques</li>
                    <li>• Didactique de la Physique-Chimie</li>
                    <li>• Évaluation des Systèmes Éducatifs</li>
                  </ul>
                  <div className="mt-6">
                    <a href="/pdfs/profils_imsp.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[#006900] hover:underline bg-green-50 px-4 py-2 rounded-lg border border-green-100">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                      Télécharger les informations IMSP
                    </a>
                  </div>
                </div>
              </div>

              {/* FDSM */}
              <div className="flex flex-col md:flex-row gap-8 bg-white rounded-xl p-8 shadow-xl border border-gray-200 hover:border-[#006900] transition duration-300">
                <div className="md:w-1/3">
                  <span className="inline-block px-3 py-1 bg-[#162534] text-white rounded font-bold text-xs mb-4 uppercase tracking-widest">Mathématiques</span>
                  <h3 className="text-2xl font-extrabold text-[#162534] mb-2">Faculté des Sciences (FDSM)</h3>
                </div>
                <div className="md:w-2/3 border-l-0 md:border-l-2 border-gray-100 md:pl-8">
                  <h4 className="font-bold text-[#006900] mb-2">Profils acceptés :</h4>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed font-medium">
                    Admission sur titre pour les candidats ayant obtenu un Master en Mathématiques (Moyenne &ge; 14/20). Pour les autres Masters (Statistiques, Informatique Fondamentale), l'admission se fait sur étude rigoureuse du dossier par le comité scientifique.
                  </p>
                  <h4 className="font-bold text-[#006900] mb-2">Domaines de recherche :</h4>
                  <ul className="grid sm:grid-cols-2 gap-2 text-sm text-gray-600 font-semibold">
                    <li>• Algèbre Linéaire et Bilinéaire</li>
                    <li>• Géométrie Différentielle</li>
                    <li>• Analyse Mathématique</li>
                    <li>• Topologie</li>
                  </ul>
                  <div className="mt-6">
                    <a href="/pdfs/profils_fdsm.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[#006900] hover:underline bg-green-50 px-4 py-2 rounded-lg border border-green-100">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                      Télécharger les profils d'entrée FDSM
                    </a>
                  </div>
                </div>
              </div>

              {/* A VENIR */}
              <div className="mt-12 bg-white/10 p-8 rounded-xl border border-gray-600 border-dashed">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="bg-gray-700 text-xs px-2 py-1 rounded">À VENIR</span> 
                  Formations Doctorales en préparation (FD-MPA)
                </h4>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-[#162534] text-gray-400 px-4 py-2 rounded-lg border border-gray-700 text-sm cursor-not-allowed">Mathématiques Fondamentales et Applications</span>
                  <span className="bg-[#162534] text-gray-400 px-4 py-2 rounded-lg border border-gray-700 text-sm cursor-not-allowed">Statistique-Probabilité</span>
                  <span className="bg-[#162534] text-gray-400 px-4 py-2 rounded-lg border border-gray-700 text-sm cursor-not-allowed">Recherche Opérationnelle</span>
                  <span className="bg-[#162534] text-gray-400 px-4 py-2 rounded-lg border border-gray-700 text-sm cursor-not-allowed">Informatique</span>
                  <span className="bg-[#162534] text-gray-400 px-4 py-2 rounded-lg border border-gray-700 text-sm cursor-not-allowed">Physique théorique et Applications</span>
                  <span className="bg-[#162534] text-gray-400 px-4 py-2 rounded-lg border border-gray-700 text-sm cursor-not-allowed">Didactique des Sciences et technologies</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION: LABORATOIRES & PARTENAIRES */}
        <section id="recherche" className="py-20 relative bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h3 className="text-sm font-bold text-[#006900] uppercase tracking-widest mb-2">Recherche & International</h3>
              <h2 className="text-3xl font-extrabold text-[#162534]">Laboratoires & Partenaires</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Laboratoires */}
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#162534]">6 Laboratoires Rattachés</h3>
                </div>
                <ul className="space-y-4 text-sm text-gray-700 font-medium">
                  <li className="flex gap-3"><span className="text-[#006900] font-bold">1.</span> <span>Laboratoire de Sciences des Matériaux et Modélisation (LaSMMO) <span className="text-gray-400 block text-xs">Arrêté n°169 du 16/02/2024</span></span></li>
                  <li className="flex gap-3"><span className="text-[#006900] font-bold">2.</span> <span>Laboratoire de Chimie Physique-Matériaux et Modélisation Moléculaire (LCP3M) <span className="text-gray-400 block text-xs">Arrêté n°170 du 16/02/2024</span></span></li>
                  <li className="flex gap-3"><span className="text-[#006900] font-bold">3.</span> <span>Laboratoire d’Étude et de recherche en Chimie Appliquée (LERCA) <span className="text-gray-400 block text-xs">Arrêté n°171 du 16/02/2024</span></span></li>
                  <li className="flex gap-3"><span className="text-[#006900] font-bold">4.</span> <span>Laboratoire de Recherche en Informatique et d’Aide à la décision (LaRIAD) <span className="text-gray-400 block text-xs">Arrêté n°017 du 15/01/2025</span></span></li>
                  <li className="flex gap-3"><span className="text-[#006900] font-bold">5.</span> <span>Laboratoire de Recherche en Mathématiques Fondamentales et Applications (LaRMFA) <span className="text-gray-400 block text-xs">Arrêté n°018 du 15/01/2025</span></span></li>
                  <li className="flex gap-3"><span className="text-[#006900] font-bold">6.</span> <span>Laboratoire de Recherche en Physique Théorique et Applications (LaRPTA) <span className="text-gray-400 block text-xs">Arrêté n°249 du 14/03/2025</span></span></li>
                </ul>
              </div>

              {/* Partenaires */}
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#162534]">Partenaires de Coopération</h3>
                </div>
                <div className="space-y-4">
                  <a href="/pdfs/partenariat_una.pdf" target="_blank" rel="noopener noreferrer" className="block group border border-gray-200 rounded-lg p-4 hover:border-[#006900] hover:shadow-sm transition">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-bold text-gray-800 group-hover:text-[#006900]">Accord Sectoriel UNA-EDSEA UAC</span>
                      <span className="text-gray-400 group-hover:text-[#006900]">→</span>
                    </div>
                  </a>
                  <a href="/pdfs/convention_toulouse.pdf" target="_blank" rel="noopener noreferrer" className="block group border border-gray-200 rounded-lg p-4 hover:border-[#006900] hover:shadow-sm transition">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-bold text-gray-800 group-hover:text-[#006900]">Convention Cotutelle - Univ. de Toulouse</span>
                      <span className="text-gray-400 group-hover:text-[#006900]">→</span>
                    </div>
                  </a>
                  <a href="/pdfs/convention_vrije.pdf" target="_blank" rel="noopener noreferrer" className="block group border border-gray-200 rounded-lg p-4 hover:border-[#006900] hover:shadow-sm transition">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-bold text-gray-800 group-hover:text-[#006900]">Convention Cotutelle - Vrije Universiteit Brussel</span>
                      <span className="text-gray-400 group-hover:text-[#006900]">→</span>
                    </div>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* SECTION NEWSLETTER (Effet Parallaxe "Surprise") */}
      <section 
        className="relative py-28 bg-fixed bg-top bg-cover mt-auto" 
        style={{ backgroundImage: "url('https://doctorat-unique.uac.bj/images/cta-secion-back.jpg')" }}
      >
        {/* Voile d'assombrissement allégé pour rendre l'image plus éclatante */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            <div className="text-white max-w-2xl text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
                Ne ratez plus aucune actualité
              </h2>
              <p className="text-lg md:text-xl text-gray-200 drop-shadow-md">
                Inscrivez-vous à la newsletter pour ne plus manquer aucune publication importante de l'École Doctorale (ED-SEA).
              </p>
            </div>

            <div className="w-full max-w-md">
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Votre adresse mail" 
                  className="flex-grow px-5 py-4 rounded-md text-gray-900 focus:outline-none focus:ring-4 focus:ring-[#006900]/60 font-medium shadow-inner"
                  required 
                />
                <button 
                  type="submit" 
                  className="bg-[#006900] hover:bg-[#005000] transition-all text-white px-8 py-4 rounded-md font-bold text-lg whitespace-nowrap shadow-xl hover:shadow-2xl border border-[#005000]"
                >
                  S'abonner
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER INSTITUTIONNEL */}
      <footer className="bg-[#0a1118] text-gray-400 pt-16 pb-8 border-t border-[#1f2e40] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-4 mb-4">
                <img src="/logo_edsea.jpg" alt="Logo ED-SEA" className="h-16 w-auto bg-white rounded p-1" />
                <h4 className="font-extrabold text-lg text-white uppercase tracking-tight">Université d'Abomey-Calavi</h4>
              </div>
              <p className="text-gray-400 text-sm max-w-sm">
                École Doctorale des Sciences Exactes et Appliquées (ED-SEA). Le pôle universitaire de référence pour l'innovation scientifique au Bénin.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-4 text-white">Liens Utiles</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-green-400 transition">Rectorat UAC</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Direction de la Scolarité</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Bibliothèque Centrale</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Webmail</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-4 text-white">Contact</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Campus Universitaire d'Abomey-Calavi, 01 BP 526 Cotonou</li>
                <li>ed-sea.uac@uac.bj ou edsea.uac@gmail.com</li>
                <li>(+229) 0199549999 / 0197482094</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex text-xs text-gray-500">
            <p>© 2026 ED-SEA - Université d'Abomey-Calavi. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
