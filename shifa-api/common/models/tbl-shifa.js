var _ = require('lodash');
module.exports = function(TblShifa) {
    var limit = 200;
    
    TblShifa.chapter = function(book, cb) {
        
        
        var ds = TblShifa.dataSource;
        var sql = "SELECT * FROM tbl_shifa WHERE  categoy = '' and book = '"+book+"'";
        ds.connector.query(sql,null, function (err, data) {
            if (err) console.error(err);

            cb(null,data);

        });


        }
         
    TblShifa.remoteMethod(
        'chapter', 
        {
          http: {path: '/chapter', verb: 'get'},
          accepts: {arg: 'book', type: 'string'},
          returns: {arg: 'chapters', type: 'object'}
        }
    );


    TblShifa.category = function(book,category, offset, cb) {
        
        offset = (offset * limit);
        var ds = TblShifa.dataSource;
        var sql = "SELECT * FROM tbl_shifa WHERE book='"+ book +"' and categoy = '"+category+"' order by book,maincategoy,categoy limit  "+ limit +"  OFFSET " + offset;
        var result = [];
        ds.connector.query(sql,null, function (err, data) {
             if (err) console.error(err);
             var category = _.chain(data).groupBy('categoy').value();
             result.push(category);
          
            cb(null,category);

        });


        }
         
    TblShifa.remoteMethod(
        'category', 
        {
          http: {path: '/category', verb: 'get'},
          accepts: [{arg: 'book', type: 'string'},
            {arg: 'category', type: 'string'},
            {arg: 'offset', type: 'string'}],
          returns: {arg: 'repertory', type: 'array'}
        }
    );



    TblShifa.searchByBook = function(book,search, offset,  cb) {
        
        offset = (offset * limit);
        var title = search.replace(/,/g,'|').replace(/, /g,'').replace('/ ,/g','').replace('/ , /g','');
        var remedies = search;
        
        var ds = TblShifa.dataSource;
        var sql = "SELECT * FROM tbl_shifa WHERE book='"+ book +"' and (title like '%"+title+"%' or Remedies like '%"+remedies+"%') order by categoy limit  "+ limit +"  OFFSET " + offset;
        var result = [];
        ds.connector.query(sql,null, function (err, data) {
             if (err) console.error(err);
             var category = _.chain(data).groupBy('categoy').value();
             result.push(category);
          
            cb(null,category);

        });


        }
         
    TblShifa.remoteMethod(
        'searchByBook', 
        {
          http: {path: '/searchByBook', verb: 'get'},
          accepts: [{arg: 'book', type: 'string'},{arg: 'search', type: 'string'},{arg: 'offset', type: 'string'}],
          returns: {arg: 'repertory', type: 'array'}
        }
    );
    
     TblShifa.searchByAllBook = function(search, offset, cb) {
        
        offset = (offset * limit);
        var title = search.replace(/,/g,'|').replace(/, /g,'').replace('/ ,/g','').replace('/ , /g','');
        var remedies = search;
        
        var ds = TblShifa.dataSource;
        var sql = "SELECT * FROM tbl_shifa WHERE (title like '%"+title+"%' or Remedies like '%"+remedies+"%') order by categoy limit "+ limit +" OFFSET " + offset;
        var result = [];
        ds.connector.query(sql,null, function (err, data) {
             if (err) console.error(err);
             var category = _.chain(data).groupBy('categoy').value();
             result.push(category);
          
            cb(null,category);

        });


        }
         
    TblShifa.remoteMethod(
        'searchByAllBook', 
        {
          http: {path: '/searchByAllBook', verb: 'get'},
          accepts: [{arg: 'search', type: 'string'},{arg: 'offset', type: 'string'}],
          returns: {arg: 'repertory', type: 'array'}
        }
    );




};
