export class Attendant {
  public id: number;
  public full_name: string;
  public phone: number;
  public email: string;
  public profession: string;
  public sex: string;
  public interest: string;
  public confrence_year: number;
  public cnfrence_place: string;
  public created_at: string;
  public updated_at: string;
  constructor() {
    this.id = null;
    this.full_name = '';
    this.phone = null;
    this.email = '';
    this.sex = 'M';
    this.profession = '';
    this.interest = '';
    this.confrence_year = null;
    this.cnfrence_place = '';
    this.created_at = '';
    this.updated_at = '';
  }
}
