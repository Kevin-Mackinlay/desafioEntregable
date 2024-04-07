import passport from "passport";

export const passportCall = (strategy) => {
    return async (req, res, next ) => {
        passport.authenticate(strategy, function(err, user, info) {
            if(err) return next(err);
            if(!user) return res.status(401).send({status:"error", error: info.message? info.message : info.toString()})
            req.user = user
            next()
              
            })(req, res, next)
        }
    }

    export const passportCallUrl = (strategy) => {
        return async (req, res, next) => {
          passport.authenticate(strategy, function (err, user, info) {
            if (err) return next(err);
            if (!user) return res.redirect("/login/recover-password");
            req.user = user;
            next();
          })(req, res, next);
        }
          
    }

export default {passportCall, passportCallUrl}