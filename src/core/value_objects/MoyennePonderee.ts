export class MoyennePonderee {
  private constructor(
    public readonly s1: number,
    public readonly s2: number,
    public readonly s3: number,
    public readonly s4: number,
    public readonly soutenance: number,
    public readonly moyenneFinale: number
  ) {}

  /**
   * Crée un objet MoyennePonderee en appliquant la règle NS048:
   * Le poids de la soutenance ne peut excéder 25% dans le calcul de la moyenne.
   * Par conséquent, S1 à S4 pèsent pour 75%.
   */
  public static calculer(
    s1: number,
    s2: number,
    s3: number,
    s4: number,
    soutenance: number
  ): MoyennePonderee {
    this.validerNote(s1, 'S1');
    this.validerNote(s2, 'S2');
    this.validerNote(s3, 'S3');
    this.validerNote(s4, 'S4');
    this.validerNote(soutenance, 'Soutenance');

    // Moyenne des semestres (sur 20)
    const moyenneSemestres = (s1 + s2 + s3 + s4) / 4;

    // Calcul pondéré: 75% semestres + 25% soutenance maximum
    // Si une école pondère autrement, la NS048 plafonne la soutenance à 25%
    const poidsSoutenance = 0.25;
    const poidsSemestres = 0.75;

    const moyenneFinale = (moyenneSemestres * poidsSemestres) + (soutenance * poidsSoutenance);

    return new MoyennePonderee(
      s1, s2, s3, s4, soutenance,
      parseFloat(moyenneFinale.toFixed(2))
    );
  }

  public estEligible(seuil: number = 14.0): boolean {
    return this.moyenneFinale >= seuil;
  }

  private static validerNote(note: number, label: string): void {
    if (note < 0 || note > 20) {
      throw new Error(`La note ${label} doit être comprise entre 0 et 20.`);
    }
  }
}
