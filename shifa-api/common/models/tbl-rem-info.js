module.exports = function(TblRemInfo) {
var limit = 20;
    
    TblRemInfo.searchDetails = function(searchTerm,offset, cb) {
        
        
        offset = (offset * limit);
        var ds = TblRemInfo.dataSource;
        var sql = "SELECT * FROM tbl_rem_info WHERE  " + 
            "(" + 
            " data like '%"+searchTerm+"%' or " + 
            " kent like '%"+searchTerm+"%' or " + 
            " allen like '%"+searchTerm+"%' " + 
            ") " +
            " limit  "+ limit +"  OFFSET " + offset;
        ds.connector.query(sql,null, function (err, data) {
            if (err) console.error(err);
            cb(null,data);

        });


        }
         
    TblRemInfo.remoteMethod(
        'searchDetails', 
        {
          http: {path: '/searchDetails', verb: 'get'},
          accepts: [
            {arg: 'searchTerm', type: 'string'},
            {arg: 'offset', type: 'string'}],
          returns: {arg: 'medica', type: 'object'}
        }
    );
};
