module.exports = function(TblShifa) {
    
    TblShifa.chapter = function(book, cb) {
        
        
        var ds = TblShifa.dataSource;
        var sql = "SELECT * FROM tbl_shifa WHERE sublevel='2' and categoy = '' and book = '"+book+"'";
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

};
