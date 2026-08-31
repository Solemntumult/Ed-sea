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
        <section className="relative text-white py-24 sm:py-32 overflow-hidden border-b-4 border-gray-200 bg-gradient-to-br from-[#162534] via-[#0b1722] to-[#006900]">
          {/* Motif UAC superposé sur le fond sombre */}
          <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: "url('https://etudiant.uac.bj/assets/bg_motif-ByefhJfp.png')", backgroundRepeat: 'repeat', backgroundSize: '400px' }}></div>
          <div className="absolute inset-0 bg-black opacity-20"></div> 
          
          <div className="max-w-7xl mx-auto px-4 relative z-10 text-center sm:text-left">
            <h2 className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
              Recherche scientifique <br className="hidden sm:block"/> d'Excellence à l'UAC
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl font-light">
              L'ED-SEA forme les futurs chercheurs et hauts cadres dans les domaines de la chimie, des mathématiques, de l'océanographie et de la didactique des sciences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/candidature" className="bg-white text-[#006900] px-8 py-3 rounded font-extrabold text-lg hover:bg-gray-100 transition shadow-lg text-center">
                S'inscrire (Appel 2026-2027)
              </Link>
              <a href="#formations" className="bg-transparent border-2 border-white px-8 py-3 rounded font-bold text-lg hover:bg-white hover:text-[#162534] transition text-center">
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
                    Chères candidates, chers candidats, soyez les bienvenus sur le portail de l'École Doctorale des Sciences Exactes et Appliquées (ED-SEA) de l'Université d'Abomey-Calavi.
                  </p>
                  <p>
                    Créée pour répondre aux défis majeurs du développement technologique et scientifique de notre continent, l'ED-SEA s'impose aujourd'hui comme un pôle d'excellence incontournable en Afrique de l'Ouest. Notre mission est claire : former des chercheurs innovants et des hauts cadres capables de repousser les frontières de la connaissance dans les disciplines fondamentales.
                  </p>
                  <p>
                    En choisissant l'ED-SEA, vous intégrez un écosystème dynamique, encadrés par des enseignants-chercheurs de rang magistral et adossés à des laboratoires partenaires de renommée internationale. Nous vous offrons un cadre de rigueur et d'éthique, propice à l'épanouissement intellectuel et à l'excellence académique.
                  </p>
                  <p className="font-bold text-[#162534] italic pt-2 border-t border-gray-300 mt-4">
                    Le Directeur de l'École Doctorale
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
                      <span className="block text-2xl font-extrabold text-[#162534]">12+</span>
                      <span className="text-xs text-gray-500 font-bold uppercase">Laboratoires associés</span>
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
              <a href="#" className="hidden sm:inline-block text-[#006900] font-bold hover:underline">Toutes les actualités</a>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Actu 1 */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:-translate-y-1 transition duration-300">
                <div className="h-32 bg-[#162534] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <span className="text-white text-opacity-30 text-6xl font-extrabold z-10 tracking-tighter">01</span>
                </div>
                <div className="p-6">
                  <span className="text-xs text-[#006900] font-bold uppercase mb-2 block">Candidature • 2026-2027</span>
                  <h4 className="text-xl font-bold text-[#162534] mb-3 leading-tight">Lancement du 2e Appel à candidatures</h4>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    L'ED-SEA informe le public de l'ouverture officielle du dépôt des dossiers pour le second appel de l'année. Les candidats sont invités à soumettre leurs pièces justificatives en ligne avant le 28 septembre de rigueur.
                  </p>
                  <a href="#admissions" className="text-[#006900] font-bold text-sm hover:underline flex items-center gap-1">Lire la suite <span className="text-lg leading-none">→</span></a>
                </div>
              </div>
              {/* Actu 2 */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:-translate-y-1 transition duration-300">
                <div className="h-32 bg-[#006900] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <span className="text-white text-opacity-30 text-6xl font-extrabold z-10 tracking-tighter">02</span>
                </div>
                <div className="p-6">
                  <span className="text-xs text-[#006900] font-bold uppercase mb-2 block">Académique • 12 Juin 2026</span>
                  <h4 className="text-xl font-bold text-[#162534] mb-3 leading-tight">Programme des Soutenances (Juin)</h4>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    Consultez le planning officiel des soutenances de thèses publiques pour les départements de Chimie (FDCA) et de Mathématiques (FDSM). Les sessions se tiendront dans les amphithéâtres du campus central.
                  </p>
                  <a href="#" className="text-[#006900] font-bold text-sm hover:underline flex items-center gap-1">Lire la suite <span className="text-lg leading-none">→</span></a>
                </div>
              </div>
              {/* Actu 3 */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:-translate-y-1 transition duration-300">
                <div className="h-32 bg-[#162534] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <span className="text-white text-opacity-30 text-6xl font-extrabold z-10 tracking-tighter">03</span>
                </div>
                <div className="p-6">
                  <span className="text-xs text-[#006900] font-bold uppercase mb-2 block">Recherche • 5 Mai 2026</span>
                  <h4 className="text-xl font-bold text-[#162534] mb-3 leading-tight">Colloque International du CIPMA</h4>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    Le CIPMA organise sa grande conférence annuelle sur l'Océanographie Physique et les changements climatiques. Cet événement rassemblera des chercheurs de toute l'Afrique de l'Ouest autour de la modélisation côtière.
                  </p>
                  <a href="#" className="text-[#006900] font-bold text-sm hover:underline flex items-center gap-1">Lire la suite <span className="text-lg leading-none">→</span></a>
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
                  <Link href="/candidature" className="block text-center bg-white text-[#006900] px-6 py-4 rounded font-extrabold hover:bg-gray-100 transition uppercase tracking-wide shadow-md">
                    Soumettre mon dossier maintenant
                  </Link>
                </div>
              </div>
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
        {/* Voile d'assombrissement pour faire ressortir le texte */}
        <div className="absolute inset-0 bg-[#0a1118]/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        
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
                École Doctorale Sciences Exactes et Appliquées (ED-SEA). Le pôle universitaire de référence pour l'innovation scientifique au Bénin.
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
                <li>Campus d'Abomey-Calavi</li>
                <li>ed-sea@uac.bj</li>
                <li>+229 00 00 00 00</li>
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
