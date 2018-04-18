//hashing a password before saving it to the database
userSchema.pre('save', function (req,res,next) {
    var user = this;
    bcrypt.hash(user.password, 10, function (err, hash){
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
      res.redirect('/');
    })
  });