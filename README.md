# ED-SEA Web Portal

Bienvenue sur le dépôt du portail web de l'**École Doctorale des Sciences Exactes et Appliquées (ED-SEA)** de l'Université d'Abomey-Calavi (UAC).

Ce projet vise à numériser le processus de candidature et de gestion des dossiers des doctorants. Il permet notamment :
- La présentation des différentes offres de formations (FDCA, CIPMA, IMSP, FDSM).
- La soumission des candidatures en ligne avec téléversement des pièces justificatives.
- Le calcul de l'éligibilité académique selon la note de service **NS048** (moyenne pondérée du Master).

## 🛠 Technologies Utilisées

Le projet est construit avec une stack moderne pour assurer performance, sécurité et maintenabilité :

- **[Next.js](https://nextjs.org/) (App Router)** : Framework React pour le rendu côté serveur et le routage.
- **[React](https://react.dev/)** : Bibliothèque pour la construction des interfaces interactives.
- **[TypeScript](https://www.typescriptlang.org/)** : Superset de JavaScript apportant un typage statique fort pour un code plus robuste.
- **[Tailwind CSS](https://tailwindcss.com/)** : Framework CSS utilitaire pour un design rapide et responsive.
- **[Prisma](https://www.prisma.io/)** : ORM (Object-Relational Mapping) moderne pour interagir avec la base de données.
- **PostgreSQL** : Système de gestion de base de données relationnelle.

*Note architecturale :* Le backend du projet s'inspire des principes de la **Clean Architecture**, séparant la logique métier pure (`core`, `use_cases`) de l'interface utilisateur web (`app`).

---

## 🚀 Comment lancer le projet en local

### Prérequis
- [Node.js](https://nodejs.org/) (version 18 ou supérieure recommandée)
- [PostgreSQL](https://www.postgresql.org/) (si vous souhaitez utiliser la base de données localement)

### Installation et Démarrage

1. **Cloner le dépôt**
   ```bash
   git clone https://gitlab.com/gtecotan/edsea.git
   cd ed-sea-web
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configuration de la Base de Données (Optionnel pour le moment)**
   *Actuellement le site est consultable en statique sans base de données, mais pour les futures fonctionnalités :*
   - Créez une base de données sur PostgreSQL.
   - À la racine du projet, créez un fichier nommé `.env` et ajoutez votre variable de connexion :
     ```env
     DATABASE_URL="postgresql://utilisateur:motdepasse@localhost:5432/nom_de_la_base?schema=public"
     ```
   - Synchronisez la structure avec la base (nécessite l'installation complète de Prisma) :
     ```bash
     npx prisma db push
     ```

4. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

5. **Accéder à l'application**
   Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat. Le site se mettra à jour automatiquement à chaque modification de code.

---

## 📂 Structure principale du projet

- `/src/app` : Les pages de l'application (Accueil, Formulaire de candidature), les styles globaux et le Layout.
- `/src/components` : Les morceaux d'interface réutilisables (comme le Header).
- `/src/core` : Contient les objets de valeur et règles métier (ex: le validateur de Moyenne Pondérée).
- `/src/use_cases` : Les actions métier (ex: le script de calcul d'éligibilité).
- `/prisma` : Le schéma représentant la structure de la base de données.
- `/public` : Les fichiers accessibles publiquement (Images, Logos, SVG).
