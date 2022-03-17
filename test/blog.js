import chai from "chai"
import chaiHttp from "chai-http"
import app from "../index.js"

chai.should();

chai.use(chaiHttp);

// test blog apis

describe('Testing blog', () => {
    it('test get all blogs', (done) => {
      chai
        .request(app)
        .get('/blog')
        .end((err, res) => {
          chai.expect(res.statusCode).to.equal(200);
        });
      done();
    });
  
    it('test get one article', (done) => {
      chai
        .request(app)
        .get('/blogs/622f142ef89e89f9ce3df7d9')
        .end((err, res) => {
          chai.expect(res.statusCode).to.equal(200);
        });
      done();
    });
  });




// users test Apis

  describe('Testing User endpoints JWT Error', () => {
    it('test get all Users', (done) => {
      chai
        .request(app)
        .get('/users')
        .end((err, res) => {
          chai.expect(res.statusCode).to.equal(401);
        });
      done();
    });
  });
  
  describe('Testing credentials', () => {
    it('test login User with wrong credentials', (done) => {
      const cred = {
        email: 'uyumugaboda@gmial.com',
        password: 'dsjfhdsuifgh',
      };
      chai
        .request(app)
        .post('/user/login')
        .send(cred)
        .end((err, res) => {
          chai.expect(res.statusCode).to.equal(401);
          chai.expect(res.message).to.equal('Incorrect email or password');
        });
      done();
    });
  
    it('test login User with right credentials', (done) => {
      const cred = {
        email: 'kevin.kalimba54@gmail.com',
        password: 'password',
      };
      chai
        .request(app)
        .post('/user/login')
        .send(cred)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.status).to.equal('welcome');
        });
      done();
    });
  });



//   test message apis




describe('Testing Message', () => {
    it('test get all messages', (done) => {
      chai
        .request(app)
        .get('/messages')
        .end((err, res) => {
          chai.expect(res.statusCode).to.equal(401);
        });
      done();
    });
  
    it('test get one message JWT Error', (done) => {
      chai
        .request(app)
        .get('/messages/622f13ee7275e7ee601e022f')
        .end((err, res) => {
          chai.expect(res.statusCode).to.equal(401);
        });
      done();
    });
  
    it('test post one message', (done) => {
      const message = {
        name: 'kevin',
        email: 'kevin.kalimba54@gmail.com',
        subject: 'jobe',
        message: 'are you ready for a job now',
      };
  
      chai
        .request(app)
        .post('/messages')
        .send(message)
        .end((err, res) => {
          chai.expect(res.statusCode).to.equal(500);
        });
      done();
    });
  });


//   comments testing


describe('Testing comment ', () => {
    it('test get all comments', (done) => {
      chai
        .request(app)
        .get('/blogs/622f13ee7275e7ee601e022f/comments')
        .end((err, res) => {
          chai.expect(res.statusCode).to.equal(200);
        });
      done();
    });
  
    it('test get one comment', (done) => {
      chai
        .request(app)
        .get('/blogs/622f13ee7275e7ee601e022f/comments')
        .end((err, res) => {
          chai.expect(res.statusCode).to.equal(200);
        });
      done();
    });
  
    it('test get one comment cast Error expected', (done) => {
      chai
        .request(app)
        .get('/blogs/622f13ee7275e7ee601e022f/comments')
        .end((err, res) => {
          chai.expect(res.statusCode).to.equal(500);
        });
      done();
    });
  });