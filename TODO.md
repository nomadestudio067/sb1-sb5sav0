## Guide d'Intégration du Contenu - Nomade Studio

### 1. Structure des Dossiers
```bash
/var/www/nomade-studio/public/
├── media/
│   ├── photos/
│   │   ├── corporate/       # Événements corporatifs
│   │   ├── portraits/       # Portraits professionnels
│   │   ├── products/        # Photos de produits
│   │   ├── architecture/    # Architecture
│   │   ├── fashion/         # Mode
│   │   └── real-estate/     # Immobilier
│   ├── videos/
│   │   ├── corporate/       # Vidéos corporatives
│   │   ├── events/          # Couverture d'événements
│   │   ├── commercials/     # Productions commerciales
│   │   ├── products/        # Vidéos de produits
│   │   ├── interviews/      # Interviews
│   │   └── aerial/         # Prises de vue aériennes
│   └── other/
       ├── creative/         # Direction créative
       ├── brand/           # Développement de marque
       └── content/         # Stratégie de contenu
```

### 2. Éléments à Remplacer

#### Logo et Identité
- [ ] Remplacer le logo dans `/public/logo.png`
- [ ] Mettre à jour les couleurs de la marque dans `tailwind.config.js` si nécessaire
- [ ] Ajouter une favicon personnalisée

#### Section Hero
- [ ] Remplacer l'image d'arrière-plan du hero
- [ ] Vérifier que le texte est bien lisible sur la nouvelle image
- [ ] Ajuster l'opacité du overlay si nécessaire

#### Section Portfolio

##### Photos (6 sections)
- [ ] Corporate Events: 4-6 meilleures photos
- [ ] Portrait Photography: 4-6 meilleures photos
- [ ] Product Photography: 4-6 meilleures photos
- [ ] Architecture: 4-6 meilleures photos
- [ ] Fashion: 4-6 meilleures photos
- [ ] Real Estate: 4-6 meilleures photos

##### Vidéos (6 sections)
- [ ] Corporate Videos: 2-3 vidéos par section
- [ ] Event Coverage: 2-3 vidéos par section
- [ ] Commercial Production: 2-3 vidéos par section
- [ ] Product Videos: 2-3 vidéos par section
- [ ] Interviews: 2-3 vidéos par section
- [ ] Aerial Footage: 2-3 vidéos par section

##### Autres Services (3 sections)
- [ ] Creative Direction: 3-4 exemples de projets
- [ ] Brand Development: 3-4 exemples de projets
- [ ] Content Strategy: 3-4 exemples de projets

#### Section Témoignages
- [ ] Mettre à jour les photos des clients
- [ ] Vérifier les liens vers les sites web des clients
- [ ] Ajouter/modifier les témoignages réels

### 3. Optimisation des Médias

#### Photos
- [ ] Redimensionner toutes les images à une taille maximale de 2000px
- [ ] Compresser les images (format .jpg pour photos, .png pour logos)
- [ ] Ajouter des versions thumbnail pour le chargement initial
- [ ] Nommer les fichiers de manière cohérente (ex: corporate-event-1.jpg)

#### Vidéos
- [ ] Convertir les vidéos en format web optimisé (MP4/H.264)
- [ ] Créer des thumbnails pour chaque vidéo
- [ ] Héberger les vidéos sur une plateforme dédiée (Vimeo Pro recommandé)
- [ ] Mettre à jour les liens dans le code

### 4. Déploiement

#### Préparation
- [ ] Vérifier que tous les liens sont fonctionnels
- [ ] Tester le site sur différents appareils
- [ ] Vérifier la performance avec Google Lighthouse
- [ ] Mettre en place le SSL (https)

#### VPS Hostinger
- [ ] Suivre le guide de déploiement dans `deploy-guide.md`
- [ ] Configurer les sauvegardes automatiques
- [ ] Mettre en place un CDN pour les médias
- [ ] Configurer les redirections www/non-www

### 5. Post-Déploiement

#### SEO
- [ ] Ajouter les meta descriptions pour chaque section
- [ ] Optimiser les titres des images (alt text)
- [ ] Créer un sitemap.xml
- [ ] Configurer Google Analytics

#### Maintenance
- [ ] Documenter la procédure d'ajout de nouveau contenu
- [ ] Créer des comptes utilisateurs pour la gestion du contenu
- [ ] Mettre en place un système de sauvegarde régulier
- [ ] Planifier les mises à jour régulières

### 6. Formation
- [ ] Préparer un guide d'utilisation simple
- [ ] Former sur l'ajout de nouveau contenu
- [ ] Expliquer la structure des dossiers
- [ ] Montrer comment optimiser les médias

### Notes Importantes
- Toujours garder une copie de sauvegarde avant d'effectuer des modifications majeures
- Tester les modifications sur un environnement de staging avant la production
- Maintenir une cohérence dans la qualité et le style des médias
- Respecter les formats et dimensions recommandés pour chaque type de contenu