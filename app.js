//import modules
let path = require( "path" );
let logger = require( "morgan" );
let express = require( "express" );
let passport = require( "passport" );
let flash = require( "connect-flash" );
let session = require( "express-session" );
let createError = require( "http-errors" );
let cookieParser = require( "cookie-parser" );
let indexRouter = require( "./routes/index" );
let usersRouter = require( "./routes/users" );

require( "./passport_setup" )( passport );

let app = express();

// view engine setup
app.set( "view engine", "pug" );
app.set( "views", path.join( __dirname, "views" ));

app.use( express.static( path.join( __dirname, "public" )));
app.use( flash() );
app.use( logger("dev" ));
app.use( express.json());
app.use( cookieParser());
app.use( "/", indexRouter );
app.use( passport.session());
app.use( passport.initialize());
app.use( "/users", usersRouter );
app.use( session({ secret: "Our new secret" }));
app.use( express.urlencoded({ extended: false }));

// catch 404 and forward to error handler
app.use( function( req, res, next ) {
  next( createError( 404 ));
});

// error handler
app.use( function( err, req, res, next ) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get( "env" ) === "development" ? err : {};

  // render the error page
  res.status( err.status || 500 );
  res.render( "error" );
});

module.exports = app;