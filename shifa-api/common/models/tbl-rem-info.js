module.exports = function(TblRemInfo) {
var limit = 20;
    
    function columnsByLanguage(langauge) {
        if (langauge === 'English') {
            return ['data','kent','allen'];
        } 
        else if (langauge === 'Dutch') {
            return ['data_dutch','kent_dutch','allen_dutch'];
        }
        else if (langauge === 'Italian') {
            return ['data_Italian','kent_Italian','allen_Italian'];
        }
        else if (langauge === 'Portugal') {
            return ['data_portuguese','kent_portuguese','allen_portuguese'];
        }
        else if (langauge === 'Spanish') {
            return ['data_spanish','kent_spanish','allen_spanish'];
        }

        else if (langauge === 'German') {
            return ['data_german','kent_german','allen_german'];
        }

        else if (langauge === 'French') {
            return ['data_french','kent_french','allen_french'];
        }
        else {
             return ['data','kent','allen'];
        }
    }
    TblRemInfo.searchDetails = function(searchTerm,offset,language, cb) {
        
        
        offset = (offset * limit);
        var ds = TblRemInfo.dataSource;
        var columns = columnsByLanguage(language);
        var sql = "SELECT * FROM tbl_rem_info WHERE  " + 
            "(" + 
            columns[0] + "  like '%"+searchTerm+"%' or " + 
            columns[1] + "  like '%"+searchTerm+"%' or " + 
            columns[2] + "  like '%"+searchTerm+"%' " + 
            ") " +
            " limit  "+ limit +"  OFFSET " + offset;

        console.log(sql);
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
            {arg: 'offset', type: 'string'},
            {arg: 'language', type: 'string'}],
            returns: {arg: 'medica', type: 'object'}
        }
    );
};
