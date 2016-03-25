export class DashboardService {
  dashboardLinks = [
    {name:'Kent',src:'assets/images/authors/ic_mm_kent_logo.png', link:'Kent-Repertory'},
    {name:'Boenninghausen',src:'assets/images/authors/ic_logo_boenninghausens.png', link:'Boenninghausen-Repertory'},
    {name:'Cyrus',src:'assets/images/authors/ic_mm_allen_logo.png', link:'Cyrus-Repertory'}
    ];

  get(): Array<Object> {
    return this.dashboardLinks;
  }
}
