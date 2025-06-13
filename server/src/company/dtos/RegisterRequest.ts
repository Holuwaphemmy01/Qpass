export default class RegisterResponse {
  public id!: string;
  public name!: string;
  public email!: string;
  public civicDID!: string;
  public address!: string;
  public state!: string;
  public city!: string;
  public qrCodeUrl?: string;
  public services!: string[];
  public industry!: string;
  public description!: string;
}