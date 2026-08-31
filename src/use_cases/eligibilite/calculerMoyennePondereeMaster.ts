import { MoyennePonderee } from '../../core/value_objects/MoyennePonderee';

interface CalculerMoyenneRequest {
  s1: number;
  s2: number;
  s3: number;
  s4: number;
  soutenance: number;
}

interface CalculerMoyenneResponse {
  moyennePonderee: number;
  estEligible: boolean;
  message: string;
}

export class CalculerMoyennePondereeMaster {
  /**
   * Use Case : Calculer la moyenne du Master et déterminer l'éligibilité.
   */
  public execute(request: CalculerMoyenneRequest): CalculerMoyenneResponse {
    const moyenneObj = MoyennePonderee.calculer(
      request.s1,
      request.s2,
      request.s3,
      request.s4,
      request.soutenance
    );

    const eligible = moyenneObj.estEligible(14.0);

    return {
      moyennePonderee: moyenneObj.moyenneFinale,
      estEligible: eligible,
      message: eligible
        ? `Félicitations, votre moyenne de ${moyenneObj.moyenneFinale}/20 vous rend éligible pour soumettre un dossier.`
        : `Attention, votre moyenne de ${moyenneObj.moyenneFinale}/20 est inférieure au seuil de 14/20 requis par la note NS048.`
    };
  }
}
