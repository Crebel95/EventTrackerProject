export class Campsite {

  id: number;
  name: string;
  description: string;
  // comments: string;
  // location: string;
  pictureUrl: string;
  visitDate: string;

  constructor(
    id: number = 0,
    name: string = '',
    description: string = '',
    // comments: string = '',
    // location: string = '',
    pictureUrl: string = '',
    visitDate: string = ''

  ){
    this.id = id;
    this.name = name;
    this.description = description;
    // this.comments = comments;
    // this.location = location;
    this.pictureUrl = pictureUrl;
    this.visitDate = visitDate;
}
}
