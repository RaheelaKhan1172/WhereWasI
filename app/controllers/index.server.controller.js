/* if valid auth token is present, will return
  current user bookmarks
 returns @JsonObject containing user bookmarks
*/

exports.getInitialBookmarks = function(req,res,next) {
  return res.sendStatus(200);  
}





/* saves bookmark
  <param> book qr code </param>
  <param> page number </param>
  returns @JsonObject -- 200 if success
*/

exports.saveBookMark = function(req,req,next) {

}





/* updates an existing bookmark
  <param> book qr code </param>
  <param> new page number </param>
  returns @JsonObject -- 200 if success and updated book data
*/

exports.updateBookmark = function(req,res,next) {
  //update bookmark
}




/* delete an existing bookmark
  <param> book qr code </param>
  returns @JsonObject -- 200 if success
*/

exports.deleteBookmark = function(req,res,next) {

}

