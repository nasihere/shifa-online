export class DashboardService {
  dashboardLinks = [
    {name:'Kent Repertory',src:'assets/images/authors/ic_logo_boenninghausens.png'},
    {name:'Boenninghausen Repertory',src:'assets/images/authors/ic_mm_allen_logo.png'},
    {name:'Cyrus Maxwell Boger Repertory',src:'assets/images/authors/ic_mm_boericke.png'},
    {name:'New Nazim Repertory',src:'assets/images/authors/ic_mm_kent_logo.png'}
    ];

  get(): Array<Object> {
    return this.dashboardLinks;
  }
}
