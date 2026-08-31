import Link from 'next/link';
import Header from '@/components/Header';

export default function CandidaturePage() {
  return (
    <div className="min-h-screen font-sans flex flex-col relative">
      
      {/* ARRIÈRE-PLAN ÉTUDIANT DIPLÔMÉ (Même image que la newsletter) */}
      <div 
        className="fixed inset-0 z-[-1] bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: "url('https://doctorat-unique.uac.bj/images/cta-secion-back.jpg')" }}
      >
        {/* Filtres d'assombrissement pour mettre en valeur le formulaire en verre dépoli */}
        <div className="absolute inset-0 bg-[#0a1118]/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <Header />

      <main className="flex-grow flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
        
        {/* Conteneur du formulaire avec effet Glassmorphism (comme sur contact.html) */}
        <div className="w-full max-w-3xl bg-white/85 backdrop-blur-lg p-8 sm:p-10 rounded-2xl shadow-2xl border border-white/50 relative overflow-hidden">
          
          {/* Accent visuel haut */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-[#006900]"></div>

          <div className="text-center mb-10 border-b border-gray-200/60 pb-8">
            <h2 className="text-3xl font-extrabold text-[#162534] uppercase tracking-tight">Candidature en Ligne</h2>
            <p className="text-sm text-[#006900] font-bold mt-2">École Doctorale Sciences Exactes et Appliquées (ED-SEA)</p>
            <p className="text-sm text-gray-500 mt-2">Appel 2026-2027</p>
          </div>

          <form className="space-y-8">
            
            {/* Section 1: Identité */}
            <div>
              <h3 className="text-lg font-bold text-[#162534] mb-4 flex items-center gap-2">
                <span className="bg-[#006900] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shadow-sm">1</span>
                Informations Personnelles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Nom</label>
                  <input type="text" className="w-full border-gray-200 rounded-md shadow-sm focus:ring-[#006900] p-2.5 border text-sm bg-white/70 backdrop-blur-sm" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Prénoms</label>
                  <input type="text" className="w-full border-gray-200 rounded-md shadow-sm focus:ring-[#006900] p-2.5 border text-sm bg-white/70 backdrop-blur-sm" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full border-gray-200 rounded-md shadow-sm focus:ring-[#006900] p-2.5 border text-sm bg-white/70 backdrop-blur-sm" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Téléphone (WhatsApp)</label>
                  <input type="tel" className="w-full border-gray-200 rounded-md shadow-sm focus:ring-[#006900] p-2.5 border text-sm bg-white/70 backdrop-blur-sm" required />
                </div>
              </div>
            </div>

            {/* Section 2: Académique */}
            <div>
              <h3 className="text-lg font-bold text-[#162534] mb-4 flex items-center gap-2 border-t border-gray-200/60 pt-6">
                <span className="bg-[#006900] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shadow-sm">2</span>
                Parcours et Spécialité
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="sm:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Formation Doctorale Visée</label>
                  <select className="w-full border-gray-200 rounded-md shadow-sm focus:ring-[#006900] p-2.5 border text-sm bg-white/70 backdrop-blur-sm" required>
                    <option value="">-- Sélectionner une formation --</option>
                    <option>Chimie et Applications (FDCA)</option>
                    <option>Océanographie Physique (CIPMA)</option>
                    <option>Mathématiques et Applications (FDSM)</option>
                    <option>Didactique des Sciences (IMSP)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Master Obtenu</label>
                  <input type="text" className="w-full border-gray-200 rounded-md shadow-sm focus:ring-[#006900] p-2.5 border text-sm bg-white/70 backdrop-blur-sm" placeholder="Ex: Master en Chimie Organique" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Moyenne Pondérée (sur 20)</label>
                  <input type="number" step="0.01" className="w-full border-gray-200 rounded-md shadow-sm focus:ring-[#006900] p-2.5 border text-sm bg-white/70 backdrop-blur-sm" placeholder="Règle NS048 (>= 14)" required />
                </div>
              </div>
            </div>

            {/* Section 3: Pièces */}
            <div>
              <h3 className="text-lg font-bold text-[#162534] mb-4 flex items-center gap-2 border-t border-gray-200/60 pt-6">
                <span className="bg-[#006900] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shadow-sm">3</span>
                Pièces Justificatives (PDF)
              </h3>
              <div className="space-y-4">
                <div className="p-4 border rounded-md border-gray-200 bg-white/50 backdrop-blur-sm">
                  <label className="block text-sm font-bold text-gray-800 mb-1">Dossier Académique Complet</label>
                  <p className="text-xs text-gray-500 mb-3">Relevés, attestations, CV. Fichier unique (Max 5Mo).</p>
                  <input type="file" accept=".pdf" className="text-sm w-full file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-[#006900] hover:file:bg-gray-200" required />
                </div>
                <div className="p-4 border rounded-md border-gray-200 bg-white/50 backdrop-blur-sm">
                  <label className="block text-sm font-bold text-gray-800 mb-1">Preuve de paiement (CUCA & CUO)</label>
                  <p className="text-xs text-gray-500 mb-3">Scans des deux quittances (20 000F et 2 000F).</p>
                  <input type="file" accept=".pdf" className="text-sm w-full file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-[#006900] hover:file:bg-gray-200" required />
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200/60">
              <button type="submit" className="w-full bg-[#006900] text-white px-6 py-4 rounded-md font-extrabold text-lg hover:bg-[#005000] shadow-lg transition uppercase tracking-wide">
                Soumettre ma candidature
              </button>
              <p className="text-center text-xs text-gray-500 mt-4">
                En soumettant ce formulaire, vous acceptez que vos données soient traitées par le secrétariat de l'ED-SEA.
              </p>
            </div>
          </form>

        </div>
        
        <div className="mt-8 text-center text-sm font-semibold text-gray-300">
          <Link href="/" className="hover:text-white hover:underline flex items-center justify-center gap-2 transition-colors">
            <span>←</span> Retour à la page d'accueil
          </Link>
        </div>
      </main>
    </div>
  );
}
