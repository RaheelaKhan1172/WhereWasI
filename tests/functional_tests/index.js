/*
  Bookmarks
*/
const app = require("../../server.js");

var supertest = require('supertest');
var should = require("should");

describe('/', function() {
  it("should return home page", function(done) {
      supertest(app)
      .get("/")
      .expect(200)
      .end(function(err,res) {
        res.status.should.equal(200);
        done();
      });
  });
});

/*describe('/GET bookmarks', ()=> {
  it('it should get all the books for logged in user', (done) => {
    // create user
    createUser('test', '1234');
    addBookmarkToUser('test', 'a book mark');
    // add bookmark to user
    server.get('/users/test/bookmarks')
      .expect("Content-type", /json/)
      .expect(200)
      .end(function(err, res) {
        res.status.should.equal(200);
        var responseShouldBe = {
          userName: 'test',
          bookmarks: [1]
        };

      });
  });
);*/
